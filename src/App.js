import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Fetchdata from "./components/fetchdata";
import DisplayData from "./components/displaydata";
function App() {
  let [userdata, setuserData] = useState("");
  let [data, setdata] = useState([]);
  let [message, setmessage] = useState("");
  return (
    <div className="App">
      <Input
        userdata={userdata}
        setdata={setdata}
        setuserData={setuserData}
        setmessage={setmessage}
      />
     
      <DisplayData
        data={data}
        userdata={userdata}
        message={message}
        setdata={setdata}
      />
    </div>
  );
}

export default App;
