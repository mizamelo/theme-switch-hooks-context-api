import React from "react";

const SwitchTheme = ({ toggle }) => {
  return <button onClick={toggle()}>Alterar Tema</button>;
};

export default SwitchTheme;
