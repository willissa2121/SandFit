var db = require('./models');


// boiler ....

// db.exerciseInfo.create({
//     exercise_name: '',
//     description:'',
//     level: '',
//     muscle_group: '',
//     link:'',
//     imageLink: ''
// });

// boiler ....


//----------------ARMS-------------------
db.exerciseInfo.create({
    exercise_name: 'barbell-curl',
    description: "1. Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. Curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.." +
        "2. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard",
    level: '1',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/barbell-curl',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-15.gif'
});

db.exerciseInfo.create({
    exercise_name: 'cable pull-up',
    description: "1. Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position." +
        "2. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move." + "3. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard." +
        "4. Slowly begin to bring the bar back to starting position as your breathe in.",
    level: '2',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/standing-biceps-cable-curl',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-15.gif'
});

db.exerciseInfo.create({
    exercise_name: 'hammer curl',
    description: "1. Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.2. The palms of the hands should be facing your torso. This will be your starting position." +
        "3. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm." +
        "4. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.",
    level: '1',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/hammer-curls',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-15.gif'
});

db.exerciseInfo.create({
    exercise_name: 'hammer curl',
    description: "1. Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. 2. The palms of the hands should be facing your torso. This will be your starting position." +
        "3. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm." +
        "4. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.",
    level: '2',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/hammer-curls',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-15.gif'
});

db.exerciseInfo.create({
    exercise_name: 'wrist curl',
    description:
        "1. Start out by placing a barbell on one side of a flat bench" +
        "2. Kneel down on both of your knees so that your body is facing the flat bench." +
        "3. Use your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge." +
        "4. Start out by curling your wrist upwards and exhaling." +
        "5. Slowly lower your wrists back down to the starting position while inhaling." +
        "6. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise." +
        '7. Repeat for the recommended amount of repetitions.',
    level: '2',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/palms-up-barbell-wrist-curl-over-a-bench',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-2.gif'
});

db.exerciseInfo.create({
    exercise_name: 'lying tricep press',
    description: '1. Lie on a flat bench with either an e-z bar (my preference) or a straight bar placed on the floor behind your head and your feet on the floor.2. Grab the bar behind you, using a medium overhand (pronated) grip, and raise the bar in front of you at arms length. Tip: The arms should be perpendicular to the torso and the floor. The elbows should be tucked in. This is the starting position.3. Touch your forehead while keeping the upper arms and elbows stationary.4. At that point, use the triceps to bring the weight back up to the starting position as you breathe out.',
    level: '2',
    muscle_group: 'arm',
    link: 'https://www.bodybuilding.com/exercises/lying-triceps-press',
    imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-10.gif'
});

// db.exerciseInfo.create({
//     exercise_name: 'tripcep push down',
//     description:'1. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position. 2. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.3. After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step.',
//     level: '2',
//     muscle_group: 'arm',
//     link:'https://www.bodybuilding.com/exercises/triceps-pushdown',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-10.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'tricep extension',
//     description:"1. To begin, stand up with a dumbbell held in one hand. Your feet should be about shoulder width apart from each other. Now fully extend the arm with the dumbbell over your head. Tip: The small finger of your hand should be facing the ceiling and the palm of your hand should be facing forward. The dumbbell should be above your head. 2. This will be your starting position.Keeping your upper arm close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearm touch your bicep. Tip: The upper arm should remain stationary and only the forearm should move. Breathe in as you perform this step.3. Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.",
//     level: '1',
//     muscle_group: 'arm',
//     link:'https://www.bodybuilding.com/exercises/standing-one-arm-dumbbell-triceps-extension',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-10.gif'
// });

// //----------------ARMS-------------------

// //----------------BACK-------------------

