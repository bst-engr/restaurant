var MenuView = Backbone.View.extend({
	
	initialize: function(options) {
      this.options = options;
      this.listenTo(this.collection, 'reset', this.render);
      this.listenTo(this.collection, 'add', this.render);
      this.listenTo(this.collection, 'remove', this.render);
    },

	template: Handlebars.compile(
		'<ul>' + 
		'{{#each models}}<li><a href="#/orders/{{attributes.url}}">{{attributes.name}}</a></li>{{/each}}' +
		'</ul>'
	),

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});