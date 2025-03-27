const setupRoomsRoutes = require("./RoomsRoutes");
const setupInvitationsRoutes = require("./InvitationsRoutes");
const setupPrayersRoutes = require("./prayersRoutes");
const setupNotificationsRoutes = require("./notificationsRoutes");
const setupProfileRoutes = require("./profilesRoutes");

const setupRoutes = (server, db) => {
  setupRoomsRoutes(server, db);
  setupInvitationsRoutes(server, db);
  setupPrayersRoutes(server, db);
  setupNotificationsRoutes(server, db);
  setupProfileRoutes(server, db);
};

module.exports = setupRoutes;
