const setupRoomRoutes = require("./RoomRoutes");
const setupPrayerTitleRoutes = require("./PrayTitleRoutes");
const setupInvitationRoutes = require("./RoomInvitationRoutes");

const setupRoutes = (server, db) => {
  setupRoomRoutes(server, db);
  setupPrayerTitleRoutes(server, db);
  setupInvitationRoutes(server, db);
};

module.exports = setupRoutes;
