export default async function fetchCard(course_id, user_id){
        const getCourse = await fetch(`https://staging.komunitasmea.com/api/course?course_id=${course_id}&user_id=${user_id}`, {
            method:'GET', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'cors', 
            credentials: 'include',
        });
        return getCourse.json();
}