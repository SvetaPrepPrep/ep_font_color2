var eejs = require('ep_etherpad-lite/node/eejs/');
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_font_color2/templates/editbarButtons.ejs");
  return cb();
}

exports.eejsBlock_dd_format = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_font_color2/templates/fileMenu.ejs");
  return cb();
}
