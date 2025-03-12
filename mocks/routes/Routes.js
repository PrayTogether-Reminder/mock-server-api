const setupRoomRoutes = require("./RoomRoutes");
const setupPrayerTitleRoutes = require("./PrayTitleRoutes");

const setupRoutes = (server, db) => {
  setupRoomRoutes(server, db);
  setupPrayerTitleRoutes(server, db);
};

module.exports = setupRoutes;
