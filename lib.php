<?php
defined('MOODLE_INTERNAL') || die();

function local_attooverride_before_footer() {
    global $PAGE;
    $PAGE->requires->js_call_amd('local_attooverride/override', 'init');
}
