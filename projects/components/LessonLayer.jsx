import React from 'react';

export default function LessonLayer({data, chapterIndex, lessonIndex, handleNextButton, handlePreviousButton}) {
    return (
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
                        text-white text-sm active:translate-y-1' id='prevBtn' onClick={(e)=>handlePreviousButton(e)}>Previous</button>:
                    <button id='prevBtn' >loading</button>
                }
                {   
                    Object.keys(data).length?
                    <button className='w-[100px] h-[30px] outline-none bg-slate-400 rounded-lg 
                        text-white text-sm active:translate-y-1' id='nextBtn' onClick={(e)=>handleNextButton(e)}>Next</button>:
                    <button id='nextBtn' >loading</button>
                }
            </div>
         </div>
    );
}
