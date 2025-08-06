(function() {
    const waitForAttoColorPlugin = () => {
        try {
            if (typeof M !== 'undefined' &&
                M.editor_atto &&
                M.editor_atto.plugins &&
                M.editor_atto.plugins.fontcolor &&
                M.editor_atto.plugins.fontcolor.button &&
                M.editor_atto.plugins.fontcolor.button.prototype.colors) {

                console.log('Injecting custom brand color...');
                M.editor_atto.plugins.fontcolor.button.prototype.colors = [
                    'cd1d31', // Your brand color
                    '000000', '888888', 'FFFFFF',
                    'FF0000', '00FF00', '0000FF',
                    'FFFF00', '00FFFF', 'FF00FF'
                ];
            } else {
                setTimeout(waitForAttoColorPlugin, 100);
            }
        } catch (e) {
            console.error("Custom color inject failed", e);
        }
    };

    waitForAttoColorPlugin();
})();

