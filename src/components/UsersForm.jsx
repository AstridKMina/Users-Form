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
            firstName: firstName,
            lastName,
            birthday

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
        <div>
            <form onSubmit={submit}>
                <h1>Users Form</h1>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="text"
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input type="text"
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text"
                        id='firstName'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="number"
                        id='lastName'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="birthday"> Birthday </label>
                    <input type="date"
                        id='birthday'
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>

        </div >

    );
};

export default UsersForm;