const apiVersion = require("./apiVersion");

const NotificationsRoutes = (server, db) => {
  server.post(apiVersion + "/notifications", (req, res) => {
    const titleId = req.body.prayerTitleId;
    const roomId = req.body.roomId;
    const type = req.body.type;
    console.log("titldId=" + titleId + " roomId=" + roomId + " type=" + type);
    const message = db.get("prayerCompletionMessage");
    res.json(message);
  });
};

module.exports = NotificationsRoutes;
