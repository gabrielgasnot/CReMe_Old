Meteor.publish("Messages", function() {
  return Messages.find({
    mail_to_user_id: this.userId
  });
});

Meteor.publish("Notifications", function() {
  return Notifications.find({});
});

Meteor.publish("Tasks", function() {
  return Tasks.find({});
});

// Meteor.publish("Ressources", function() {
//   return Ressources.find({});
// });

Meteor.publish("Avatars", function() {
  return Ressources.find({
    ressource_type: "avatar"
  });
});
