Meteor.users.deny({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.users.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false; 
  }
});


Notifications.deny({
  insert: function(){
    return true;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return true;
  }
});

Notifications.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});
