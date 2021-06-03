import React, {Fragment, useEffect, useState} from "react"
import EditUser from "./EditUser"

import "./ListUser.css"

const ListUsers = () => {   
    
    const componentWillMount = () => {

    }

    const [users, setUsers] = useState([])
    
    const getUsers = async () => {
        try {

            const response = await fetch("https://video-game-987654321.herokuapp.com/users") 
            const jsonData = await response.json()

            setUsers(jsonData.Items)
            console.log(jsonData.Items)
        } catch(err) {
            console.error(err.message)
        }
    } 
    
    const deleteUser = async email_id => {
        var id = { email_id }
        console.log(email_id)
        try {
            const deleteUser = await fetch(`https://video-game-987654321.herokuapp.com/users`, {
                headers: { "Content-Type": "application/json"},
                method: "DELETE",
                body:JSON.stringify(id)
            })
          setUsers(users.filter(user => user.email_id !== id))
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Fragment>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Score</th>
                <th>Email</th>
                <th>Date Added</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.score}</td>
                    <td>{user.email_id}</td>
                    <td>{user.date_added}</td>
                    <td><button className="btn btn-danger" onClick={() => deleteUser(user.email_id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        </Fragment>
    )
}

export default ListUsers;