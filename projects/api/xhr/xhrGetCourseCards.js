export default async function xhrGetCourseCards(user_id){
    // try{
    //     const getCourse = await fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
    //         method:'GET', 
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //           },
    //         mode: 'cors', 
    //         credentials: 'include',
    //     });
    //     const responseCourses = await getCourse.json();
    //     return responseCourses
    // }
    // catch{
    //     throw new Error('Fetch API Failed');
    // }   
    let response = {};
    const request = new XMLHttpRequest();
    request.withCredentials = true;
    request.open('GET', `https://staging.komunitasmea.com/api/user/${user_id}/courses/active`);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.responseType ='json';
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = this.response;
            // console.log(response);
            return response
        }
    };
    request.send()
}