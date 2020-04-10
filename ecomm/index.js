const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["ahsjdk23fhl"],
  })
);
app.get("/signup", (req, res) => {
  res.send(`
  <div>
  Your id is: ${req.session.userId}
    <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
    </form>
  </div>
  `);
});

app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send("Email in use");
  }

  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }

  //   Create a user in a repo
  const user = await usersRepo.create({ email, password });
  // req.session is added by cookie session
  // Store id of user in cookie
  req.session.userId = user.id;
  res.send("Account created!!!");
});

app.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are signed out");
});

app.get("/signin", (req, res) => {
  res.send(`
<div>
  <form method="POST">
      <input name="email" placeholder="email"/>
      <input name="password" placeholder="password" />
      <button>Sign In</button>
  </form>
</div>
`);
});

app.listen(3000, () => {
  console.log("Listening ");
});

// homebrew bodyParser
// const bodyParser = (req, res, next) => {
//     if (req.method === "POST") {
//       req.on("data", (data) => {
//         const parsed = data.toString("utf8").split("&");
//         const formData = {};
//         for (let pair of parsed) {
//           const [key, value] = pair.split("=");
//           formData[key] = value;
//         }
//         req.body = formData;
//         next();
//       });
//     } else {
//       next();
//     }
//   };