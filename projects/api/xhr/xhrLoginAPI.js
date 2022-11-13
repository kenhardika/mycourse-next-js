export default async function xhrLoginAPI(data){
      const http = new XMLHttpRequest();
      const url = "https://staging.komunitasmea.com/api/login";
      let formBody = [];
      let res = {};
      for (let property in data) {
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(data[property]);
          formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      http.open('POST', url, true);
      http.responseType = 'json';
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
          res = http.response.data;
          return res
        }
      }
      http.send(formBody);
  }