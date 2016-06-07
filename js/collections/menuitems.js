var MenuItems = Backbone.Collection.extend({
	model:MenuItem,
	//comparator : 'name',
	url : 'http://localhost/backbone/api/public/items',

	comparator : function(a,b){
		if(a.get('name') < b.get('name')){
			return 1;
		} else{
			return -1;
		}
	},
});