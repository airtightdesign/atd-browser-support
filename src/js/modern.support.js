function checkSupport() {
    console.log('Testing Modern');
    if(
        typeof window.Promise === 'function' &&
        (window.NodeList && NodeList.prototype.forEach)
    ) {
        return true;
    }

    return false;
}

export default {
    checkSupport
}
