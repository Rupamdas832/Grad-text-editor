import React, { useState } from "react";
import "./EditButtons.css";
import { AiOutlineLink } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { LinkModal } from "../Modal/LinkModal";

export const EditButtons = ({ editor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  //Handler to add link to a text
  const addLink = (text) => {
    if (text) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: text })
        .run();
      setIsModalOpen(false);
    }
  };

  //Handler to add image to editor
  const addImage = (text) => {
    if (text) {
      editor.chain().focus().setImage({ src: text }).run();
      setIsImageModalOpen(false);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="edit-buttons-div">
      {isModalOpen && (
        <LinkModal setIsModalOpen={setIsModalOpen} setLink={addLink} />
      )}
      {isImageModalOpen && (
        <LinkModal setIsModalOpen={setIsImageModalOpen} setLink={addImage} />
      )}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : "not-active"}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : "not-active"}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : "not-active"}
      >
        U
      </button>
      <button onClick={() => setIsModalOpen(true)} className="not-active">
        <AiOutlineLink />
      </button>
      {/*Button to remove link */}
      {editor.isActive("link") && (
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="is-active"
        >
          <AiOutlineLink />
        </button>
      )}
      <button onClick={() => setIsImageModalOpen(true)} className="not-active">
        <BiImage />
      </button>
    </div>
  );
};
