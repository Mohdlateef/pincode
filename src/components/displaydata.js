import React, { useState, useEffect } from "react";

let DisplayData = ({ data, userdata, message, setdata }) => {
  let [newData, setnewdata] = useState(data);

  useEffect(() => {
    setnewdata(data);
  }, [data]);

  // setfilterval(data);

  function filtervalue(e) {
    // filterval.forEach((iteam)=>{
    //     if(iteam.Name.includes('B')){
    //         console.log(iteam.Name);
    //     }
    // })

    let arr = data.filter((iteam) => iteam.Name.includes(e.target.value));
    setnewdata(arr);
  }
  console.log(newData);
  return (
    <div>
      { (
        <div>
          <h4>Pincode:{userdata}</h4>
          <h3>Message:{message}</h3>
          <form>
            <input
              type="text"
              placeholder="filter"
              onChange={filtervalue}
              style={{
                height:"25px",
                width:"85vw",
            marginBottom:"20px"}}
            ></input>
          </form>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {newData &&
              newData.map((iteam, index) => (
                <table
                  key="index"
                  style={{
                    border: "3px solid black",
                  }}
                >
                  <tr>
                    <th>name</th>
                    <tr>{iteam.Name}</tr>
                  </tr>
                  <tr>
                    <th>BranchType</th>
                    <tr>{iteam.BranchType}</tr>
                  </tr>
                  <tr>
                    <th>DeliveryStatus:</th>
                    <tr>{iteam.DeliveryStatus}</tr>
                  </tr>
                  <tr>
                    <th>District :</th>
                    <tr>{iteam.District}</tr>
                  </tr>
                  <tr>
                    <th>State :</th>
                    <tr>{iteam.State}</tr>
                  </tr>
                </table>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DisplayData;
