import React, { Fragment, useState } from "react"

import './App.css';

import ListUsers from './components/users/ListUsers'
import InputUser from "./components/users/InputUser"
import EditModal from "./components/users/EditModal"
import GenderScore from "./components/users/GenderScore"
import CumulativeScore from "./components/users/CumulativeScore"

function App() {

  const [visibility, setVisibility] = useState("hidden")

  const setModalVisibility = () => {
    if (visibility === "hidden") {
      setVisibility("visible")
    }
    else {
      setVisibility("hidden");
    }
  }
  
  return (
    <div className="App">
        <InputUser />
        <CumulativeScore />
        <ListUsers />
        <EditModal visibility={visibility} className="modal"/>
        <GenderScore />
    </div>
  );
}

export default App;
