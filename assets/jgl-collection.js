document.addEventListener('DOMContentLoaded', (event) => {
    var liElements = document.querySelector('li[data-collection="273557913754"]');
    alert(liElements);
    if(liElements) { // Check if the element exists to avoid null reference
        liElements.classList.add('is-collapsed');
    }
});
