import '../style/signup.css';
import mountain from '../picture/mountain.jpg';
import { Signin } from '../components/Signin';
import NaviBar from "../components/Navbar";
import { Link } from "react-router-dom";

function SigninPage() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signin />
          <br></br>
          <Link to="/SignupPage" style={{marginLeft:"30px", color:"gray", textDecoration: "none", color: "#DD0CFF"}}>Create Account?</Link>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid" src={mountain} style={{marginLeft:"100px", marginTop:"-30px", height:"540px"}} alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SigninPage;