// db.exerciseInfo.create({
//     exercise_name: 'super man',
//     description:'1. Lay on ground 2. Lift body up, flex and contract',
//     level: '1',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/barbell-front-raise',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-4.gif'
// });
// db.exerciseInfo.create({
//     exercise_name: 'straight arm pull-down',
//     description:'1. Grab the wide bar from the top pulley of a pulldown machine. 2. Bend your torso forward at the waist by around 30-degrees with your arms fully extended in front of you and a slight bend at the elbows. 3. While keeping the arms straight, pull the bar down by contracting the lats until your hands are next to the side of the thighs. Breathe out as you perform this step.4. While keeping the arms straight, go back to the starting position while breathing in.',
//     level: '2',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/straight-arm-pulldown',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-3.gif'
// });
// db.exerciseInfo.create({
//     exercise_name: 'wide-arm pull down',
//     description:'1. Sit down on a pull-down machine with a wide bar attached to the top pulley. Adjust the knee pad 2. Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than shoulder width.3. As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out.4. As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.5. After a second at the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.',
//     level: '2',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/wide-grip-lat-pulldown',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-3.gif'
// });
// db.exerciseInfo.create({
//     exercise_name: 'bent over dumbell row',
//     description:'1. Legs shoulder width apart 2. Bend legs a tad bit at a comfortable angle 3. Hold both dumbells in hand, let all the way down 4. Elbows in and bring in to chest ',
//     level: '1',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/bent-over-two-dumbbell-row-with-palms-in',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-4.gif'
// });
// db.exerciseInfo.create({
//     exercise_name: 'v-bar lat pull-down',
//     description:'1. Sit down on a pull-down machine with a V-Bar attached to the top pulley.2. Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.3. Grab the V-bar with the palms facing each other (a neutral grip). Stick your chest out and lean yourself back slightly (around 30-degrees) in order to better engage the lats. This will be your starting position.4. Using your lats, pull the bar down as you squeeze your shoulder blades. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion. Tip: Keep the torso stationary throughout the movement.5. After a second hold on the contracted position, slowly bring the bar back to the starting position as you breathe in.',
//     level: '2',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/v-bar-pulldown',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-3.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'seated cable row',
//     description:'1. Access a low pulley row machine with a V-bar.Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. Sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.2. Lean over as you keep the natural alignment of your back and grab the V-bar handles.3. With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. 4. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.',
//     level: '2',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/seated-cable-rows',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-4.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'single-arm dumbbell row',
//     description:'1. Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support.2. Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position.3. Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Force is performed with the back muscles and not arms.4. Lower the resistance straight down to the starting position. Breathe in as you perform this step.',
//     level: '1',
//     muscle_group: 'back',
//     link:'https://www.bodybuilding.com/exercises/one-arm-dumbbell-row',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-4.gif'
// });
// //----------------BACK-------------------

// //----------------CARDIO-------------------
// db.exerciseInfo.create({
//     exercise_name: '',
//     description:'',
//     level: '',
//     muscle_group: '',
//     link:'',
//     imageLink: ''
// });

// db.exerciseInfo.create({
//     exercise_name: 'jump rope',
//     description:'1. Handles in hands 2. Make sure rope is behind you 3. Swing around body and jump over',
//     level: '1',
//     muscle_group: 'cardio',
//     link:'https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html',
//     imageLink: 'https://i.pinimg.com/originals/26/ee/87/26ee870baeeac4ea9fa3736800d4ce61.jpg'
// });

// db.exerciseInfo.create({
//     exercise_name: 'jump rope',
//     description:'1. Handles in hands 2. Make sure rope is behind you 3. Swing around body and jump over',
//     level: '2',
//     muscle_group: 'cardio',
//     link:'https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html',
//     imageLink: 'https://i.pinimg.com/originals/26/ee/87/26ee870baeeac4ea9fa3736800d4ce61.jpg'
// });

