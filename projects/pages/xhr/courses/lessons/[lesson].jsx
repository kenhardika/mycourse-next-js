import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import fetchCard from '../../../../api/fetch/fetchCard';
import Header from '../../../../components/Header';

export default function Lesson(props) {
    const router = useRouter();
    const [data, setData] = useState({});
    const [chapterIndex, setChapterIndex] = useState(0);
    const [lessonIndex, setLessonIndex] = useState(0);
    
    const fetchCourses = useCallback(async (courseid, userid) => {
            const request = new XMLHttpRequest();
            request.onload = function() {
                if (request.readyState == 4 && request.status == 200) {
                    setData(request.response.data);
                }
            };
            request.open('GET', `https://staging.komunitasmea.com/api/course?course_id=${courseid}&user_id=${userid}`, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.withCredentials = true;
            request.responseType ='json';
            request.send(null);
        }, []);
    
    useEffect(()=>{
    if (router && router.query.lesson) {
        const [courseid, userid] = router.query.lesson.split('-');
        fetchCourses(courseid, userid);
    }
    }, [router, fetchCourses]);

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

      console.log(data);
    return (
    <div className='flex flex-col h-screen gap-3 items-center bg-[#58717b]'>
        <Header></Header>
        <main className='flex flex-col w-11/12 h-full gap-5 bg-[#58717b]'>
          
          {
              Object.keys(data).length? 
              <p className='text-2xl'>{data.chapters[chapterIndex].lessons[lessonIndex].title}</p> :
              <p>{'loading'}</p>
          }
            <div className="flex flex-col bg-[#253237] items-center gap-3 p-5 rounded-md">
                {
                    Object.keys(data).length?
                    <iframe className='rounded-md' title='videoplayer' src={data.chapters[chapterIndex].lessons[lessonIndex].link} 
                        width={1300} height={500}>
                    </iframe> :
                    <iframe title='videoplayer' src={''} 
                        width={1300} height={500}>
                    </iframe>
                }
                <p className='text-sm'>
                    {
                    Object.keys(data).length?
                    data.chapters[chapterIndex].lessons[lessonIndex].link:'loading'
                    }
                </p>

                <div className="flex flex-row gap-2">
                    {
                        Object.keys(data).length? 
                        <button className='w-[100px] h-[30px] outline-none bg-slate-400 rounded-lg 
                            text-white active:translate-y-1' id='prevBtn' onClick={(e)=>handlePreviousButton(e)}>Previous</button>:
                        <button id='prevBtn' >loading</button>
                    }
                    {   
                        Object.keys(data).length? 
                        <button className='w-[100px] h-[30px] outline-none bg-slate-400 rounded-lg 
                            text-white active:translate-y-1' id='nextBtn' onClick={(e)=>handleNextButton(e)}>Next</button>:
                        <button id='nextBtn' >loading</button>
                    }
                </div>
          </div>
        </main>
      </div>
    );
}
