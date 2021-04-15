export function authHeader() {
    // return authorization header with jwt token
    let access_token = localStorage.getItem('ACCESS_TOKEN');
	
    if (access_token) {
        return { 'Authorization': 'Bearer ' + access_token };
    } else {
        return {};
    }
}
export function jsonHeader() {
    return {'Content-Type': 'application/json', 'Accept': 'application/json'};

}