/**
 * State object for managing application state.
 * Currently, it's an empty object but can be extended as needed.
 */
const state = {
    user: JSON.parse(sessionStorage.getItem("user")) || {
        isLoggedIn: false,
        email: "",
        favorites: [],
    },
    // Users data retrieved from local storage, defaulting to an empty array if not found
    users: JSON.parse(localStorage.getItem("users")) || [
        {
            email: 'test@gmail.com',
            password: 'pass',
            favorites: [],
        }
    ],
};

/**
 * Getters object for retrieving state properties.
 * Currently, it's an empty object but can be extended as needed.
 */
const getters = {
}

/**
 * Mutations object for modifying state properties.
 * Currently, it's an empty object but can be extended as needed.
 */
const mutations = {
    /**
     * Adds a new user to the local storage.
     * This function checks if the user already exists based on their email.
     * If the user does not exist, it creates a new user object and saves it.
     * 
     * @param {Object} user - The user object containing user details.
     * @returns {boolean} - Returns true if the user was successfully added, false if the user already exists.
     */
    addUser: async (user) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(existingUser => existingUser.email === user.email);

        if (userExists) {
            return false; // User already exists
        }

        const setUp = {
            email: user.email,
            password: user.password,
            favorites: [],
        };
        // Add the new user to the list
        users.push(setUp);

        // Save the updated list back to local storage
        localStorage.setItem("users", JSON.stringify(users));
        state.users = users;

        return true; // Return true to indicate successful addition
    },

    /**
     * Sets the current user as logged in and updates the session storage.
     * 
     * @param {Object} user - The user object containing user details.
     */
    setLogged(user) {
        // Update the state with the logged-in user's information
        state.user = {
            isLoggedIn: true,
            email: user.email,
            favorites: user.favorites || [],
        };
        // Save the updated user state in sessionStorage
        sessionStorage.setItem("user", JSON.stringify(state.user));
    },

    /**
     * Logs out the current user by clearing the user state and session storage.
     */
    logout: () => {
        state.user = { isLoggedIn: false, email: "" };
        sessionStorage.clear();
    }
}

/**
 * Actions object for performing complex operations that may involve state changes.
 * It includes methods for setting active navigation and displaying messages.
 */
const actions = {
    /**
     * Sets the active navigation item based on the provided ID and class.
     * 
     * @param {string} active_id - The ID of the navigation item to set as active.
     * @param {string} active_class - The class to apply to the active navigation item.
     */
    setActiveNavigation(active_id, active_class) {
        const nav = document.getElementById(`app__nav`);
        nav.querySelectorAll(`.${active_class}`).forEach(e => {
            e.classList.remove(active_class);
        });
        const found = nav.querySelector(`#${active_id}`);
        if (found) found.classList.add(active_class);
    },
    /**
     * Displays a message in the application's message display area.
     * 
     * @param {string} message - The message to display.
     * @param {number} custom - Optional. The duration in milliseconds before the message fades out. Defaults to 10.
     */
    displayMessage(message, custom = 10) {
        const message_display = document.querySelector('#app__message');
        message_display.classList.remove('fade-out');
        message_display.innerHTML = message;
        setTimeout(() => {
            message_display.classList.add('fade-out');
        }, custom);
    },
    /**
     * Logs in a user by checking their credentials against the stored users.
     * 
     * @param {Object} user - The user object containing email and password.
     * @returns {Object} - An object indicating success or failure of the login attempt.
     */
    login: async (user) => {
        const foundUser = state.users.find(
            u => u.email === user.email && u.password === user.password
        );

        if (foundUser) {
            mutations.setLogged(foundUser);
            return { success: true, message: "Login successful", user: foundUser };
        }

        return { success: false, message: "Invalid email or password" };
    },

    /**
     * Logs out the current user by clearing session storage and reloading the page.
     */
    logout: () => {
        sessionStorage.clear();
        window.location.href = window.location.origin + '#/';
        location.reload();
    },

    /**
     * Signs up a new user by adding them to the local storage.
     * 
     * @param {Object} user - The user object containing user details.
     * @returns {Promise<void>} - Resolves when the signup process is complete.
     */
    signup: async (user) => {
        const form = await mutations.addUser(user);
        return form
    },
};

export { state, getters, mutations, actions };