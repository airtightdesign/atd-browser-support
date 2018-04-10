const script = '/dist/js/atd-legacy-polyfills.js';

function checkSupport() {
    console.log('Testing Legacy');
    return (
        typeof document.querySelectorAll === 'function' &&
        "classList" in document.createElement("_")
    );
}

export default {
    checkSupport,
    script
}
