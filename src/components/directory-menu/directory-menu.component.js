import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";

const DirectoryMenu = () => {
  const [sections, setSections] = useState([
    {
      title: "HATS",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "JACKETS",
      imageUrl:
        "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "SNEAKERS",
      imageUrl:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: "sneakers",
    },
    {
      title: "MENS",
      imageUrl:
        "https://images.unsplash.com/photo-1602972585840-3f45671765d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
      id: 4,
      size: "large",
      linkUrl: "mens",
    },
    {
      title: "WOMENS",
      imageUrl:
        "https://images.unsplash.com/photo-1576134526880-67f243e679d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80",
      id: 5,
      size: "large",
      linkUrl: "womens",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
