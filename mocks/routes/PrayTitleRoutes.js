const apiVersion = require("./apiVersion");

const PrayerTitleRoutes = (server, db) => {
  server.get(apiVersion + "/prayers", (req, res) => {
    const allPrayers = db.get("prayerTitles").value();

    if (!req.query["after"] || req.query["after"] === "0") {
      res.json({ prayers: allPrayers.slice(0, 7) });
    } else if (req.query["after"] === "2025-02-12T08:47:29.563Z") {
      res.json({ prayers: allPrayers.slice(7, 14) });
    } else if (req.query["after"] === "2024-12-28T07:39:45.612Z") {
      res.json({ prayers: allPrayers.slice(14) });
    } else {
      res.json({ prayers: [] });
    }
  });
};

module.exports = PrayerTitleRoutes;
