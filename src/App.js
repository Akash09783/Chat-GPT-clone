import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import getImgLogo from './assets/chatgptLogo.svg'
import {useState} from 'react'
import { API_KEY } from "./apikey";




function App() {


const [input, setInput] = useState("");


const [messages, setMessages] = useState([
  {
  text:"hi, I am chatGPT",
  isBot:true,
}
])
const handleSubmit = async () => {
  const userMessage = {
    role: "user",
    content: input,
  };

  setMessages((prevMessages) => [...prevMessages, userMessage]);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...messages, userMessage],
      }),
    });

    // Read the response body only once
    const responseBody = await response.text();
    console.log("Raw Response:", responseBody);

    // Parse the response as JSON
    const data = JSON.parse(responseBody);

   console.log(data)
    // ...

  } catch (error) {
    console.error("Error while fetching data from OpenAI API:", error);
  }
};




  return (


    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new Chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to Use An Api
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade To Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
          </div>
          <div className="chat bot">
          <img className="chatImg" src={getImgLogo} alt="" /><p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>



          {/* {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined} */}
          {messages.map((message, i) => (
  <div key={i} className={message.role === "assistant" ? "chat bot" : "chat"}>
    <img className="chatImg" src={message.role === "assistant" ? getImgLogo : userIcon} alt="" />
    <p className="txt">{message.content}</p>
  </div>
))}

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='send a message' value={input} onChange={(e)=>setInput(e.target.value)} /><button className="send" onClick={handleSubmit}><img src={sendBtn} alt="" /></button>

          </div>
          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
