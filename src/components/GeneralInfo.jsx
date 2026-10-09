import { useState } from 'react'

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [isEditing, setIsEditing] = useState(false)

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setGeneralInfo({
        ...generalInfo,
        [name]: value
        })
    }


    return(
        <>{isEditing ? (
            <div>
                <h2>General Info</h2>
                <input name="name" value={generalInfo.name} onChange={handleChange}/>
                <input name="email" value={generalInfo.email} onChange={handleChange}/>
                <input name="phone" value={generalInfo.phone} onChange={handleChange}/>
                <button onClick={() => setIsEditing(false)}>Submit</button>
            </div>
        ) : (
            <div>
                <h2>General Info</h2>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phone}</p>    
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )}
        </>
    )
}

export default GeneralInfo