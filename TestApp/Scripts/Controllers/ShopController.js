var ShopController = {
    shopTable: $("#shop-table"),


    addShopToTable: function (shop) {
        var tr = $("<tr>").attr("data-id", shop.ID).data('data', shop)
            .append($("<td>").text(shop.Name))
            .append($("<td>").text(shop.Address))
            .append($("<td>").text(shop.ModeOfWork))
            .append($("<td>").html('<button data-action="showproduct" type="button" class="btn btn-success">View products</button>'))
        return tr;
    },


    showShops: function () {
        var that = this;
        $.ajax({
            url: "/Shop/GetShops",
            success: function (data) {
                var shops = JSON.parse(data)
                shops.map(function (shop) {
                    that.shopTable.append(that.addShopToTable(shop));
                })
            }
        })
    },

    init: function () {
        var that = this;
        this.showShops();

        $(document).on("click", "button[data-action=showproduct]", function (ev) {
            var btn = $(ev.currentTarget);
            var shop = btn.closest("tr").data("data");
            $(location).attr("href", "/Product/ProductIndex?id=" + shop.ID);
        })
    },

    onDocumentReady: function () {
        this.init();
    }
}

$(document).ready(function () {
    ShopController.onDocumentReady();
})

