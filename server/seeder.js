Meteor.startup(function() {
  Messages.remove({});
  Notifications.remove({});
  Tasks.remove({});
  Meteor.users.remove({});
  Ressources.remove({});

  var date = new Date();
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // Main user
  var user = {
    username: "admin@creme.com",
    email: "admin@creme.com",
    password: "admin",
    profile: {
      name: "GASNOT",
      firstname: "Gabriel",
      job: "Web Developer",
      avatar: "img/avatar5.png",
      created_at: yesterday
    }
  };

  Accounts.createUser(user);
  user._id = Meteor.users.findOne({ username: user.username})._id;

  // Messages
  var messages = [{
    mail_sender_avatar: "img/avatar3.png",
    mail_sender: "Support Team",
    mail_object: "Why not buy a new awesome theme ?",
    mail_date: new Date('2015-07-29T23:16:00'),
    mail_to_user_id: user._id
  }, {
    mail_sender_avatar: "img/avatar2.png",
    mail_sender: "AdminLTE Design Team",
    mail_object: "I suggest you this new theme",
    mail_date: new Date('2015-07-29T10:00:00'),
    mail_to_user_id: user._id
  }, {
    mail_sender_avatar: "img/avatar.png",
    mail_sender: "Developers",
    mail_object: "Ticket #6138",
    mail_date: new Date('2015-07-29T09:30:00'),
    mail_to_user_id: user._id
  }, {
    mail_sender_avatar: "img/avatar.png",
    mail_sender: "Developers",
    mail_object: "Ticket #6139",
    mail_date: new Date('2015-07-29T09:31:00'),
    mail_to_user_id: user._id
  }, {
    mail_sender_avatar: "img/avatar.png",
    mail_sender: "Developers",
    mail_object: "Ticket #6140",
    mail_date: new Date('2015-07-29T09:45:00'),
    mail_to_user_id: ""
  }, {
    mail_sender_avatar: "img/avatar3.png",
    mail_sender: "Sales Department",
    mail_object: "Result 1st Quarter 2015",
    mail_date: new Date('2015-07-28T09:00:00'),
    mail_to_user_id: user._id
  }];

  _.each(messages, function(message) {
    Messages.insert(message);
  });

  // Notifications
  var notifications = [{
    notification_level: "people_info",
    notification_message: "5 new members joined today",
    notification_date: new Date('2015-07-29T09:45:00'),
    notification_read: false
  }, {
    notification_level: "danger",
    notification_message: "Very long description here that may not fit into the page and may cause design problems",
    notification_date: new Date('2015-08-29T09:45:00'),
    notification_read: false,
    notification_to_user_id: user._id
  }, {
    notification_level: "warning",
    notification_message: "5 new members joined",
    notification_date: new Date('2015-09-19T09:45:00'),
    notification_read: false,
    notification_to_user_id: user._id
  }, {
    notification_level: "cart_success",
    notification_message: "25 sales made",
    notification_date: new Date('2015-09-21T09:45:00'),
    notification_read: false,
    notification_to_user_id: user._id
  }, {
    notification_level: "person_danger",
    notification_message: "You changed your username",
    notification_date: new Date('2015-08-25T09:45:00'),
    notification_read: false,
    notification_to_user_id: user._id
  }, ];

  _.each(notifications, function(notification) {
    Notifications.insert(notification);
  });

  // Tasks
  var tasks = [{
    task_name: "Add the tasks",
    task_percentage_completion: 100,
    task_to_user_id: user._id
  }, {
    task_name: "Design some buttons",
    task_percentage_completion: 20,
    task_to_user_id: user._id
  }, {
    task_name: "Create a nice theme",
    task_percentage_completion: 40,
    task_to_user_id: user._id
  }, {
    task_name: "Some task I need to do",
    task_percentage_completion: 60,
    task_to_user_id: user._id
  }, {
    task_name: "Make beautiful transitions",
    task_percentage_completion: 75,
    task_to_user_id: user._id
  }, {
    task_name: "Adapt theme to Meteor",
    task_percentage_completion: 10,
    task_to_user_id: user._id
  }, ];

  _.each(tasks, function(task) {
    Tasks.insert(task);
  });

  //Ressources
  var ressources = [{
    ressource_type: "avatar",
    ressource_value: "img/avatar.png",
    ressource_name: "Default avatar"
  },{
    ressource_type: "avatar",
    ressource_value: "img/avatar0.png",
    ressource_name: "Avatar 0"
  },{
    ressource_type: "avatar",
    ressource_value: "img/avatar04.png",
    ressource_name: "Avatar 04"
  },{
    ressource_type: "avatar",
    ressource_value: "img/avatar2.png",
    ressource_name: "Avatar 2"
  },{
    ressource_type: "avatar",
    ressource_value: "img/avatar3.png",
    ressource_name: "Avatar 3"
  },{
    ressource_type: "avatar",
    ressource_value: "img/avatar5.png",
    ressource_name: "Avatar 5"
  },{
    ressource_type: "user",
    ressource_value: "img/user.jpg",
    ressource_name: "User Pic"
  }];

  _.each(ressources, function(ressource) {
    Ressources.insert(ressource);
  });
});
