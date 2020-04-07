/**
 * @file
 * JavaScript behaviors for Geocomplete location integration.
 */

(function ($, Drupal) {

  'use strict';

  // @see https://ubilabs.github.io/geocomplete/
  // @see https://developers.google.com/maps/documentation/javascript/reference?csw=1#MapOptions
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.locationGeocomplete = Drupal.webform.locationGeocomplete || {};
  Drupal.webform.locationGeocomplete.options = Drupal.webform.locationGeocomplete.options || {};

  /**
   * Initialize location geocomplete.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformLocationGeocomplete = {
    attach: function (context) {
      if (!$.fn.geocomplete) {
        return;
      }

      $(context).find('.js-webform-type-webform-location-geocomplete').once('webform-location-geocomplete').each(function () {
        var $element = $(this);
        var $input = $element.find('.webform-location-geocomplete');

        // Display a map.
        var $map = null;
        if ($input.attr('data-webform-location-geocomplete-map')) {
          $map = $('<div class="webform-location-geocomplete-map"><div class="webform-location-geocomplete-map--container"></div></div>').insertAfter($input).find('.webform-location-geocomplete-map--container');
        }

        var options = $.extend({
          details: $element,
          detailsAttribute: 'data-webform-location-geocomplete-attribute',
          types: ['geocode'],
          map: $map,
          geocodeAfterResult: false,
          restoreValueAfterBlur: true,
          mapOptions: {
            disableDefaultUI: true,
            zoomControl: true
          }
        }, Drupal.webform.locationGeocomplete.options);

        var $geocomplete = $input.geocomplete(options);

        // If there is default value look up location's attributes, else see if
        // the default value should be set to the browser's current geolocation.
        var value = $geocomplete.val();
        if (value) {
          $geocomplete.geocomplete('find', value);
        }
        else if (window.navigator.geolocation && $geocomplete.attr('data-webform-location-geocomplete-geolocation')) {
          window.navigator.geolocation.getCurrentPosition(function (position) {
            $geocomplete.geocomplete('find', position.coords.latitude + ', ' + position.coords.longitude);
          });
        }
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for radio buttons.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Adds HTML5 validation to required radios buttons.
   *
   * @type {Drupal~behavior}
   *
   * @see Issue #2856795: If radio buttons are required but not filled form is nevertheless submitted.
   */
  Drupal.behaviors.webformRadiosRequired = {
    attach: function (context) {
      $('.js-webform-type-radios, .js-webform-type-webform-radios-other', context).each(function () {
        var $element = $(this);
        var $radios = $element.find('input[type="radio"]');
        if ($element.hasClass('required')) {
          $radios.attr({'required': 'required', 'aria-required': 'true'});
        }
        // Copy clientside_validation.module's message to the radio buttons.
        if ($element.attr('data-msg-required')) {
          $radios.attr({'data-msg-required': $element.attr('data-msg-required')});
        }
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for options elements.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Attach handlers to options buttons element.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformOptionsButtons = {
    attach: function (context) {
      // Place <input> inside of <label> before the label.
      $(context).find('label.webform-options-display-buttons-label > input[type="checkbox"], label.webform-options-display-buttons-label > input[type="radio"]').each(function () {
        var $input = $(this);
        var $label = $input.parent();
        $input.detach().insertBefore($label);
      });
    }
  };


})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for select menu.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Disable select menu options using JavaScript.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformSelectOptionsDisabled = {
    attach: function (context) {
      $('select[data-webform-select-options-disabled]', context).once('webform-select-options-disabled').each(function () {
        var $select = $(this);
        var disabled = $select.attr('data-webform-select-options-disabled').split(/\s*,\s*/);
        $select.find('option').filter(function isDisabled() {
          return ($.inArray(this.value, disabled) !== -1);
        }).attr('disabled', 'disabled');
      });
    }
  };


})(jQuery, Drupal);
;
