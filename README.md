# ClassIQ — Frontend Practical Assessment

A responsive, multi-view EdTech website recreated from the supplied ClassIQ design reference using **HTML5, CSS3, and vanilla JavaScript**.

## Features
- Responsive landing page with hero, trust logos, course categories, benefits section, and footer.
- Login and signup views with client-side form validation.
- Course dashboard with responsive course cards and live search.
- Working hash navigation (`#home`, `#login`, `#signup`, `#dashboard`).
- Newsletter form feedback and course action feedback.
- Semantic HTML, accessible labels, descriptive metadata, favicon, and reduced-motion support.
- CSS-drawn mascot illustrations so no large external image assets are required.

## How to run
1. Extract the project folder.
2. Open `index.html` in a modern browser.

For the most reliable local development experience, you can also run a static server from this folder:
- Python: `python -m http.server 8000`
- Then open `http://localhost:8000`

No package installation, build step, or `node_modules` folder is required.

## Tools and libraries
- HTML5, CSS3, vanilla JavaScript
- Google Fonts: DM Sans and Poppins (with system-font fallbacks)
- No JavaScript frameworks or third-party runtime libraries

## Notes
- Authentication is a front-end demonstration only. It validates the form fields and routes to the dashboard; it does not create accounts or authenticate against a server.
- Course detail actions are placeholders and show a small feedback message.
- Replace the CSS-drawn mascot with a licensed optimized image/SVG from the official design assets if available, to improve pixel-level fidelity to the Figma source.
