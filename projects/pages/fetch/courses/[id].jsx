import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import fetchCourseCards from '../../../api/fetch/fetchCourseCards';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

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
    router.push(`/fetch/courses/lessons/${course_id}-${id}`);
  }

  useEffect(()=>{
    fetchCards();
  },[fetchCards]);
  
  return (
  <div className='flex flex-col h-screen items-center bg-[#58717b]'>
    <Header/>
    <main className='flex flex-col w-11/12 h-auto bg-[#58717b] text-3xl'>
      <p className='py-5'>Kelas</p> 
        <div className="grid grid-cols-5 gap-[20px] rounded-md p-[20px] bg-[#253237]">
          {data?.map((item) => {
            return <Card key={item.course_id} 
                    data = {item} 
                    navigateToDetailCard= {navigateToDetailCard}
                    />})
          }
        </div>
    </main>
  </div>  
  )
}

export default Courses;