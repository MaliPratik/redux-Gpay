import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFriends } from '../state/user/usersSlice';
import Addbalance from './Addbalance';

function Entry() {

    let users = useSelector((state) => state.users);

    let [user, setUser] = useState({name:"", mobile_no:"", balance:0});
    const dispatch = useDispatch();

    function handleChange(e) {
        e.preventDefault();
        setUser({ ...user, [e.target.id]: e.target.value });
    }

    function addNewFriends(e) {
        e.preventDefault();
        dispatch(addFriends(user));
    }

    return (
        <>
        <div className='row'>
            <div className='col-lg-6 border p-5 mb-5'>
                <h1>Add Friends</h1>
                <div className='form-group'>
                    Name:
                    <input type="text" value={user.name} id="name" onChange={(e) => { handleChange(e) }} className='form-control' ></input>
                </div>
                <div className='form-group  mt-2'>
                    Mobile no:
                    <input type="text" value={user.mobile_no} id="mobile_no" onChange={(e) => { handleChange(e) }} className='form-control' ></input>
                </div>
                
                <div className='form-group mt-2'>
                    <button onClick={(e) => { addNewFriends(e) }} className='btn btn-primary'>Add</button>
                </div>
            </div>
            <Addbalance/>
        </div>
            <div className='col-lg-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Mobile no</th>
                            <th >Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u, i) => {
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.mobile_no}</td>
                                    <td className='text-end'>{u.balance}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        
        </>
    )
}

export default Entry;