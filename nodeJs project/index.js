const express = require("express");
const app = express();
const PORT = 3002;

app.get("/notification", (req, res) => {
  const jsonData = [
    {
      name: "Mark Webber",
      action: "reaction",
      source: "My first tournament today!",
    },
    {
      name: "Angela Gray",
      action: "followed",
      source: "you",
    },
    {
      name: "Jacob Thompson",
      action: "joined",
      source: "Chess Club",
    },
    {
      name: "Rizky Hasnuddln",
      action: "private message",
      source:
        "Hello, thanks for setting up the chess club,  I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    },
    {
      name: "Kimberly Smith",
      action: "commented",
      source: "picture",
    },
    {
      name: "Nathan Peterson",
      action: "reacted",
      source: "5 end-game strategies to increase your win rate",
    },
    {
      name: "Anna Kim",
      action: "left",
      source: "Chess Club",
    },
  ];
  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
