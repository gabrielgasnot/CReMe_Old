Template.registerHelper("dateAgeFromNow", function(date_to_evaluate) {
  return moment(date_to_evaluate).fromNow();
});

Template.registerHelper("dateMomentFormat", function(date_to_format){
  return moment(date_to_format).format("DD/MM/YYYY");
});

Template.registerHelper("classFromNotificationLevel", function(level) {
  var cssClass = "";
  switch (level) {
    case "warning":
      cssClass = "fa fa-users warning";
      break;
    case "danger":
      cssClass = "fa fa-warning danger";
      break;
    case "cart_success":
      cssClass = "ion ion-ios7-cart success";
      break;
    case "people_info":
      cssClass = "ion ion-ios7-people info";
      break;
    case "person_danger":
      cssClass = "ion ion-ios7-person danger";
      break;
    default:
      cssClass = "";
      break;
  }

  return cssClass;
});
