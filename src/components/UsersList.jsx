import React from 'react';

const UsersList = ({ users, selectUser, deleteUser }) => {


    return (

        <div className='userslist'>
            {users.map(user => (
                <div className='division' key={user.id}>
                    <div className='myDivision'>
                        <h2>Information <i className="fa-solid fa-circle-info"></i></h2>
                        <li >
                            <p><span> First Name:</span> {user.first_name}</p>

                            <p><span>Last Name:</span> {user.last_name}</p>

                            <p><span>Email:</span> {user.email}</p>

                            <p><span>Password:</span> {user.password}</p>

                            <p><span>Birthday:</span> {user.birthday}</p>
                        </li>
                    </div>
                    <div className='buttons'>
                        <button className='button' onClick={() => selectUser(user)}><i className="fa-solid fa-pen"></i></button >

                        <button className='button' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button >
                    </div>

                </div>

            ))}

        </div >

    );
};

export default UsersList;