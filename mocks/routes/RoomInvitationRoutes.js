const apiVersion = require("./apiVersion");

const RoomInvitationRoutes = (server, db) => {
  server.post(apiVersion + "/invitations", (req, res) => {
    const roomId = req.body["roomId"];
    const email = req.body["email"];
    console.log("invite roomId=" + roomId + " email=" + email);
    const message = db.get("roomInvitationMessage").value();
    return res.json(message);
  });
};

module.exports = RoomInvitationRoutes;
