const apiVersion = require("./apiVersion");

const prayersRoutes = (server, db) => {
  // 기도 제목 조회 무한 스크롤
  server.get(apiVersion + "/prayers", (req, res) => {
    const allPrayers = db.get("prayerTitles").value();
    //return res.json({prayerTitles: []});

    if (!req.query["after"] || req.query["after"] === "0") {
      res.json({ prayerTitles: allPrayers.slice(0, 7) });
    } else if (req.query["after"] === "2025-02-12T08:47:29.563Z") {
      res.json({ prayerTitles: allPrayers.slice(7, 14) });
    } else if (req.query["after"] === "2024-12-28T07:39:45.612Z") {
      res.json({ prayerTitles: allPrayers.slice(14) });
    } else {
      res.json({ prayerTitles: [] });
    }
  });

  // 기도 제목&내용 작성
  server.post(apiVersion + "/prayers", (req, res) => {
    const prayers = req.body["prayers"];
    const title = prayers["title"];
    const contents = prayers.contents;

    const prettyContents = JSON.stringify(contents, null, 2);
    console.log("title=" + title);
    console.log("contents=" + prettyContents);

    const message = db.get("prayersCreationMessage").value();
    return res.json(message);
  });

  // 기도 내용 조회
  server.get(apiVersion + "/prayers/:titleId/contents", (req, res) => {
    // const titleId = req.titleId;
    const contents = db.get("prayersContents").value();
    return res.json({ prayerContents: contents });
  });

  // 기도 제목&내용 변경
  server.put(apiVersion + "/prayers/:titleId", (req, res) => {
    const prayers = req.body["prayers"];
    const title = prayers["title"];
    const contents = prayers.contents;

    const prettyContents = JSON.stringify(contents, null, 2);
    console.log("title=" + title);
    console.log("contents=" + prettyContents);

    const message = db.get("prayersUpdateMessage").value();
    return res.json(message);
  });
};

module.exports = prayersRoutes;
