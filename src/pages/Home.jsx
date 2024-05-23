import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Profile from "../components/Profile";
// import CardList from "../components/CardList";
import Card from "../components/Card";
import styled from "styled-components";

const Grid = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-template-columns: repeat(3, 200px);
  gap: 16px;
  padding: 15px;
`;

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.36.127.43:8080/imageAll")
      .then((res) => {
        console.log("API rendering check in Home.jsx", res);
        setImages(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("Images state in Home", images);

  const imgId = (e) => {
    images(e.target.id);
  };

  return (
    <>
      <Profile />
      <Grid>
        {images.map((image) => (
          <Card
            key={image.id}
            img={image.imageURL}
            name={image.imageName}
            text={image.imageText}
            id={image.id}
            onClick={(e) => imgId(e)}
          ></Card>
        ))}
      </Grid>

      {/* <CardList images={images} onClick={(e) => imgId(e)}></CardList> */}
    </>
  );
};

export default Home;
