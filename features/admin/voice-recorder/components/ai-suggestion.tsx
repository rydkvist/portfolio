'use client';

import React, { useState } from 'react';

type AiSuggestionProps = {
  description: string;
};

export function AiSuggestion({ description }: AiSuggestionProps) {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [pullRequestMessage, setPullRequestMessage] = useState<string | null>(null);

  const handleGetSuggestion = async () => {
    setSuggestion(null);
    setPullRequestMessage(null);
    setLoadingSuggestion(true);

    try {
      const response = await fetch('/api/portfolio-suggestion', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: description }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI suggestion');
      }
      const suggestion = await response.json();
      setSuggestion(suggestion);
    } catch (err) {
      console.error('Error fetching suggestion:', err);
    } finally {
      setLoadingSuggestion(false);
    }
  };

  const handleApprove = async () => {
    if (!suggestion) return;

    setLoadingApprove(true);
    setPullRequestMessage(null);

    try {
      const response = await fetch('/api/pull-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suggestion }),
      });
      if (!response.ok) {
        throw new Error('Pull request failed');
      }
      setPullRequestMessage('Pull Request created successfully!');
    } catch (err) {
      console.error('Error creating PR:', err);
      setPullRequestMessage('Failed to create Pull Request.');
    } finally {
      setLoadingApprove(false);
    }
  };

  const handleSkip = () => {
    setSuggestion(null);
    setPullRequestMessage(null);
  };

  const handleTryAgain = () => {
    handleGetSuggestion();
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center rounded bg-gray-50 p-4 text-gray-800 shadow dark:bg-gray-800 dark:text-gray-100">
      <p className="text-sm text-gray-500 dark:text-gray-400">Proposed transcript:</p>
      <p className="mt-1 w-full text-center font-semibold text-gray-800 dark:text-gray-100">{description}</p>

      <h2 className="mt-8 text-xl font-semibold">AI Suggestion</h2>

      {/* Button to get AI suggestion (no automatic calls on mount) */}
      {!suggestion && !loadingSuggestion && (
        <button
          onClick={handleGetSuggestion}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Get AI Suggestion
        </button>
      )}

      {/* Loading states */}
      {loadingSuggestion && <p className="mt-2 text-blue-500 dark:text-blue-400">Loading AI suggestion...</p>}
      {loadingApprove && <p className="mt-2 text-blue-500 dark:text-blue-400">Creating Pull Request...</p>}

      {/* Show suggestion if available */}
      {suggestion && !loadingSuggestion && (
        <div className="mt-4 w-full rounded border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700">
          <p className="mb-4">
            <strong>Suggested changes:</strong> {suggestion}
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleApprove}
              disabled={loadingApprove}
              className={`rounded px-4 py-2 text-white ${
                loadingApprove
                  ? 'bg-gray-400 dark:bg-gray-500'
                  : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
              } `}
            >
              {loadingApprove ? 'Approving...' : 'Approve'}
            </button>

            <button
              onClick={handleSkip}
              className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500"
            >
              Skip
            </button>

            <button
              onClick={handleTryAgain}
              disabled={loadingSuggestion}
              className={`rounded px-4 py-2 text-white ${
                loadingSuggestion
                  ? 'bg-gray-400 dark:bg-gray-500'
                  : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
              } `}
            >
              {loadingSuggestion ? 'Retrying...' : 'Try Again'}
            </button>
          </div>
        </div>
      )}

      {/* Show result message for PR creation */}
      {pullRequestMessage && (
        <div className="mt-4 w-full rounded border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
          <p
            className={` ${
              pullRequestMessage.includes('successfully')
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            } `}
          >
            {pullRequestMessage}
          </p>
        </div>
      )}
    </div>
  );
}
