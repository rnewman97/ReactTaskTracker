import { FaTrash } from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} style = {{cursor: 'default'}} onDoubleClick={() => onToggle(task.id)}>
            <h3>{`${task.text}`} <FaTrash style= {{color: 'grey', cursor: 'pointer'}} onClick={() => onDelete(task.id)}></FaTrash></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
