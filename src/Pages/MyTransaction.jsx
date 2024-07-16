import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { useNavigate } from 'react-router-dom';


const MyTransaction = () => {
    const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
    const[memos,setMemos] = useState([]);
    const{contract} = state;

    useEffect(() => {
        const memosMessage = async()=>{
            const memos = await contract.getMyMemos();
            setMemos(memos);
        }
        contract && memosMessage()
    }, [contract]);

    const navigateTo = useNavigate();


    useEffect(() => {

        if (!isUserAuthenticated) {
            navigateTo('/login')
        }
    }, [isUserAuthenticated, navigateTo]);
    return (
        <div>
            {memos.map((memo)=>{
                return <div key={memo.id}>

                    <h1>Address: {memo.from}</h1>
                    <h1>Message: {memo.message}</h1>
                    <h1>Time: {new Date(memo.timestamp * 1000).toLocaleString()}</h1>
                    
                </div>

            })}

        </div>
    )
}

export default MyTransaction
