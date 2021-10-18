import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

const {data:images, loading} = useFetchGifs (category);

console.log(images)
  return (
    <>
      <h3 className= 'animate__animated animate__fadeIn'> {category}</h3>
       {loading && <p className= 'animate__animated animate__flash animate__repeat-3 animate__slow'>Loading</p>}
      <div className="gif-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
