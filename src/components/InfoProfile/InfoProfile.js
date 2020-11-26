import React from 'react';
import './InfoProfile.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div 
            className="infoProfile"
            style={{
                left: show ? '0px' : '-415px'
            }}
        >
            <div className="infoProfile--head">
                <div
                    onClick={handleClose}
                    className="infoProfile--backbutton"
                >
                    <ArrowBackIcon style={{ color: '#FFFFFF' }} />
                </div>
                <div className="infoProfile--headtitle">Perfil</div>
            </div>
            <div className="infoProfile--information">
                <div className="infoProfile--avatar">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="infoProfile--name">
                    {user.name}
                </div>
            </div>
        </div>
    )
}