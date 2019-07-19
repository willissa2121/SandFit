
const workoutData = {
  exerciseType: "",
  exerciseIntensity: 0
}
//grabbing user input
$("#exercise a").on("click", function () {
  workoutData.exerciseType = $(this).html();
  // console.log(workoutData.excerciseType)
});

//grabbing user input
$("#intensity a").on("click", function () {
  workoutData.exerciseIntensity = $(this).html();
  // console.log(workoutData.excerciseIntensity)
});

$("#daily-workout").on("click", function (event) {
  event.preventDefault();
  $("#cardHolder").empty();

  
  $("#new").empty();
  // console.log(workoutData);

  $.get('/api/dashboard/' + workoutData.exerciseType + '/' + workoutData.exerciseIntensity)
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element);

        let newCard = $('<div>').addClass("card");
        newCard.attr("width", "18rem");

        let newImage = $("<img>").addClass("card-img-top");
        newImage.attr("src", element.imageLink)
        newImage.attr("alt", "Card image cap");
        newCard.append(newImage)

        let newDivCard = $("<div>").addClass("card-body");
        newCard.append(newDivCard);

        let newCardTitle = $("<h2>").addClass("card-title text-center");
        newCardTitle.text(element.exercise_name)
        newDivCard.append(newCardTitle);

        // let newCardText = $("<p>").addClass("card-text");
        // newCardText.text(`Instructions: ${element.description}`)
        // newCardTitle.append(newCardText);

        let newUl = $("<ul>").addClass("list-group list-group-flush");
        newDivCard.append(newUl);

        let newLi1 = $("<li>").addClass("list-group-item text-center");
        newLi1.html(`<h3>Instruction:</h3>`);
        newUl.append(newLi1);

        let newLi2 = $("<li>").addClass("list-group-item");
        newLi2.text(element.description);
        newUl.append(newLi2);

        let newLi3 = $("<a>").addClass("list-group-item");
        newLi3.attr("href", element.link);
        newLi3.text('Click here for video')
        // newUl.html($("<a></a>").attr("href", element.link))
        newUl.append(newLi3);

        
        $("#cardHolder").append(newCard);
        // console.log(element)
      }
      let newH1 = $("<h1>").text("Your Exercises")
      $("#new").append(newH1)
    })

  //stores user input into userHistory table
  //   $.post("/dashboard", workoutData)
  //     .then(function (data) {
  //       console.log(data)
  //     })
})


