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
      setData(response.data);
    }, [id]);
    
    const navigateToDetailCard = (e, course_id)=> {
      e.preventDefault();
      router.push(`/axios/courses/lessons/${course_id}`);
    }
  
    useEffect(()=>{
      fetchCards();
    },[fetchCards]);
    
    return (
        <div className='flex flex-col '>
         <Header/> 
            <main className=' flex flex-col p-[50px] bg-[#58717b] text-3xl'>
                <p>Kelas</p> 
                    <div className="grid grid-cols-4 gap-[20px] p-[20px] bg-[#253237]">
                    {data.data?.map((item) => {
                        return <Card key={item.course_id} 
                                data = {item} 
                                navigateToDetailCard= {navigateToDetailCard}
                                />})
                    }
                    </div>
            </main>
        </div>
    );
}
