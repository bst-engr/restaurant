var MenuView = Backbone.View.extend({
	
	initialize: function(options) {
      this.options = options;
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.render);
      this.listenTo(this.collection, 'remove', this.render);
    },

	template: Handlebars.compile(
		'<ul>' + 
		'{{#each models}}<li>{{attributes.name}}</li>{{/each}}' +
		'</ul>'
	),

	render: function () {
		console.log(this.collection)
		this.$el.html(this.template(this.collection));
		return this;
	}

});