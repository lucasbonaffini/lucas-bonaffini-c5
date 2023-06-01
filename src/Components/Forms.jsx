import React from "react";
import { useState } from "react";
import Card from "./Card";

const Forms = () => {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [song, setSong] = useState("");
  const [show, setShow] = useState(false)

  const validateName = (username) => {

    const whiteSpace = username.trim()
    const isValid = whiteSpace.length > 3;
    !isValid && alert("name length is not valid, try again");
    return isValid;
  };

  const validateProfile = (profile) => {
    const isValid = profile.length > 1;
    !isValid && alert("username length is not valid, try again");
    return isValid;
  };

  const validateSong = (song) => {
    const isValid = song.length > 6;
    !isValid && alert("song length is not valid, try again");
    return isValid;
  };

  const submitHandler = (e) => {

    e.preventDefault()

    const isValid = validateName(username) && validateProfile(profile) && validateSong(song)

    isValid && setShow(true)

  }

  return (
    <>
    <form className="card" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="name"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="instagram username" // insert your instagram username for render your pic
          onChange={(e) => setProfile(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label>Favorite Song</label>
        <input
          className="form-control"
          type="text"
          placeholder="song"
          onChange={(e) => setSong(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
    {show &&
    <div>
        <Card profile={profile} userName={username} />
        <h3>Your Favorite Song is {song}</h3>
    </div>
    }
    </>
    
  );
};

export default Forms;
