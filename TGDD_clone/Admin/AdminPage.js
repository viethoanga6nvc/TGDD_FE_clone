var listProduct = [];
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
    // alert("Create New!!")
    var v_Id = $("#Id").val();
    var v_Name = $("#Name").val();
    var v_Price = $("#Price").val();
    var v_Info = $("#Info").val();
    var v_Detail = $("#Detail").val();
    var v_Star = $("#Star").val();
    var v_Image = getImageName($("#Image").val());
    var v_Manufacturer = $("#Manufacturers").val();
    var v_Category = $("#Category").val();

    var ProductNew = {
        id: v_Id,
        name: v_Name,
        price: v_Price,
        info: v_Info,
        detail: v_Detail,
        star: v_Star,
        imageName: v_Image,
        manufacturer: v_Manufacturer,
        category: v_Category,
    };

    listProduct.push(ProductNew);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    handleResetForm();
    featchListProduct();
}

function featchListProduct() {
    listProduct = [];

    if (localStorage && localStorage.getItem("listProduct")) {
        var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
        listProduct = listProductLocalStorage;
    }

    $("#tbProductAdmin").empty();

    listProduct.forEach(element => {
        $("#tbProductAdmin").append(`
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.info}</td>
            <td>${element.detail}</td>
            <td>${element.star}</td>
            <td>${element.imageName}</td>
            <td>${element.manufacturer}</td>
            <td>${element.category}</td>
            <td><button class="btn btn-waring" type="button">Edit</button></td>
            <td><button class="btn btn-danger" type="button" onclick="handleDelete(${element.id})">Delete</button></td>
        </tr>
        `);
    });
}

function handleResetForm() {
    $("#Id").val("");
    $("#Name").val("");
    $("#Price").val("");
    $("#Info").val("");
    $("#Detail").val("");
    $("#Star").val("");
    $("#Image").val("");
    $("#Manufacturers").val("");
    $("#Category").val("");
}

// function getImageName(pathImage) {

//     var itemArray = pathImage.split("\\");

//     var imageName = itemArray[itemArray.lenght - 1];


//     return imageName;
// }
function getImageName(pathImage) {
    // Chuyển đường dẫn thành mảng các phần tử
    var itemArray = pathImage.split("\\");
    // Lấy phần tử cuối cùng
    var imageName = itemArray[itemArray.length - 1];


    return imageName;
}

function handleDelete(idDelete) {
    var confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
    if (confirmDelete) {
        var indexProductDelete = listProduct.findIndex((product) => product.id == idDelete);
        if (indexProductDelete !== -1) {
            listProduct.splice(indexProductDelete, 1);
            localStorage.setItem("listProduct", JSON.stringify(listProduct));
            featchListProduct();
            alert("Xóa thành công!")
        } else {
            alert("Không thể xóa sản phẩm!")
        }
    }
}