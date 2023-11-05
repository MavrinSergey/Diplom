const content = document.querySelector('.open-aside'),
    mySidebar = document.querySelector('.sidebar'),
    clWindow = document.querySelector('.window');

// показать боковую панель
content.addEventListener("click", () => {
    if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
        clWindow.style.width = "100vw";
    } else {
        mySidebar.style.display = "block";
        clWindow.style.width = "87vw";
    }
});