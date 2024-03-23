import ProfileImg from "./../../assets/profile.png";
import s from "./header.module.css";
import { UserButton, useUser } from "@clerk/clerk-react"

function Header() {
    // const name = "Varshika";

    const userData = useUser();
    if (!userData.isLoaded || !userData.isSignedIn) {
        return (
            <div className={s.header}>
                <div>
                    <p className={s.header_tagline}>Loading...</p>
                </div>
    
                <div>
                    {/* <img src={ProfileImg} alt="" className={s.profile_img}/> */}
                    <UserButton showName/>
                </div>
            </div>
        );
    }

    const name = userData.user.firstName;
    return (
        <div className={s.header}>
            <div>
                <h1 className={s.header_heading}>Hello, <span className={s.header_heading_name}>{name}!</span></h1>
                <p className={s.header_tagline}>Your devices are under your control.</p>
            </div>

            <div>
                {/* <img src={ProfileImg} alt="" className={s.profile_img}/> */}
                <UserButton showName/>
            </div>
        </div>
    );
}

export default Header;