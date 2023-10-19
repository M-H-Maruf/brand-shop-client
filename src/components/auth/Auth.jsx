import { Helmet } from "react-helmet-async";
import Register from './Register';
import { useContext, useState } from "react";
import Login from './Login';
import { BsGoogle } from "react-icons/bs";
import Particle from "../home/Particle";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabLogInStyle = tabIndex?"bg-brand-primary":"text-brand-primary";
  const tabRegisterStyle = tabIndex?"text-brand-primary":"bg-brand-primary";
  const {signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Success!",
          text: "Sign Up Succeeded With Google",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(result);
        navigate(location?.state ? location.state : '/');
        
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong",
          showConfirmButton: false,
          timer: 2500,
        });
        
      });
  };

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>Nexus | Authentication</title>
      </Helmet>
      <div className="py-32 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            Log IN / REGISTER
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10 min-h-[650px]"
          >
            <div className="w-full grid grid-cols-2 border-b-2 border-brand-primary">
              <div onClick={()=>setTabIndex(1)} className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabLogInStyle}`}>Log in</div>
              <div onClick={()=>setTabIndex(0)} className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabRegisterStyle}`}>Register</div>
            </div>
              {tabIndex?<Login></Login>:<Register setTabIndex={setTabIndex}></Register>}
              <div className="divider before:bg-white after:bg-white">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full glass group text-white hover:text-brand-primary"
          >
            Continue With Google
            <BsGoogle className="px-1 group-hover:text-brand-primary text-white w-10"></BsGoogle>
          </button>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default Auth;
