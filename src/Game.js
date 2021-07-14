import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import avatar from "./images/avatar.jpeg";
import blood_sport from "./images/blood_sport.jpg";
import over_the_top from "./images/over_the_top.jpg";
import rambo from "./images/rambo.jpg";
import rocky from "./images/rocky.jpg";
import spiderman from "./images/spiderman.jpg";
import terminator from "./images/terminator.jpg";
import the_quest from "./images/the_quest.jpg";
import titanic from "./images/titanic.jpg";
import universal_soldier from "./images/universal_soldier.jpg";

const Game = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");
  const [strike, setStrike] = useState(1);
  const [score, setScore] = useState(0);
  const [myModal, setMyModal] = useState(false);
  const myFunct = () => {
    let myAvatar = <img className="myMoviePic" src={avatar} alt="avatar" />;
    let myBlood_sport = (
      <img className="myMoviePic" src={blood_sport} alt="blood sport" />
    );
    let myOver_the_top = (
      <img className="myMoviePic" src={over_the_top} alt="over the top" />
    );
    let myRambo = <img className="myMoviePic" src={rambo} alt="rambo" />;
    let myRocky = <img className="myMoviePic" src={rocky} alt="rocky" />;
    let mySpiderman = (
      <img className="myMoviePic" src={spiderman} alt="spiderman" />
    );
    let myTerminator = (
      <img className="myMoviePic" src={terminator} alt="terminator" />
    );
    let myThe_quest = (
      <img className="myMoviePic" src={the_quest} alt="the quest" />
    );
    let myTitanic = <img className="myMoviePic" src={titanic} alt="titanic" />;
    let myUniversal_soldier = (
      <img
        className="myMoviePic"
        src={universal_soldier}
        alt="universal soldier"
      />
    );
    let arr1 = [
      { id: 1, image: myAvatar, movieName: "avatar" },
      { id: 2, image: myBlood_sport, movieName: "blood sport" },
      { id: 3, image: myOver_the_top, movieName: "over the top" },
      { id: 4, image: myRambo, movieName: "rambo" },
      { id: 5, image: myRocky, movieName: "rocky" },
      { id: 6, image: mySpiderman, movieName: "spiderman" },
      { id: 7, image: myTerminator, movieName: "terminator" },
      { id: 8, image: myThe_quest, movieName: "the quest" },
      { id: 9, image: myTitanic, movieName: "titanic" },
      { id: 10, image: myUniversal_soldier, movieName: "universal soldier" },
    ];
    let randomResult = arr1[Math.ceil(Math.random() * arr1.length) - 1];
    setStrike(1);
    setData(randomResult.image, randomResult.movieName);
    console.log(data);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setResponse(value);
    console.log(response, "resposss");
  };

  const validateChange = () => {
    // console.log(response, 'responsefromvalidate');
    // console.log(data.props.alt, 'datafromvalidat');
    /****************************/
    let one = response.toLocaleLowerCase();
    let two = data.props.alt;
    // console.log(one, 'responsss');
    // console.log(two, 'dataaa');
    if (one === two) {
      swal({
        title: `The movie is ${one}`,
        text: "CORRECT!!!!",
        icon: "success",
        button: "Aceptar",
      });
      setResponse("");
      setStrike(1);
      setScore((prevState) => {
        return prevState + 3;
      });
      setMyModal(false);
    } else {
      setStrike((prevState) => {
        return prevState + 1;
      });
      swal({
        title: strike === 3 ? `GET OUT OF HERE!!!!!!` : `INCORRECT`,
        text:
          strike === 3 ? `The name of the movie is ${two}` : `Strike ${strike}`,
        icon: "error",
        button: "Cancelar",
      });
      if (strike === 3) {
        setMyModal(false);
      }
      setResponse("");
    }
  };

  const openModal = () => {
    setMyModal(true);
  };

  return (
    <div>
      <h1 className="main-Image">{data}</h1>
      <br />
      <div className="myButtons">
        <button
          className="btn btn-primary"
          onClick={() => {
            myFunct();
          }}
        >
          Movie Picture
        </button>

        <br />
        <h2>SCORE: {score}</h2>
        <br />

        <button
          className="btn btn-secondary"
          onClick={() => {
            openModal();
          }}
        >
          Your Answer
        </button>
      </div>

      <Modal isOpen={myModal}>
        <ModalHeader>
          <div>
            <h3>What's the name of the movie?</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name:</label>
            <input
              className="form-control"
              type="text"
              name="movieName"
              value={response}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => {
              validateChange();
            }}
          >
            Submit
          </button>
          {"  "}
          <button
            className="btn btn-danger"
            onClick={() => {
              setMyModal(false);
            }}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Game;
