var MenuItemDetails = Backbone.View.extend({
	initialize: function(options) {
      this.options = options;
    },
    
	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{category}}</span></p>' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'</div>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}
});