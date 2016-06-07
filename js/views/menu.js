var MenuView = Backbone.View.extend({
	
	initialize: function(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
    },

	template: Handlebars.compile(
		'<ul>' + 
		'{{#each items}}<li>{{this}}</li>{{/each}}' +
		'</ul>'
	),

	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}

});