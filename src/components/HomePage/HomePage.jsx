import React from 'react'
import { useEffect,useState } from 'react'

function HomePage() {

const images=[
    "https://wallsdesk.com/wp-content/uploads/2018/03/Taj-Mahal-Wallpaper.jpg",
    "https://wallpapercave.com/wp/wp5396348.jpg",
    "https://wallpapercave.com/wp/t9CVQmD.jpg",
    "https://thumbs.dreamstime.com/z/jungle-boat-ride-disneyland-hong-kong-visitors-enjoying-trip-adventure-land-located-42623334.jpg",
    "https://www.visitdubai.com/-/media/gathercontent/poi/s/skydive-dubai/fallback-image/sky-dive-dubai-3.jpg",
    "https://irp-cdn.multiscreensite.com/fec25c4f/dms3rep/multi/scuba-diving-website-background-scubaland-adventures-website.jpg",
    "https://data2.1freewallpapers.com/detail/mountains-lakes-landscape.jpg",
    "https://where-i-live.com/wp-content/uploads/2020/04/Ban-Gioc-Waterfall-Vietnam-scaled.jpg",
    "https://wallpaperaccess.com/full/825191.jpg"
]

const [currentImgIndex,setCurrentImgIndex]=useState(0)

useEffect(()=>{
    const interval=setInterval(() => {
        setCurrentImgIndex((prevIndex)=>(prevIndex+1)%images.length)
    }, 3000);
    return () => clearInterval(interval);
},[])
    
  return (
    <div
      className="h-170 w-full bg-cover bg-center flex flex-col justify-center items-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImgIndex]})` }}
    >
      <h1 className="text-5xl font-bold mb-6">Explore the World with Us! 🌎</h1>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">Book Now</button>
    </div>
  )
}

export default HomePage
