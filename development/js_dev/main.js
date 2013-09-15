// This script licensed under the MIT.
// http://knimon-software.mit-license.org/

/**
 * @fileoverview An entry point for the web app.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */

goog.provide('ffosapp.main');/*@provide_main@*/

goog.require('ffosapp.App');


/**
 * Entry point of the web app.
 */
ffosapp.main = function() {/*@main_fn@*/
  ffosapp.App.getInstance();
};


// Start the web app.
ffosapp.main();/*@exec_main@*/
