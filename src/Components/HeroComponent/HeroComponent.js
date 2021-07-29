import React from "react";
import "./HeroComponent.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditButtons } from "../EditButtons/EditButtons";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import { MemeButton } from "../EditButtons/MemeButton";

const HeroComponent = () => {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder, Link, Underline, Image],
  });
  return (
    <div className="hero-section">
      <EditButtons editor={editor} />
      <MemeButton editor={editor} />
      <EditorContent editor={editor} className="text-area" />
    </div>
  );
};

export default HeroComponent;
