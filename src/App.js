import SmartChat from "./Components/SmartChat";
import "./App.css";
// import Bot  from "./Components/Bot";
// import Customer  from "./Components/Customer";
import BotManager from "./Components/BotManager";
require("dotenv").config(); //todo maybe can be removed
export const NUMBEO_ACCESS_KEY = process.env.REACT_APP_NUMBEO_KEY;

function App() {
  return (
    <>
      {/* <SmartChat/> */}
      {/* <Bot msg='alo'/>
<Customer input='alsaso'/> */}
      <BotManager />
    </>
  );
}
export default App;
