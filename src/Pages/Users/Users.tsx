
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { UserType, setUsersAction } from '../../Redux/Users.redux'

const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector((state: any) => state.UsersReducer.result)

    const getStatus = (status: number) => {

        if (status === 1) {

            return 'Activo'
        } else {

            return 'Inactivo'
        }
    }

    const toggleStatus = (user: UserType) => {

        const newUsers = users.map((_user: UserType) => {

            if (_user._id === user._id) {

                user.status = user.status === 1 ? 0 : 1
            }

            return _user
        })

        dispatch(setUsersAction(newUsers))
    }

    return (
        <div className="page">
            <h1>
                Page Users
            </h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombres y apellidos</th>
                            <th>Correo electrónico</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: UserType, i: number) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => toggleStatus(user)}
                                        className={`btn btn-sm ${user.status === 1 ? 'btn-success' : 'btn-secondary'}`}
                                    >
                                        {getStatus(user.status)}
                                    </button>
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-secondary" to={`/users/${user._id}`}>Editar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
