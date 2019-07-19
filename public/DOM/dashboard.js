
const workoutData = {
  exerciseType: "",
  exerciseIntensity: 0
}
//grabbing user input
$("#exercise a").on("click", function () {
  workoutData.exerciseType = $(this).html();
  // console.log(workoutData.excerciseType)

  //grab exercise name and append
  $('#ddm1Text').empty();
  $('#ddm1Text').append( " " + workoutData.exerciseType)
});

//grabbing user input
$("#intensity a").on("click", function () {
  workoutData.exerciseIntensity = $(this).html();
  // console.log(workoutData.excerciseIntensity)

  //grab exercise name and append
  $('#ddm2Text').empty();
  $('#ddm2Text').append( " " + workoutData.exerciseIntensity)
});

$("#daily-workout").on("click", function (event) {
  event.preventDefault();
  $(".card").empty();
  // console.log(workoutData);

  $.get('/api/dashboard/' + workoutData.exerciseType + '/' + workoutData.exerciseIntensity)
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element);

        let newCard = $('<div>').addClass("card");
        newCard.attr("width", "18rem");

        let newImage = $("<img>").addClass("card-img-top text-center");
        newImage.attr("src", element.imageLink)
        newImage.attr("alt", "Card image cap");
        newCard.append(newImage)

        let newDivCard = $("<div>").addClass("card-body");
        newCard.append(newDivCard);

        let newCardTitle = $("<h5>").addClass("card-title");
        newCardTitle.text(element.exercise_name)
        newDivCard.append(newCardTitle);

        let newCardText = $("<p>").addClass("card-text");
        newCardText.text(element.description)
        newCardTitle.append(newCardText);

        let newUl = $("<ul>").addClass("list-group list-group-flush");
        newDivCard.append(newUl);

        let newLi1 = $("<li>").addClass("list-group-item");
        newLi1.text(element.muscle_group);
        newUl.append(newLi1);

        let newLi2 = $("<li>").addClass("list-group-item");
        newLi2.text(element.level);
        newUl.append(newLi2);

        let newLi3 = $("<li>").addClass("list-group-item");
        newLi3.attr("href", element.link);
        newLi3.text('Click here for video')
        // newUl.html($("<a></a>").attr("href", element.link))
        newUl.append(newLi3);

        $("#cardHolder").append(newCard);
      }
      let newH2 = $("<h2>").text("Your Exercises")
      $(".new").append(newH2)
    })
})
