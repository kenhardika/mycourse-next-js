import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import axiosFetchCourseCards from '../../../api/axios/axiosFetchCourseCards';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

export default function Courses(props) {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);
  
    const fetchCards = useCallback( async () => {
      const response = await axiosFetchCourseCards(id);
      setData(response.data.data);
    }, [id]);
    
    const navigateToDetailCard = (e, course_id)=> {
      e.preventDefault();
      router.push(`/axios/courses/lessons/${course_id}-${id}`);
    }
  
    useEffect(()=>{
      fetchCards();
    },[fetchCards]);
    
    return (
      <div className='bg-[#58717b] h-screen bg-scroll'>  
        <div className='flex flex-col h-fit pb-5 items-center bg-[#58717b]'>
          <Header/>
          <main className='flex flex-col w-11/12 h-auto bg-[#58717b] text-3xl'>
            <p className='py-5'>Kelas</p> 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] rounded-md p-[40px] bg-[#253237]">
                {data?.map((item) => {
                  return <Card key={item.course_id} 
                          data = {item} 
                          navigateToDetailCard= {navigateToDetailCard}
                          />})
                }
              </div>
          </main>
        </div>
      </div>  
    );
}
