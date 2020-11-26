import React, { useState } from 'react';
import './SearchMessage.css';

import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

export default ({data, show, setShow}) => {

    const [word, setWord] = useState('');

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div
            className="searchMessage"
            style={{
                right: show ? '0px' : '-415px'
            }}
        >
            <div className="searchMessage--header">
                <div className="searchMessage--backbutton">
                    <CloseIcon
                        onClick={handleClose} 
                        style={{
                            color: '#919191'
                        }}
                    />
                </div>
                <div className="searchMessage--headtitle">Procurar Mensagens</div>
            </div>
            <div className="searchMessage--area">
                <div className="searchMessage--input">

                    <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                    <input type="search" placeholder="Procurar uma mensagem" />

                </div>
            </div>
            <div className="searchMessage--results">
                Procure mensagens dentro de {data.title}.

            </div>
        </div>
    )
}