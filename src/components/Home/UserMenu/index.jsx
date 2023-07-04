import React, { useState } from "react";
import './style.css'


function UserMenu(props) {

    const [open, setOpen]  = useState(false);

    return (
    <div>
        <div className="user-avatar" onClick={() => setOpen(!open)}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/author.jpg`} alt="" />
        </div>
        { open && props.children}
    </div>);
}

export default UserMenu;
