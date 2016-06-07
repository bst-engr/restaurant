var MenuItem = Backbone.Model.extend({
	//urlRoot: 'http://localhost:3000/items',
	urlRoot: 'http://localhost/backbone/api/public/items',
	defaults:{
		category: 'entree',
		imagepath: 'no-image.jpg',
		name: ''
	}
});