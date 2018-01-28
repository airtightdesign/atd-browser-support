export default (function() {
    var callback = null;

    function checkSupport() {
        console.log('Testing Modern');
        if(typeof window.Promise === 'function') {
            return true;
        }

        return false;
    }

    return {
        checkSupport
    }
})();
