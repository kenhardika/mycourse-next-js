import { useRouter } from 'next/router'
import { useState } from 'react';

function LoginXHR(props) {
  const router = useRouter();
  const [data,setData]= useState({});
  const handleSubmit = (e) => {
      e.preventDefault();
      router.push("/fetch/courses/1");
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
        <div className="right-section h-full w-full flex justify-center items-center">
          <div className="right-layer h-full w-full flex flex-col items-center justify-center">
            <div className="loginTitleLayer w-full flex items-end justify-center font-bold">
              <p>MASUK</p>
            </div>
            <form
              className="formLayer flex flex-col justify-center w-1/4 p-2 gap-4"
              method="post"
              action="/"
            //   onSubmit={()=>handleSubmit}
            >
              <div className="inputForm flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputName">Nama Lengkap: </label>
                <input
                  type="text"
                  id="inputName"
                  placeholder="Masukan Nama Lengkap"
                  name='name'
                //   onChange={onChangeEvent} 
                  required
                />
              </div>

              <div className="inputForm flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputText">Email: </label>
                <input
                  type="text"
                  id="inputText"
                  placeholder="Masukan Email"
                  name="email"
                //   onChange={onChangeEvent}
                  required
                />
              </div>
              <div className="inputForm flex flex-row w-full justify-end px-3 gap-14 ">
                <label htmlFor="inputPass">Kata Sandi: </label>
                <input
                  type="password"
                  id="inputPass"
                  placeholder="Masukan Kata Sandi"
                  name='password'
                //   onChange={onChangeEvent}
                  required
                />
              </div>
              <a className='text-xs text-right px-3'> lupa kata sandi? </a>
              <div className="layerButton flex justify-center ">
                <button id="submitBtn" className='rounded-lg px-2 w-40 bg-red-300 
                    text-sm active:translate-y-[2px] p-1' type="submit">
                  Masuk
                </button>
              </div>
              <div className="errorLayer"></div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default LoginXHR;