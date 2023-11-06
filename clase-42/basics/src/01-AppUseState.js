import React,{ useState }  from "react";
import Header from "./components/Header";

const App = () => {
  const mensaje = "REACT - CODE";
  const [contador, setContador] = useState(50)
  const sumar = (e) => {
    setContador(contador+1)
    console.log(contador);
  };
  const restar = () => {
    if (contador>0) {
      setContador(contador - 1);
    }
    console.log(contador);

  };

  console.log('dibujando el App =)');
  return (
    <>
      <Header></Header>
      <main>
        <h1>{mensaje}</h1>
        <button onClick={restar}>-1</button>
        <span>{contador}</span>
        <button onClick={sumar}>+1</button>
      </main>
      <div>Subtitulo</div>
    </>
  );
};

export default App;
