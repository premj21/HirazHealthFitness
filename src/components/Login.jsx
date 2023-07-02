import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [lgg,setllg]  = useState(false); 
  return (
    <>
      <section className="sectn">
        <div className="clr"></div>
        <div className="container-login">
          <div className="form">
            {!lgg ? (
              <>
                <h2>Login Form</h2>
                <form>
                  <div className="inputBox">
                    <input type="text" placeholder="UsernName"></input>
                  </div>
                  <div className="inputBox">
                    <input type="password" placeholder="password"></input>
                  </div>
                  <div className="inputBox">
                    <input type="submit" value="Login" />
                  </div>
                  <p className="forget">
                    Forgot Password?
                    <a href="/fogetpassword">Click here</a>
                  </p>
                  <p className="forget">
                    Dont have an account?
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setllg(!lgg)}
                    >
                      Sign up
                    </p>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2>Sign Up Form</h2>
                <form>
                  <div className="inputBox">
                    <input type="text" placeholder="UsernName"></input>
                  </div>
                  <div className="inputBox">
                    <input type="text" placeholder="Email"></input>
                  </div>
                  <div className="inputBox">
                    <input type="password" placeholder="password"></input>
                  </div>
                  <div className="inputBox">
                    <input type="submit" value="Sign Up" />
                  </div>
                  <p className="forget">
                    Have account ?
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setllg(!lgg)}
                    >
                      Click here
                    </p>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
