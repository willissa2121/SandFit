var express = require("express");
var path = require('path')
var exphbs = require("express-handlebars");
var mysql = require('mysql')
const nodemailer = require("nodemailer");


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

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Passwordsucks!1",
    database: "practice_db"
  });
}

app.get('/login'), (req, res) => {
  res.render('login')
}


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let email = req.body.email;
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

app.post('/register', (req, res) => {
  let email = req.body.email;
  checkEmail(email, req.body, res)
})

app.get('/login/fail', (req, res) => {
  res.render('login-fail')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/weight', (req, res) => {
  res.render('dailyWeight')
})

app.post('/login', (req, res) => {
  // checkDate(req.body.email, res)
  authenticateUser(req.body, res)
})
app.post('/login-fail', (req, res) => {
  authenticateUser(req.body, res)
})

app.get('/password', (req, res) => {
  res.render('password')
})
app.post('/password', (req, res) => {
  db.users.findAll({
    attributes: ['password'],
    where: {
      email: req.body.email
    }
  }).then(function (response) {
    if (typeof response[0] === "undefined") { a.redirect('password/fail') }
    else {
      console.log(response[0].dataValues.password)
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
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
    }
  })


  res.redirect('/password')
})

app.post('/survey', (req, res) => {
  // console.log(req.body)
  updateUser(req.body, res)
})

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




let authenticateUser = (x, a) => {

  db.users.findAll({
    where: {
      email: x.email
    }
  }).then((response) => {
    if (typeof response[0] === "undefined") { a.redirect('login/fail') }
    else {
      if (x.password === response[0].password && response[0].userBorn == 0) {
        a.redirect('/survey')
      }
      else if (x.password === response[0].password && response[0].userBorn === 1) {
        checkDate(x.email, a);
      }
      else {
        a.redirect('login/fail')
      }
    }
  })
}


let checkEmail = (a, b, c) => {
  let empty = []
  db.users.findAll({
    attributes: ['email']
  }).then(function (response) {
    for (var i = 0; i < response.length; i++) {
      empty.push(response[i].dataValues.email)
    }
    console.log(empty)
    if (empty.indexOf(a) === -1) {
      db.users.create({
        name: b.firstName + b.lastName,
        email: b.email,
        password: b.password,
        phoneNumber: b.phone,
      }).then(function (response) {
        console.log('look')
        c.redirect('/login')
      })
    }
    else {
      console.log('fail')
      c.redirect('/failed')
    }
  })
}

let updateUser = (x, res) => {
  db.users.update({
    age: x.age,
    gender: x.gender,
    height: x.height,
    weight: x.weight,
    weightGoal: x.goal,
    userBorn: 1
  },
    { where: { email: x.username } }
  ).then(function (data) {
    console.log('here')
    res.redirect('/dashboard')
  })
}


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
