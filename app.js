const express = require("express"), bodyParser = require("body-parser"), path = require("path"), app = express(), PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let reservations = [{
  name: "test",
  phone: "test",
  email: "Jedi Master",
  id: "test1",}], 
waitlist = [{
  name: "yoda",
  phone: "Yoda",
  email: "Jedi Master",
  id: "test2",}];

app.get("/", (req, res)=>{ res.sendFile(path.join(__dirname, "home.html")); });
app.get("/reserve", (req, res)=>{ res.sendFile(path.join(__dirname, "reserve.html")); });
app.get("/tables", (req, res)=>{ res.sendFile(path.join(__dirname, "tables.html")); });

app.get("/api/reservations", function(req, res) { return res.json(reservations); });
app.get("/api/waitlist", function(req, res) { return res.json(waitlist); });

app.post("/api/new", (req, res)=>{
  let newReserve = req.body;
  newReserve.routeName = newReserve.id.replace(/\s+/g, "").toLowerCase();
  console.log(newReserve);
  reservations.length >= 5 ? waitlist.push(newReserve) : reservations.push(newReserve);
});

app.listen(PORT, function() { console.log("App listening on PORT " + PORT); });