import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

// can access Provider, (Consumer, not really) - GithubContext.Provider
const GithubContext = React.createContext();
// ^^ we don't wrap GithubContext around everything, because we want to set up more logic in it to be passed.

// The "Wrapper" that creates the context for the global state to be accesed.
const GithubProvider = ({ children }) => {
  // access the children passed from the GithubProvider that wraps the whole app (children). Variables passed in 'Value" will be accessible.

  return (
    <GithubContext.Provider value={"Hello"}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
