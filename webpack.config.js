var webpack = require("webpack");
var path = require("path");

var entry_list = [
    "dojo_01_animation",
    "dojo_02_topic",
    "dojo_03_keyboard",
    "dojo_04_request",
    "dijit_01_key_nav",
    "dijit_02_layout",
    "dijit_03_form",
    "dijit_04_menus",
    "dijit_05_templated",
    "dgrid_01_hello",
    "dgrid_02_stores",
    "dgrid_03_col_set",
    "dgrid_04_comp_col",
    "dgrid_05_single_query",
    "dgrid_06_summary_row",
    "dgrid_07_dropdown"
];
var entry = {};
entry_list.forEach(function(e) { entry[e] = path.resolve(__dirname, "./src/" + e) });

module.exports = {
    entry: entry,
    resolve: {
        alias: {
            "dojo": path.resolve(__dirname, './dojo/dojo'),
            "dstore": path.resolve(__dirname, './dojo/dstore'),
            "dijit": path.resolve(__dirname, './dojo/dijit'),
            "dgrid": path.resolve(__dirname, './dojo/dgrid')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ {
					loader: "webpack-loader-dojo",
					options: {
						// We should specify paths to core and dijit modules because we using both
						dojoCorePath: path.resolve(__dirname, './dojo/dojo/'),
						dojoDijitPath: path.resolve(__dirname, './dojo/dijit/'),

						// Languages for dojo/nls module which will be in result pack.
						includeLanguages: [ 'en', 'ru', 'fr' ]
					}
				} ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bundle/'),
        publicPath: "bundle/",
        filename: "[name].bundle.js"
    }

};
