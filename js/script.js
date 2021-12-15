window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function openNav() {
    $('.fa-bars').css('display', 'none');

    $('.nav2  ul').css('display', 'flex');
    $('.fa-times').css('display', 'block');


}

function closeNav() {
    $('.fa-bars').css('display', 'block');
    $('.nav2 ul').css('display', 'none');
    $('.fa-times').css('display', 'none');
}