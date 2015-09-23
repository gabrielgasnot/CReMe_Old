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
    var avatar = $('.selected-thumbnail').children('img').attr('src');
    Meteor.call("updateProfile", {
      'name': inputName.value,
      'firstname': inputFirstname.value,
      'job': inputJob.value,
      'avatar': avatar
    }, function(error, result){
      if(error){
        FlashMessages.sendError(err.message);
        console.log("error", error);
      }
      if(result){
         FlashMessages.sendSuccess('Profil mis à jour.', { autoHide: true, hideDelay: 3000 });
      }
    });
  }
});
