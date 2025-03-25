const apiVersion = require("./apiVersion");

const RoomsRoutes = (server, db) => {
  server.get(apiVersion + "/rooms", (req, res) => {
    const allRooms = db.get("rooms").value();
    //return res.json({rooms:[]});
    if (req.query["after"] === "0") {
      res.json({ rooms: allRooms.slice(0, 10) });
    }

    if (req.query["after"] === "2024-04-05T07:34:38Z") {
      res.json({ rooms: allRooms.slice(10, 16) });
    }

    if (req.query["after"] === "2024-05-27T05:56:52Z") {
      res.json({ rooms: allRooms.slice(16) });
    }
  });

  server.post(apiVersion + "/rooms/:roomId/notification", (req, res) => {
    res.json({ rooms: [] });
  });

  server.get(apiVersion + "/rooms/:roomId/members", (req, res) => {
    const members = db.get("roomMembers");
    res.json({ members });
  });
};

module.exports = RoomsRoutes;
