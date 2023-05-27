import { useState } from "react";
import "../App.css";
// import { useNavigate } from "react-router-dom";

let user = [];

const Login = () => {

    let [name,setName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [confirmPass, setConfirmPass] = useState("");
    let [error, setError] = useState("");
    let [message, setMessage] = useState("");

    function saveForm() {

        console.log("Error");

        if (!(name || email || pass || confirmPass)) {
            setError("All Fileds Are Mandatory!");
            setMessage("");
            return;
        }

        if (pass != confirmPass) {
            setMessage("");
            setError("Password & Confirm Password Doesn't Match");
            return;
        }

        const generateToken = () => {
            const str =
              "@#%$&^*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const length = 16;
            let token = "";
      
            for (let i = 0; i < length; i++) {
              const idx = Math.floor(Math.random() * str.length);
              token += str.charAt(idx);
            }
      
            return token;
          };

          let accessToken = generateToken();

          user = [
            name,
            email,
            pass,
            confirmPass,
            accessToken
        ]

        localStorage.setItem("user", JSON.stringify(user));

        //   console.log(accessToken);

        setError("");
        setMessage("Successfully Signed Up!")

        setTimeout(() => {
            window.location.href = "Logout"
          }, 2000);

        return;
    
    }

    
    
    // console.log(name,email,pass,confirmPass);

    return(

    <div className="container">
        <div class="header">
            <div class="header-left">
                <p>Header</p>
            </div>

            <div class="header-right">
                <p>Signup</p>
                <p>Profile</p>
            </div>
        </div>

        <div class="mid-body">
            <h1 class="signup">Signup</h1>
 
                <div class="name common">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <hr />

                <div class="email common">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>
                <hr />

                <div class="password common">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}

                    />
                </div>
                <hr />

                <div class="con-password common">
                    <label for="con-password">Confirm Password</label>
                    <input type="password" name="con-password" id="con-password" 
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    />
                </div>
                <hr />

                <div class="message">
                    <p id="error" value={error}>{error}</p>
                    <p id="success">{message}</p>
                </div>

                <button onClick={saveForm}>Singup</button>

        </div>
    </div>
    )
}

export default Login;