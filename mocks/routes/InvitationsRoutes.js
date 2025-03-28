const apiVersion = require("./apiVersion");

const InvitationsRoutes = (server, db) => {
  // 기도방 초대
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

  // 초대 목록 조회
  server.get(apiVersion + "/invitations", (req, res) => {
    // return res.json({ invitations: [] });
    const invitations = db.get("invitations").value();
    console.log(JSON.stringify(invitations, null, 2));
    return res.json({ invitations });
  });

  // 초대 상태 변경
  server.patch(apiVersion + "/invitations/:id", (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    let message;
    if (status === "ACCEPT") {
      message = db.get("invitationAcceptMessage").value();
    }
    if (status === "REJECT") {
      message = db.get("invitationRejectMessage").value();
    }
    console.log("invitation %d , %s", id, status);
    return res.json(message);
  });
};

module.exports = InvitationsRoutes;
