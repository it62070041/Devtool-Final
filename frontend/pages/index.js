import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

//components
import ResultPage from "../component/ResultPage";

import FormPage from "../component/FormPage";


const tests = () => {
    const goToRegister = () => {
        window.location = '/registerVaccines';
    }
  // const [dataList, setDataList] = useState([])

  // useEffect(() => {
  //     axios.get(`${SERVER_URL}/testData/all`).then(res => {
  //     console.log(res)
  //     setDataList(res.data)
  //     })
  //     // setMemberList(memberPayload)
  // }, [])

  return (
    <div style={{ textAlign: "center"}}>
      <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
        เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด <br></br>
        Connecting All Thais in the Fight Agianst COVID
      </h6>
      {/* <img
            src={require("../public/ais.PNG")}
            alt="main"
            width={"300%"}
            height={"100%"}
          /> */}
      <Button  type="submit" style={{ backgroundColor: "#b1d334", border: 0 }} onClick={() => goToRegister()}>
        ลงทะเบียนจองคิว - Register
      </Button>
      {/* <hr />
            <FormPage set={() => setDataList()} />
            <hr />
            {dataList.map((data, index)=> (
                <ResultPage key={`ResultPage-${index}`} id={data._id} firstName={data.firstName} lastName={data.lastName} />
            ))}
            {console.log(11,dataList)} */}
    </div>
  );
};

export default tests;
