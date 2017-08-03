/* jshint node: true */
'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

const relativeFormatPath = path.dirname(require.resolve('intl-relativeformat'));

module.exports = {
  name: 'intl-relativeformat',

  treeForAddon(tree) {
    const relativeFormatTree = new UnwatchedDir(path.join(relativeFormatPath, 'src'));
    const addonTree = mergeTrees([relativeFormatTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, addonTree);
  }
};
