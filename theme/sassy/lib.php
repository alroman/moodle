<?php

/**
 * Process a CSS directive to load a font.  Currently works for Bootstrap3 glyphicons.
 * 
 * @global type $CFG
 * @param type $css
 * @param type $theme
 * @return type
 */
 function sassy_process_css($css, $theme) {
    global $CFG;
    $tag = '[[font:glyphicons-halflings-regular]]';
    $replacement = $CFG->wwwroot.'/theme/sassy/package/bootstrap/fonts/glyphicons-halflings-regular';
    $css = str_replace($tag, $replacement, $css);
    return $css;
}