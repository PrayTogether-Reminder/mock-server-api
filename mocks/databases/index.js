const roomsData = require("./domains/rooms")();
const prayerTitlesData = require("./domains/prayerTitles")();

module.exports = () => {
  return {
    rooms: roomsData.rooms,
    prayerTitles: prayerTitlesData.prayerTitles,
  };
};
