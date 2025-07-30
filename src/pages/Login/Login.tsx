import { useState } from 'react';

const Login: React.FC = () => {
    const [email, changeEmail] = useState("");
    console.log("The email is", email);

    return (
        <>
            <form>
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                /><br/>

                <input /><br/>

                <button>Submit</button>
            </form>
        </>
    );
};

export default Login;