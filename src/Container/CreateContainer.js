import React from "react";
import "./ApuestaContainer";
import axios from "axios";
import { TaskClass } from "../utils/TaskClass";
import { useHistory } from "react-router-dom";
import "./Maincontainer";
import CreateApuesta from "../Components/CreateApuesta";

const CreateContainer = () => {
  const URL = "https://apuestas-d1f27.firebaseio.com/task.json";
  const history = useHistory();

  const onCreate = (category, title, monto) => {
    const newTask = new TaskClass(category, title, monto, false, "a");
    axios.post(URL, newTask.a)
      .then(() => history.push("/Apuesta"))
      .catch((error) => alert(error));
  }

  return (
    <div>
      <main className="main-container">
        <div>
          <CreateApuesta onCreate={onCreate}/>
        </div>
      </main>
      </div>
  );
};

export default CreateContainer;
