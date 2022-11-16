import React from 'react';
import Card from './Card';


function ContentCards({data, navigateToDetailCard}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] rounded-md p-[40px] bg-[#253237]">
                {data?.map((item) => {
                  return <Card key={item.course_id} 
                          data = {item} 
                          navigateToDetailCard= {navigateToDetailCard}
                          />})
                }
        </div>
    );
}

export default ContentCards;