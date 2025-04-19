(function () {
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('close-button');
    const docsSidebar = document.getElementById('docs-sidebar');
    const docsBody = document.getElementById('docs-body');

    if (hamburger && closeButton && docsSidebar) {
        hamburger.addEventListener('click', function () {
            docsSidebar.classList.add('is-expanded');
            docsBody.classList.add('sidebar-expanded');
        });
        closeButton.addEventListener('click', function () {
            docsSidebar.classList.remove('is-expanded');
            docsBody.classList.remove('sidebar-expanded');
        });
    }

})();