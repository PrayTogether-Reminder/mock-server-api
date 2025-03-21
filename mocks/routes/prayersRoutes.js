const apiVersion = require("./apiVersion");

const prayersRoutes = (server, db) => {
  server.post(apiVersion + "/prayers", (req, res) => {
    const prayers = req.body["prayers"];
    const title = prayers["title"];
    const contents = prayers.contents;

    const prettyContents = JSON.stringify(contents, null, 2);
    console.log("title=" + title);
    console.log("contents=" + prettyContents);

    const message = db.get("prayersMessage").value();
    return res.json(message);
  });
};

module.exports = prayersRoutes;
