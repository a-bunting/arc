window.onload = function() {
    document.addEventListener("scroll", function () {
        document.getElementById('scroll-setup-top').innerHTML = document.documentElement.scrollTop + " px";
        document.getElementById('scroll-setup-offset').innerHTML = document.documentElement.scrollTop + window.innerHeight * 0.5 + " px";
        document.getElementById('scroll-setup-bottom').innerHTML = document.documentElement.scrollTop + window.innerHeight + " px";
    })
}