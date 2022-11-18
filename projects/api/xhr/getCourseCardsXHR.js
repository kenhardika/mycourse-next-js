export default async function getCourseCardsXHR(userid){
    const http = new XMLHttpRequest();
    const url = `https://staging.komunitasmea.com/api/user/${userid}/courses/active`;
    return new Promise((resolve, reject) => {
        http.open('GET', url);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.responseType= 'json';
        http.withCredentials = true;
        http.onload = function() {
            if(http.readyState == 4 && http.status == 200) {
                resolve(http.response.data);
            }
            else if(http.readyState == 4 && http.status > 399){
                reject(http.response);
            }
        }
        http.send();
    })
}