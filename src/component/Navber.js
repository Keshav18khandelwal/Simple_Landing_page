import React from 'react'
import {HashLink as Link } from 'react-router-hash-link';


export default function Navbar() {
  return (
    <div style={{"position":"fixed","zIndex":"1","width":"100vw"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#home">K-Kitchen</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#items">items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
