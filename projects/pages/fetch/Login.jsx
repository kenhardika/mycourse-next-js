import { useRouter } from 'next/router'
import { useState } from 'react';
import loginFetchAPI from '../../api/fetch/loginFetchAPI';

export default function LoginFetch() {
    const router = useRouter();
    const [data,setData]= useState({});
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginFetchAPI(data);
        console.log(response.data.user_id);
        router.push(`/fetch/courses/${response.data.user_id}`);
    }
    
    const onChangeEvent = (e) =>{
        e.preventDefault();
        setData((prev)=>({...prev,
            [e.target.name]: e.target.value
        }));
      }
      console.log(data);
      
    return (
        <div className="w-screen h-screen flex flex-row font-sans">
          <div className="h-full w-full flex flex-col items-center justify-center bg-white">
            <div className="w-full flex items-end justify-center font-bold">
              <p>MASUK</p>
            </div>
            <form
              className="flex flex-col justify-center w-1/4 p-2 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputName">Nama Lengkap: </label>
                <input
                  type="text"
                  id="inputName"
                  placeholder="Masukan Nama Lengkap"
                  name='name'
                  onChange={onChangeEvent} 
                  required
                />
              </div>

              <div className=" flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputText">Email: </label>
                <input
                  type="text"
                  id="inputText"
                  placeholder="Masukan Email"
                  name="email"
                  onChange={onChangeEvent}
                  required
                />
              </div>
              <div className=" flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputPass">Kata Sandi: </label>
                <input
                  type="password"
                  id="inputPass"
                  placeholder="Masukan Kata Sandi"
                  name='password'
                  onChange={onChangeEvent}
                  required
                />
              </div>
              <a className='text-xs text-right px-3'> lupa kata sandi? </a>
              <div className=" flex justify-center ">
                <button className=' text-white rounded-lg px-2 w-40 bg-red-300 
                    text-sm active:translate-y-[2px] p-1' type="submit">
                  Masuk
                </button>
              </div>
              <div className=""></div>
            </form>
          </div>
      </div>

    );
}

// export const getStaticProps = async () =>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         return {
//             props: {
//                 data
//             }
//         }
//     }
//     catch{
//         throw Error("Fetch API Failed");
//     }
// }

// async function fetchCourses(user_id){
//     try{
//         const getCourse = await fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
//             method:'GET', 
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//               },
//             mode: 'cors', 
//             credentials: 'include',
//         });
//         const responseCourses = await getCourse.json();
//         return responseCourses
//     }
//     catch{
//         throw new Error('Fetch API Failed');
//     }    
// }
// export default fetchCourses