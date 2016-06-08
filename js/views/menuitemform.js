var MenuItemForm = Backbone.View.extend({

	template: Handlebars.compile(
		'<form class="form-horizontal">' +
			'<fieldset>' +
				'<legend>New Menu Item</legend>' +
				'<div class="control-group">' +
					'<input type="text" name="name" placeholder="Name" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="category" placeholder="Category" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="url" placeholder="URL" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="imagepath" placeholder="Path to image" />' +
				'</div>' +
				'<button type="button" class="btn btn-danger">Cancel</button>' +
				'<button type="button" class="btn btn-primary">Save</button>' +
			'</fieldset>' +
		'</form>'
	),

	render: function  () {
		this.$el.html(this.template());
		this.delegateEvents({
			'click .btn-primary': 'save'
		});
		return this;
	},

	save: function () {
		this.setModelData();

		this.model.save(this.model.attributes, 
			{
				success: function (model) {

					app.menuItems.add(model);
					app.navigate('menu-items/' + model.get('url'), {trigger: true});
					
				}
			}
		);
	},

	setModelData: function  () {
		this.model.set({
			name: this.$el.find('input[name="name"]').val(),
			category: this.$el.find('input[name="category"]').val(),
			url: this.$el.find('input[name="url"]').val(),
			id: null,
			imagepath: this.$el.find('input[name="imagepath"]').val()
		});
	}

});