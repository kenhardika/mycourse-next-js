import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import fetchCourseCards from '../../../api/fetch/fetchCourseCards';
import Header from '../../../components/Header';
import MainContent from '../../../components/MainContent';
import ContentCards from '../../../components/ContentCards';

const Courses = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const fetchCards = useCallback(async () => {
    const response = await fetchCourseCards(id);
    setData(response.data);
  }, [id]);
  
  const navigateToDetailCard = (e, course_id)=> {
    e.preventDefault();
    router.push({
      pathname : `/fetch/course-fetch/learning-fetch/${id}`,
      query: {  
        "id": id,
        "courseid": course_id }
    }, `/fetch/course-fetch/learning-fetch/${id}`);
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
  )
}

export default Courses;