import axios from 'axios';

export const loginAxiosAPI = async (dataInput) =>{
    let formBody = [];
    for (let property in dataInput) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(dataInput[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

   const {data} = await axios.post('https://staging.komunitasmea.com/api/login', formBody, {
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true
  });
   console.log(data);
}