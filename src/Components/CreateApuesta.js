import React, { useState } from "react";
import Navbar from "./Navbar";

const CreateApuesta = (props) => {
  const { onCreate } = props;
  
  console.log(onCreate);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [monto, setMonto ] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const montoHandler = (e) => {
    setMonto(e.target.value);
  }

  const submitForm = () => {
    if (title !== "" && category !== "" && monto !=="") {
      onCreate(category, title);
    } else {
      alert("No has ingresado tu apuesta");
    }
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="title">Categoria</label>
            <input
              type="text"
              onChange={titleHandler}
              className="form-control"
              id="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Tipo</label>
            <input
              type="text"
              onChange={categoryHandler}
              className="form-control"
              id="category"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="monto">Monto </label>
            <input
              type="text"
              onChange={montoHandler}
              className="form-control"
              id="monto"
            />
          </div> */}
          

          <button onClick={() => submitForm()} className="btn btn-primary">
            Iniciar Apuesta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateApuesta;



