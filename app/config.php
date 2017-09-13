<?php

/**
 * Used to store website configuration information.
 *
 * @var string
 */
function config($key = '')
{
    $config = [
        'name' => 'Hell World!',
        'description' => 'This is the websites default description.',
        'nav_menu' => [
            '#page-one' => 'Page One',
            '#page-two' => 'Page Two',
            '#page-three' => 'Page Three',
        ],
        'template_path' => 'template',
        'content_path' => 'content',
        'pretty_uri' => true,
        'version' => 'v1.0',
    ];

    return isset($config[$key]) ? $config[$key] : null;
}
