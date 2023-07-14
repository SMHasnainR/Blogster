import React, { useEffect, useState } from "react";
import './style.css'
import {BaseUrl} from '../../Helper/index';

function UserMenu(props) {

    const [open, setOpen]  = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setOpen(false);
    //     };
    
    //     window.addEventListener("scroll", handleScroll);
    
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    //     }, []);

        return (
    <div>
        <div className="user-avatar" onClick={() => setOpen(!open)}>
            <img src={`${BaseUrl}/assets/images/author.jpg`} alt="" />
        </div>
        { open && props.children}
    </div>);
}

export default UserMenu;
