const express = require("express");
const app = express();

const path = require("path");
//defining a static server to serve static pages
app.use("/static", express.static(path.join(__dirname, "public")));
//defining the view engine to render html
app.set("view engine", "pug");

//declaring the routes
const aboutRoute = require("./routes/about");
const indexRoute = require("./routes/index");
const projectRoute = require("./routes/project");

//making a middleware with the routes and specify the pathway
app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectRoute);

//error handler for page not found
app.use((req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  next(err);
});

//error handler for server error
app.use((req, res, next) => {
  const err = new Error("ops! The server was not able to process the request ");
  err.status = 500;
  next(err);
});

//Error middleware
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

//defining the server listening port number
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
