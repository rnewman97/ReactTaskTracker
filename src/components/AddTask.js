import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState()

    const [day, setDay] = useState()

    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input required type='text' placeholder='e.g. Do Laundry' value={text} onChange = {(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input required type='date' value={day} onChange = {(e) => setDay(e.target.value)} placeholder='Monday'></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                value={reminder} 
                onChange = {(e) => setReminder(e.currentTarget.checked)}
                checked = {reminder}></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'>

            </input>
            
        </form>
            
       
    )
}

export default AddTask
