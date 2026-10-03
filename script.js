document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const bookCards = document.querySelectorAll('.book-card');

    function filterBooks() {
        const query = searchInput.value.toLowerCase().trim();

        bookCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();

            if (title.includes(query) || category.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', filterBooks);
    searchInput.addEventListener('keyup', filterBooks);

    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const newsletterMsg = document.getElementById('newsletterMsg');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (emailValue === '') {
            newsletterMsg.style.color = '#ff6b6b';
            newsletterMsg.textContent = 'Please enter an email address.';
        } else if (!emailValue.match(emailPattern)) {
            newsletterMsg.style.color = '#ff6b6b';
            newsletterMsg.textContent = 'Please enter a valid email address.';
        } else {
            newsletterMsg.style.color = '#51cf66';
            newsletterMsg.textContent = 'Thank you for subscribing to EduBooks!';
            emailInput.value = '';
        }
    });

    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.book-card');
            const title = card.getAttribute('data-title');
            alert(`More details for "${title}" will be available soon!`);
        });
    });

});