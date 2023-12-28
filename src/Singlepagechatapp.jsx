import React, { useState } from "react";
import "./chatapp.css";
import contacts from "./contacts";
import { MdOutlinePersonAdd , MdSearch , MdGroups , MdContacts , MdArchive , MdSend, MdOutlineEmail,MdMyLocation , MdOutlinePhoneAndroid} from "react-icons/md";
import {VscThreeBars} from "react-icons/vsc";
import {PiClockCounterClockwiseBold} from "react-icons/pi"
import {BiSolidCircle} from "react-icons/bi"
import {TiDelete} from "react-icons/ti"

const Singlepagechatapp = () => {
  const [message, setMessage] = useState("");
  const [array, setArray] = useState([]);
  const [automsg,setAutomsg]=useState("Typing.")
  const [msgcount,setMsgcount]=useState(0);
  // console.log(array)
  const storingdata=()=>{
    setArray([...array, { id: array.length, inputvalue: message }]);
  }
  const automatedmsg=()=>{

    setAutomsg("Thanks for contacting.")
  }
  // const typefn=()=>{
    
  //           setAutomsg('Typing')
   
  // }
  const deletemsg = (m) => {
    let removemsg = array.filter((r) => r.id !== m.id);
    setArray(removemsg);
    console.log(removemsg);
  };
  const Profiles=(props)=>{
    return(
      <div className="prof">
        <img src={props.img} alt='..' />
            <p>{props.name}<br/><span>{message}</span></p>
            <h6>{array.length}</h6>
      </div>
    );
  }
  return (
    <div className="chatapp">
      <div className="contactshome">
        <div className="appheading">
          <h6 className="appname">ChatApp</h6>
          <div>
          <MdOutlinePersonAdd className="addcontact"/>
          <VscThreeBars/>
          </div>
        </div>
        <input className="searchbox" type="text" placeholder="Search..." />
        <MdSearch className="searchicon"/>
        <div className="multipleiconsdiv">
          <PiClockCounterClockwiseBold/>
          <MdGroups/>
          <MdContacts/>
          <MdArchive/>
        </div>
        <div className="recentcontacts">
          {
            contacts.map((c)=>(
              <div>
                <Profiles className="profilecontacts" name={c.name} img={c.image}></Profiles>
              </div>
            ))
          }
        </div>
      </div>
      <div className="chatContentdiv">
        <div className="chatProfilediv">
          <img src={require('./images/p2.jpg')} alt='..' />
          <p>Dr. Shan</p>
        </div>
        <div className="messagesdiv">
          
          {array.map((m) => (
            <div className="messageHistory">
              <div className="sender">
                <p>{m.inputvalue}</p>
                <button onClick={() => deletemsg(m)}><TiDelete className="deleteicon"/></button>
              </div>
              <div className="receivermsgdiv">
              <img src={require('./images/p2.jpg')} alt='..' />
              <p className="receiver">{automsg}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="inputmsgdiv">
          <input
            type="text"
            className="inputtag"
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button id="sendbtn" onClick={() =>{ storingdata();automatedmsg();}
              // setArray([...array, { id: array.length, inputvalue: message }])
            }
          >
            <MdSend className="sendicon"/>
          </button>
        </div>
      </div>
      <div className="profilediv">
            <img src={require('./images/p2.jpg')} alt='...'/>
            <h1>Dr. Shan</h1>
            <div className="profiledetailsdiv">
              <div>
              <MdMyLocation />
              <p>california</p>
              </div>
              <div>
              <MdOutlinePhoneAndroid/>
              <p>123-456-7890</p>
              </div>
              <div>
              <MdOutlineEmail/>
              <p>shahdr@gmail.com</p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Singlepagechatapp;
