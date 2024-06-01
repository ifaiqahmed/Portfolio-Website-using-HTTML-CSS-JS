document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navigation');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    // Accordion functionality
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });

    // Tab functionality
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
        });

        const activeTab = document.getElementById(tabId);
        activeTab.style.display = 'block';
        activeTab.classList.add('active');
    }

    // Initially show the first tab
    showTab('web-design');
});
