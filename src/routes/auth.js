class Auth {

    constructor() {
        this.authenticated = false;
    }

    doLogin(callback) {
        this.authenticated = true;
        if (callback) {
            callback();
        }
    }

    doLogout(callback) {
        this.authenticated = false;
        if (callback) {
            callback();
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }

}

export default new Auth();