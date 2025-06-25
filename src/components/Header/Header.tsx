import { Link } from 'react-router-dom';
import { useState } from 'react'
function Header(){
        const name = "Quincient";
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     function login(){
        setIsLoggedIn(true)
    

     }

     function logout(){
        setIsLoggedIn(false)
     }
     // console.log("user is ",isLoggedIn)
    return (
        <>
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/resume">Resume</Link>
                <Link to ="/feature">Feature</Link>
                <Link to ="/ecom">Ecom</Link>
                <Link to ="/robot">Robot</Link>
            </nav>
             {
                 isLoggedIn?
                 (
                    <span>
                        <span>
                            Welcome {name}
                        </span>

                        <span onClick={ () => logout()}>
                            logout


                        </span>
                    </span>
                 )
                 :
                 (<span>
                 
                <span>
                    register
                </span>
                &nbsp; &nbsp;
                
                <span onClick={ () => login()}>
                    login
                    

                </span>
            </span>)

                 }
            <br></br>
        </>
    );



}

export default Header