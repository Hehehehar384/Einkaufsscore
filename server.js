const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "scoreboard";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.log("Error connecting to MongoDB:", err);
    return;
  }
  console.log("Connected to MongoDB server");

  // Get the database
  const db = client.db(dbName);

  // Set up the express app to handle JSON data
  app.use(express.json());

  // Save the scores to the database
  app.post("/scores", function(req, res) {
    let scores = req.body;
    db.collection("scores").replaceOne({}, scores, { upsert: true }, function(err, result) {
      if (err) {
        console.log("Error saving scores:", err);
        res.status(500).send("Error saving scores");
      } else {
        console.log("Scores saved");
        res.send("Scores saved");
      }
    });
  });

  // Get the scores from the database
  app.get("/scores", function(req, res) {
    db.collection("scores").findOne({}, function(err, scores) {
      if (err) {
        console.log("Error getting scores:", err);
        res.status(500).send("Error getting scores");
      } else if (!scores) {
        console.log("No scores found");
        res.send({});
      } else {
        console.log("Scores retrieved");
        res.send(scores);
      }
    });
  });

  // Start the server
  app.listen(port, function() {
    console.log("Server listening on port", port);
  });
});
