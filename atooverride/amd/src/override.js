(function () {
    const injectColor = () => {
        try {
            const plugin = M?.editor_atto?.plugins?.fontcolor?.button?.prototype;
            if (plugin && plugin.colors) {
                console.log('✅ Custom brand color injected');
                plugin.colors = [
                    'cd1d31', // Your brand color
                    '000000', '888888', 'FFFFFF',
                    'FF0000', '00FF00', '0000FF',
                    'FFFF00', '00FFFF', 'FF00FF'
                ];
            } else {
                console.log('⏳ Waiting for Atto to load...');
                setTimeout(injectColor, 200); // Keep checking until available
            }
        } catch (e) {
            console.error("❌ Failed to inject brand color", e);
        }
    };

    // Run after DOM is ready
    if (document.readyState === "complete") {
        injectColor();
    } else {
        window.addEventListener("load", injectColor);
    }
})();


