import React from 'react'

export default function Carditem(props) {
    return (
        
        
            <div className="card Carditem container my-3" style={{ "width": "24rem", "height": "38rem", }}>
                <img src={props.curl} className="card-img-top" style={{ "height": "20rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.ctitle}</h5>
                    <p className="card-text">{props.ctext}</p>
                    <a href="/" className="btn btn-primary">view detail</a>
                </div>
            </div>
        
    )
}
