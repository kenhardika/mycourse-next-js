import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import fetchCard from '../../../../api/fetch/fetchCard';
import Header from '../../../../components/Header';
import MainContent from '../../../../components/MainContent';
import LessonLayer from '../../../../components/LessonLayer';

export default function Lesson() {
    const router = useRouter();
    const [data, setData] = useState({});
    const [chapterIndex, setChapterIndex] = useState(0);
    const [lessonIndex, setLessonIndex] = useState(0);
    
    const fetchCourses = useCallback(async (courseid, userid) => {
            const response = await fetchCard(courseid, userid);
            setData(response.data);
        }, []);
    
    useEffect(()=>{
    if (router && router.query.lesson) {
        const [courseid, userid] = router.query.lesson.split('-');
        fetchCourses(courseid, userid);
    }
    }, [router, fetchCourses]);

    function handleNextButton(e){
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
          if (data.chapters[chapterIndex].lessons[lessonIndex - 1]){ 
              setLessonIndex((cur)=> cur - 1);
              return
          }
          else if(!data.chapters[chapterIndex].lessons[lessonIndex - 1]){
              if(data.chapters[chapterIndex - 1]){ 
                  setChapterIndex((cur)=> cur - 1);
                  setLessonIndex(data.chapters[chapterIndex-1].lessons.length - 1); 
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
    <div className='bg-[#58717b] h-screen bg-scroll'>  
        <div className='flex flex-col gap-3 items-center bg-[#58717b]'>
            <Header></Header>
            <MainContent title={Object.keys(data).length? data.chapters[chapterIndex].lessons[lessonIndex].title : "loading" }>
                <LessonLayer data = { Object.keys(data).length? data : {} } 
                    handleNextButton = {handleNextButton}
                    handlePreviousButton = {handlePreviousButton}
                    chapterIndex ={chapterIndex} lessonIndex = {lessonIndex} />
            </MainContent>
        </div>
    </div>
    );
}
