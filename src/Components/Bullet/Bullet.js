import React, { useEffect, useState, useContext } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

import './Bullet.css';

const Bullet = (props) => {

    return (
        <div className="bullet">
            <div className="content">
                { props.linkData.icon && (
                    props.linkData.icon
                ) }
                {/* Bullet */}
                {/* { LINKSCONTENT.IFOOD.icon }
                { LINKSCONTENT.WHATSAPP.icon }
                { LINKSCONTENT.INSTAGRAM.icon }
                { LINKSCONTENT.EMAIL.icon } */}
            </div>
        </div>
    );
};

export default Bullet;