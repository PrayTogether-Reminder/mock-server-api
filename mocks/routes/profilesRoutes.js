const apiVersion = require("./apiVersion");

const profilesRoutes = (server, db) => {
  server.get(apiVersion + "/profiles/me", (req, res) => {
    const profile = db.get("profileData").value();
    console.log(profile);
    return res.json(profile);
  });
};

module.exports = profilesRoutes;
