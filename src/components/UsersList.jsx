import React from 'react';

const UsersList =  ({ users, selectUser, deleteUser}) => {
    return (
        <div className='carslist'>
            {users.map(user => (
                <li key={user.id}>
                    <div>
                        <h3>Email: {user.email}</h3>
                    </div>
                    <div>
                        <h3>Password: {user.password}</h3>
                    </div>
                    <div>
                        <h3>First Name: {user.first_name}</h3>
                    </div>
                    <div>
                        <h3>Last Name: {user.last_name}</h3>
                    </div>
                    <div>
                        <h3>Birthday: {user.birthday}</h3>
                    </div>
                    <button onClick={() => selectUser(user)}> Edit</button>
                    <button onClick={() => deleteUser(user.id)}> Delete </button>

                </li>
            ))}
        </div>
    );
};

export default UsersList;