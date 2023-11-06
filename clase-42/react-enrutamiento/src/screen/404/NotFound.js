import React from "react";

const NotFound = (props) => {
  console.log(props);

  setTimeout(() => {
    props.history.push("/");
    
  },2000);
  const handleClick = () => {
    props.history.push("/")
  }
  return (
    <div>
      error de pantalla pacola
      <button onClick={handleClick}>Regresar al inicio</button>
    </div>
  );
};

export default NotFound;
