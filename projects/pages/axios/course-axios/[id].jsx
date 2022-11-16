import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import axiosFetchCourseCards from '../../../api/axios/axiosFetchCourseCards';
import Header from '../../../components/Header';
import MainContent from '../../../components/MainContent';
import ContentCards from '../../../components/ContentCards';

export default function Courses() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);
  
    const fetchCards = useCallback( async () => {
      const response = await axiosFetchCourseCards(id);
      setData(response.data.data);
    }, [id]);
    
    const navigateToDetailCard = (e, course_id)=> {
      e.preventDefault();
      router.push(`/axios/course-axios/learning-axios/${course_id}-${id}`);
    }
  
    useEffect(()=>{
      fetchCards();
    },[fetchCards]);
    
    return (
      <div className='bg-[#58717b] h-screen bg-scroll'>  
        <div className='flex flex-col h-fit pb-5 items-center bg-[#58717b]'>
          <Header/>
          <MainContent title = "Kelas"> 
            <ContentCards data={data} navigateToDetailCard = {navigateToDetailCard}/>
          </MainContent>
        </div>
      </div>  
    );
}
