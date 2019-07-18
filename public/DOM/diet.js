var foodList = [];

function displayInputFood() {
    $("#foodBox").empty();
    for (var i=0; i<foodList.length; i++) {
        var newFood = $("<h4>").text(foodList[i]).addClass("mr-auto");
        var newDelete = $("<span>").text("X").attr("data-index", i).addClass("deleteCross");
        var newCardBody = $("<div>").addClass("card-body d-flex").append(newFood).append(newDelete);
        $("<div>").addClass("card").append(newCardBody).appendTo($("#foodBox"));
    }
    addHandler();
}

$("#add-food").on("click", function(event) {
    event.preventDefault();
    if ($("#foodInput").val()) {
        foodList.push($("#foodInput").val().trim());
        displayInputFood();
        $("#foodInput").val('');
        console.log(JSON.stringify(foodList));
    }
});

$("#submit-food").on("click", function(evnet) {
    event.preventDefault();
    if (foodList) {
        var i = 0;
        ajaxGet(foodList[i]);
        function ajaxGet(food) {
            var queryURL = "https://api.edamam.com/api/nutrition-data?app_id=" + process.env.APP_ID;
            queryURL += "&app_key=" + process.env.API_KEY;
            queryURL += "&ingr=" + food;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(result=> {
                console.log(result);
            });
        }
    }
});

function addHandler() {
    $(".deleteCross").on("click", function(event) {
        var index = $(this).data("index");
        foodList.splice(index, 1);
        displayInputFood();
    });
}
