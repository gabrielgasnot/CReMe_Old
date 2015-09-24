Meteor.methods({
  updateProfile:function(profile){
    if(profile === undefined) {
      return;
    }

    var current_user = Meteor.users.findOne({_id: this.userId});

    var name = (profile.name) !== undefined && profile.name !== '' ? profile.name : current_user.profile.name;
    var firstname = (profile.firstname) !== undefined && profile.firstname !== '' ? profile.firstname : current_user.profile.firstname;
    var job = (profile.job) !== undefined && profile.job !== '' ? profile.job : current_user.profile.job;
    var avatar = (profile.avatar) !== undefined && profile.avatar !== '' ? profile.avatar : current_user.profile.avatar;

    var result = Meteor.users.update({_id: this.userId}, {
      $set: {
        'profile.name': name,
        'profile.firstname': firstname,
        'profile.job': job,
        'profile.avatar': avatar
      }
    });

    if(result){
      result = Notifications.insert({
          notification_level: "people_info",
          notification_message: "Profile updated",
          notification_date: new Date(),
          notification_read: false,
          notification_to_user_id: this.userId
      });
    }

    return result;
  }
});
