List of TODOs before finish migration:

- Investigate current UI of Music page and make it the same/or better than what it is today in rydkvist.com
  - for example light theme is a bit buggy
- Tweak UI for contact page so it's good in both dark and light and the copy button dont cause layout shift
  - Cool idea: make the contact look like a silver plated card, like a pokemon card holographic effect
  - https://poke-holo.simey.me/
- Tweak UI in investment page for View stock graph button
  - update the page content, old investments
- Update copy content of About page to be more up to date
  - Update with more relevant and up-to-date skills
- Add browser theme on page load, see tailwind for inspiration or astro-portfolio

Future work after migration:
- Implement working keyboard navigation with nice UI outlines
- Install a11y linter and apply more aria tags where it belongs
  - Investigate if we can remove the double <header> tags based on device type. Today the desktop and mobile header tags are visible at the same time – it's not optimal?
- Implement search functionality with Spotify to let visitng users queue songs for me
- Check if it's alright by nextjs to move @domain folders into inside the page folder, i.e. app/music/_components instead of having app/music/page.tsx import components from app/_domains/music/...
- Extract static data (copy content i.e. about content or projects) into a db in this project, to showcase a frontend-to-backend architecture in a next app. the content will be statically rendered on build time and we can set a revalidate time of 1 month
