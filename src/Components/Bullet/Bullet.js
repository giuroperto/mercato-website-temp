import React, { useEffect, useState, useContext } from 'react';
// import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
// import { SiIfood } from 'react-icons/si';
// import { HiOutlineMail } from 'react-icons/hi';

import './Bullet.css';

const Bullet = (props) => {
    const [ allProps, setAllProps ] = useState({
        type: '',
        icon: '',
        color: '',
        link: '',
    });

    switch (props.name) {
        case 'ifood':
            setAllProps({
                type: 'ifood',
                icon: '<SiIfood className="ifood"/>',
                color: 'red',
                link: '',
            });
            break;
        case 'whatsapp':
            setAllProps({
                type: 'whatsapp',
                icon: '<FaWhatsapp className="whatsapp"/>',
                color: 'green',
                link: '',
            });
            break;
        case 'email':
            setAllProps({
                type: 'email',
                icon: '<HiOutlineMail className="email"/>',
                color: 'blue',
                link: '',
            });
            break;
        case 'instagram':
            setAllProps({
                type: 'instagram',
                icon: '<FaInstagram className="instagram"/>',
                color: 'pink',
                link: '',
            });
            break;
    };

    return (
        <div className="bullet">
            <div className="content">
                { props.name && allProps.type && (
                    allProps.icon
                )}
                {/* <SiIfood className="ifood"/> */}
                {/* <FaWhatsapp className="whatsapp"/> */}
                {/* <HiOutlineMail className="email"/> */}
                {/* <FaInstagram className="instagram"/> */}
            </div>
        </div>
    );
};

export default Bullet;