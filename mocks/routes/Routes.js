const setupRoomRoutes = require("./RoomRoutes");
const setupPrayerTitleRoutes = require("./PrayTitleRoutes");
const setupInvitationRoutes = require("./RoomInvitationRoutes");
const setupPrayersRoutes = require("./prayersRoutes");

const setupRoutes = (server, db) => {
  setupRoomRoutes(server, db);
  setupPrayerTitleRoutes(server, db);
  setupInvitationRoutes(server, db);
  setupPrayersRoutes(server, db);
};

module.exports = setupRoutes;
