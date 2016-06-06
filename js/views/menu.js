var MenuView = Backbone.View.extend({
	
	initialize: function(options) {
      this.options = options;
    },

	template: Handlebars.compile(
		'<ul>' + 
		'{{#each items}}<li>{{this}}</li>{{/each}}' +
		'</ul>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}

});