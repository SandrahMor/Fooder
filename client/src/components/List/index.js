import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

// this functional component passes the data children 
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
