const roomsData = require("./domains/rooms")();
const prayerTitlesData = require("./domains/prayerTitles")();
const roomMembersData = require("./domains/roomMembers")();

module.exports = () => {
  return {
    rooms: roomsData.rooms,
    prayerTitles: prayerTitlesData.prayerTitles,
    roomMembers: roomMembersData.members,
  };
};
