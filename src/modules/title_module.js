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
  var self = this;

  // Call the parent constructor
  UAModule.call(self);

  self._id = 'title';
  self.position = 10;
  self.skins = {};
  self.template = 'uaTitle';
  self.templateClass = 'title';
  self.visible = true;
};


// inherit UAModule
UATitleModule.prototype = new UAModule();


_.extend(UATitleModule.prototype, {
  constructor: UATitleModule,

  /**
   *
   */
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

  /**
   *
   */
  textTransforms: {
    'default': null,
    title: s.titleize,
  },

  /**
   * configure - description
   *
   * @param  {type} options description
   * @return {type}         description
   */
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
});
