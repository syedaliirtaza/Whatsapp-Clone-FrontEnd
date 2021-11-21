import React, { useState } from 'react';
import "./Chat.css";
import { Avatar ,IconButton } from '@mui/material';
import { SearchOutlined, SettingsInputAntenna } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chatHeader_info">
                {/* <Avatar />  */}
                    <h3 className="room_name">Room name</h3>
                    <p>Last seen at <span>{new Date().toLocaleTimeString()}</span></p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>    
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_reciever">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>  

                <p className="chat_message">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>    

                <p className="chat_message chat_reciever">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> 

                <p className="chat_message">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>    

                <p className="chat_message chat_reciever">
                    <span className="chat_name">Irtaza</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>                
             </div>

             <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
             </div>
        </div>
    )
}

export default Chat;
