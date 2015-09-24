Router.configure({
	layoutTemplate: "app",
	loadingTemplate: "loading"
});

Router.onBeforeAction(function(pause) {
	if(!this.ready()) {
		this.render("loading");
		pause();
	}
	else {
		this.next();
	}
});

Router.route('/', {
	name: 'home',
	action: function() {
		this.redirect('/dashboard');
	}
});

Router.route('/profile', {
	name: 'profile',
	action: function() {
		if(!Meteor.user()) {
			this.redirect('/');
		}
		this.render('profile');
	}
});

Router.route('/dashboard', {
	name: 'dashboard',
	action:	function() {
		this.render('dashboard_content');
	}
});

Router.route('/notification_list', {
	name: 'notification_list',
	action: function() {
		this.render('notification_list');
	}
})
