import "./chatbot.css";
export default function Chatbot(){
  return(
    <div className="chat-container">
        <div className="chat-header">
            <h3>SBI Life Chatbot</h3>
        </div>
        <div className="chat-box" id="chat-box">
        </div>
        <div className="input-container">
            <input type="text" id="user-input" placeholder="Type a message..." onkeydown="checkEnter(event)"></input>
            <button id="send-btn" onclick="sendMessage()">Send</button>
        </div>
    </div>
  )
}