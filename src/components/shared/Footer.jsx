import { Link } from "react-scroll";
import { BsTwitter, BsYoutube, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div  data-aos="fade-up">
      <footer className="footer p-10 bg-[#0c0c0c] text-white">
        <aside className="flex flex-col gap-5">
          <Link spy={true} smooth={true} to="Banner"><img className="h-24 w-24 bg-brand-primary rounded-full" src="/logo.svg" alt="logo" /></Link>
          <p>
            NEXUS Ltd.
            <br />
            Your destination for top-tier tech since 1992.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
            <BsTwitter className="text-2xl"></BsTwitter>
            </a>
            <a>
            <BsYoutube className="text-2xl"></BsYoutube>
            </a>
            <a>
            <BsFacebook className="text-2xl"></BsFacebook>
            </a>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
