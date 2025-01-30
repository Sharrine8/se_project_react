import React from "react";

const CurrentUserContext = React.createContext({
  name: "",
  avatar: "",
});

export default CurrentUserContext;
