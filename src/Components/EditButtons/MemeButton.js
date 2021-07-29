import axios from "axios";
import React from "react";
import "./EditButtons.css";

export const MemeButton = ({ editor }) => {
  const key = process.env.REACT_APP_GIPHY_API_KEY;

  const searchMeme = async () => {
    let editorContent = editor.getHTML();
    try {
      const {
        data: { data },
        status,
      } = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${editorContent}&limit=1&offset=0&rating=g&lang=en`
      );
      if (status === 200) {
        editorContent = "";
        editorContent += `<img src="${data[0].images.downsized_medium.url}"/>`;
        editor.commands.setContent(editorContent);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="meme-div">
      <button className="is-active" onClick={searchMeme}>
        Meme Converter
      </button>
    </div>
  );
};
