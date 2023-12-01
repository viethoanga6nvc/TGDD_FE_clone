var listProduct = [];
var idProductUpdate = "";
$(function () {
  loadComponentAdmin();
});

function loadComponentAdmin() {
  $(".MenuSection").load("./MenuAdmin.html");
  $(".SideBarSection").load("./SideBarAdmin.html");
  // $(".ProductAdminSection").load("./ContentProduct.html");
}

function handleShowManufacturer() {
  $(".ProductAdminSection").load(
    "./ContentManufacturer.html",
    "data",
    function (response, status, request) {}
  );
}

function handleShowCategory() {
  $(".ProductAdminSection").load(
    "./ContentCategory.html",
    "data",
    function (response, status, request) {}
  );
}

function handleShowProduct() {
  $(".ProductAdminSection").load(
    "./ContentProduct.html",
    "data",
    function (response, status, request) {
      featchListProduct();
    }
  );
}

function handleShowAccount() {
  $(".ProductAdminSection").load(
    "./ContentAccount.html",
    "data",
    function (response, status, request) {}
  );
}

function handleCreateNewProduct() {
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

  $("#myModal").modal("hide");

  featchListProduct();
  alert("Thêm mới thành công!");
}

function featchListProduct() {
  listProduct = [];

  if (localStorage && localStorage.getItem("listProduct")) {
    var listProductLocalStorage = JSON.parse(
      localStorage.getItem("listProduct")
    );
    listProduct = listProductLocalStorage;
  }
  {
    // $.ajax({
    //     type: "GET",
    //     url: "https://645a3f7295624ceb21fc1fed.mockapi.io/products",
    //     // data: "data",
    //     dataType: "json",
    //     success: function (response, status) {
    //         if (status === "success") {
    //             listProduct = response;
    //             $("#tbProductAdmin").empty();
    //             listProduct.forEach(element => {
    //                 $("#tbProductAdmin").append(`
    //                 <tr>
    //                     <td>${element.id}</td>
    //                     <td>${element.name}</td>
    //                     <td>${element.price}</td>
    //                     <td>${element.info}</td>
    //                     <td>${element.detail}</td>
    //                     <td>${element.star}</td>
    //                     <td>${element.imageName}</td>
    //                     <td>${element.manufacturer}</td>
    //                     <td>${element.category}</td>
    //                     <td><button class="btn btn-waring" type="button" onclick="handleEdit(${element.id})">Edit</button></td>
    //                     <td><button class="btn btn-danger" type="button" onclick="handleDelete(${element.id})">Delete</button></td>
    //                 </tr>
    //                 `);
    //             });
    //         } else {
    //             console.log("Error when loading data!");
    //             return;
    //         }
    //     }
    // });
  }

  $("#tbProductAdmin").empty();

  listProduct.forEach((element) => {
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
            <td><button class="btn btn-waring" type="button" onclick="handleEdit(${element.id})">Edit</button></td>
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

function getImageName(pathImage) {
  var itemArray = pathImage.split("\\");
  var imageName = itemArray[itemArray.length - 1];

  return imageName;
}

function handleDelete(idDelete) {
  var confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
  if (confirmDelete) {
    var indexProductDelete = listProduct.findIndex(
      (product) => product.id == idDelete
    );
    if (indexProductDelete !== -1) {
      listProduct.splice(indexProductDelete, 1);
      localStorage.setItem("listProduct", JSON.stringify(listProduct));
      featchListProduct();
      alert("Xóa thành công!");
    } else {
      alert("Không thể xóa sản phẩm!");
    }
  }
}

function handleEdit(idEdit) {
  idProductUpdate = idEdit;
  var index = listProduct.findIndex((product) => product.id == idProductUpdate);

  $("#IdUpdate").val(listProduct[index].id);
  $("#NameUpdate").val(listProduct[index].name);
  $("#PriceUpdate").val(listProduct[index].price);
  $("#InfoUpdate").val(listProduct[index].info);
  $("#DetailUpdate").val(listProduct[index].detail);
  $("#StarUpdate").val(listProduct[index].star);
  $("#ManufacturersUpdate").val(listProduct[index].manufacturer);
  $("#CategoryUpdate").val(listProduct[index].category);

  $("#myModalUpdateProduct").modal("show");
}

function handleResetProduct() {
  $("#NameUpdate").val("");
  $("#PriceUpdate").val("");
  $("#InfoUpdate").val("");
  $("#DetailUpdate").val("");
  $("#StarUpdate").val("");
  $("#ImageUpdate").val("");
  $("#ManufacturersUpdate").val("");
  $("#CategoryUpdate").val("");
}

function handleUpdateProduct() {
  var index = listProduct.findIndex((product) => product.id == idProductUpdate);

  var v_Name = $("#NameUpdate").val();
  var v_Price = $("#PriceUpdate").val();
  var v_Info = $("#InfoUpdate").val();
  var v_Detail = $("#DetailUpdate").val();
  var v_Star = $("#StarUpdate").val();
  var v_Image = getImageName($("#ImageUpdate").val());
  var v_Manufacturer = $("#ManufacturersUpdate").val();
  var v_Category = $("#CategoryUpdate").val();

  listProduct[index].name = v_Name;
  listProduct[index].price = v_Price;
  listProduct[index].info = v_Info;
  listProduct[index].detail = v_Detail;
  listProduct[index].star = v_Star;
  if (v_Image !== null && v_Image !== "") {
    listProduct[index].imageName = v_Image;
  }
  listProduct[index].manufacturer = v_Manufacturer;
  listProduct[index].category = v_Category;

  localStorage.setItem("listProduct", JSON.stringify(listProduct));

  handleResetForm();

  $("#myModalUpdateProduct").modal("hide");

  featchListProduct();
}
