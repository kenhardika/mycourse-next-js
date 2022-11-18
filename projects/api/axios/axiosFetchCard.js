import axios from 'axios';

export default async function axiosFetchCard(course_id, user_id){
    return axios.get(`https://staging.komunitasmea.com/api/course?course_id=${course_id}&user_id=${user_id}`, {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true
    });
}