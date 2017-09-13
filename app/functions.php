<?php

/**
 * Displays site name.
 */
function siteName()
{
    echo config('name');
}

/**
 * Displays site version.
 */
function siteVersion()
{
    echo config('version');
}

/**
 * Displays site description.
 */
function siteDescription()
{
    echo config('description');
}

// Get URI Segments
function getUriSegments() {
    return explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
}

function getUriSegment($n) {
    $segs = getUriSegments();
    return count($segs)>0&&count($segs)>=($n-1)?$segs[$n]:'';
}

/**
 * Website navigation.
 */
function navMenu($sep = '')
{
    $nav_menu = '';
    $activeUri = getUriSegment(1);

    foreach (config('nav_menu') as $uri => $name) {
        $nav_menu .= '<li class="header__nav__list__list-item">';
        $nav_menu .= '<a href="'.$uri.'" class="header__nav__list__list-item__link';
        // If Active Page, Add Class
        if ($uri == $activeUri) { $nav_menu .= ' is-active'; }
        $nav_menu .= '">'.$name.'</a>'.$sep;
        // $nav_menu .= '<a href="/'.(config('pretty_uri') || $uri == '' ? '' : '?page=').$uri.'" class="header__nav__list__list-item__link">'.$name.'</a>'.$sep;
        $nav_menu .= '</li>';
    }

    echo trim($nav_menu, $sep);
}

/**
 * Displays page title. It takes the data from
 * URL, it replaces the hyphens with spaces and
 * it capitalizes the words.
 */
function pageTitle()
{
    $page = isset($_GET['page']) ? htmlspecialchars($_GET['page']) : 'Home';

    echo ucwords(str_replace('-', ' ', $page));
}

/**
 * Displays page content. It takes the data from
 * the static pages inside the pages/ directory.
 * When not found, display the 404 error page.
 */
function pageContent()
{
    $page = isset($_GET['page']) ? $_GET['page'] : 'home';

    $path = getcwd().'/'.config('content_path').'/'.$page.'.php';

    if (file_exists(filter_var($path, FILTER_SANITIZE_URL))) {
        include $path;
    } else {
        include config('content_path').'/404.php';
    }
}

/**
 * Starts everything and displays the template.
 */
function run()
{
    include config('template_path').'/template.php';
}
