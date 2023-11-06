import React from "react";
import FormCrearPlato from "./components/FormCrearPlato";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 shadow">
            <FormCrearPlato/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
