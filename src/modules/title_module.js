/* global
    s: false,
    UALog: false,
    UAModule: false,
    UATitleModule: true
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading title_module.js');


// define the UATitleModule class
UATitleModule = function _UATitleModule() {
  // Call the parent constructor
  UAModule.call(this);

  this._id = 'title';
  this.position = 10;
  this.template = 'uaTitle';
  this.templateClass = 'title';
};


// inherit UAModule
UATitleModule.prototype = new UAModule();


_.extend(UATitleModule.prototype, {

  // correct the constructor pointer because it points to UAModule
  constructor: UATitleModule,

  configure: function configure(options) {
    var self = this;

    UALog.trace('UATitleModule.configure');

    // Possibly pick up texts from the configuration options
    /*
    self.texts = _.defaults(
      options.texts || {},
      self.texts
    );
    */

    // Possibly pick up text transforms from the configuration options
    /*
    self.textTransforms = _.defaults(
      options.textTransforms || {},
      self.textTransforms
    );
    */
  },

  texts: {
    'default': {
      title: 'ua',
    },
    signIn: {
      title: 'sign_in',
    },
    signUp: {
      title: 'register',
    },
  },

  textTransforms: {
    'default': null,
    title: s.titleize,
  },
});
