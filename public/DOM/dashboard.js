
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

        let newImage = $("<img>").addClass("card-img-top");
        // newImage.attr("src", element.image_link)
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
        newLi3.attr("href", element.video_link);
        newUl.append(newLi3);

        $("#cardHolder").append(newCard);
      }
    })
})
