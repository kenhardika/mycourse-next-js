import axios from 'axios';

export default async function axiosFetchCourseCards(user_id){
    const response = await 
        axios.get(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          withCredentials: true
        });
    return response  
}