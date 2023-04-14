import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../Actions/UserAction'
import './CreateUser.css'

const CreateUser = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [country, setCountry] = useState('India')

    const handleCreateUser = (e) => {
        e.preventDefault();
        dispatch(createUser(name, email, dob, country))
    }
    return (
        <>
            <div className="container">
                <h1>Create User</h1>
                <form onSubmit={(e) => handleCreateUser(e)}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' /> <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' /> <br />
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder='Enter Date of Birth' /> <br />
                    <select value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Select Country'>
                        <option selected value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="SriLanka">SriLanka</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Yemen">Yemen</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Hungary">Hungary</option>
                    </select>
                    <button type='submit'>Create User</button>
                </form>
                {/* <Link to='/edit'>Edit User</Link> */}
            </div>
        </>
    )
}

export default CreateUser