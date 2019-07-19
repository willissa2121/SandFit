var express = require("express");
var path = require('path');
var exphbs = require("express-handlebars");
var mysql = require('mysql');
const nodemailer = require("nodemailer");
let axios = require("axios");
let bcrypt = require('bcrypt');
const saltRounds = 10;
let username;


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");


//****************************************/


app.get('/login'), (req, res) => {
  res.render('login')
}

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let email = req.body.email;
  username = req.body.email
  checkEmail(email, req.body, res)

})

app.get('/survey', (req, res) => {
  res.render('survey')
})

app.get('/landing', (req, res) => {
  res.render('landing')
})

app.get('/failed', (req, res) => {
  res.render('failed')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/settings', (req, res) => {
  db.users.findAll({
    where: {
      email: username
    }
  }).then(response => {
    let bigData = response[0].dataValues
    res.render('settings', bigData)
  })

})

app.post('/register', (req, res) => {
  let email = req.body.email;
  checkEmail(email, req.body, res)
})

app.get('/login/fail', (req, res) => {
  res.render('login-fail')
})

app.get('/dashboard', (req, res) => {
  db.exerciseInfo.findAll({}).then(function (data) {


    db.users.findAll({
      attributes: ['calories', 'caloriesToday', 'name'],
      where: {
        email: username
      }
    }).then(function (response) {
      // console.log(username)
      // console.log(response[0].dataValues)
      let remaining = response[0].dataValues.calories - response[0].dataValues.caloriesToday
      let bigData = {
        username: response[0].dataValues.name,
        calories: response[0].dataValues.calories,
        calsToday: response[0].dataValues.caloriesToday,
        remaining: remaining,
        data: data
      }
      // console.log(bigData)
      res.render('dashboard', bigData)
    })
  })
})

app.get('/weight', (req, res) => {
  res.render('dailyWeight')
})

app.post('/weight', (req, res) => {
  if (typeof req.body.todaysWeight == 'undefined') {
    res.redirect('/dashboard')
  }
  db.users.update({
    weight: req.body.todaysWeight / 2.2,
    caloriesToday: 0
  },
    { where: { email: username } }
  ).then(function (data) {
    // console.log('checked')
    res.redirect('/dashboard')

  })
})

app.post('/login', (req, res) => {
  // checkDate(req.body.email, res)
  username = req.body.email
  authenticateUser(req.body, res)
})
app.post('/login-fail', (req, res) => {
  username = req.body.email
  authenticateUser(req.body, res)
})

app.get('/password/fail', (req, res) => {
  res.render('password-fail')
})

app.get('/password', (req, res) => {
  res.render('password')
})

//function that will send email to user containing password if email is recognized;
app.post('/password', (req, res) => {
  db.users.findAll({
    attributes: ['password'],
    where: {
      email: req.body.email
    }
  }).then(function (response) {
    // console.log(response[0])
    if (typeof response[0] === "undefined") { res.redirect('/password/fail') }
    else {

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sandfitrecovery@gmail.com',
          pass: 'Passwordsucks!1'
        }
      });

      var mailOptions = {
        from: 'sandfitrecovery@gmail.com',
        to: req.body.email,
        subject: 'Recovery Password',
        text: 'This is your recovery password email from the SandFit Fitness Team. Your Password to log in is: ' + response[0].dataValues.password
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          // console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        res.redirect('/password')
      })
    }
  })



})

app.post('/survey', (req, res) => {
  // console.log(req.body)
  updateUser(req.body, res)
})

app.get("/dashboard", (req, res) => {
  db.users.findAll({
    attributes: ['calories', 'caloriesToday'],
    where: {
      email: username
    }
  }).then(response => {
    // console.log('checking here')
    // console.log(response[0].dataValues, username)
    res.render('dashboard', bigData)
  })

});





app.get("/api/dashboard/:condition/:level", (req, res) => {
  // console.log(req.body);
  // console.log(req.params)
  db.exerciseInfo.findAll({
    where: {
      muscle_group: req.params.condition,
      level: req.params.level
    }
  }).then((results) => {
    // console.log(results)
    res.json(results)
  })
});
// app.post("/dashboard", (req, res) => {
//   db.userHistory.create({
//     exerciseType: req.body.exerciseType,
//     exerciseIntensity: req.body.exerciseIntensity
//     //maybe more data for graphing later
//   }).then(function (results) {
//     res.json(results)
//   });
// });

// Function to make sure user has updated today, to take to weight entery screen (via login post [nested])
let checkDate = (x, res) => {
  db.users.findAll({
    attributes: ['userBornToday', 'updatedAt'],
    where: {
      email: x
    }
  }).then(response => {
    let date = new Date()
    let userDate = response[0].dataValues.updatedAt;
    if (userDate.setHours(0, 0, 0, 0) != date.setHours(0, 0, 0, 0)) {
      res.redirect('/weight')
    }
    else {
      res.redirect('/dashboard')
    }
  })
}

