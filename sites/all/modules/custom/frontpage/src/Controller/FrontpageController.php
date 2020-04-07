<?php
namespace Drupal\frontpage\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route responses for the Example module.
 */
class FrontpageController extends ControllerBase {
  
  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function frontpage() {
    
    $renderable = [
      '#theme' => 'frontpage',
      '#test_var' => 'test variable',
    ];
    $rendered = \Drupal::service('renderer')->renderPlain($renderable);
    $element = array(
      '#markup' => $rendered,
      '#attached' => [
        'library' => [
          'frontpage/frontpage',
        ],
      ],
    );
  
    return $element;
  }
  
}
