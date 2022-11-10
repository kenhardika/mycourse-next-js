
export default function 
    Card({
            data:{
                title, 
                image, 
                instructors: {0:{ name, photo }},
                instructor_role,
                course_id
                }, 
        navigateToDetailCard
        })
{
return (
<div className="bg-white rounded-xl w-[400px] grid grid-col-2">
    <div className="h-[200px] rounded-t-xl flex flex-col justify-center items-center bg-orange-400">
            <img className=" h-[120px] rounded-md " src={image} alt="" />
    </div>
    <div className="h-[200px] flex flex-col">
            <div className="text-center font-bold p-3 text-xl">
                {title}
            </div>
            <div className="flex flex-row items-center p-3 gap-4">
                <img className="h-[70px] rounded-full" src={photo} alt="" />
                <div className="flex flex-col">
                    <div>
                        {name}
                    </div>
                    <div className="text-xs">
                        {instructor_role}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button  className=" w-1/4 rounded-xl p-3 text-white font-bold bg-[#e47909]" 
                onClick={(e)=> navigateToDetailCard(e, course_id) }>Lanjut</button>
            </div>
    </div>
</div>
);
}