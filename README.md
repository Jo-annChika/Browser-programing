# Jo-ann Obewe – Browser Programming Portfolio

**Savonia University of Applied Sciences – Information Technology (IoT)**

---

## Lecture 02 – Semantic HTML & Structure

### What I implemented
- Full portfolio page using semantic HTML only
- Header with name, bio, and navigation
- Portfolio, Skills, Projects, Interests, and API Demo sections
- Footer with social links

### Semantic decisions

**Decision 1** — `<header>`: marks the top-level identifying section of the page, meaningful to screen readers, not just a styled div.

**Decision 2** — `<figure>` + `<figcaption>`: groups self-contained media with its caption, tying the description directly to the image or video for accessibility.

**Decision 3** — `<article>` inside `<section>`: section groups related thematic content; article marks a self-contained piece that could stand on its own. Together they create a clear, meaningful hierarchy.

### Accessibility
- Skip link at top for keyboard users
- All images have descriptive `alt` text
- Correct heading hierarchy h1 → h2 → h3
- Semantic landmarks act as ARIA regions

---

## Lecture 03 – CSS Basics

### What I implemented
- External CSS in `css/style.css`
- Lilac and grey colour theme using CSS custom properties
- Typography, spacing, header/footer styling, nav, responsive images, layout constraint, dark mode

### CSS selectors used
- Element: `body`, `p`, `h1`, `h2`, `h3`, `figure`, `footer`
- Group: `header, footer`
- Descendant: `nav a`, `.nav-links li`, `.footer-links a`
- Class: `.card`, `.skills-grid`, `.hero-inner`, `.section-title`
- ID: `#dataBox`, `#lastUpdated`, `#themeToggle`
- Pseudo-class: `a:hover`, `.card:hover`, `.skills-grid li:hover`, `.skip-link:focus`

---

## Lecture 04 – JavaScript Basics

### Features implemented
- Theme toggle button (light/dark) using `isDark` state variable and `classList`
- Mobile burger menu toggle
- Greeting function `showGreeting()` — time-aware console message
- Active nav link highlighting on scroll
- 3+ console.log messages: page load, theme change, button click

### How to test
- Click the moon/sun button in the nav to toggle theme
- Open DevTools → Console to see log messages

---

## Lecture 05 – Skills, Projects & localStorage

### Features implemented
- Skills section with 8 skills as styled pill tags
- Projects section with 2 projects
- localStorage saves and restores the theme on page reload
- "Last updated" date auto-generated in the footer by JavaScript

### How to test
- Toggle the theme, then refresh the page — theme is remembered
- Check the footer for the auto-generated date

---

## Lecture 06 – Fetch API / Async / Await

### Features implemented
- External Data Demo section with Load Data button
- Fetches from `https://jsonplaceholder.typicode.com/users/1`
- Displays Name, Email, Company dynamically in the DOM
- Shows loading state and error handling

### Why each technique
- `async/await` — makes async code readable without .then() chains
- `response.ok` — fetch() doesn't throw on HTTP errors, must be checked manually
- `try/catch` — catches network failures and shows a user-friendly message

---

## Weather App

### Features implemented
- Separate `weather.html` with same lilac/grey theme
- Three city buttons: Kuopio, Helsinki, Tampere
- Fetches live data from Open-Meteo API (no key needed)
- Displays temperature (°C) and wind speed (km/h)

---

## What I learned
- The difference between semantic HTML elements like `<section>`, `<article>`, `<figure>` and why they matter for accessibility
- How CSS custom properties (variables) make theming and dark mode much easier to manage
- How `async/await` and `fetch()` work together to load external data without refreshing the page
- How `localStorage` can save user preferences like dark/light mode between sessions
- How to structure a multi-page website with consistent navigation and styling

## What I still need to improve
- Add real project screenshots to the images folder instead of placeholder paths
- Replace the placeholder YouTube video with a real introduction video
- Add more projects as the course continues
- Improve the mobile layout with more detailed media queries
- Add a contact form instead of just an email link

---

## Notes about AI usage
- Tool used: Claude (Anthropic)
- Accepted as-is: file structure, CSS variable system, async fetch pattern
- Modified manually: personal information, city choices, colour values, content descriptions