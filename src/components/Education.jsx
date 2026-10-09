import { useState } from 'react'

function Education() {
  const [education, setEducation] = useState({
  school: "",
  study: "",
  date: ""
  });

  const [isEditing, setIsEditing] = useState(false)

  function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setEducation({
        ...education,
        [name]: value
        })
    }

    return(
        <>{isEditing ? (
            <div>
                <h2>Education</h2>
                <input name="school" value={education.school} onChange={handleChange}/>
                <input name="study" value={education.study} onChange={handleChange}/>
                <input name="date" value={education.date} onChange={handleChange}/>
                <button onClick={() => setIsEditing(false)}>Submit</button>
            </div>
        ) : (
            <div>
                <h2>Education</h2>
                <p>School: {education.school}</p>
                <p>Study: {education.study}</p>
                <p>Date: {education.date}</p>    
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )}
        </>
    )
}

export default Education