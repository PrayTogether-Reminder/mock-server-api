const apiVersion = require("./apiVersion");

const RoomsRoutes = (server, db) => {
  // 기도방 조회 무한스크롤
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

  // 기도방 생성
  server.post(apiVersion + "/rooms", (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    console.log("create room: name=%s, des=%s", name, description);
    const message = db.get("roomCreationMessage");
    res.json(message);
  });

  // 기도방 나가기(삭제)
  server.delete(apiVersion + "/rooms/:roomId", (req, res) => {
    const roomId = req.params.roomId;
    console.log("delete room by Id=", roomId);
    const message = db.get("roomDeletionMessage");
    res.json(message);
  });

  // 기도방 참여자 명단 조회
  server.get(apiVersion + "/rooms/:roomId/members", (req, res) => {
    const members = db.get("roomMembers");
    res.json({ members });
  });
};

module.exports = RoomsRoutes;
