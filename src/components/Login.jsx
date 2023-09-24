import React, {useState} from 'react';

const Login = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [error, setError] = useState("");

    const clearForm = () => {
        setEmail("");
        setPassword("")
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if(!validateEmail()){
            setError("Please enter a valid email")
        };
        setError(true)
    alert("Form submitted successfully");
    clearForm();
    }
   
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      

    return (
        <div>
            <form>
                {error ? <h4 style={{color: "red"}}>{error}</h4>: ""}
                <input 
                type="text" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
                 <button onClick={handlesubmit} type='submit'>Login</button>
            </form>
            
        </div>
    );
};


Login.propTypes = {

};


export default Login;
