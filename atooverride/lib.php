<?php
defined('MOODLE_INTERNAL') || die();

function local_attooverride_before_footer() {
    global $PAGE;
    $PAGE->requires->js(new moodle_url('/local/attooverride/amd/src/override.js'));
}
