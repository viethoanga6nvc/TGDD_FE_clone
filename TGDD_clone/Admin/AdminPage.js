$(function () {
    loadComponentAdmin();
});

function loadComponentAdmin() {
    $(".MenuSection").load("./MenuAdmin.html");
    $(".SideBarSection").load("./SideBarAdmin.html");
    // $(".ProductAdminSection").load("./ContentProduct.html");
}

function handleShowManufacturer() {
    $(".ProductAdminSection").load("./ContentManufacturer.html", "data", function (response, status, request) { });
}

function handleShowCategory() {
    $(".ProductAdminSection").load("./ContentCategory.html", "data", function (response, status, request) { });
}

function handleShowProduct() {
    $(".ProductAdminSection").load("./ContentProduct.html", "data", function (response, status, request) { });
}

function handleShowAccount() {
    $(".ProductAdminSection").load("./ContentAccount.html", "data", function (response, status, request) { });
}