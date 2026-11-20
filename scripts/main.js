
document.getElementById("hamburger").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        if (menu.style.getPropertyValue("height") === "auto")
        {
                menu.style.setProperty("height", "0");
        }
        else
        {
                menu.style.setProperty("height", "auto");
        }
});