import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

import './Bullet.css';

const Bullet = (props) => {

    const [ content, setContent ] = useState({
        ifood: false,
        whatsapp: false,
        email: false, 
        instagram: false,
    });

    useEffect(() => {
        const resetIfood = props.linkData.type === 'ifood' ? true : false;
        const resetWhats = props.linkData.type === 'whatsapp' ? true : false;
        const resetEmail = props.linkData.type === 'email' ? true : false;
        const resetInsta = props.linkData.type === 'instagram' ? true : false;

        const resetAll = {
            ifood: resetIfood,
            whatsapp: resetWhats,
            email: resetEmail,
            instagram: resetInsta,
        };

        setContent({ ...resetAll });
    }, [props]);

    console.log(content);

    return (
        <div className="bullet">
            <a href={props.linkData.link}>
                <div className="content">
                    { 
                        content.ifood && <SiIfood className={`${props.linkData.class}`} /> 
                    }
                    {
                        content.whatsapp && <FaWhatsapp className={props.linkData.class} />
                    }
                    {
                        content.instagram && <FaInstagram className={props.linkData.class} />
                    }
                    {
                        content.email && <HiOutlineMail className={props.linkData.class} />
                    }
                </div>
            </a>
        </div>
    );
};

export default Bullet;

//     icon: 'SiIfood',
//     class: 'bullet--red',
//     icon: 'FaWhatsapp',
//     class: 'bullet--green',
//     icon: 'FaInstagram',
//     class: 'bullet--pink',
//     type: 'email',
//     icon: 'HiOutlineMail',
//     class: 'bullet--blue',