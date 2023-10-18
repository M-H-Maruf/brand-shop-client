import { Link } from "react-scroll";
import { AiTwotoneHome } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
import { TbBrandStrava } from "react-icons/tb";

const SideNav = () => {
  return (
    <div className="fixed top-1/2 z-50 right-0 -translate-y-1/2 m-2 bg-black/50 flex flex-col justify-center items-center p-2 py-6 rounded-full gap-6">
      <div className="tooltip tooltip-left tooltip-warning" data-tip="HOME">
        <Link spy={true} smooth={true} to="Banner">
          <AiTwotoneHome className="text-2xl text-white/40 hover:text-brand-primary"></AiTwotoneHome>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-warning" data-tip="BRANDS">
        <Link spy={true} smooth={true} to="Brands">
        <TbBrandStrava className="text-2xl text-white/40 hover:text-brand-primary"></TbBrandStrava>
        </Link>
      </div>
      <div
        className="tooltip tooltip-left tooltip-warning"
        data-tip="TESTIMONIALS"
      >
        <Link spy={true} smooth={true} to="Testimonials">
          <FaNoteSticky className="text-2xl text-white/40 hover:text-brand-primary"></FaNoteSticky>
        </Link>
      </div>
      <div className="tooltip tooltip-left tooltip-warning" data-tip="DEALS">
        <Link spy={true} smooth={true} to="Deals">
          <RiServiceFill className="text-2xl text-white/40 hover:text-brand-primary"></RiServiceFill>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;