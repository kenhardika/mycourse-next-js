import { useRouter } from 'next/router'
import { useState } from 'react';
import { loginAxiosAPI } from '../../api/axios/loginAxiosAPI';
import LoginForm from '../../components/login/LoginForm';

export default function LoginAxios() {

  const router = useRouter();
  const [data,setData]= useState({});
    
  const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginAxiosAPI(data);
        router.push(`/axios/course-axios/${response.data.data.user_id}`);
  }
    
  const onChangeEvent = (e) =>{
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
        <LoginForm onChangeEvent = {onChangeEvent} handleSubmit = {handleSubmit} ></LoginForm>
      </div>
    </div>
    );
}
