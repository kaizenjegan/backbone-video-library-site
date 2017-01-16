define(["handlebars.runtime"],function(n){n=n["default"];var e=n.template,l=n.templates=n.templates||{};return l["add-video.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){return'<form>\n  <fieldset class="form-group">\n    <label for="exampleInputEmail1">Title</label>\n    <input class="form-control" id="vid-title" placeholder="title">\n  </fieldset>\n  <fieldset class="form-group">\n    <label for="exampleInputEmail1">Image Url</label>\n    <input class="form-control" id="vid-img-url" placeholder="Image url">\n  </fieldset>\n  <fieldset class="form-group">\n    <label for="exampleInputEmail1">Video url</label>\n    <input class="form-control" id="vid-url" placeholder="Video url">\n  </fieldset>\n  <fieldset class="form-group">\n    <label for="exampleInputEmail1">Description</label>\n    <textarea class="form-control" id="vid-description" placeholder="description">\n    </textarea>\n  </fieldset>\n  <button type="submit" id="AddVid" class="btn btn-primary"> Add Video </button>\n</form>'},useData:!0}),l["alerts.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i;return"<strong>Info! </strong>"+n.escapeExpression((i=null!=(i=l.message||(null!=e?e.message:e))?i:l.helperMissing,"function"==typeof i?i.call(null!=e?e:{},{name:"message",hash:{},data:t}):i))+"	 "},useData:!0}),l["delete-video.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i;return"<p> are u sure you want to delete "+n.escapeExpression(n.lambda(null!=(i=null!=e?e.video:e)?i.title:i,e))+'? </p>\n\n<button id="yes">Yes</button> <button id="no">No</button>'},useData:!0}),l["list-video.hbs"]=e({1:function(n,e,l,a,t){var i,o,s=null!=e?e:{},r=l.helperMissing,u="function",d=n.escapeExpression;return'    <div class="card">\n	    <a href="#/view/'+d((o=null!=(o=l._id||(null!=e?e._id:e))?o:r,typeof o===u?o.call(s,{name:"_id",hash:{},data:t}):o))+'">\n'+(null!=(i=l["if"].call(s,null!=e?e.cover:e,{name:"if",hash:{},fn:n.program(2,t,0),inverse:n.program(4,t,0),data:t}))?i:"")+"	    </a>\n		<p> "+d((o=null!=(o=l.name||(null!=e?e.name:e))?o:r,typeof o===u?o.call(s,{name:"name",hash:{},data:t}):o))+"</p>\n    </div>\n"},2:function(n,e,l,a,t){var i;return'	        <img src="'+n.escapeExpression((i=null!=(i=l.cover||(null!=e?e.cover:e))?i:l.helperMissing,"function"==typeof i?i.call(null!=e?e:{},{name:"cover",hash:{},data:t}):i))+"\" class='poster'/>\n"},4:function(n,e,l,a,t){return"	    	<img src=\"img/placeholder.png\" class='poster'/>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i,o,s=null!=e?e:{};return'<div class="row">\n'+(null!=(i=l.each.call(s,null!=e?e.videos:e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:"")+'</div>\n<div>\n<!--span id="next">Page '+n.escapeExpression((o=null!=(o=l.limit||(null!=e?e.limit:e))?o:l.helperMissing,"function"==typeof o?o.call(s,{name:"limit",hash:{},data:t}):o))+" </span-->\n</div>\n"},useData:!0}),l["logged-out.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){return'<div class="signup">\n\n  <div><a href="/auth/twitter"> Twitter login</a></div>\n  <div><a href="/auth/facebook"> Facebook login</a></div>\n  <div><a href="/auth/google"> Google login</a></div>\n  <br />\n  <div>\n    <a href="#" id="login"> login </a> / <a href="#" id="signup">signup page</a>\n  </div>\n\n\n  <div id="login" />\n  <div id="signup" />\n </div>'},useData:!0}),l["login.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){return'<div class="form-group">\n	 <input type="text" class="form-control username" placeholder="username">\n	<input type="text" class="form-control password" placeholder="password">\n</div>\n\n<button id="btn-login"> login </button>'},useData:!0}),l["navigation.hbs"]=e({1:function(n,e,l,a,t){return'		<a href="#/AddTorrent"> Add Torrent</a> |\n		<a href="#/users"> Users </a> |\n'},compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i,o,s=null!=e?e:{};return'<label class="username"> '+n.escapeExpression((o=null!=(o=l.name||(null!=e?e.name:e))?o:l.helperMissing,"function"==typeof o?o.call(s,{name:"name",hash:{},data:t}):o))+' </label>\n<div id="header">\n	<a href="#/home"> Home </a> |\n'+(null!=(i=l["if"].call(s,null!=e?e.isAdmin:e,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:"")+'	<a href="#/addVideo"> Post Video </a> |\n	<!-- <input id="search" type="text"  placeholder="Search"> -->\n	<!-- <button id="btn-search"> search </button>			 -->\n	<a href="/users/logout"> Logout </a> \n</div>	'},useData:!0}),l["not-approved.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i;return"<div>"+n.escapeExpression((i=null!=(i=l.message||(null!=e?e.message:e))?i:l.helperMissing,"function"==typeof i?i.call(null!=e?e:{},{name:"message",hash:{},data:t}):i))+"</div>"},useData:!0}),l["search-results.hbs"]=e({1:function(n,e,l,a,t){var i,o=null!=e?e:{},s=l.helperMissing,r="function",u=n.escapeExpression;return"                <div>"+u((i=null!=(i=l.Title||(null!=e?e.Title:e))?i:s,typeof i===r?i.call(o,{name:"Title",hash:{},data:t}):i))+' </div>\n                <div><img src="'+u((i=null!=(i=l.Poster||(null!=e?e.Poster:e))?i:s,typeof i===r?i.call(o,{name:"Poster",hash:{},data:t}):i))+'" /></div>\n                <div> <b><u>Plot<u></b></div>\n                <label> '+u((i=null!=(i=l.Plot||(null!=e?e.Plot:e))?i:s,typeof i===r?i.call(o,{name:"Plot",hash:{},data:t}):i))+' </label>\n                <button id="download"> Request Future Download </button>\n'},compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i;return null!=(i=l.each.call(null!=e?e:{},null!=e?e.videos:e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:""},useData:!0}),l["show-video.hbs"]=e({1:function(n,e,l,a,t){var i,o=null!=e?e:{},s=l.helperMissing,r="function",u=n.escapeExpression;return' <video id="flix_video" controls  class="video-js vjs-default-skin" preload="auto">\n    <source src="'+u((i=null!=(i=l.link||(null!=e?e.link:e))?i:s,typeof i===r?i.call(o,{name:"link",hash:{},data:t}):i))+'" type="video/mp4">\n    <source src="'+u((i=null!=(i=l.link||(null!=e?e.link:e))?i:s,typeof i===r?i.call(o,{name:"link",hash:{},data:t}):i))+'" type="video/ogg">\n    <p class="vjs-no-js">To view this video please enable JavaScript </p>\n  </video>\n  <p><strong>title</strong></p>\n  <p> '+u((i=null!=(i=l.name||(null!=e?e.name:e))?i:s,typeof i===r?i.call(o,{name:"name",hash:{},data:t}):i))+" </p>\n"},3:function(n,e,l,a,t){return' 	<div><button id="delete"> delete </button></div>\n'},compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i,o=null!=e?e:{};return"<h2>"+n.escapeExpression(n.lambda(null!=(i=null!=e?e.video:e)?i.title:i,e))+"</h2>\n"+(null!=(i=l.each.call(o,null!=(i=null!=e?e.video:e)?i.location:i,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:"")+"\n"+(null!=(i=l["if"].call(o,null!=e?e.isAdmin:e,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t}))?i:"")},useData:!0}),l["signup.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){return'<div class="form-group">\n	<input type="text" class="form-control displayName" placeholder ="displayName">\n	<input type="text" class="form-control username" placeholder="username">\n	<input type="text" class="form-control password" placeholder="password">\n	<input type="text" class="form-control reentry" placeholder="confirm password">\n</div>\n\n<button id="btn-signup"> signup </button>'},useData:!0}),l["user.hbs"]=e({1:function(n,e,l,a,t){var i,o=null!=e?e:{},s=l.helperMissing,r="function",u=n.escapeExpression;return"	<tr>\n		<td> "+u((i=null!=(i=l.username||(null!=e?e.username:e))?i:s,typeof i===r?i.call(o,{name:"username",hash:{},data:t}):i))+" </td>\n		<td> "+u((i=null!=(i=l.displayName||(null!=e?e.displayName:e))?i:s,typeof i===r?i.call(o,{name:"displayName",hash:{},data:t}):i))+" </td>\n		<td> "+u((i=null!=(i=l.createdDateTime||(null!=e?e.createdDateTime:e))?i:s,typeof i===r?i.call(o,{name:"createdDateTime",hash:{},data:t}):i))+" </td>\n		<td> "+u((i=null!=(i=l.role||(null!=e?e.role:e))?i:s,typeof i===r?i.call(o,{name:"role",hash:{},data:t}):i))+" </td>\n		<td> "+u((i=null!=(i=l.isApproved||(null!=e?e.isApproved:e))?i:s,typeof i===r?i.call(o,{name:"isApproved",hash:{},data:t}):i))+" </td>\n	</tr>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i;return"<table>\n	<tr>\n		<th>username</th>\n		<th>displayName</th>\n		<th>created on</th>\n		<th>role</th>\n		<th>approved</th>\n	</tr>\n<tbody>\n"+(null!=(i=l.each.call(null!=e?e:{},null!=e?e.users:e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?i:"")+"</tbody>\n\n</table>"},useData:!0}),l["watch-torrent.hbs"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,l,a,t){var i,o=null!=e?e:{},s=l.helperMissing,r="function",u=n.escapeExpression;return'<div id="">\n	<video id="flix_video" width="320" height="240" controls  class="video-js vjs-default-skin" preload="auto">\n		<source src="'+u((i=null!=(i=l.url||(null!=e?e.url:e))?i:s,typeof i===r?i.call(o,{name:"url",hash:{},data:t}):i))+'" type="video/mp4">\n		<source src="'+u((i=null!=(i=l.url||(null!=e?e.url:e))?i:s,typeof i===r?i.call(o,{name:"url",hash:{},data:t}):i))+'" type="video/ogg">\n		<p class="vjs-no-js">To view this video please enable JavaScript </p>\n	</video>\n</div>'},useData:!0}),l});