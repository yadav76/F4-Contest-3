import "../App.css";

const Logout = () => {

    return(
        <div class="container">
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
            <h1 class="signup">Profile</h1>

            <div class="showName font">
                <span>Full Name: </span>
                <span id="showName"></span>
            </div>
 
            <div class="showEmail font">
                <span>Email: </span>
                <span id="showEmail"></span>
            </div>

            <div class="showPassword font">
                <span>Password: </span>
                <span id="showPassword"></span>
            </div>

        </div>
    </div>
    )
}

export default Logout