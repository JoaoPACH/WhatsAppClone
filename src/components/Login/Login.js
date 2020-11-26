import React from 'react';
import './Login.css';

import Api from '../../Api';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return (
        <div className="login">
            <div className="logo">
                <WhatsAppIcon 
                    style={{
                        fontSize: 350,
                        color: '#4ADF83'
                    }}
                />
            </div>

            <div className="welcome">
                <h1>Bem-vindo ao WhatsApp Web!</h1>
                <button onClick={handleFacebookLogin}>Logar com Facebook</button>
            </div>
        </div>
    )
}