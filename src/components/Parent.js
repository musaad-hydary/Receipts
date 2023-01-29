import React, { useEffect } from 'react';
import Overview from './Overview';
import Receipts from './Receipts';
import Upload from './Upload';
import { auth, provider } from "../firebase";
import { useStateValue } from '../StateProvider';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PieChart } from 'react-minimal-pie-chart';
function Parent() {
    const [{ user}, dispatch] = useStateValue();

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            window.location.href = '/';
        }
        });
    })

    return (
    <div>
        <Overview />       
        <Receipts />
        {/* <Upload/> */}
    </div>
    )
}

export default Parent