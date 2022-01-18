import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';

import { ADD_POST, REMOVE_POST } from "../../utils/mutations";
import group from "../../public/images/group.png";
import logo from "../../public/images/logo.png";
import StarButton from "../StarButton";
import Cart from "../Cart";
import Auth from '../../utils/auth';


export default function Home() {
  const [activeModal, SetActiveModal] = useState(false);


  const [pins, setPins] = useState([]);


  const [addPost] = useMutation(ADD_POST);
  const [removePost] = useMutation(REMOVE_POST);

  const toggleActive = () => {
    SetActiveModal(!activeModal);
  };

  const submitHandler = (event) => {
    const mapData = event.target.getAttribute("data");
    console.log(JSON.parse(mapData));
    setPins([...pins, JSON.parse(mapData)]);
  };

  console.log("pins", pins);


  const refreshPage = () => {
    window.location.reload();
  };

  const saveHandler = async (e) => {
    console.log(e.target);
    const id = e.target.value;
    console.log(id);
    const { data } = await addPost({variables: { id: id }});
    console.log(data);
    console.log(id);
  };

  const removeHandler = async (e) => {
    console.log(e.target);
    const id = e.target.value;
    console.log(id);
    const { data } = await removePost({variables: { id: id }});
    console.log(data);
    console.log(id);
  };

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
                    placeholder="Select your city">
                  </input>
                    {/*onChange={(e) => setCity(e.target.value)}*/}
            <div className="select">
              <select id="dropdown">
                <option id="selected">
                  <div className="selected">Select a City Near You</div>
                </option> 
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
                <option>Mackinac Island</option>
                <option>Marquette</option>
                <option>Midland</option>        
                <option>Mt. Pleasant</option>
                <option>Munising</option>
                <option>Muskegon</option>
                <option>Port Huron</option>
                <option>Sault Ste. Marie</option>
                <option>Saginaw</option>
                <option>Traverse City</option>
              </select>
            </div>
                 {/*</input>*/}
                </p>
                <p className="control">
                  <div
                    className="button is-warning is-round is-medium"
                    id="searchBtn"
                    onClick={submitHandler}
                  >
                    Search
                  </div>
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
                </div>
                <div className="column auto">
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

      {/* <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
      <script src="/javascript/api.js"></script>*/}
    </> 
  )
}