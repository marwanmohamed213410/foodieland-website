// Toggle Between Light and Dark Mode
const toggleSwitch = document.querySelector("#toggleSwitch");       
window.addEventListener("load", function() {
    toggleSwitch.checked = '';
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    } 
    else {
        document.body.classList.add("light-mode");
        toggleSwitch.checked = false;
    }
});
toggleSwitch.addEventListener("change", function() {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("mode", "dark");
        window.location.href ="blog-list-index-dark.html";
    } 
    else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
        window.location.href = "blog-list-index.html";
    }
});


let currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
const totalPages = 5;
function updatePagination() {
    let links = document.querySelectorAll('.page-item a');
    links.forEach(link => {
        link.classList.remove('bg-black', 'text-white');
        if (parseInt(link.textContent) === currentPage) {
            link.classList.add('bg-black', 'text-white');
        }
    });

    document.getElementById('prevPage').style.visibility = currentPage === 1 ? 'hidden' : 'visible';
    document.getElementById('nextPage').style.visibility = currentPage === totalPages ? 'hidden' : 'visible';
}


function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        localStorage.setItem("currentPage", currentPage);
        updatePagination();
        if (currentPage === 1) {
            window.location.href = "blog-list-index.html";
        } else {
            window.location.href = "blog-list-index" + currentPage + ".html";
        }
    }
}
document.getElementById('prevPage').onclick = function() {
    if (currentPage > 1) {
        currentPage--;
        localStorage.setItem("currentPage", currentPage);
        updatePagination();
        if (currentPage === 1) {
            window.location.href = "blog-list-index.html";
        } else {
            window.location.href = "blog-list-index" + currentPage + ".html";
        }
    }
};
document.getElementById('nextPage').onclick = function() {
    if (currentPage < totalPages) {
        currentPage++;
        localStorage.setItem("currentPage", currentPage);
        updatePagination();
        window.location.href = "blog-list-index" + currentPage + ".html";
    }
};
updatePagination();
