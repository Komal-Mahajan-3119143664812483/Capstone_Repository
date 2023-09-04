import React, { useState } from 'react'

const ListUsersComp = () => {
    const [users, setUsers] = useState([])

  return (
    <div className="container">
        <h2 className="text-center"> List Of Users</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th> User Id</th>
                <th> User Name</th>
                <th> User Email</th>
                <th> User Role</th>
            </thead>
            <tbody>
                {
                    users.map(
                        users =>
                        <tr key = {users.id}>
                            <td> {users.id}</td>
                            <td> {users.name}</td>
                            <td> {users.email}</td>
                            <td>{users.role}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ListUsersComp
