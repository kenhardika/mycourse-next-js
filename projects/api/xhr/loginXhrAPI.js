
export default async function loginXhrAPI(data){

    const http = new XMLHttpRequest();
    const url = "https://staging.komunitasmea.com/api/login";
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    return new Promise((resolve) => {

    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.responseType= 'json';
    http.withCredentials = true;
    http.onload = function() {
        if(http.readyState == 4 && http.status == 200) {
            resolve(http.response.data);
        }
    }
    http.send(formBody);

    })
    

}