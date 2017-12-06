const express = require("express"), bodyParser = require("body-parser"), path = require("path"), app = express(), PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let reservations = [], waitlist = [];

app.get("/", (req, res)=>{ res.sendFile(path.join(__dirname, "PLACEHOLDER")); });
app.get("/reserve", (req, res)=>{ res.sendFile(path.join(__dirname, "PLACEHOLDER")); });
app.get("/tables", (req, res)=>{ res.sendFile(path.join(__dirname, "PLACEHOLDER")); });

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/new", (req, res)=>{
  let newReserve = req.body;
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReserve);
  reservations.length >= 5 ? waitlist.push(newReserve) : reservations.push(newReserve);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
