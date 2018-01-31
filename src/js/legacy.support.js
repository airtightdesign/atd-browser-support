const script = '/dist/js/legacy-polyfills.js';

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
