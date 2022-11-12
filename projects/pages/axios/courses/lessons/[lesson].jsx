import React from 'react';
import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import Header from '../../../../components/Header';
import axiosFetchCard from '../../../../api/axios/axiosFetchCard';

export default function Lesson(props) {
    const router = useRouter();
    const { lesson } = router.query;
    const [course_id, user_id] = lesson.split('-');
    const [data, setData] = useState({});

    const [chapterIndex, setChapterIndex] = useState(0);
    const [lessonIndex, setLessonIndex] = useState(0);
  
    const fetchCourses = useCallback(async () => {
        // console.log(user_id + " " + course_id);
        const response = await axiosFetchCard(course_id, user_id);
        setData(response.data);
        console.log(response.data);
    }, [course_id, user_id]);

    useEffect(()=>{
      fetchCourses();
    }, [fetchCourses]);

    function handleNextButton(e){
        e.preventDefault();
        if (data.chapters[chapterIndex].lessons[lessonIndex + 1]){ 
          setLessonIndex((cur)=> cur+1);
          return
        }
        else if(!data.chapters[chapterIndex].lessons[lessonIndex + 1]){
          if(data.chapters[chapterIndex + 1]){
             setChapterIndex((cur)=> cur + 1);
             setLessonIndex(0);
              return
          }
          else if(!data.chapters[chapterIndex + 1]){
              setChapterIndex(0);
              setLessonIndex(0);
              return
          }
      }
      }

      function handlePreviousButton(e){
        e.preventDefault();
          if (data.chapters[chapterIndex].lessons[lessonIndex - 1]){ 
              setLessonIndex((cur)=> cur - 1);
              return
          }
          else if(!data.chapters[chapterIndex].lessons[lessonIndex - 1]){
              if(data.chapters[chapterIndex - 1]){ 
                  setChapterIndex((cur)=> cur - 1);
                  setLessonIndex(data.chapters[chapterIndex-1].lessons.length - 1); // referensi chapter index mengacu keluar dari lesson index/current lesson index
                  return
              }
              else if(!data.chapters[chapterIndex - 1]){ 
                  setChapterIndex(data.chapters.length - 1);
                  setLessonIndex(data.chapters[data.chapters.length - 1].lessons.length - 1);
                  return
              }
          }    
      }

    return (
    <div className='detailCourse'>
        <Header></Header>
        <main className='iframeMain'>
          {
              Object.keys(data).length? 
              <p>{data.chapters[chapterIndex].lessons[lessonIndex].title}</p> :
              <p>{'loading'}</p>
          }

          {
              Object.keys(data).length?
              <iframe title='videoplayer' src={data.chapters[chapterIndex].lessons[lessonIndex].link} 
                  width={1300} height={500}>
              </iframe> :
              <iframe title='videoplayer' src={''} 
                  width={1300} height={500}>
              </iframe>
          }
          
          <p>
              {
              Object.keys(data).length?
              data.chapters[chapterIndex].lessons[lessonIndex].link:'loading'
              }
          </p>

          <div className="buttonControls">
              {
                  Object.keys(data).length? 
                  <button id='prevBtn' onClick={(e)=>handlePreviousButton(e)}>prev</button>:
                  <button id='prevBtn' >loading</button>
              }
              {   
                  Object.keys(data).length? 
                  <button id='nextBtn' onClick={(e)=>handleNextButton(e)}>next</button>:
                  <button id='nextBtn' >loading</button>
              }
          </div>
        </main>
      </div>
    );
}
