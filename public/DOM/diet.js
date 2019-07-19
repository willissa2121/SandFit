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
    }
});

$("#submit-food").on("click", function(evnet) {
    event.preventDefault();
    if (foodList) {  
        $.post("/diet", {food: foodList}, function(data) {
            $("<p>").text("Calories: " + data.energy + " kcal").appendTo($("#display-nutrition"));
            $("<p>").text("Fat: " + data.fat + " g").appendTo($("#display-nutrition"));
            $("<p>").text("Carbohydrates: " + data.carbs + " g").appendTo($("#display-nutrition"));
            $("<p>").text("Protein: " + data.protein + " g").appendTo($("#display-nutrition"));
            $("<p>").text("Sodium: " + data.sodium + " mg").appendTo($("#display-nutrition"));
        })
    }
});

function addHandler() {
    $(".deleteCross").on("click", function(event) {
        var index = $(this).data("index");
        foodList.splice(index, 1);
        displayInputFood();
    });
}
