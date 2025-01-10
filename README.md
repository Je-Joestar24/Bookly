# Bookly v1.0

Welcome to **Bookly v1.0**! This is the first version of the Bookly project, featuring a clean and minimal implementation of a home page, about page, footer, and navigation.

## Features
- **Home Page**: A landing page showcasing Bookly's purpose and branding.
- **About Page**: Information about the platform and its mission.
- **Navigation**: A functional navigation bar to switch between pages.
- **Footer**: A footer with social links, a brief description, and copyright information.

This version is focused on the foundational structure and does not include advanced features such as login, book lists, or user interactions.

---

## Getting Started

Follow the steps below to set up and run Bookly:

### Clone the Repository
```bash
git clone https://github.com/Je-Joestar24/Bookly.git <folde rname>
cd <folder name>
```

### Initialize and Update Submodules
This project includes a submodule for templates. To ensure everything is loaded properly, use the following command:
```bash
git submodule update --init --recursive
```

### Open the Application
Since this is a static project using only HTML, CSS, and JavaScript:
1. Open the `index.html` file in your browser.
2. Ensure the browser allows JavaScript for proper functionality.

---

## File Structure
```
.
|-- css/               # Stylesheets for the application
|-- js/
|   |-- app.js         # Entry point for JavaScript logic
|   |-- util/          # Submodule containing reusable components
|   |-- views/         # Submodule containing reusable components
|   |-- templates/     # Submodule containing reusable components
|-- index.html         # Main HTML file
|-- README.md          # Project documentation
```

---

## Release Notes
**Version:** Bookly v1.0

- Initial release with basic static pages and navigation.
- Integrated templates submodule for modular component management.

Tag this version as:
```bash
git tag -a Bookly_V1.0 -m "Initial release with basic pages and navigation"
git push origin Bookly_V1.0
```

To create a release:
1. Navigate to the repository on GitHub or your hosting service.
2. Go to the **Releases** section and create a new release.
3. Use the tag `Bookly_V1.0` and provide the release notes.

---

## Contributions
Contributions are welcome as we expand Bookly into a full-fledged digital library platform. Stay tuned for future updates!
