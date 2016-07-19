define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\n	 <input type=\"text\" class=\"form-control username\" placeholder=\"username\">\n	<input type=\"text\" class=\"form-control password\" placeholder=\"password\">\n</div>\n\n<button id=\"btn-login\"> login </button>";
},"useData":true});
templates['navigation.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "		<a href=\"#/AddTorrent\"> Add Torrent</a> |\n		<a href=\"#/users\"> Users </a> |\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<label class=\"username\"> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </label>\n<div id=\"header\">\n	<a href=\"#/home\"> Home </a> |\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAdmin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<a href=\"#/addVideo\"> Post Video </a> |\n	<!-- <input id=\"search\" type=\"text\"  placeholder=\"Search\"> -->\n	<!-- <button id=\"btn-search\"> search </button>			 -->\n	<a href=\"/users/logout\"> Logout </a> \n</div>	";
},"useData":true});
templates['test.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['userList.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<tr>\n		<td> "
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + " </td>\n		<td> "
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + " </td>\n		<td> "
    + alias4(((helper = (helper = helpers.createdDateTime || (depth0 != null ? depth0.createdDateTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createdDateTime","hash":{},"data":data}) : helper)))
    + " </td>\n		<td> "
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + " </td>\n		<td> "
    + alias4(((helper = (helper = helpers.isApproved || (depth0 != null ? depth0.isApproved : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isApproved","hash":{},"data":data}) : helper)))
    + " </td>\n	</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table id=\"users\">\n	<tr>\n		<th>username</th>\n		<th>displayName</th>\n		<th>created on</th>\n		<th>role</th>\n		<th>approved</th>\n	</tr>\n<tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>\n\n</table>";
},"useData":true});
return templates;
});