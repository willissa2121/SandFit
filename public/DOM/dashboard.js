
    const workoutData = {
        exerciseType: "",
        exerciseIntensity: 0
      }
    //grabbing user input
    $("#exercise a").on("click", function() {
        workoutData.exerciseType =  $(this).html();
        // console.log(workoutData.excerciseType)
      });
    
    //grabbing user input
    $("#intensity a").on("click", function() {
        workoutData.exerciseIntensity =  $(this).html();
        // console.log(workoutData.excerciseIntensity)
      });
    
    $("#daily-workout").on("click", function(event) {
        event.preventDefault();
        // console.log(workoutData);
    
        $.post('/dashboard', workoutData)
            .then(function(data) {
                //loop
                // if (data.excerciseType === "legs") {
                //     //create card  data[i].excercise
                // }
                console.log(data)
            })
    })
    
    
    //populate username on navbar
      // var userFirstName = localStorage.getItem("userFirstName");
      // $("#unique-user").text(userFirstName);
