var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"categories/:category": "categoryDetails"
	},
	
	initialize: function  () {
		this.menuItems = new MenuItems();
		this.menuItems.fetch();

		this.menuItemModel = new MenuItem();
		this.menuItemView = new MenuItemDetails(
			{ 
				model: this.menuItemModel 
			}
		);
		this.menuView = new MenuView({collection: this.menuItems});

		this.menuCategoryView = new MenuCategoryView(
			{
				category: 'Entreé',
				images: [
					"carrots.jpg",
					"green-beans.jpg",
					"mashed-potatoes.jpg"
				]
			}
		);
	},

	list: function () {
		
		$("#app").html(this.menuView.render().el);
	},

	itemForm: function () {
		
		$("#app").html("item Form");
	},

	categoryDetails: function  (category) {
		this.menuCategoryView.options.category = category;
		$('#app').html(this.menuCategoryView.render().el);
	},

	itemDetails: function (item) {
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
});