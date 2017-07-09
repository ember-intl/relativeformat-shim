/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

const relativeFormatPath = path.dirname(require.resolve('intl-relativeformat'));

module.exports = {
  name: 'intl-relativeformat',

  treeForAddon(tree) {
    const relativeFormatTree = new Funnel(new UnwatchedDir(path.join(relativeFormatPath, 'src')));
    const trees = mergeTrees([relativeFormatTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, trees);
  }
};
