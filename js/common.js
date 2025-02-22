document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var toggleClass = document.getElementsByTagName("body")[0];

    if (scrollTop >= 71) {
        toggleClass.classList.add('sticky');
    } else {
        toggleClass.classList.remove('sticky');
    }
});

function handleSidebarMenu() {
    const sidebarDiv = document.querySelector('.menu-sidebar');
    const overlay = document.getElementById('bodyoverlay');
    const mainbody = document.body;
    const toggleNav = document.getElementById('hamburger');
    const closeNav = document.getElementById('close-nav');

    // Show the widget
    toggleNav.addEventListener('click', function() {
        mainbody.style.overflow = 'hidden';
        overlay.style.display = "block";
        overlay.style.opacity = 1;
        sidebarDiv.style.left = 0;
    });

    // Hide the widget
    closeNav.addEventListener('click', function() {
        sidebarDiv.style.left = "-400px";
        overlay.style.display = "none";
        overlay.style.opacity = 0;
        mainbody.style.overflow = '';
    });
}

// Initialize the functionalities
document.addEventListener('DOMContentLoaded', () => {
    handleSidebarMenu();
});