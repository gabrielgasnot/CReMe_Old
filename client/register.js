Template.register_menu.events({
  'click form': function(event){
    event.stopPropagation();
  },
  'click #signin': function() {
    $("#register_menu_login_form").submit();
  },
  'keydown #register_menu_login_form': function(event) {
    if(event.keyCode == 13) {
      $("#register_menu_login_form").submit();
    }
  },
  'submit #register_menu_login_form': function(event, formvalues) {
    event.preventDefault();
    event.stopPropagation();
    var input_username = formvalues.find("#user_email");
    var input_userpassword = formvalues.find("#user_password");
    var username = input_username.value;
    var userpassword = input_userpassword.value;
    $(input_username).parents(".form-group").removeClass("has-error");
    $(input_userpassword).parents(".form-group").removeClass("has-error");
    errorLogin = "";
    Meteor.loginWithPassword(username, userpassword, function(err) {
      $(input_username).parents(".form-group").addClass("has-error");
      $(input_userpassword).parents(".form-group").addClass("has-error");
      if(err) {
        errorLogin = err.reason;
      }
    });

    return false;
  }
});
