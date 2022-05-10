import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

//components
import FormData from "../component/FormData";


const tests = () => {
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
        ข้อมูลผู้ลงทะเบียนรับวัคซีน
      </h6>
      <FormData/>

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
