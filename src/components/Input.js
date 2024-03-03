import React, { useState } from "react";


let Input=({userdata,setdata,setuserData,setmessage})=>{



    let[userInput,getuserInput]=useState("");
function getinput(e){
getuserInput(e.target.value)

}
function formsubmit(e){
    e.preventDefault();
    setuserData(userInput)
let url=`https://api.postalpincode.in/pincode/${userInput}`
console.log(url)
fetch(url).then((res)=>res.json()).then((data)=>{
    // console.log(data[0].PostOffice);
    console.log(data)
    setmessage(data[0].Message)
    setdata(data[0].PostOffice)
}).catch((err)=>{
    console.log(err)
})
getuserInput("")
}

    return(
        <div>
            <h4>Enter Pincode</h4>
            <form onSubmit={formsubmit}>
                <input type="text" placeholder="Pincode" onChange={getinput} value={userInput} style={{
                    height:"25px",
                    width:"85vw",
                }}></input>
                <button style={{
                    background:"black",
                    color:"white",
                    borderRadius:"5px",
                    border:"solid yellow",
                    paddingInline:"25px",
                    textAlign:"center",
                    padding:" 6px",
                    marginLeft:"10px"
                }}>Lookup</button>
            </form>

        </div>
    )
}
export default Input;