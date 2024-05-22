import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Profile from "../components/Profile";
import CardList from "../components/CardList";

const Home = () => {
  const [image, setImage] = useEffect([]);

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageAll")
      .then((res) => {
        setImage(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <Profile></Profile>;
};

export default Home;
