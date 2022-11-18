import React from 'react';
import ContentCards from './ContentCards';
import TitleClass from './TitleClass';

export default function MainContent({ children, title }) {
    return (
        <main className='flex flex-col w-11/12 h-auto bg-[#58717b] text-3xl'>
            <TitleClass name={title}/> 
            {children}
        </main>
    );
}

