# cws-dashboard-widget
WordPress Dashboard Widget with company details

Add to functions.php 

// CWS Dashboard Widget
function enqueue_cws_dashboard_widget_script() {
    $js_url = 'https://raw.githubusercontent.com/yourusername/yourrepository/master/path/to/custom-dashboard-widget.js';
    if (url_exists($js_url)) {
        wp_enqueue_script('cws-dashboard-widget', $js_url, array('jquery'), null, true);
    }
}
function url_exists($url) {
    $headers = get_headers($url);
    return strpos($headers[0], '200') !== false;
}

add_action('wp_enqueue_scripts', 'enqueue_cws_dashboard_widget_script');

