var listProduct = [];
$(function () {
    loadComponent();

    setTimeout(() => {
        featchListProduct();
    }, 200);
});

function loadComponent() {
    $(".MenuSection").load("./Menu.html");
    $(".BannerSection").load("./Banner.html");
    $(".ProductSection").load("./Products.html");
    $(".FooterSection").load("./Footer.html");
}

function featchListProduct() {
    listProduct = [];

    if (localStorage && localStorage.getItem("listProduct")) {
        var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
        listProduct = listProductLocalStorage;
    }

    listProduct.forEach(element => {
        $(".ProductList").append(`
        <!-- SP 1 -->
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left; width: 300px; height: 500px;">
            <!-- Ảnh -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <img src="../Asset/Product/${element.imageName}" alt="" style="width: 160px; height: 190px;" />
                </div>
            </div>
            <!-- Tên sản phẩm -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h3 style="font-weight: bold;">${element.name}</h3>
                </div>
            </div>
            <!-- Hãng sản phẩm -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4>Hãng sản phẩm:${element.manufacturer}</h4>
                </div>
            </div>
            <!-- Đánh giá -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="rating"
                        style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px;">
                        ${showStarRating(element.star)}
                    </ul>
                </div>
            </div>
            <!-- Thêm vào giỏ hàng -->
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h4>${element.price}</h4>
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button class="btn btn-default" type="button" style="border: 0px;">
                        <i class="fa fa-shopping-cart" style="color: red; font-size: 35px;"></i>
                    </button>
                </div>
            </div>

        </div>
        <!-- End SP1 -->
        `);
    });
}

function showStarRating(ratingStar) {
    let starRating = "";

    for (let index = 1; index <= ratingStar; index++) {
        starRating += `
        <li>
            <i class="fa fa-star selected" style="color: orange;"></i>
        </li>`
    }

    for (let index = 1; index <= 5 - ratingStar; index++) {
        starRating += `
        <li>
            <i class="fa fa-star"></i>
        </li>`
    }

    return starRating;
}