import '../../style/signup.css';
import mountain from '../../picture/mountain.jpg';
import { Signup } from '../../components/Signup';
import NaviBar from "../../components/Navbar";

function SignupPage() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid" src={mountain} style={{marginLeft:"100px", marginTop:"-130px", height:"750px", marginBottom:"100px"}} alt=""/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignupPage;
