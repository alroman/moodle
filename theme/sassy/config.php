<?php

$THEME->name = 'sassy';


$THEME->doctype = 'html5';
$THEME->parents = array('base');

$THEME->sheets = array(
    'theme'
);

$THEME->rendererfactory = 'theme_overridden_renderer_factory';
$THEME->csspostprocess = 'sassy_process_css';

/** List of javascript files that need to included on each page */
$THEME->javascripts = array('block_menu');
$THEME->javascripts_footer = array();
