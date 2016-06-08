var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"categories/:category": "categoryDetails",
		"orders/:item" : "orderItem"
	},
	
	initialize: function  () {
		this.menuItems = new MenuItems();
		this.menuItems.fetch();

		this.orderedItems = new MenuItems();

		this.ordersView = new OrdersView({collection: this.orderedItems});

		this.menuItemForm = new MenuItemForm({model: new MenuItem()});

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
		
		$('#app').html(this.menuItemForm.render().el);
	},

	categoryDetails: function  (category) {
		this.menuCategoryView.options.category = category;
		$('#app').html(this.menuCategoryView.render().el);
	},

	itemDetails: function (item) {
		console.log(this.menuItems.get(item));
		this.menuItemView.model = this.menuItems.get(item);
		
		$('#app').html(this.menuItemView.render().el);
	},

	orderItem: function (item) {
		var menuItem = this.menuItems.get(item);
		this.orderedItems.add(menuItem);

		$('#app').html(this.ordersView.render().el);
	},
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
});