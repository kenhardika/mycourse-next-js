import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Card from '../../../components/Card';

const Courses = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const fetchCards = useCallback(async () => {
    const request = new XMLHttpRequest();
    request.onload = function() {
        if (request.readyState == 4 && request.status == 200) {
            setData(request.response.data);
        }
    };
    request.open('GET', `https://staging.komunitasmea.com/api/user/${id}/courses/active`, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.withCredentials = true;
    request.responseType ='json';
    request.send(null);
    
  }, [id]);
  
  const navigateToDetailCard = (e, course_id)=> {
    e.preventDefault();
    router.push(`/xhr/course-xhr/learning-xhr/${course_id}-${id}`);
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
  )
}

export default Courses;