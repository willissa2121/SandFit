var foodList = [];
curMeal = "breakfast";
google.charts.load('current', {'packages':['bar']});

function displayInputFood(foodArr) {
    $("#foodBox").empty();
    for (var i=0; i<foodArr.length; i++) {
        var newFood = $("<p>").text(foodArr[i]).addClass("mr-auto");
        var newDelete = $("<span>").text("X").attr("data-index", i).addClass("deleteCross");
        var newCardBody = $("<div>").addClass("card-body d-flex").append(newFood).append(newDelete);
        $("<div>").addClass("card").append(newCardBody).appendTo($("#foodBox"));
    }
    addHandler();
}
function displayStoredFood(foodArr) {
    $("#foodBox").empty();
    for (var i=0; i<foodArr.length; i++) {
        var newFood = $("<p>").text(foodArr[i]).addClass("mr-auto");
        var newCardBody = $("<div>").addClass("card-body d-flex").append(newFood);
        $("<div>").addClass("card").append(newCardBody).appendTo($("#foodBox"));
    }
}
showCurMeal();
$(".meal-diet").on("click", function(event) {
    $("#breakfast-meal").removeClass("active");
    $("#lunch-meal").removeClass("active");
    $("#dinner-meal").removeClass("active");
    $(this).addClass("active");
    curMeal = $(this).data("meal");
    $("#display-nutrients").empty();
    $("#display-nutrients").append($("<div>").attr("id", "intake-chart"));
    showCurMeal();
});
function showCurMeal() {
    $.post("/diet/data", {meal: curMeal}, function(data) {
        if (data[0]) {
            console.log(data);
            parsedFood = JSON.parse(data[0].food);
            parsedNutrients = JSON.parse(data[0].nutrients);
            displayStoredFood(parsedFood);
            var newTable = $("<table>").addClass("table").appendTo($("#display-nutrients"));
            $("<thead>").append($("<tr>").append($("<th>").attr("scope", "col").text("Nutrients"),$("<th>").attr("scope", "col").text("Quantity"))).appendTo(newTable);
            $("<tbody>").append($("<tr>").append($("<th>").attr("scope", "col").text("Energy"),$("<td>").text(parsedNutrients.energy+" kcal"))).appendTo(newTable);
            $("<tbody>").append($("<tr>").append($("<th>").attr("scope", "col").text("Fat"),$("<td>").text(parsedNutrients.fat+" g"))).appendTo(newTable);
            $("<tbody>").append($("<tr>").append($("<th>").attr("scope", "col").text("Carbs"),$("<td>").text(parsedNutrients.carbs+" g"))).appendTo(newTable);
            $("<tbody>").append($("<tr>").append($("<th>").attr("scope", "col").text("Protein"),$("<td>").text(parsedNutrients.protein+" g"))).appendTo(newTable);
            $("<tbody>").append($("<tr>").append($("<th>").attr("scope", "col").text("Sodium"),$("<td>").text(parsedNutrients.sodium+" mg"))).appendTo(newTable);
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                ['Nutrients', 'Intake Percentage'],
                ['Energy', 100*(parsedNutrients.energy/8700)],
                ['Fat', 100*(parsedNutrients.fat/70)],
                ['Carbs', 100*(parsedNutrients.carbs/310)],
                ['Protein', 100*(parsedNutrients.protein/50)],
                ['Sodium', 100*(parsedNutrients.sodium/2300)]
                ]);
                var options = {
                chart: {
                    title: 'Daliy Nutrients Intake Guide',
                },
                bars: 'horizontal' // Required for Material Bar Charts.
                };
                var chart = new google.charts.Bar(document.getElementById('intake-chart'));
                chart.draw(data, google.charts.Bar.convertOptions(options));
      }
        }
        else {
            $("<span>").text("No Result!").attr("id", "no-result").appendTo($("#display-nutrients"));
        }
    });
}

$("#add-food").on("click", function(event) {
    event.preventDefault();
    if ($("#foodInput").val()) {
        foodList.push($("#foodInput").val().trim());
        displayInputFood(foodList);
        $("#foodInput").val('');
    }
});

$("#submit-food").on("click", function(evnet) {
    event.preventDefault();
    $("#display-nutrition").empty();
    if (foodList) {  
        $.post("/diet", {food: foodList, mealType: $("#meal-select").val()}, function(data) {

        })
    }
});

function addHandler() {
    $(".deleteCross").on("click", function(event) {
        var index = $(this).data("index");
        foodList.splice(index, 1);
        displayInputFood(foodList);
    });
}
