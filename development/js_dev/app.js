// This script licensed under the MIT.
// http://knimon-software.mit-license.org/

/**
 * @fileoverview A singleton class for FirefoxOS Application.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


goog.provide('ffosapp.App');

goog.require('ffosapp.geo');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.FpsDisplay');
goog.require('goog.debug.Logger');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.format.JsonPrettyPrinter');
goog.require('goog.json');



/**
 * A singleton class for FirefoxOS Application.
 * @constructor
 */
ffosapp.App = function() {
  this.logger_ = goog.debug.Logger.getLogger('ffosapp.App');
  this.logger_.setLevel(goog.debug.Logger.Level.INFO);

  this.initializeFpsDisplay();
  this.initializeDivConsole();
  this.initializeButton();

  this.jsonPrinter_ = new goog.format.JsonPrettyPrinter(null);
  this.output_element_ = goog.dom.getElement(ffosapp.App.OUTPUT_ID);

  this.logger_.info('Initialization was completed (This mag is not reveal if ' +
                    'this is production code).');
};
goog.addSingletonGetter(ffosapp.App);


/**
 * An element id for a button for getting a geolocation.
 * @const
 * @type {string}
 */
ffosapp.App.BUTTON_ID = 'btn-geoloc';


/**
 * An element id for output.
 * @const
 * @type {string}
 */
ffosapp.App.OUTPUT_ID = 'output';


/**
 * An element id for a FPS display.
 * @const
 * @type {string}
 */
ffosapp.App.FPS_DISP_ID = 'fps-disp';


/**
 * A logger for the web app.
 * @type {goog.debug.Logger}
 * @private
 */
ffosapp.App.prototype.logger_ = null;


/**
 * A log viewer for the web app.
 * @type {goog.debug.DivConsole}
 * @private
 */
ffosapp.App.prototype.logview_ = null;


/**
 * A FPS display for the web app.
 * @type {goog.debug.FpsDisplay}
 * @private
 */
ffosapp.App.prototype.fpsDisp_ = null;


/**
 * Handles button click event.
 * @param {goog.events.Event} e Click event.
 */
ffosapp.App.prototype.handleButtonClick = function(e) {
  var geoloc = ffosapp.geo.getCurrentPosition();
  var json = goog.json.serialize(geoloc);
  var prettfied = this.jsonPrinter_.format(json);

  goog.dom.setTextContent(this.output_element_, prettfied);
  this.logger_.info('Current location is:\n' + prettfied);
};


/**
 * Initializes a div console.
 */
ffosapp.App.prototype.initializeDivConsole = function() {
  this.logview_ = new goog.debug.DivConsole(goog.dom.getElement('log'));
  this.logview_.installStyles();
  this.logview_.setCapturing(true);
};


/**
 * Initializes a button.
 */
ffosapp.App.prototype.initializeButton = function() {
  var btn = goog.dom.getElement(ffosapp.App.BUTTON_ID);
  goog.events.listen(btn, goog.events.EventType.CLICK, this.handleButtonClick,
      false, this);
};


/**
 * Initializes a FPS display.
 */
ffosapp.App.prototype.initializeFpsDisplay = function() {
  var fpsDispElem = goog.dom.getElement(ffosapp.App.FPS_DISP_ID);
  this.fpsDisp_ = new goog.debug.FpsDisplay();
  this.fpsDisp_.render(fpsDispElem);
};
