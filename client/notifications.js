Template.notifications_menu.helpers({
  notifications: Notifications.find({ notification_read: false }, {sort: {notification_date: -1}})
});


Template.notification_list.helpers({
  notifications: Notifications.find({}, {sort: {notification_date: -1}})
});

Template.notification.events({
  "click a": function(event, template){
    event.preventDefault();
    event.stopPropagation();

     var notification_id = event.target.id;

     Notifications.update({ _id:notification_id }, {$set:{
       notification_read: true
     }});
  }
});
