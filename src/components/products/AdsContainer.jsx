import { useEffect, useState } from "react";


const AdsContainer = () => {
  // retrieving brands data from database
  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);
  return (
    <div className="carousel w-96 mx-auto">
      {ads.map((ad, idx) => (
        <div key={idx} id={`slide${idx+1}`} className="carousel-item relative w-full">
  <img src={ad.ad} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${idx==0?ads.length:idx}`} className="btn btn-circle glass text-brand-primary">❮</a> 
      <a href={`#slide${idx==ads.length-1?'1':idx+2}`} className="btn btn-circle glass text-brand-primary">❯</a>
    </div>
              
        </div>
      ))}
    </div>
  );
};

export default AdsContainer;
