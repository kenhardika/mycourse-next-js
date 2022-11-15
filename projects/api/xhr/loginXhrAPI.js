
export default async function loginXhrAPI(data, setResponse){

    const http = new XMLHttpRequest();
    const url = "https://staging.komunitasmea.com/api/login";
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.responseType= 'json';
    http.withCredentials = true;
    http.onload = function() {
        if(http.readyState == 4 && http.status == 200) {
            setResponse(http.response.data);
            return http.response.data;
        }
    }
    http.send(formBody);

}