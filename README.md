# sx prop won't be applied in Storybook but works flawlessly in Next.js app

## Steps to reproduce

1. Clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000` in your browser
5. Look at the styles applied from the sx props successfully to both, the div styled with and without `@emotion/styled`
6. Run `npm run storybook`
7. Wait until Storybook gets opened automatically in a new browser tab.
8. Navigate to the only stories available.
9. You'll see that none of the styles from the sx prop are applied on the elements, but all other styling is applied successfully.
10. Help me. ;-)