import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBalance } from '../state/user/usersSlice';

function Addbalance() {
    
    let users = useSelector((state) => state.users);
    
    let [user, setUser] = useState({
        name:"",
        balance:0
    });

    const dispatch = useDispatch();


    function handleChange(e){
        e.preventDefault();
        setUser({...user, [e.target.id]:e.target.value});
    }

    function transferAmount(e){
        e.preventDefault();
        dispatch(updateBalance(user));
        console.log(user);
    }
     
   

    return (
        <div className='col-lg-6 border p-5'>
            <h2>Addbalance</h2>
            <div className='form-group' >
                <select id="name" onChange={(e)=>{ handleChange(e) }} className='form-control'>
                   <option value="">Select Friend</option>
                    {
                        users.map((user, i)=>{
                         return <option key={i} value={user.name}>{user.name}</option>
                        })
                    }
                </select>
            </div>
            <div className='col-lg-12 mt-4'>
                Amount
               <input value={user.balance} id="balance" min="1" onChange={(e)=>{ handleChange(e) }} type="number" className="form-control" />
            </div>
            <div className='col-lg-12 mt-2'>
                <button onClick={(e)=>{ transferAmount(e) }} className='btn btn-primary mt-3'>Transfer</button>
            </div>

        </div>
    )
}

export default Addbalance;