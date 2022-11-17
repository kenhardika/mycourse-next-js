export default async function getCardXHR(courseid, userid){
    const request = new XMLHttpRequest();
    const url = `https://staging.komunitasmea.com/api/course?course_id=${courseid}&user_id=${userid}`;
    return new Promise((resolve, reject) => {
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.withCredentials = true;
        request.responseType ='json';
        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.response.data);
            }
            else if(http.readyState == 4 && http.status > 399){
                reject(request.response);
            }
        };
        request.send();
        })
}