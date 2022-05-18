import { useState } from "react"


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, date, time })
        
        setText('')
        setDate('')
        setTime('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }} 
                />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input 
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }} 
                />
            </div>
            <div className="form-control">
                <label>Time</label>
                <input 
                    type="time" 
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value)
                    }} 
                />
            </div>
            
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
  )
}

export default AddTask