import React, { useState } from "react";
import EpsilonLogo from "../img/EpsilonLogo.png";
import ProfileIcon from "../img/ProfileIcon.png"
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import googleLogo from "../img/googleLogo.jpg"
import facebookLogo from "../img/facebookLogo.png"

function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);  // Add this
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('');  // Add this
  const [surname, setSurname] = useState('');  // Add this

  const handleSignIn = () => {
    // In a real app, you would perform authentication here.
    setIsSignedIn(true);
    setShowPopup(false);
  };
  const handleSignUp = () => {
    setIsSignedIn(true);
    setShowPopup(false);
  };

  return (
    <div className="menu">
      <Link to="/"> <img src={EpsilonLogo} alt="Epsilon Logo" /> </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>

      {isSignedIn ? (
        <Link to="/profile"> <img src={ProfileIcon} width="50" height="30" alt="Profile Icon" /> </Link>
      ) : (
        <button onClick={() => setShowPopup(true)}>Sign In</button>
      )}

      {showPopup && (
        <div className="popup-backdrop">
          <div className="popup">
            <div className="popup-left">
              <img src={EpsilonLogo} alt="Epsilon Logo" />
              <h4>"Sign in or Sign up and join our family.      Let us show you the future."</h4>
            </div>
            <div className="popup-right">
              <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

              {isSignUp && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="social-login">
                <button className="google-login">
                  <img src={googleLogo} alt="Google Logo" />
                  Sign in with Google
                </button>

                <button className="facebook-login">
                  <img src={facebookLogo} alt="Facebook Logo" />
                  Sign in with Facebook
                </button>
              </div>

              {isSignUp ? (
                <button onClick={handleSignUp}>Sign Up</button>
              ) : (
                <button onClick={handleSignIn}>Sign In</button>
              )}

              <button onClick={() => {
                setIsSignUp(!isSignUp);
                setEmail('');
                setPassword('');
                setName('');
                setSurname('');
              }}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>

              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


export default Navbar;
