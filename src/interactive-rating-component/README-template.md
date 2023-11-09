# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### What I learned

- I tried structuring the css to give the following structure for the codebase.

  ```mermaid
  flowchart LR
  index.css -->|depends on| index.html
  index.html -->|depends on| common.css
  ```

- I tried using CSS transitions for active states. The result looks nice to me.

- Order of including stylesheeets matter. Generic stylesheets first, specific ones later.
  More importantly, this and CSS specificity are the first place to look for when things go wrong.

- Conflicting CSS rules with the same specificity
  are settled by **declaration order**, **not usage order in HTML**.
  This makes non-one-liner utility classes harder to use with vanilla CSS,
  as many classes have the same specificity.

- CSS cascading depends on import order, which makes cascading order annoying to control.
  You can use [CSS cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) to have explicit control.

- I decided to use React + CSS Modules + utility classes imported locally inside these modules.
  - I am okay with other solutions (tailwind, SCSS)
    as long as they have a sane way to make things work.
    Vanilla CSS does not.

### Timeline

- Mobile Design with Figma (both screens): 1hr (morning)
- HTML design migration (first screen): 1hr (morning)
- Add active states and transitions: 1hr (afternoon)
- Debug CSS issue due to invalid CSS property: 1hr (morning)
- Debug CSS cascading issues: 1.5 hrs (afternoon)
