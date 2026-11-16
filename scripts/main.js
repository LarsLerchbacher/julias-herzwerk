
document.getElementById("hamburger").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        console.log(menu.style.getPropertyValue('height'));
        if (menu.style.getPropertyValue("height") === "auto")
        {
                menu.style.setProperty("height", "0");
        }
        else
        {
                menu.style.setProperty("height", "auto");
        }
});