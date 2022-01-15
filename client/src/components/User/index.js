import React, { useState, useEffect } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";
import group from "../../public/images/group.png";
import logo from "../../public/images/logo.png";
import { useStoreContext } from "../../utils/GlobalState";

import Posts from '../Posts';

import CommentList from '../CommentList';


export default function Nav() {
  const [state, dispatch] = useStoreContext();
  console.log(state);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user);

  const [post, setPost] = useState([]);


  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/user" />;
  }

  if (loading) {
    return <div>Bark...Bark...Woof...</div>;
  }

  if (!user.username) {
    return <h4>Please login or Sign up to see this page!</h4>;
  }

  return (
    <div className="columns">
      <div className="container profile">
        <div className="section profile-heading">
          <div className="columns is-mobile is-multiline">
            <div className="column is-2">
              <span className="header-icon user-profile-image">
                <img alt="" src={logo}></img>
              </span>
            </div>
            <div className="column is-4-tablet is-10-mobile name">
              <div>
                <span className="title is-bold">{user.username}</span>
                <hr />
                <div
                  className="button is-primary is-outlined"
                  href="#"
                  id="edit-preferences"
                  >
                  Edit Preferences
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="hero is-link  is-small profile-options is-fullwidth">
          <div className="tabs is-fullwidth is-medium hero-body">
            <ul>
              <li className="link is-active">
                <a>
                  <span>Blog Posts</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          
            <div>
<Posts></Posts>
            
          </div>
        </div>
        <hr />
        <div>
          <img src={group}></img>
        </div>
      </div>
    </div>
  );
}
