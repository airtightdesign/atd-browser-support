import Modern from './modern.support';
import Legacy from './legacy.support';
import Deprecated from './deprecated.support';

export const Supports = (function() {
    var callback = null;

    function loadSupport(callback) {
        if(typeof callback === 'function') {
            this.callback = callback;
        }

        if(passesModern()) {
            console.log('Is Modern');
        }
        else if(passesLegacy()) {
            console.log('Is Legacy');
        }
        else {
            console.log('Is Deprecated');
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

    function loadScript(script) {

    }

    return {
        loadSupport,
        passesModern,
        passesLegacy,
        getSupportLevel
    }
})();

Supports.loadSupport();