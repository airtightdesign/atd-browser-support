function checkSupport() {
    console.log('Testing Modern');
    if(typeof window.Promise === 'function') {
        return true;
    }

    return false;
}

export default {
    checkSupport
}
