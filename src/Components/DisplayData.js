// DisplayData.js
import React from "react";

const DisplayData = ({ dat, setData }) => {
    return (
        <div>
            <ul className="bd">
                {dat && dat.data && dat.data.map(item => (
                    
                        <ul className="container">
                            <li className="tb" key={item.id}>{item.name}</li>
                            <li className="tb">{item.symbol}</li>
                            <li className="tb">${parseFloat(item.priceUsd).toFixed(2)}</li> 
                            <li className="tb">{parseFloat(item.changePercent24Hr).toFixed(2)}%</li>
                            <li className="tb">{parseFloat(item.marketCapUsd)}</li>
                        </ul>
                 
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;
