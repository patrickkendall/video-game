import React, {Fragment, useState} from 'react'

import "./EditModal.css"

const EditModal = () => {
    const [last_name, setLastName] = React.useState("")
    const [first_name, setFirstName] = React.useState("")
    const [age, setAge] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [score, setScore] = React.useState("")
    const [email_id, setEmailId] = React.useState("")

    const updateUser = async e => {
        e.preventDefault();
        try {
          const body = { last_name, first_name, age, score, email_id, gender };
          const response = await fetch(
            `http://localhost:5000/users`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
        } catch (err) {
          console.error(err.message);
        }
      };

        return (
        <Fragment>
                <div>
                <div class="modal-content">
                        <span>
                            <h1>Edit User</h1>
                    <input 
                        type="text"  
                        placeholder="First name" 
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Last name" 
                        onChange={e => setLastName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Age" 
                        onChange={e => setAge(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Gender" 
                        onChange={e => setGender(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Score" 
                        onChange={e => setScore(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Email" 
                        onChange={e => setEmailId(e.target.value)}
                    />
                    <button className="btn btn-warning" onClick={e => updateUser(e)}>Edit</button>
                    </span>
                </div>
                </div>
        </Fragment>
        )
}

export default EditModal
