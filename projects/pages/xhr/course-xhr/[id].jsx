import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import getCourseCardsXHR from '../../../api/xhr/getCourseCardsXHR';
import MainContent from '../../../components/MainContent';
import ContentCards from '../../../components/ContentCards';

const Courses = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const fetchCards = useCallback(async () => {
    const response = await getCourseCardsXHR(id);
    setData(response);
  }, [id]);
  
  const navigateToDetailCard = (e, course_id)=> {
    e.preventDefault();
    router.push({
      pathname : `/xhr/course-xhr/learning-xhr/${id}`,
      query: {  
        "id": id,
        "courseid": course_id }
    }, `/xhr/course-xhr/learning-xhr/${id}`);
  }

  useEffect(()=>{
    if (router && router.query.id) {
      fetchCards();
  }
  },[router, fetchCards]);
  
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