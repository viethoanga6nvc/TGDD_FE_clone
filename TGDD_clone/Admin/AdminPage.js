$(function () {
    loadComponentAdmin();
});

function loadComponentAdmin() {
    $(".MenuSection").load("./MenuAdmin.html");
    $(".SideBarSection").load("./SideBarAdmin.html");
    $(".ProductAdminSection").load("./ContentProduct.html");
}