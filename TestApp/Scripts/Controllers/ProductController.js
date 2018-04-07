var ProductController = {
    productTable: $("#product-table"),


    addProductToTable: function (product) {
        var tr = $("<tr>").attr("data-id", product.ID).data('data', product)
            .append($("<td>").text(product.Name))
            .append($("<td>").text(product.Description))
            return tr;
    },


    init: function () {
        var that = this;
        $.ajax({
            url: "/Product/GetProducts",
            data: { id : shopId },
            success: function (data) {
                var products = JSON.parse(data);
                products.map(function (product) {
                    that.productTable.append(that.addProductToTable(product));
                })
            }
        }),

        $("#back").on("click", function () {
            $(location).attr("href", "/Shop/Index");
        })
    },

    onDocumentReady: function () {
        this.init();
    }
}

$(document).ready(function () {
    ProductController.onDocumentReady();
})