// db.exerciseInfo.create({
//     exercise_name: 'stair master',
//     description:'	1. Climb on & adjust pace/resistance 2. 20 minutes ',
//     level: '1',
//     muscle_group: 'cardio',
//     link:"https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html",
//     imageLink: 'https://i.pinimg.com/originals/2d/61/09/2d610920cf947c4171e647c9ab8ba8bf.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'stair master',
//     description:'	1. Climb on & adjust pace/resistance 2. 20 minutes ',
//     level: '2',
//     muscle_group: 'cardio',
//     link:"https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html",
//     imageLink: 'https://i.pinimg.com/originals/2d/61/09/2d610920cf947c4171e647c9ab8ba8bf.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'running',
//     description:'Begin with running/jogging for 5 min spurts, goal is to improve time',
//     level: '1',
//     muscle_group: 'cardio',
//     link:'https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html',
//     imageLink: 'http://www.humankinetics.com/AcuCustom/Sitename/DAM/042/24art1_artX.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'running',
//     description:'Begin with running/jogging for 5 min spurts, goal is to improve time',
//     level: '2',
//     muscle_group: 'cardio',
//     link:'https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html',
//     imageLink: 'http://www.humankinetics.com/AcuCustom/Sitename/DAM/042/24art1_artX.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'up-hill fast walk ',
//     description:'1. Start treadmill 2. Adjust incline to level 8. 3. 25-30 minutes',
//     level: '1',
//     muscle_group: 'cardio',
//     link:'https://www.bodybuilding.com/content/4-fat-blasting-cardio-workouts.html',
//     imageLink: 'http://www.humankinetics.com/AcuCustom/Sitename/DAM/042/24art1_artX.png'
// });

// //----------------CARDIO-------------------

// //----------------CORE-------------------

// db.exerciseInfo.create({
//     exercise_name: 'plank',
//     description:'1. Get in push-up position, instead of palm to floor.. forearm to floor. 2. Make sure your back is straight 3. Goal is to try to hold it for 1 min, work your way to 1 min holds. 4. CONTRACT YOUR CORE',
//     level: '1',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://i.pinimg.com/originals/05/b7/a1/05b7a1b6e21e2fca91004f4ed51b3ecd.jpg'
// });


// db.exerciseInfo.create({
//     exercise_name: 'plank',
//     description:'1. Get in push-up position, instead of palm to floor.. forearm to floor. 2. Make sure your back is straight 3. Goal is to try to hold it for 1 min, work your way to 1 min holds. 4. CONTRACT YOUR CORE',
//     level: '2',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://i.pinimg.com/originals/05/b7/a1/05b7a1b6e21e2fca91004f4ed51b3ecd.jpg'
// });

// db.exerciseInfo.create({
//     exercise_name: 'leg raises',
//     description:'1. Lay flat 2. Lift both legs simultaneously up until its 90 degree to your torso3. Slowly let down, have control. 4. CONTRACT YOUR CORE',
//     level: '1',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-best-ab-workout-for-a-six-pack.html',
//     imageLink: 'https://www.thehealthsite.com/wp-content/uploads/2013/12/leg-raises-300x253.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'leg raises',
//     description:'1. Lay flat 2. Lift both legs simultaneously up until its 90 degree to your torso3. Slowly let down, have control. 4. CONTRACT YOUR CORE',
//     level: '2',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-best-ab-workout-for-a-six-pack.html',
//     imageLink: 'https://www.thehealthsite.com/wp-content/uploads/2013/12/leg-raises-300x253.png'
// });

// db.exerciseInfo.create({
//     exercise_name: 'toe touchers',
//     description:'1. Lay flat. 2. Lift both legs at a 90 degree angle to your torso. 3. Touch your toes. 4. CONTRACT YOUR CORE',
//     level: '1',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'toe touchers',
//     description:'1. Lay flat. 2. Lift both legs at a 90 degree angle to your torso. 3. Touch your toes. 4. CONTRACT YOUR CORE',
//     level: '2',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'toe crunches',
//     description:'1. Lay flat. 2. Lift both legs at a 90 degree angle to your torso. 3. Put both hands behind your head. 4. Bring in your elbows and pull them towards your knees. 5. CONTRACT YOUR CORE',
//     level: '1',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'toe crunches',
//     description:'1. Lay flat. 2. Lift both legs at a 90 degree angle to your torso. 3. Put both hands behind your head. 4. Bring in your elbows and pull them towards your knees. 5. CONTRACT YOUR CORE',
//     level: '2',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/content/the-4-essential-bodyweight-core-exercises.html',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'leg pull-in',
//     description:'1. Lay flat 2. Hold your legs out, stiff. 3. You can keep your hands beneath your bum for support. 4. Pull your legs into your chest, then back out slowly. 5. CONTRACT YOUR CORE',
//     level: '1',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/exercises/leg-pull-in',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });


