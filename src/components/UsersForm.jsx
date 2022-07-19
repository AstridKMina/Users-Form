import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")


    useEffect(() => {
        if (userSelected !== null) {
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setBirthday(userSelected.birthday)
        }
    }, [userSelected])


    const submit = (e) => {
        e.preventDefault();
        alert("You did submit");

        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday,
        }

        if (userSelected !== null) {
            alert("Actualizando");
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    reset();
                    deselectUser();
                })

        } else

            console.log(user)

        axios
            .post("https://users-crud1.herokuapp.com/users/", user)
            .then(() => {
                getUsers();
                reset();
            })
            .catch((error) => console.log(error.response));


    }

    const reset = () => {
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName("")
        setBirthday('')
    }


    return (
        <div className='userform'>
            <form onSubmit={submit}>
                <h1><i className="fa-solid fa-user"></i></h1>
                <div className='divInput'>
                    <label htmlFor="firstName"> <i className="fa-solid fa-spell-check"></i></label>
                    <input type="text"
                        id='firstName'
                        value={firstName} placeholder="First Name"
                        onChange={e => setFirstName(e.target.value)} />

                    <label htmlFor="lastName"> <i className="fa-solid fa-spell-check"></i></label>
                    <input type="text"
                        id='lastName'
                        value={lastName} placeholder="Last Name"
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className='divInput'>
                    <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> </label>
                    <input className='myInput' type="text"
                        id='email'
                        value={email} placeholder="Email"
                        onChange={e => setEmail(e.target.value)} />

                </div>
                <div className='divInput'>
                    <label htmlFor="password"> <i className="fa-solid fa-lock"></i></label>
                    <input className='myInput' type="password"
                        id='password'
                        value={password} placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='divInput'>
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                    <input className='myInput' type="date"
                        id='birthday'
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)} />
                </div>
                <div className='btn'>
                    <button >Upload</button>
                </div>
            </form>

        </div >

    );
};

export default UsersForm;