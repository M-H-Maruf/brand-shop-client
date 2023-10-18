import { Helmet } from "react-helmet-async";
import Register from './Register';
import { useState } from "react";
import Login from './Login';

const Auth = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabLogInStyle = tabIndex?"bg-brand-primary":"text-brand-primary";
  const tabRegisterStyle = tabIndex?"text-brand-primary":"bg-brand-primary";

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>Nexus | Authentication</title>
      </Helmet>
      <div className="py-32">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            Log IN / REGISTER
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10 min-h-[600px]"
          >
            <div className="w-full grid grid-cols-2 border-b-2 border-black/50">
              <div onClick={()=>setTabIndex(1)} className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabLogInStyle}`}>Log in</div>
              <div onClick={()=>setTabIndex(0)} className={`p-4 w-full flex justify-center items-center text-3xl font-teko tracking-wide ${tabRegisterStyle}`}>Register</div>
            </div>
              {tabIndex?<Login></Login>:<Register></Register>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
