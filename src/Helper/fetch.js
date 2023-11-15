import { useContext } from "react";
import { MyContext } from "../App";
import { json } from "react-router-dom";

const backend = process.env.REACT_APP_BACKEND;
const header = process.env.REACT_APP_API_CODE;

export async function fetchreq(type,api,bd){
    try {
        console.log(backend);
        const url = `${backend}/${api}`;
        let res;
        if(type!="GET"){
            res = await fetch(url,{
                method: type,
                headers:{
                    "Content-type":"application/json",
                    "token":header
                },
                body: JSON.stringify(bd),
            })
        }else{
            res = await fetch(url,{
                method: type,
                headers:{
                    "Content-type":"application/json",
                    "token":header
                }
            })
        }
        const final = await res.json();
        if(final.status=="ok"){
            return final;
        }else{
            console.log(final.status,final?.err,final);
            return false;
        }
    } catch (error) {
        alert("server Error");
        
        console.log(error)
    }
}
// export async function uploadImageAws(name,img){
//     let fn = name.split(".");
//     let filetype = fn[fn.length - 1];
//     const urldata = await fetchreq("GET",`geturl/${filetype}`,{});
//     if(urldata){
//         const url = urldata.url;
//         const imgurl = url.split("?")[0];
//         const finalurl = imgurl.split("/");
//         await fetch(url, {
//             method: "PUT",
//             headers: {
//                 "content-type": "multipart/form-data",
//             },
//             body: img,
//         });
//         return finalurl[finalurl.length-1];
//     }else{
//         return false;
//     }
// }
export async function uploadImageAws(name,image){
    try {
        const formdata= new FormData();
        formdata.append('image',image);
        const url= process.env.REACT_APP_FILES;
        const response = await fetch("https://yourindianshop.com/upload", {
            method: "POST",
            headers: {
                "token":header
            },
            body: formdata,
        });
        console.log("after request",response);
        if(response.status==200){
            const dt = await response.json();
            return dt.name;
        }else{
            alert(response.statusText);
            return false;
        }
    } catch (error) {
        console.log("error",error);
        return false;
    }
}
export async function uploadMultipleImage(imgs){
    try {
        const formdata= new FormData();
        formdata.append('images',imgs);
        const url= process.env.REACT_APP_FILES;
        const response = await fetch("https://yourindianshop.com/upload", {
            method: "POST",
            headers: {
                "token":header
            },
            body: formdata,
        });
        // console.log("after request",response);
        if(response.status==200){
            const dt = await response.json();
            return dt.name;
        }else{
            alert(response.statusText);
            return false;
        }
    } catch (error) {
        console.log("error",error);
        return false;
    }
}
export async function jwtauth(){
    let jwt = localStorage.getItem("token");
    jwt = JSON.parse(jwt);
    if(jwt){
        const final = await fetchreq("POST","checkUsertoken",{token: jwt})
        if(final){
            return final;
        }
    }
    return false;   
}
export function getDate(time){
    const date = new Date(time);
    const hours = 5.5;
    const utcDate = new Date(date.getTime()+ hours*60*60*1000) ;
    const indianDate = utcDate.toLocaleString("en-Us", {
        timeZone: "Asia/Kolkata"
    });
    return indianDate;
}
export async function walletTransaction(amount,wid,note,user,setUser,nav){
    if(user?.Wallete<amount){
        alert("Please Recharge Your Wallate");
        nav("/Walete");
        return false;
    }else if(amount ==0){
        return true;
    }else if(!window.confirm(`₹${amount} will deducted from you wallete...`)){
        return false;
    }else{
        const body2 = {
            Cid : user.Cid,
            amount: 0-parseInt(amount),
            note: note,
            Wid: wid,
        }
        let dt2 = await fetchreq("POST","transaction",body2);
        if(dt2){
            await fetchreq("GET",`updateWallate/${user?.Cid}`,{})
            let us = user;
            us.Wallete = parseInt(user.Wallete)-parseInt(amount);
            setUser(us);
            return true;
        }else{
            alert("something Went Wrong...")
            return false;
        }
    }
}

// module.exports ={uploadImageAws,jwtauth,getDate,walletTransaction};
