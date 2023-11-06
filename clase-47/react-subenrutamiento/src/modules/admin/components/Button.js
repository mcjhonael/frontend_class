import React from 'react'

const Button = ({texto,clase}) => {
  const clace = `btn btn-outline-${clase} mr-5`

  return (
    <button type="submit" className={clace} >
      {texto}
    </button>
  );
}

export default Button
