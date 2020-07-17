import React from 'react'

const Task = (props) => {
    const { title, done, category ,monto,  id, deleteTask, completeTask } = props;
    return (
        <div className="card">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5 className="card-title">{done}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{monto}</p>
                {done
                    ? <button className="btn btn-secondary" onClick={() => completeTask(category, title,monto,  false, id)}>Deshacer</button>
                    : <button className="btn btn-success" onClick={() => completeTask(category, title, monto, true, id)}>Completar</button>}
                <button className="btn btn-danger" onClick={() => deleteTask(id)} >Eliminar</button>

            </div>
        </div>
    )
}

export default Task
