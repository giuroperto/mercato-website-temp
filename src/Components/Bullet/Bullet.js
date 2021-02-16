import React, { useEffect, useState, useContext } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

import './Bullet.css';

const Bullet = (props) => {

    const [ content, setContent ] = {
        ifood: false,
        whatsapp: false,
        email: false, 
        instagram: false,
    };

    useEffect(() => {
        setContent({ ...content, [props.linkData.type]: true });
    }, [props]);

    return (
        <div className="bullet">
            <a href={props.linkData.link}>
                <div className="content">
                    { `<${props.linkData.icon} className="${props.linkData.class}" />` }
                </div>
            </a>
        </div>
    );
};

export default Bullet;