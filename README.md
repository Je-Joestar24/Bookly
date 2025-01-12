# Bookly v1.1

Welcome to **Bookly v1.1**! This mid-release version introduces significant improvements, including persistent login and signup functionality, alongside the completion of all pages. While the books and favorites pages are now fully designed, their functionality is yet to be implemented in this version.

---

## Features

### New Features in v1.1
- **Persistent Login and Signup**: Users can now sign up and log in with their credentials, and sessions persist even after closing the browser.
- **Completed Pages**:
  - **Home Page**: A welcoming landing page showcasing Bookly's purpose and branding.
  - **About Page**: Detailed information about Bookly's mission and vision.
  - **Books Page**: A page dedicated to exploring available books (static in this version).
  - **Favorites Page**: A page showcasing a user's favorite books (static in this version).
  - **404 Page**: A custom error page for inaccessible or invalid routes.
- **Navigation and Footer**:
  - A fully functional navigation bar for seamless page switching.
  - A footer with social links, copyright information, and a brief description of Bookly.

### Known Limitations
- The **Books** and **Favorites** pages are not yet functional in this version. Users can view the pages, but search, sort, and interaction features are planned for future releases.

---

## Getting Started

Follow these steps to set up and run Bookly:

### Clone the Repository
```bash
git clone https://github.com/Je-Joestar24/Bookly.git <folder name>
cd <folder name>
```

### Initialize and Update Submodules
This project includes submodules for templates. To ensure everything loads properly, use the following command:
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
|   |-- util/          # Utility files, including state management
|   |-- views/         # Submodule containing reusable components
|   |-- templates/     # Submodule for modular component management
|-- books.json         # Static JSON data for books
|-- index.html         # Main HTML file
|-- README.md          # Project documentation
```

---

## Release Notes

### **Version:** Bookly v1.1
- Introduced persistent login and signup.
- Added completed pages for Books and Favorites.
- Enhanced navigation and footer for seamless user experience.

Tag this version as:
```bash
git tag -a Bookly_V1.1 -m "Mid-release: Added persistent login and signup, completed pages"
git push origin Bookly_V1.1
```

To create a release:
1. Navigate to the repository on GitHub or your hosting service.
2. Go to the **Releases** section and create a new release.
3. Use the tag `Bookly_V1.1` and provide the release notes.

---

## Contributions
Contributions are welcome as we move towards Version 1.1 of Bookly. We are actively working on making the Books and Favorites pages fully functional, along with other exciting features. Stay tuned for future updates!
