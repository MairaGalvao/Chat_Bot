import "./App.css";
import BotManager from "./Components/BotManager";
require("dotenv").config(); 
export const NUMBEO_ACCESS_KEY = process.env.REACT_APP_NUMBEO_KEY;
//numbeo is an api which I have access to the token with information of over 16.000 cities
//todo feat: create cities hint on input in bot manager 

function App() {
  return (
    <>
      <BotManager />
    </>
  );
}
export default App;
