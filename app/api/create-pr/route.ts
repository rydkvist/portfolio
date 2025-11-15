import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 1. Initialize Octokit with your personal access token
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN, // store your PAT in .env
    });

    // 2. Extract data from the request (AI-generated changes, PR title, etc.)
    const {
      owner, // e.g. "my-github-username"
      repo, // e.g. "my-portfolio-repo"
      baseBranch, // e.g. "main" or "master"
      newBranch, // e.g. "feature/ai-proposal"
      prTitle, // e.g. "Add AI-generated content"
      prBody, // e.g. "This PR includes AI-generated code and description"
      changes, // e.g. an array of { path: string; content: string } for each file
    } = req.body;

    // The steps will be:
    // 1. Create (or update) a branch
    // 2. Add or update files on that branch
    // 3. Create a Pull Request from that branch to the base branch

    // Step 1: Get the latest commit SHA of the base branch
    const { data: referenceData } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${baseBranch}`,
    });

    const baseCommitSha = referenceData.object.sha;

    // Step 2: Create a new branch reference
    //   or check if it exists to avoid errors
    await createOrUpdateBranch({
      octokit,
      owner,
      repo,
      baseCommitSha,
      newBranch,
    });

    // Step 3: Get the latest commit (base for creating new trees)
    const { data: latestCommit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: baseCommitSha,
    });
    const baseTreeSha = latestCommit.tree.sha;

    // Step 4: Create a tree with the new/updated files
    const { data: newTree } = await octokit.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree: changes.map((file: { path: string; content: string }) => ({
        path: file.path,
        mode: '100644', // for a regular file
        type: 'blob',
        content: file.content,
      })),
    });

    // Step 5: Create a commit pointing to this new tree
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: prTitle,
      tree: newTree.sha,
      parents: [baseCommitSha],
    });

    // Step 6: Update the reference of the new branch to point to this new commit
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${newBranch}`,
      sha: newCommit.sha,
      force: true,
    });

    // Step 7: Create a Pull Request
    const { data: pullRequest } = await octokit.pulls.create({
      owner,
      repo,
      title: prTitle,
      head: newBranch, // branch we just committed to
      base: baseBranch,
      body: prBody,
    });

    // 8. Return some data to the caller
    return res.status(200).json({
      message: 'Pull Request created successfully!',
      pullRequestUrl: pullRequest.html_url,
      pullRequestNumber: pullRequest.number,
    });
  } catch (err: any) {
    console.error('Error creating pull request:', err);
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Helper function to create or update a reference for a branch.
 */
async function createOrUpdateBranch({
  octokit,
  owner,
  repo,
  baseCommitSha,
  newBranch,
}: {
  octokit: Octokit;
  owner: string;
  repo: string;
  baseCommitSha: string;
  newBranch: string;
}) {
  try {
    // Try creating the reference for the new branch
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${newBranch}`,
      sha: baseCommitSha,
    });
  } catch (err: any) {
    if (err.status === 422) {
      // Branch already exists, so we can just move on
      console.log(`Branch ${newBranch} already exists. Will update instead.`);
    } else {
      throw err;
    }
  }
}
