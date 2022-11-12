export default function Header(props) {
    return (
        <header className="grid grid-cols-2 bg-[#253237] w-full h-[80px] text-gray-100">
            <div className="w-[400px] flex justify-center items-center">
                        <img className="w-auto h-10 " src="https://www.komunitasmea.web.id/wp-content/uploads/2021/11/logo-rebrand-MEA-digital-marketing-o-3-300x75.png" alt="" />
                    </div>

            <div className="flex flex-row justify-center items-center gap-5">
                        <img className=" h-[50px] w-[50px] rounded-full" src="https://picsum.photos/id/1005/200/300/" alt="" id='avatar' />
                        <p> Halo, User! </p>
            </div>
        </header>
    );
}