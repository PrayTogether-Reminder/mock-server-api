const roomsData = require("./domains/rooms")();
const prayerTitlesData = require("./domains/prayerTitles")();
const roomMembersData = require("./domains/roomMembers")();
const roomInvitationMessage = require("./domains/roomInvitations")();
const prayersCreationMessage = require("./domains/prayerCreation")();
const prayersUpdateMessage = require("./domains/prayerUpdate")();
const prayersContents = require("./domains/prayerContents")();
const prayerCompletionMessage = require("./domains/prayerCompletion")();
const roomCreationMessage = require("./domains/roomCreation")();
const roomDeletionMessage = require("./domains/roomDeletion")();
const profileData = require("./domains/profile")();
const invitationsData = require("./domains/invitations")();
const invitationAcceptMessage = require("./domains/invitationAccept")();
const invitationRejectMessage = require("./domains/invitationReject")();

module.exports = () => {
  return {
    rooms: roomsData.rooms,
    prayerTitles: prayerTitlesData.prayerTitles,
    roomMembers: roomMembersData.members,
    roomInvitationMessage: { message: roomInvitationMessage.message },
    prayersCreationMessage: { message: prayersCreationMessage.message },
    prayersUpdateMessage: { message: prayersUpdateMessage.message },
    prayersContents: prayersContents.prayerContents,
    prayerCompletionMessage: { message: prayerCompletionMessage.message },
    roomCreationMessage: { message: roomCreationMessage.message },
    roomDeletionMessage: { message: roomDeletionMessage.message },
    profileData: {
      id: profileData.id,
      name: profileData.name,
      email: profileData.email,
    },
    invitations: invitationsData.invitations,
    invitationAcceptMessage: { message: invitationAcceptMessage.message },
    invitationRejectMessage: { message: invitationRejectMessage.message },
  };
};
