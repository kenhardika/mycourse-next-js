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
    console.log(data);
    console.log(course_id);
  }

  useEffect(()=>{
    fetchCards();
  },[fetchCards]);
  
  return (
  <div>
    <Header/>
    <main>
      <p>Kelas</p> 
      <div className="content">
        <div className="cards">
          {data?.map((item) => {
            return <Card key={item.course_id} 
                    data = {item} 
                    navigateToDetailCard= {navigateToDetailCard}
                    />})
          }
        </div>
      </div>
    </main>
  </div>  )
}

export default Courses;