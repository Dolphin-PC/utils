const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files);
  }

  const { files } = req;

  files.file.map((file) => {
    file.mv("./uploads/" + file.name, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File Upload");
      }
    });
  });
});

app.listen(5000, () => console.log("server has started on port 5000"));
