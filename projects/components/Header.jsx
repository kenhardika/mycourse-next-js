export default function Header(props) {
    return (
        <header>
            <div className="logo-layer">
                        <img src="https://www.komunitasmea.web.id/wp-content/uploads/2021/11/logo-rebrand-MEA-digital-marketing-o-3-300x75.png" alt="" />
                    </div>

            <div className="profile-layer">
                        <img src="https://picsum.photos/id/1005/200/300/" alt="" id='avatar' />
                        <p> Halo, User! </p>
            </div>
        </header>
    );
}