const apiVersion = require("./apiVersion");

const InvitationsRoutes = (server, db) => {
  server.post(apiVersion + "/invitations", (req, res) => {
    const roomId = req.body["roomId"];
    const email = req.body["email"];
    console.log("invite roomId=" + roomId + " email=" + email);

    if (email !== "test@test.com") {
      return res.status(400).json({
        code: "INVITATION-001",
        message: "잘못된 이메일 형식 입니다.",
        status: 400,
      });
    }

    const message = db.get("roomInvitationMessage").value();
    console.log(message);
    return res.json(message);
  });
};

module.exports = InvitationsRoutes;
