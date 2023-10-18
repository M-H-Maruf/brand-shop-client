import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nexus | Home</title>
      </Helmet>
      <div className="relative top-0 left-0 right-0 overflow-hidden">
        this is home
      </div>
    </div>
  );
};

export default Home;
