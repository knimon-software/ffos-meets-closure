// This script licensed under the MIT.
// http://knimon-software.mit-license.org/

/**
 * @fileoverview Utilities for geolocation.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


goog.provide('ffosapp.geo');


/**
 * Whether geolocation is available.
 * @return {boolean} Returns true, if geolocation is available.
 */
ffosapp.geo.isGeolocAvailable = function() {
  var nav = goog.global.navigation;
  return nav && 'geolocation' in nav;
};


/**
 * Returns current geolocationm if available.
 * @return {Position|null} Current geolocation.  null if geolocation is
 *     unavailable.
 */
ffosapp.geo.getCurrentPosition = function() {
  return ffosapp.geo.isGeolocAvailable() ? goog.global.navigation.geolocation.
      getCurrentPosition() : null;
};
