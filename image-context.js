import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const state = useState([]);

  const [images, setImages] = state;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://pixabay.com/api/?key=24535986-e3429117d3e8e6507cfa180c6&image_type=photo&per_page=150"
      );
      let items = response.data.hits;
      setImages(items);
    })();
  }, [setImages]);

  
  async function search(keyword) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=24535986-e3429117d3e8e6507cfa180c6&q=${keyword}&image_type=photo&per_page=150`
    );
    setImages(response.data.hits);
  }
  return (
    <ImageContext.Provider value={{ state, search }}>
      {children}
    </ImageContext.Provider>
  );
};
