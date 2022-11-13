import { useRouter } from 'next/router'
import { useState } from 'react';

export default function LoginXHR() {
    const router = useRouter();
    const [ data, setData ]= useState({});
    
    const handleSubmit = async (e) => {
      e.preventDefault();
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
          router.push(`/xhr/courses/${http.response.data.user_id}`)
        }
      }
      http.send(formBody);
    }
    
    const onChangeEvent = (e) =>{
        e.preventDefault();
        setData((prev)=>({...prev,
            [e.target.name]: e.target.value
        }));
      }
      
    return (
        <div className="w-screen h-screen flex flex-row font-sans ">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#58717b]">
            <div className="w-full flex items-end justify-center font-bold">
              <p className='pb-5 text-2xl'>MASUK</p>
            </div>
            <form
              className="flex bg-white rounded-lg flex-col justify-center w-1/4 p-5 gap-1.5"
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
            </form>
          </div>
      </div>

    );
}