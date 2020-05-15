
import React from 'react'

import "./style.css";

// this functional component passes the data children 
function Container ({ children }) {
  return  <div  >
            {children}

          </div>;
  ;
}

export default Container;