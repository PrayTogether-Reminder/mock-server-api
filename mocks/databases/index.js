const roomsData = require("./domains/rooms")();
const prayerTitlesData = require("./domains/prayerTitles")();
const roomMembersData = require("./domains/roomMembers")();
const roomInvitationMessage = require("./domains/roomInvitations")();
const prayersMessage = require("./domains/prayers")();
const prayersContents = require("./domains/prayerContents")();

module.exports = () => {
  return {
    rooms: roomsData.rooms,
    prayerTitles: prayerTitlesData.prayerTitles,
    roomMembers: roomMembersData.members,
    roomInvitationMessage: { message: roomInvitationMessage.message },
    prayersMessage: { message: prayersMessage.message },
    prayersContents: prayersContents.prayerContents,
  };
};
