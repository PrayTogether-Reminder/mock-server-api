const apiVersion = require("./apiVersion");

const profilesRoutes = (server, db) => {
  server.get(apiVersion + "/members/profiles", (req, res) => {
    const profile = db.get("profileData").value();
    console.log(JSON.stringify(profile, null, 2));
    return res.json(profile);
  });
};

module.exports = profilesRoutes;
