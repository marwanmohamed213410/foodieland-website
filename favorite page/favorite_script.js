function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<li>No favorite items yet.</li>';
    } else {
        favoritesList.innerHTML = '';
        favorites.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            favoritesList.appendChild(listItem);
        });
    }
}

function clearFavorites() {
    localStorage.removeItem('favorites');
    displayFavorites();
    alert('All favorites have been cleared!');
}

    displayFavorites();

        function addToFavorites(item) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (!favorites.includes(item)) {
                favorites.push(item);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert(`${item} has been added to your favorites!`);
            } else {
                alert(`${item} is already in your favorites.`);
            }
        }   
