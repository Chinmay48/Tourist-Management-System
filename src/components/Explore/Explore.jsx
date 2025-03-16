import React from 'react'

function Explore() {
 const destinations=[
    {
        id:1,
        Name:"Tajmahal",
        image:"https://wallpapercave.com/wp/IGksVVR.jpg",
        price: "₹5000",
        description:"The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is renowned for its exquisite architecture and symbolizes eternal love."

    },
    {
        id:2,
        Name:"Imagica",
        image:"https://www.traveldailymedia.com/assets/2018/06/Imagica.jpg",
        price:"₹2000",
        description:"Imagica is a popular theme park and water park located near Lonavala, Maharashtra. Known for thrilling water rides, wave pools, and adventure slides, it offers an exciting experience for visitors of all ages."

    },
    {
        id:3,
        Name:"Eiffel Tower",
        image:"http://cdn.history.com/sites/2/2015/04/hith-eiffel-tower-iStock_000016468972Large.jpg",
        price:"₹20000",
        description:"A world-renowned iron tower in Paris, offering breathtaking views of the city and known as a global symbol of romance and architecture.Best Destination to visit with people of different countries around"

    },
    {
        id:4,
        Name:"Matheran",
        image:"https://1.bp.blogspot.com/-pDhpBK1PCV8/V4N2lLVt6DI/AAAAAAAAD1I/_gZtRjXcjAMrStB11qvUa-OB72QxqvwtgCLcB/s1600/matheran.jpg",
        price:"₹5000",
        description:"Matheran is a serene hill station nestled in the Western Ghats of Maharashtra, famous for its lush greenery, scenic viewpoints, and toy train rides. It is Asia's only automobile-free hill station, providing a peaceful and eco-friendly atmosphere."

    },
    {
        id:5,
        Name:"Statue of Liberty",
        image:"https://wadetours.com/wp-content/uploads/2020/01/Statue-of-Liberty-2-scaled.jpg",
        price:"₹20000",
        description:"A colossal neoclassical statue in New York, gifted by France, representing freedom and democracy for immigrants arriving in America."

    },
    {
        id:6,
        Name:"Burj Khalifa ",
        image:"https://engineeringdiscoveries.com/wp-content/uploads/2020/02/Burj-portrait-lagre_tcm25-475749-768x1152.jpg",
        price:"₹20000",
        description:"The tallest building in the world, located in Dubai, offering panoramic views of the city from its observation decks."

    },
    {
        id:7,
        Name:"Manali",
        image:"http://image3.mouthshut.com/images/Restaurant/Photo/-47850_8284.jpg",
        price:"₹8000",
        description:"A picturesque hill station in Himachal Pradesh, known for snow-capped mountains and adventure activities."

    },
    {
        id:8,
        Name:"Darjeeling",
        image:"https://travelawaits.com/wp-content/uploads/2021/04/aerial-view-of-darjeeling-ind8c55e.jpg",
        price:"₹8000",
        description:"Known for its tea plantations and views of the Kanchenjunga mountain."

    },
    {
        id:9,
        Name:"Water Kingdom",
        image:"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/08/05122811/WaterKingdom_04-09-17_01.jpg",
        price:"₹5000",
        description:"Asia's largest water park with thrilling slides and wave pools."

    },
    {
        id:10,
        Name:"Kedarkantha Trek",
        image:"https://media1.thrillophilia.com/filestore/6kh8oyr70ms4zerndg07f61vr6z1_shutterstock_1610282374.jpg",
        price:"₹5000",
        description:"A popular winter trek with snow-covered trails."

    },
    {
        id:11,
        Name:"Himalayas",
        image:"http://3.bp.blogspot.com/-WXP4top5KTo/T0y8pvgNa5I/AAAAAAAAOYg/Zt6naac2KDA/s1600/Himalayas+10.jpg",
        price:"₹7000",
        description:"The highest mountain range in the world, home to Mount Everest."

    },
    {
        id:12,
        Name:"Western Ghats",
        image:"http://cdn.tourradar.com/s3/serp/original/212942_KnXrsfXy.jpg",
        price:"₹5000",
        description:" Known for lush green forests and waterfalls."

    },
 ]

  return (
    <div className="explore-container p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Tour Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="card border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.Name}
              className="card-image w-full h-48 object-cover"
            />
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold">{destination.Name}</h3>
              <p className="text-gray-700 mt-2">{destination.description}</p>
              <div className="card-footer flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-red-500">{destination.price}</span>
                <button className="book-button bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
