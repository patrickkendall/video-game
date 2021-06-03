import React, { Fragment, useState } from "react"

import "./InputUser.css"

const InputUser = () => {

    const [last_name, setLastName] = useState("")
    const [first_name, setFirstName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [score, setScore] = useState("")
    const [email_id, setEmailId] = useState("")

    const onSubmitForm = async e => {
        try {
            e.preventDefault();
            const body = { last_name, first_name, age, score, email_id, gender };
            console.log(body);
            const response = await fetch(
                "https://video-game-987654321.herokuapp.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
            window.location = "/"
        } catch(err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <br></br>
            <h1 className="text-center mt-5">Input User</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text"  
                    placeholder="First name" 
                    value={first_name} 
                    onChange={e => setFirstName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Last name" 
                    value={last_name} 
                    onChange={e => setLastName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Age" 
                    value={age} 
                    onChange={e => setAge(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Gender" 
                    value={gender} 
                    onChange={e => setGender(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Score" 
                    value={score} 
                    onChange={e => setScore(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email_id} 
                    onChange={e => setEmailId(e.target.value)} 
                />
                <br></br>
                <button className="button btn btn-success">Add</button>
            </form>
        </Fragment>
    ) 
}

export default InputUser;