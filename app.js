// JavaScript code to show the header when scrolling down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-header").style.top = "0";
    } else {
        document.getElementById("scroll-header").style.top = "-100px";
    }
}
