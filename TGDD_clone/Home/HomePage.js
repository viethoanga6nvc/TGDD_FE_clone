console.log("Home Page.");
$(function () {
    loadComponent();
});

function loadComponent() {
    $(".MenuSection").load("./Menu.html");
    $(".BannerSection").load("./Banner.html");
    $(".ProductSection").load("./Products.html");
    $(".FooterSection").load("./Footer.html");
}