//function that will execute to make sure user login is unique(via register post route)
let checkEmail = (a, b, c) => {
  bcrypt.hash(b.password, saltRounds, function (err, hash) {
    if (err) throw err;


    let empty = []
    db.users.findAll({
      attributes: ['email']
    }).then(function (response) {
      for (var i = 0; i < response.length; i++) {
        empty.push(response[i].dataValues.email)
      }
      // console.log(empty)
      if (empty.indexOf(a) === -1) {
        db.users.create({
          name: b.firstName + " " + b.lastName,
          email: b.email,
          password: hash,
          phoneNumber: b.phone,
        }).then(function (response) {
          // console.log('look')
          c.redirect('/login')
        })
      }
      else {
        // console.log('fail')
        c.redirect('/failed')
      }
    })
  });
}

//function that is called to make sure login credentials are correct and take user to correct screen (via login post)

let authenticateUser = (x, a) => {


  db.users.findAll({
    where: {
      email: x.email
    }
  }).then((response) => {
    if (!x.password) { console.log('checked') }
    bcrypt.compare(x.password, response[0].password, function (err, resEncrypt) {
      // console.log(res);
      console.log(x.password)
      console.log(response[0].password)



      if (typeof response[0] === "undefined") { a.redirect('login/fail') }
      else {
        if (resEncrypt && response[0].userBorn == 0) {
          a.redirect('/survey')
        }
        else if (resEncrypt && response[0].userBorn === 1) {
          checkDate(x.email, a);
        }
        else {
          a.redirect('login/fail')
        }
      }
    })
  })
}


// Function that will execute once user presses submit on survey ( via post route of survey)
let updateUser = (x, res) => {
  db.users.update({
    age: x.age,
    gender: x.gender,
    height: x.height,
    weight: x.weight / 2.2,
    weightGoal: x.goal / 2.2,
    userBorn: 1
  },
    { where: { email: x.username } }
  ).then(function (data) {
    getCals(x.username)
    // console.log('checked')
    res.redirect('/dashboard')

  })
}

//function to generate daily calorie goal based on user weight and height and gender and age
let getCals = (x) => {
  db.users.findAll({
    attributes: ['age', 'height', 'weight', 'gender'],
    where: {
      email: x
    }
  }).then(function (response) {
    // console.log(response[0].dataValues)
    let fatPercentage = Number(response[0].dataValues.height / (response[0].dataValues.weight * 3.68))
    let fatFreeMass = (response[0].dataValues.weight - (response[0].dataValues.weight * fatPercentage))
    let calsTemp = (500 + (22 * fatFreeMass))
    if (response[0].dataValues.gender == 'male') {
      calsTemp += 105
    }
    if (response[0].dataValues.age < 35) {
      calsTemp += 135
    }
    let cals = Math.floor(calsTemp)
    if (cals > 2550) {
      cals = 2475
    }
    db.users.update({
      calories: cals
    },
      {
        where: {
          email: x
        }
      }
    ).then(function (response) {
      // console.log('worked first time')
    })

  })
}


app.get('/diary', (req, res) => {
  res.render('diary')
})
app.post('/diary', (req, res) => {
  apiCall(req.body.userfood, req.body.foodQuant, res)
})

//practice food parser request
let apiCall2 = (x, y, res) => {
  let url = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=red%20" + x + "&app_id=153d107f&app_key=b7785b3de6ea8b46bb8efa79c39c4166"
  axios.get(url).then(function (response) {
    let singleCal = (response.data.hints[0].food.nutrients.ENERC_KCAL)
    let totalCal = singleCal * y
    db.users.findAll({
      attributes: ['caloriesToday'],
      where: {
        email: username
      }
    }).then(function (response) {
      let currentCals = (response[0].dataValues.caloriesToday)
      let todayCals = currentCals += totalCal
      // console.log(username)
      db.users.update({
        caloriesToday: todayCals
      },
        {
          where: {
            email: username
          }
        }
      ).then(function (response) {
        res.redirect('/dashboard')
      })
    })
  })
}
// apiCall('dorito')

let apiCall = (x, y, res) => {
  let url = "http://api.edamam.com/auto-complete?q=" + x + "&limit=10&app_id=153d107f&app_key=b7785b3de6ea8b46bb8efa79c39c4166"
  axios.get(url).then(function (response) {
    apiCall2(response.data[0], y, res)
  })
}


db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


//practice food parser request
// let apiCall = () => {
//   let url = "https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=red%20apple&app_id=153d107f&app_key=b7785b3de6ea8b46bb8efa79c39c4166"
//   axios.get(url).then(function (response) {
//     console.log(response.data.hints[0].food.nutrients.ENERC_KCAL)
//   })
// }
// apiCall()

// let apicall2 = () => {
//   let url = "http://api.edamam.com/auto-complete?q=pe&limit=10&app_id=153d107f&app_key=b7785b3de6ea8b46bb8efa79c39c4166"
//   axios.get(url).then(function (response) {
//     console.log(response.data)
//   })
// }
// apicall2()


// db.sequelize.sync().then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });

