const roomsData = require("./domains/rooms")();
const prayerTitlesData = require("./domains/prayerTitles")();
const roomMembersData = require("./domains/roomMembers")();
const roomInvitationMessage = require("./domains/roomInvitations")();
const prayersCreationMessage = require("./domains/prayerCreation")();
const prayersUpdateMessage = require("./domains/prayerUpdate")();
const prayersContents = require("./domains/prayerContents")();

module.exports = () => {
  return {
    rooms: roomsData.rooms,
    prayerTitles: prayerTitlesData.prayerTitles,
    roomMembers: roomMembersData.members,
    roomInvitationMessage: { message: roomInvitationMessage.message },
    prayersCreationMessage: { message: prayersCreationMessage.message },
    prayersUpdateMessage: { message: prayersUpdateMessage.message },
    prayersContents: prayersContents.prayerContents,
  };
};
