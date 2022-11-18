export default function Card({ data, navigateToDetailCard }){ 
return (
<div className="flex justify-center items-center" >
    <div className="bg-white rounded-xl w-[300px] grid grid-col-2">
        <div className="h-[200px] w-[300px] rounded-t-xl flex flex-col justify-center items-center bg-orange-400">
                <img className=" h-[120px] rounded-md " src={data.image} alt="" />
        </div>
        <div className="h-[200px] w-[300px] flex flex-col">
                <div className="text-center font-bold p-3 text-xl">
                    {data.title}
                </div>
                <div className="flex flex-row justify-center items-center p-3 gap-4">
                    <img className="h-[70px] rounded-full" src={data.instructors[0].photo} alt="" />
                    <div className="flex flex-col text-lg">
                        <div>
                            {data.instructors[0].name}
                        </div>
                        <div className="text-xs">
                            {data.instructor_role}
                        </div>
                    </div>
                </div>
                <div className="flex h-full justify-center items-center">
                    <button  className=" w-[100px] rounded-xl px-3 py-1 text-base active:translate-y-0.5 text-white font-bold bg-[#e47909]" 
                    onClick={(e)=> navigateToDetailCard(e, data.course_id) }>Lanjut</button>
                </div>
        </div>
    </div>
</div>
);
}
