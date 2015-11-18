var app = app || {};

(function()
{
	var AppRouter = Backbone.Router.extend({
	    routes: {
	        "list/:id": "renderList",
	        "list/add/": "addList",
	        "list/:id/addTask/": "addTask",
	        "settings/": 'settings',
	        "task/update/:id": "updateTask",
	        "list/update/:id": "updateList"
	    }
	});
	
	// Initiate the router
	app.router = new AppRouter();

	app.router.on('route:renderList', function(id) 
	{	
		if(typeof app.FrmReadTask !== 'undefined'){app.FrmReadTask.close()}
		app.FrmReadTask = new app.ReadTask({listId: id, model: app.Tasks});
	});

	app.router.on('route:addList', function()
	{
		if(typeof app.FrmCreate !== 'undefined'){app.FrmCreate.close()}
		app.FrmCreate = new app.CreateList({model: app.ListModel, modelName: 'List'});
	});

	app.router.on('route:addTask', function(id)
	{
		if(typeof app.FrmCreate !== 'undefined'){app.FrmCreate.close()}
		app.FrmCreate = new app.CreateTask({model: app.TaskModel, listId:id, modelName: 'Task'});

	});

	app.router.on('route:updateTask', function(id)
	{
		if(typeof app.FrmUpdate !== 'undefined'){ app.FrmUpdate.close();}
		app.FrmUpdate = new app.UpdateTask({modelId: id, model: app.List});
	});

	app.router.on('route:updateList', function(id)
	{
		if(typeof app.FrmUpdate !== 'undefined'){ app.FrmUpdate.close();}

		app.FrmUpdate =new app.UpdateList({modelId: id, model: app.List});
	});

	Backbone.history.start();
})();