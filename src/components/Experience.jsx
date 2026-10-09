import { useState } from 'react'


function Experience() {
    const [experience, setExperience] = useState({
    companyName: "",
    title: "",
    responsibilities: "",
    startDate: "",
    endDate: ""
    })

    const [isEditing, setIsEditing] = useState(false)

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setExperience({
        ...experience,
        [name]: value
        })
    }

    return(
        <>{isEditing ? (
            <div>
                <h2>Experience</h2>
                <input name="companyName" value={experience.companyName} onChange={handleChange}/>
                <input name="title" value={experience.title} onChange={handleChange}/>
                <input name="responsibilities" value={experience.responsibilities} onChange={handleChange}/>
                <input name="startDate" value={experience.startDate} onChange={handleChange}/>
                <input name="endDate" value={experience.endDate} onChange={handleChange}/>
                <button onClick={() => setIsEditing(false)}>Submit</button>
            </div>
        ) : (
            <div>
                <h2>Experience</h2>
                <p>Company Name: {experience.companyName}</p>
                <p>Title: {experience.title}</p>
                <p>Responsibilities: {experience.responsibilities}</p>    
                <p>Start Date: {experience.startDate}</p>    
                <p>End Date: {experience.endDate}</p>    
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )}
        </>
    )
}

export default Experience