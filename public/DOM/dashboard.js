(() => {
    const workoutData = {
        excercisetype: "",
        excerciseIntensity: 0
      }
    //grabbing user input
    $("#excercise a").on("click", function() {
        workoutData.excerciseType =  $(this).html();
        console.log(workoutData.excerciseType)
      });
    
    //grabbing user input
    $("#intensity a").on("click", function() {
        workoutData.excerciseIntensity =  $(this).html();
        console.log(workoutData.excerciseIntensity)
      });
    
    $("#daily-workout").on("click", function(event) {
        event.preventDefault();
        console.log(workoutData);
    
        $.post('/dashboard', workoutData, function(data){
    
        })
    })
    
    
    //populate username on navbar
      var username = sessionStorage.getItem("username");
      $("#unique-user").text(username);
})();