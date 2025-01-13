# Bookly v1.2

Welcome to **Bookly v1.2**! This version builds on the previous release with new functionalities for the Books and Favorites pages, making them fully interactive and user-friendly. Additionally, future development plans for a book reading modal are underway.

---

## Features

### New Features in v1.2
- **Books Page**:
  - Search and sort functionality for books to help users find their favorites quickly.
  - Books can now be added to the Favorites page with a single click.

- **Favorites Page**:
  - Fully functional and connected to the Books page.
  - Displays only the books added to favorites.
  - Option to remove books from the favorites list for easy management.

- **Future Development**:
  - A modal for reading books is currently under development and will be introduced in future updates.

### Features from v1.1
- **Persistent Login and Signup**: Users can sign up and log in with their credentials, with sessions persisting even after closing the browser.
- **Completed Pages**:
  - **Home Page**: A welcoming landing page showcasing Bookly's purpose and branding.
  - **About Page**: Detailed information about Bookly's mission and vision.
  - **Books Page**: A page dedicated to exploring available books (previously static in v1.1).
  - **Favorites Page**: A page showcasing a user's favorite books (previously static in v1.1).
  - **404 Page**: A custom error page for inaccessible or invalid routes.
- **Navigation and Footer**:
  - A fully functional navigation bar for seamless page switching.
  - A footer with social links, copyright information, and a brief description of Bookly.

### Known Limitations
- The book reading modal is not yet functional and is planned for a future release.

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

## Screenshots and Demonstrations

### Books Page
![image](https://github.com/user-attachments/assets/d290577c-f184-4b45-9b5c-1c0d98b08b51)


### Favorites Page
![image](https://github.com/user-attachments/assets/79990536-ed30-49b4-9eaa-add8f9d0aee2)


### Functional Features
![image](https://github.com/user-attachments/assets/e9a8c63c-cd15-4b13-86b1-8a162270ee70)
![image](https://github.com/user-attachments/assets/9dd6934c-443b-4b22-aab8-9dc0f8ff0fdc)


---

## Release Notes

### **Version:** Bookly v1.2
- Fully functional Books page with search, sort, and favorite options.
- Enhanced Favorites page, allowing users to view and manage their favorite books.
- Book reading modal planned for future development.

Tag this version as:
```bash
git tag -a Bookly_V1.2 -m "Release: Fully functional Books and Favorites pages"
git push origin Bookly_V1.2
```

To create a release:
1. Navigate to the repository on GitHub or your hosting service.
2. Go to the **Releases** section and create a new release.
3. Use the tag `Bookly_V1.2` and provide the release notes.

---

## Contributions
Contributions are welcome as we move towards future versions of Bookly. Stay tuned for the book reading modal and other exciting features!