const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
const port = 3000;

const DB_URL =
  "mongodb+srv://abasovmurad0602:24.05123@cluster0.zets8id.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const WatchSchema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true },
  title: { type: String, require: true },
});

const WatchModel = mongoose.model("watch", WatchSchema);

app.get("/api/Watchs", async (req, res) => {
  try {
    const watchs = await WatchModel.find({});

    if (watchs.length > 0) {
      res.status(200).send({ message: "success", data: watchs });
    } else {
      res.status(204).send({
        message: "data is empty",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/watchs/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletewatch = await WatchModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "deleted succesfully",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/watchs", async (req, res) => {});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");

  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});