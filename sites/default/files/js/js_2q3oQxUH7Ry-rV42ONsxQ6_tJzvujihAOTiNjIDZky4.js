/**
 * @file
 * Range slider behavior.
 */
(function ($, Drupal) {

  'use strict';

  /**
   * Process ranges_slider elements.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.rangeSlider = {
    attach: function attach(context, settings) {
      var elements = settings.range_slider && settings.range_slider.elements ? settings.range_slider.elements : null;
      $(context).find('.form-type-range-slider > input').once('rangeSlider').each(function () {
        var outputType = false;
        if (elements && typeof elements['#' + $(this).attr('id')] !== 'undefined') {
          outputType = elements['#' + $(this).attr('id')].output;
        }
        var rangesliderSettings = {
          polyfill : false,
          onInit : function () {
            if (outputType === 'below') {
              this.output = $('<output class="js-output" />').insertAfter(this.$range).html(this.$element.val());
            }
            else if (outputType === 'above') {
              this.output = $('<output class="js-output" />').insertBefore(this.$range).html(this.$element.val());
            }
          },
          onSlide : function (position, value) {
            if ($.inArray(outputType, ['below', 'above']) !== -1) {
              this.output.html(value);
            }
          }
        };
        $(this).rangeslider(rangesliderSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('.form-type-range-slider > input').findOnce('rangeSlider').rangeslider('destroy');
      }
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
