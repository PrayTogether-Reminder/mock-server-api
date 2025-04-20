const setupRoomsRoutes = require("./RoomsRoutes");
const setupInvitationsRoutes = require("./InvitationsRoutes");
const setupPrayersRoutes = require("./prayersRoutes");
const setupMemberRoutes = require("./membersRoutes");

const setupRoutes = (server, db) => {
  setupRoomsRoutes(server, db);
  setupInvitationsRoutes(server, db);
  setupPrayersRoutes(server, db);
  setupMemberRoutes(server, db);
};

module.exports = setupRoutes;
