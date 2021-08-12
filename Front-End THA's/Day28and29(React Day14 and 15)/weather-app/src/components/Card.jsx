import React from 'react'
import {useSelector} from "react-redux";
function Card() {
    const Data=useSelector((state)=>state.placeData);
    return (
        <div className="container">
        <div className="row">
          
          <div className="weather">
            <div className="card">
              {Data.location ?(<div>
                <img src={Data.current.condition.icon} alt=""></img>
                <div className="temperature">{Data.current.temp_c}°C</div>
                <div className="condition-text">{Data.current.condition.text}</div>
                <h1 className="city">{Data.location.name}</h1>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Speed</div>
                      <div className="data">{Data.current.wind_kph} <span className="unit">KM p/h</span></div>
                      
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">{Data.current.humidity}<span className="unit">%</span></div>
                      
                    </div>
                    <div className="col">
                      <div className="title">Percipitation</div>
                      <div className="data">{Data.current.precip_in}<span className="unit">%</span></div>
                    </div>
                  </div>
                  </div>
                </div>

              ):
            <h2>No place Found</h2>  
            }
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Card
