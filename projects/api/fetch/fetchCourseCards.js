export default async function fetchCourseCards(user_id){
        const getCourse = await fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
            method:'GET', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            mode: 'cors', 
            credentials: 'include',
        });
        return getCourse.json();
}