// db.exerciseInfo.create({
//     exercise_name: 'bench leg pull-in',
//     description:'1. Lie on an exercise mat or a flat bench with your legs off the end.2. Place your hands either under your glutes with your palms down or by the sides holding on to the bench (or with palms down by the side on an exercise mat). Also extend your legs straight out. This will be your starting position.3. Bend your knees and pull your upper thighs into your midsection as you breathe out. Continue this movement until your knees are near your chest. Hold the contracted position for a second.4. As you breathe in, slowly return to the starting position.',
//     level: '2',
//     muscle_group: 'core',
//     link:'https://www.bodybuilding.com/exercises/flat-bench-leg-pull-in',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-13.gif'
// });

// //----------------CORE-------------------

// //----------------LEGS-------------------

// db.exerciseInfo.create({
//     exercise_name: 'barbell squat',
//     description:'1. Begin with the barbell supported on top of the traps. The chest should be up and the head facing forward. Adopt a hip-width stance with the feet turned out as needed.2. Descend by flexing the knees, refraining from moving the hips back as much as possible. This requires that the knees travel forward. Ensure that they stay align with the feet. The goal is to keep the torso as upright as possible.3. Continue all the way down, keeping the weight on the front of the heel. At the moment the upper legs contact the lower legs reverse the motion, driving the weight upward.',
//     level: '2',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/barbell-squat',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: ' squat',
//     description:'1. The chest should be up and the head facing forward. Adopt a hip-width stance with the feet turned out as needed.2. Descend by flexing the knees, refraining from moving the hips back as much as possible. This requires that the knees travel forward. Ensure that they stay align with the feet. The goal is to keep the torso as upright as possible.3. Continue all the way down, keeping the weight on the front of the heel. At the moment the upper legs contact the lower legs reverse the motion, driving the weight upward.',
//     level: '1',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/barbell-squat',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'leg extension',
//     description:'1. leg extension machine 2. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) . Make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees. start executing the exercise you stop going down once you hit the 90-degree angle.3. Using your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position.4. Slowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.',
//     level: '2',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/leg-extensions',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'leg extension',
//     description:'1. leg extension machine 2. Sit on a chair/table/flat surface. Make sure you get a nice grip to be stationed . 3. Make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees. Start executing the exercise you stop going down once you hit the 90-degree angle.4. Using your quadriceps, extend your legs to the maximum as you exhale. Pause a second on the contracted position.5. Slowly lower back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.',
//     level: '1',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/leg-extensions',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'lunges',
//     description:'1. Stand up straight 2. Step forward with your right leg and squat down through your hips, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: Do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. 3. Using mainly the heel of your foot, push up and go back to the starting position as you exhale.4. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.',
//     level: '1',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/barbell-lunge',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'barbell lunges',
//     description:'1. Grab a bar that is a good weight, place the back of your shoulders (slightly below the neck) across it.2. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.3. Step away from the rack and step forward with your right leg and squat down through your hips, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: Do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. 4. Using mainly the heel of your foot, push up and go back to the starting position as you exhale.5. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.',
//     level: '2',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/barbell-lunge',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-7.gif'
// });;

// db.exerciseInfo.create({
//     exercise_name: 'standing calf raises',
//     description:'1. Grab dumbbells, weight of your liking2. Hold both in each hand 3. Curl arms so dumbbells are to top of shoulders 4. Raise your heels 5. Repeat',
//     level: '1',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/standing-calf-raises',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-9.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'standing calf raises',
//     description:'1. Place your shoulders under the pads provided and position your toes facing forward . The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked.2. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.3. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.4. Repeat for the recommended amount of repetitions.',
//     level: '2',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/standing-calf-raises',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-9.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'lying leg curl',
//     description:'1. Lay on the ground, stomach facing floor2. Bring legs up to a 90 degree angle 3. Contract your hamstrings 4. Repeat ',
//     level: '1',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/lying-leg-curls',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-8.gif'
// });

// db.exerciseInfo.create({
//     exercise_name: 'lying leg curl',
//     description:'1. Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment.2. Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position.3. As you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second. 4. As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.',
//     level: '2',
//     muscle_group: 'legs',
//     link:'https://www.bodybuilding.com/exercises/lying-leg-curls',
//     imageLink: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-8.gif'
// });

//----------------LEGS-------------------
