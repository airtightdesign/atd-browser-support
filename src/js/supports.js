import Modern from './modern.support';
import Legacy from './legacy.support';
import Deprecated from './deprecated.support';

export const Supports = (function() {
    function loadSupport(callback) {
        let _callback;
        
        if(typeof callback === 'function') {
            _callback = callback;
        }

        if(passesModern()) {
            console.log('Is Modern');
            if(_callback) {
                _callback();
            }
        }
        else if(passesLegacy()) {
            console.log('Is Legacy');
            loadScript(Legacy.script, _callback);
        }
        else {
            console.log('Is Deprecated');
            loadScript(Deprecated.script, _callback);
        }
    }

    function passesModern() {
        return Modern.checkSupport();
    }

    function passesLegacy() {
        return Legacy.checkSupport();
    }

    function getSupportLevel() {
        if(passesModern()) {
            return 'modern';
        }
        else if(passesLegacgy()) {
            return 'legacy';
        }

        return 'deprecated';
    }

    function loadScript(script, callback) {
        var js = document.createElement('script');
        js.src = script;
        js.onload = function() {
            if(callback) {
                callback();
            }
        };
        js.onerror = function() {
            if(callback) {
                callback(new Error('Failed to load script ' + script));
            }
        };
        document.head.appendChild(js);
    }

    return {
        loadSupport,
        passesModern,
        passesLegacy,
        getSupportLevel
    }
})();
