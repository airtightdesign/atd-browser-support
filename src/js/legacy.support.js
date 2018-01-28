export default (function() {
    function checkSupport() {
        console.log('Testing Legacy');
        if(typeof document.querySelectorAll === 'function') {
            return true;
        }

        return false;
    }

    return {
        checkSupport
    }
})();
