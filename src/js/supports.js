import * as Modern from './modern.support';
import * as Legacy from './legacy.support';
import * as Deprecated from './deprecated.support';

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
    else if(passesLegacy()) {
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

export default {
    loadScript,
    passesModern,
    passesLegacy,
    getSupportLevel
}