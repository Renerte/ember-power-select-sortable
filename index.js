/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-power-select-sortable',
  included: function(app) {
    this._super.included.apply(this, arguments);
  },

  contentFor: function(type, config) {
    var emberPowerSelect = this.addons.filter(function(addon) {
      return addon.name === 'ember-power-select';
    })[0]
    return emberPowerSelect.contentFor(type, config);
  }
};
