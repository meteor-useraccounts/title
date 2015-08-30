/* global
    UALog: false,
    UAModule: false,
    UATitleModule: true
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading title_module.js');


// define the Student class
UATitleModule = function () {
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

  configure: function(options) {
    UALog.trace('configure ' + this._id);
    // console.log(options);

    this.texts = _.defaults(options.texts || {}, this.texts);
  },

  texts: {
    default: {
      title: 'useraccounts',
    },
    signIn: {
      title: 'sign_in',
    },
    signUp: {
      title: 'register',
    },
  },

  title: function() {
    return this.getText('title');
  },
});
