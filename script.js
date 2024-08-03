document.querySelector('.hamburger').addEventListener('click', function() {
    // Get the current state
    const currentState = this.getAttribute('data-state');
    const menu = document.querySelector('.menu'); // Select the menu element
    const body = document.body; // Select the body element

    // Toggle the state
    if (currentState === 'closed') {
        this.setAttribute('data-state', 'open');
        this.classList.add('open');
        menu.style.opacity= '1'; // Show the menu
        body.style.overflow = 'hidden'; // Prevent body scrolling
    } else {
        this.setAttribute('data-state', 'closed');
        this.classList.remove('open');
        menu.style.opacity = '0'; // Hide the menu
        body.style.overflow = ''; // Restore body scrolling
    }
});



