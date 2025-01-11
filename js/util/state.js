/**
 * State object for managing application state.
 * Currently, it's an empty object but can be extended as needed.
 */
const state = {
    user: JSON.parse(sessionStorage.getItem("user")) || {
        isLoggedIn: false,
        name: "",
        email: "",
        favorites: [],
    },
    // Users data retrieved from local storage, defaulting to an empty array if not found
    users: JSON.parse(localStorage.getItem("users")) || [],
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
};

export { state, getters, mutations, actions };