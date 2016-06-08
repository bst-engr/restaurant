var OrdersView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>Ordered Items</h1>' +
		'{{#each models}}' +
		'<img src="photos/{{attributes.imagepath}}" class="img-polaroide" />'+
		'{{/each}}'
	),

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});