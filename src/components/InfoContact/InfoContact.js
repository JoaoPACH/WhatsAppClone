import React from 'react';
import './InfoContact.css';

import CloseIcon from '@material-ui/icons/Close';

export default ({data, show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div
            className="infoContact"
            style={{
                right: show ? '0px' : '-415px'
            }}
        >
            <div className="infoContact--head">
                <div
                    onClick={handleClose}
                    className="infoContact--backbutton"
                >
                    <CloseIcon 
                        style={{ color: '#FFFFFF' }}
                    />
                </div>
                <div className="infoContact--headtitle">Informações do contato</div>
            </div>

            <div className="infoContact--information">
                <div className="infoContact--avatar">
                    <img src={data.image} alt="" />
                </div>
                <div className="infoContact--name">
                    {data.title}
                </div>
            </div>
        </div>
    )
}