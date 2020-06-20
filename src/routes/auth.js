import axios from 'axios';

export function setAuthorizationToken(token) {
    if (token != null) {
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.authorization;
    }
}