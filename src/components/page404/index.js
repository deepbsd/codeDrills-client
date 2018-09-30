import React from 'react';
import { Link } from 'react-router-dom';
//import Style from './style';


export default function Page404(props) {
  

  return (

    <div >

        <h1>404</h1>
        <br /><br />
        <h3>These are not the droids you are looking for...</h3>
        <br /> <br /> <br />
        <h3><center><Link to="/">Return to Home Page</Link></center></h3>

    </div>

    );
}



