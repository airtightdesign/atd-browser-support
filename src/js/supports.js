import Modern from './modern.support';
import Legacy from './legacy.support';
import Deprecated from './deprecated.support';

function loadSupport(callback, path = '') {
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
        loadScript(path + Legacy.script, _callback);
    }
    else {
        console.log('Is Deprecated');
        loadScript(path + Deprecated.script, _callback);
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
    else if(passesLegacy()) {
        return 'legacy';
    }

    return 'deprecated';
}

function loadScript(script, callback) {
    var js = document.createElement('script');
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
    js.src = script;
    document.head.appendChild(js);
}

export default {
    loadSupport,
    loadScript,
    passesModern,
    passesLegacy,
    getSupportLevel
}