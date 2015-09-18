Template.user_menu.events({
  'click #signout': function(event) {
    event.preventDefault();
    Meteor.logout(function() {
      console.log("Logged out.");
    });
  }
});

Template.profile.helpers({
  avatars: Ressources.find({}),
  isSelectedAvatar: function (avatar_adresse) {
    return avatar_adresse == Meteor.user().profile.avatar;
  }
});

Template.profile.events({
  'click a.thumbnail': function(event) {
    $('.selected-thumbnail').removeClass('selected-thumbnail');
    $(event.target.parentNode).addClass('selected-thumbnail');
  },
  'click #submit': function(event) {
    Meteor.users.update({_id:Meteor.user()._id}, {
      $set:{
        'profile.name': inputName.value,
        'profile.firstname': inputFirstname.value,
        'profile.job': inputJob.value
      }
    },
  function(err) {
    if(err) {
      FlashMessages.sendError(err.Message);
    }
    else {
      FlashMessages.sendSuccess('Profil mis à jour.', { autoHide: true, hideDelay: 3000 });
    }
  });
  }
});
