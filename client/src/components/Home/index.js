import React, { useState, useEffect } from "react";
//import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import group from "../../public/images/group.png";
import logo from "../../public/images/logo.png";
//import { ADD_BREWERY, REMOVE_BREWERY } from "../../utils/mutations";
import StarButton from "../StarButton";
import Cart from "../Cart";
import Auth from '../../utils/auth';

//export default function Home() {


//  const refreshPage = () => {
//    window.location.reload();
//  };

  return (
    <>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-full is-centered">
            <img
              src={logo}
              alt="Logo"
              className="images image is-128x128 is-inline-block"
            ></img>
            <h1 className="title text-light">MiDogMap</h1>
            <h2 className="subtitle text-light">
            Info for your dog! because face it, they are in charge.            
            </h2>
            <div className="box">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Select your city"
                    //onChange={(e) => setCity(e.target.value)}
            <div class="select">
              <select id="dropdown">
                <option id="selected"><a class="selected">Select a City Near You</a></option> 
                <option>Alpena</option>
                <option>Ann Arbor</option>
                <option>Bay City</option>
                <option>Detroit</option>
                <option>Escanaba</option>
                <option>Flint</option>
                <option>Grand Rapids</option>
                <option>Holland</option>
                <option>Houghton</option>
                <option>Kalamazoo</option>
                <option>Lansing</option>
                <option>Ludington</option>
                <option>Mackinac Island<option>
                <option>Marquette</option>
                <option>Midland</option>        
                <option>Mt. Pleasant</option>
                <option>Munising</option<
                <option>Muskegon</option>
                <option>Port Hurton</option>
                <option>Sault Ste. Marie</option>
                <option>Saginaw</option>
                <option>Traverse City</option>
              </select>
            </div>
                  ></input>
                </p>
                <p className="control">
                  <a
                    className="button is-warning is-round is-medium"
                    id="searchBtn"
                    onClick={submitHandler}
                    //key={brewery.id}
                  >
                    Search
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={activeModal ? "is-active" : "modal"} id="modalBox">
        <div className="modal-background">
          <div className="modal-card">
            <header className="modal-card-head has-background-primary">
              <p className="modal-card-title">MiDogMap</p>
              <button
                className="delete"
                aria-label="close"
                onClick={toggleActive}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column is-half brew-data">
                  <img src={logo} />
//
                </div>
                <div className="column auto">
//
                </div>
              </div>
            </section>
            <footer className="modal-card-foot has-background-info">
              <button
                className="button is-info is-light is-fullwidth"
                id="refresh"
                onClick={refreshPage}
              >
                Clear
              </button>
              <button
                className="button is-info is-light is-fullwidth"
                id="close"
                onClick={toggleActive}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
      <script src="/javascript/api.js"></script>
    </>
  );
}
