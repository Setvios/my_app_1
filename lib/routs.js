FlowRouter.route('/admin', {
	name: 'admin',
	action () {
		BlazeLayout.render('adminLayout');
	}
});

FlowRouter.route('/', {
	name: 'home',
	action () {
		BlazeLayout.render('homeLayout');
	}
});