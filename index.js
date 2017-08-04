/* eslint-env node */
'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

module.exports = {
  name: 'intl-relativeformat',

  treeForAddon(tree) {
    let relativeFormatPath = path.dirname(require.resolve('intl-relativeformat'));
    let relativeFormatTree = new UnwatchedDir(path.join(relativeFormatPath, 'src'));
    let addonTree = mergeTrees([relativeFormatTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, addonTree);
  }
};
