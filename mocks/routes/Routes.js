const setupRoomRoutes = require("./RoomRoutes");
const setupInvitationRoutes = require("./RoomInvitationRoutes");
const setupPrayersRoutes = require("./prayersRoutes");

const setupRoutes = (server, db) => {
  setupRoomRoutes(server, db);
  setupInvitationRoutes(server, db);
  setupPrayersRoutes(server, db);
};

module.exports = setupRoutes;
