/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var UnwatchedDir = require('broccoli-source').UnwatchedDir;
var mergeTrees = require('broccoli-merge-trees');

var relativeFormatPath = path.dirname(require.resolve('intl-relativeformat'));

module.exports = {
  name: 'intl-relativeformat',

  treeForAddon: function(tree) {
    var messageFormatParserTree = new Funnel(new UnwatchedDir(path.join(relativeFormatPath, 'src')));
    var trees = mergeTrees([messageFormatParserTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, trees);
  }
};
