// Example from: https://dojotoolkit.org/documentation/tutorials/1.10/beyond_dojo/index.html
var parser = require("dojo/parser");

require("dijit/form/TextBox");
require("dijit/form/DateTextBox");
require("dijit/form/FilteringSelect");
require("dijit/form/Form");
require("dijit/form/Button");

var dojoRequire = require("webpack-loader-dojo/lib/dojo-require");
dojoRequire.register("dojo/store/JsonRest", require("dojo/store/JsonRest"));

parser.parse();
