// Initialize an empty array to store the favorites
let favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];

// Load favorite list from HTML file
function loadFavoriteList() {
    fetch('favorite.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(err => console.error('Error loading favorite list:', err));
}

// Ensure each item has a unique ID on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
        item.setAttribute("id", `item-${index + 1}`);
    });
});

/**
 * Function to add the selected item to the favorites section
 * @param {Object} itemDetails - The details of the item to display in favorites
 */
function addToFavPage(itemDetails) {
    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) {
        console.error('Favorites container not found!');
        return;
    }

    // Create a new item div
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item', 'fade-in','col-6' ,'col-xl-3', 'col-xxl-3', 'position-relative'); // Add fade-in animation
    itemDiv.setAttribute('id', itemDetails.id);


        // Create the button with the SVG icon (same as original item button)
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('card-icon','position-absolute', 'end-0', 'top-0',  'me-4', 'mt-3'); 
        itemDiv.appendChild(iconDiv);

        const addButton = document.createElement('button');
        addButton.classList.add('add-to-favorites');
        addButton.style.backgroundColor = 'transparent';
        addButton.style.borderColor = 'transparent';
        iconDiv.appendChild(addButton);

        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgIcon.setAttribute('viewBox', '0 0 24 24');
        svgIcon.setAttribute('width', '25');
        svgIcon.setAttribute('height', '25');
        svgIcon.setAttribute('fill', 'rgba(219, 226, 229, 1)');
        addButton.appendChild(svgIcon);
    
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute(
            'd',
            "M17.3631 11.0453C18.767 9.65157 21.0432 9.65157 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453ZM19.2426 4.75736C20.1831 5.69977 20.7461 6.87453 20.9318 8.09485C19.5993 7.84749 18.1932 8.08543 17.0001 8.808C14.8491 7.50516 12.0056 7.7777 10.1439 9.62594C8.01293 11.7414 7.95374 15.1405 9.96628 17.3273L10.1439 17.5117L12.565 19.916L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736Z"
        );
        svgIcon.appendChild(path);
        // Create anchor element for the Item
        const itemLink= document.createElement('a');
        itemLink.href = itemDetails.url;
        itemDiv.appendChild(itemLink);

        // Add the image
        const img = document.createElement('img');
        img.classList.add('card-img-top', 'w-100' ,'h-100');
        img.src = itemDetails.imageSrc;
        img.alt = itemDetails.title;
        itemLink.appendChild(img);

    // Add the title
    const title = document.createElement('h2');
    title.classList.add('card-text' ,'ps-2', 'pe-2' ,'mb-2' ,'pt-3' ,'pb-3');
    title.textContent = itemDetails.title;
    itemLink.appendChild(title);

    // Add the Timer-restaurant div
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('Timer-restaurant','col','mt-3','align-content-center','d-flex','pb-2');

    // Add the first inner div for timer
    const timerInnerDiv1 = document.createElement('div');
    const timerIcon1 = document.createElement('span');
    const timerIconElem1 = document.createElement('i');
    timerInnerDiv1.classList.add('fa' ,'fa-clock', 'd-flex' ,'ms-2' ,'col-5');
    timerIcon1.appendChild(timerIconElem1);
    timerInnerDiv1.appendChild(timerIcon1);

    const timerText1 = document.createElement('span');
    timerText1.textContent = itemDetails.timer1 || "30 minutes"; // Example value
    timerText1.classList.add('under-card','ms-2');
    timerInnerDiv1.appendChild(timerText1);
    timerDiv.appendChild(timerInnerDiv1);

    // Add the second inner div for other details
    const timerInnerDiv2 = document.createElement('div');
    const timerIcon2 = document.createElement('span');
    const timerIconElem2 = document.createElement('i');
    timerInnerDiv2.classList.add('fa' ,'fa-clock', 'd-flex' ,'ms-2' ,'col-5');
    timerIcon2.appendChild(timerIconElem2);

    const timerText2 = document.createElement('p');
    timerText2.textContent = "Details"; // Default text if no span is available
    timerText2.classList.add('under-card','ms-2');

    timerInnerDiv2.appendChild(timerIcon2);
    timerInnerDiv2.appendChild(timerText2);
    timerDiv.appendChild(timerInnerDiv2);

    itemDiv.appendChild(timerDiv);

    // Append the item div to the Favorites container
    favoritesContainer.appendChild(itemDiv);

    // Remove the animation class after animation ends
    itemDiv.addEventListener('animationend', () => {
        itemDiv.classList.remove('fade-in');
    });

    // Add event listener to the favorite button
    addButton.addEventListener('click', function () {
        toggleFavorite(addButton); // Toggle favorite when button is clicked
    });

    // Update the button color based on the item being favorited
    if (favoritesArray.find(fav => fav.id === itemDetails.id)) {
        svgIcon.setAttribute('fill', 'red'); // Mark as favorited (already in favorites)
    }
}

/**
 * Function to toggle the favorite status
 * @param {HTMLElement} buttonElement - The clicked button
 */
function toggleFavorite(buttonElement) {
    const itemElement = buttonElement.closest('.item'); // Get the parent item div
    const svgIcon = buttonElement.querySelector('svg'); // Get the SVG icon inside the button

    if (itemElement && svgIcon) {
        // Extract the item details
        let itemDetails = {
            id: itemElement.getAttribute('id'),
            title: itemElement.querySelector('h2') ? itemElement.querySelector('h2').textContent : '',
            imageSrc: itemElement.querySelector('img') ? itemElement.querySelector('img').src : ''
        };

        // Check if the item is already in favorites
        const itemIndex = favoritesArray.findIndex(fav => fav.id === itemDetails.id);

        if (itemIndex === -1) {
            // Add to the favorites array
            favoritesArray.push(itemDetails);

            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));

            // Add the item to the favorites page
            addToFavPage(itemDetails);

            // Change the SVG color to red (favorited)
            svgIcon.setAttribute('fill', 'red');
        } else {
            // Remove from the favorites array
            favoritesArray.splice(itemIndex, 1);

            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));

            // Remove the item from the favorites page with animation
            const favoritesContainer = document.getElementById('favorites-container');
            const itemToRemove = favoritesContainer.querySelector(`.item[id="${itemDetails.id}"]`);
            if (itemToRemove) {
                itemToRemove.classList.add('fade-out'); // Add fade-out animation
                itemToRemove.addEventListener('animationend', () => {
                    favoritesContainer.removeChild(itemToRemove);
                });
            }

            // Change the SVG color to default (not favorited)
            svgIcon.setAttribute('fill', 'rgba(219, 226, 229, 1)');
        }
    } else {
        console.error('Item element or SVG icon not found!');
    }
}

// Bind the `toggleFavorite` function to all buttons with the class 'add-to-favorites'
document.querySelectorAll('.add-to-favorites').forEach(button => {
    button.addEventListener('click', function () {
        toggleFavorite(this);
    });
});

// Load favorites from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    favoritesArray.forEach(itemDetails => {
        addToFavPage(itemDetails);

        // Update the SVG color for already-favorited items
        const itemElement = document.getElementById(itemDetails.id);
        const button = itemElement?.querySelector('.add-to-favorites');
        const svgIcon = button?.querySelector('svg');
        if (svgIcon) svgIcon.setAttribute('fill', 'red');
    });
});
