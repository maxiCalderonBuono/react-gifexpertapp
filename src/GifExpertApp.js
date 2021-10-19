import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { Footer } from "./components/Footer";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //const handleAdd = () => setCategories([...categories, "The Walking Dead"])

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>

      <Footer />
    </>
  );
};

export default GifExpertApp;
