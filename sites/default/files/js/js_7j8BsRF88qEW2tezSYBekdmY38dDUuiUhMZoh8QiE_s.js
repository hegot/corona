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
/**
 * @file
 * JavaScript behaviors for webform wizard.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Link the wizard's previous pages.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Links the wizard's previous pages.
   */
  Drupal.behaviors.webformWizardPagesLink = {
    attach: function (context) {
      $('.js-webform-wizard-pages-links', context).once('webform-wizard-pages-links').each(function () {
        var $pages = $(this);
        var $form = $pages.closest('form');

        var hasProgressLink = $pages.data('wizard-progress-link');
        var hasPreviewLink = $pages.data('wizard-preview-link');

        $pages.find('.js-webform-wizard-pages-link').each(function () {
          var $button = $(this);
          var title = $button.attr('title');
          var page = $button.data('webform-page');

          // Link progress marker and title.
          if (hasProgressLink) {
            var $progress = $form.find('.webform-progress [data-webform-page="' + page + '"]');
            $progress.find('.progress-marker, .progress-title')
              .attr({
                'role': 'link',
                'title': title,
                'aria-label': title
              })
              .click(function () {
                $button.click();
              });
            // Only allow the marker to be tabbable.
            $progress.find('.progress-marker').attr('tabindex', 0);
          }

          // Move button to preview page div container with [data-webform-page].
          // @see \Drupal\webform\Plugin\WebformElement\WebformWizardPage::formatHtmlItem
          if (hasPreviewLink) {
            $form
              .find('.webform-preview [data-webform-page="' + page + '"]')
              .append($button)
              .show();
          }
        });
      });
    }
  };

})(jQuery, Drupal);
;
