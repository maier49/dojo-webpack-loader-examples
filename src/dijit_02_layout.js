// Example from: https://dojotoolkit.org/documentation/tutorials/1.10/dijit_layout/index.html

var parser = require("dojo/parser");

// All dijit classes will be registered in webpack-loader-dojo/lib/dojo-require automatically
require("dijit/layout/BorderContainer");
require("dijit/layout/TabContainer");
require("dijit/layout/ContentPane");

parser.parse();
