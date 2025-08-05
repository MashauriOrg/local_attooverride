(function() {
    require(['editor_atto/plugins/fontcolor/colorpicker'], function(picker) {
        picker.prototype.colors = [
            'cd1d31', // Your brand color
            '000000', '888888', 'FFFFFF',
            'FF0000', '00FF00', '0000FF',
            'FFFF00', '00FFFF', 'FF00FF'
        ];
    });
})();
