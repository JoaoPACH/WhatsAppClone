import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './Api';

import ChatListItem from './components/ChatListItem/ChatListItem';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChat from './components/NewChat/NewChat';
import Login from './components/Login/Login';
import InfoProfile from './components/InfoProfile/InfoProfile';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);

  const [showNewChat, setShowNewChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleProfile = () => {
    setShowProfile(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    // adicionar no banco de dados
    await Api.addUser(newUser);

    setUser(newUser);
  }

  if (user === null) {
    return (
      <Login onReceive={handleLoginData} />
    );
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <InfoProfile
          user={user}
          show={showProfile}
          setShow={setShowProfile}
        />

        <header>
          <img 
            className="header--avatar"
            onClick={handleProfile}
            src={user.avatar} 
            alt="" 
          />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }}/>
            </div>
            <div className="header--btn">
              <ChatIcon
                onClick={handleNewChat}
                style={{ color: '#919191' }}
              />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }}/>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">            
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />

            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatList">
          {chatlist.map((item, key) => (
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined &&
          <ChatWindow 
            user={user}
            data={activeChat}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}