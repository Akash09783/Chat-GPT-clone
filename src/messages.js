import user from "./assets/user-icon.png";
import bot from "./assets/chatgptLogo.svg";



export default function Message({ role, content }) {
  return (
    <div className="main">
 <img className="chatImg" src={role === 'assistant' ? bot : user} alt="" /><p className="txt">{content}</p>
    </div>
   
  );
}