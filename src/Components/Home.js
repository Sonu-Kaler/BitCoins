import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
const Home = () => {
    const [dat, setData] = useState({});

    function getData() {
        axios.get("https://api.coincap.io/v2/assets")
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"10px"}}>BitCoins Details</h1>
            <DisplayData dat={dat} setData={setData} />
        </div>
    );
};

export default Home;
