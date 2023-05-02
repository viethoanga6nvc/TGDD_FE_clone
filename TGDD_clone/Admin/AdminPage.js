listProduct = [];
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
    $(".ProductAdminSection").load("./ContentProduct.html", "data", function (response, status, request) {
        featchListProduct();
    });
}

function handleShowAccount() {
    $(".ProductAdminSection").load("./ContentAccount.html", "data", function (response, status, request) { });
}

function handleCreateNewProduct() {
    alert("Create New!!")
}

function featchListProduct() {
    $("#tbProductAdmin").empty();

    for (let index = 0; index < 6; index++) {
        $("#tbProductAdmin").append(`
        <tr>
            <td>1</td>
            <td>Samsung Galaxy S22 Ultra 5G</td>
            <td>30.998.000₫</td>
            <td>6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, ram 4G, Pin
                7000 mAh</td>
            <td>ProductDetail1</td>
            <td>5</td>
            <td>image1.jpg</td>
            <td>SAMSUNG</td>
            <td>Điện thoại</td>
            <td><button class="btn btn-waring" type="button">Edit</button></td>
            <td><button class="btn btn-danger" type="button">Delete</button></td>
        </tr>
        `);
    }
}