/* global
    UserAccounts: false,
    UALog: false,
    UATitleModule: false
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


UALog.trace('Adding title module');
var title = new UATitleModule();

UserAccounts.registerModule(title);
