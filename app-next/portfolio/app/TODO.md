List of TODOs before finish migration:

- Investigate current UI of Music page and make it the same/or better than what it is today in rydkvist.com
  - for example light theme is a bit buggy

Future work after migration:

- - Update copy content of About page to be more up to date
  - Update with more relevant and up-to-date skills
- Implement working keyboard navigation with nice UI outlines
- Install a11y linter and apply more aria tags where it belongs
  - Investigate if we can remove the double <header> tags based on device type. Today the desktop and mobile header tags are visible at the same time – it's not optimal?
- Implement search functionality with Spotify to let visitng users queue songs for me
- Extract static data (copy content i.e. about content or projects) into a db in this project, to showcase a frontend-to-backend architecture in a next app. the content will be statically rendered on build time and we can set a revalidate time of 1 month
- Random idea to investigate, add toggle on mode to see contact card with holographics
  - like a silver plated card, like a pokemon card holographic effect
  - https://poke-holo.simey.me/
