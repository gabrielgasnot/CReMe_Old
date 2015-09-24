Meteor.publish("Messages", function() {
  return Messages.find({
    mail_to_user_id: this.userId
  });
});

Meteor.publish("Notifications", function() {
  return Notifications.find({
    $or: [
      {notification_to_user_id: this.userId},
      {notification_to_user_id: {$exists: false}},
      {notification_to_user_id: null}
    ]
  }, {sort: {notification_date: -1}});
});

Meteor.publish("Tasks", function() {
  return Tasks.find({
    task_to_user_id: this.userId
  });
});

// Meteor.publish("Ressources", function() {
//   return Ressources.find({});
// });

Meteor.publish("Avatars", function() {
  return Ressources.find({
    ressource_type: "avatar"
  });
});
