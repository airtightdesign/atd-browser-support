const script = '/dist/js/atd-legacy-polyfills.js';

function checkSupport() {
    console.log('Testing Legacy');
    return (
        typeof document.querySelectorAll === 'function' &&
        typeof document.body.classList === 'object'
    );
}

export default {
    checkSupport,
    script
}
