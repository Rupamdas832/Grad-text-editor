import React from "react";
import "./TextArea.css";
import { EditorContent } from "@tiptap/react";

export const TextArea = ({ editor }) => {
  return (
    <div className="text-area">
      <EditorContent editor={editor} />
    </div>
  );
};
