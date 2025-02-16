import {useState,React }from 'react'
import './Dashboard.css';
import '../assets/banner1.jpg';
import { FaCoffee, FaMugHot } from "react-icons/fa";
import { GiCoffeeCup, GiCupcake } from "react-icons/gi";

function Dashboard() {
  const categories = [
    { id: 1, name: "Hot Coffee", icon: <FaMugHot className="text-3xl text-brown-700" /> },
    { id: 2, name: "Cold Coffee", icon: <FaCoffee className="text-3xl text-brown-700" /> },
    { id: 3, name: "Cup Coffee", icon: <GiCoffeeCup className="text-3xl text-brown-700" /> },
    { id: 4, name: "Dessert", icon: <GiCupcake className="text-3xl text-brown-700" /> },
  ];
  const coffeeItems = [
    { id: 1, name: "Lungo Coffee", price: 199, image: "/images/lungo-coffee.jpg" },
    { id: 2, name: "Dalgona Coffee", price: 159, image: "/images/dalgona-coffee.jpg" },
    { id: 3, name: "Iced Coffee", price: 149, image: "/images/iced-coffee.jpg" },
    { id: 4, name: "Filter Coffee", price: 59, image: "/images/filter-coffee.jpg" },
  ];
  const dessertItems = [
    { id: 1, name: "Gulab Jamun", price: 199, image: "/images/gulab-jamun.jpg" },
    { id: 2, name: "Chocolate Tiramisu", price: 250, image: "/images/chocolate-tiramisu.jpg" },
    { id: 3, name: "Churros", price: 170, image: "/images/churros.jpg" },
    { id: 4, name: "Australian Lamingtons", price: 280, image: "/images/australian-lamingtons.jpg" },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      review: "Absolutely love the coffee here! The aroma and taste are just perfect. Highly recommend the Lungo Coffee!",
      rating: 5,
      image: "/images/customer1.jpg",
    },
    {
      id: 2,
      name: "Riya Shah",
      review: "The desserts are amazing! The Chocolate Tiramisu was heavenly. Will definitely visit again.",
      rating: 4,
      image: "/images/customer2.jpg",
    },
    {
      id: 3,
      name: "Kabir Verma",
      review: "Great ambiance and friendly staff. The iced coffee was refreshing and delicious.",
      rating: 5,
      image: "/images/customer3.jpg",
    },
    {
      id: 4,
      name: "Ananya Kapoor",
      review: "The best coffee shop in town! Loved the cozy atmosphere and quick service.",
      rating: 4,
      image: "/images/customer4.jpg",
    },
  ];
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with: ${email}`);
    setEmail(""); 
  };
  return (
    <>
    <div className='First class'>
    <section className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white" 
      style={{ 
        backgroundImage: 'banner1.jpg'
       }} 
    >
      <div className="text-center bg-black bg-opacity-50 p-6  rounded-lg">
        <h1 className="text-4xl font-bold">We serve the richest coffee in the city!</h1>
        <p className="mt-2 text-lg">Experience the finest blends and flavors.</p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
          Order Now
        </button>
      </div>
    </section>
    </div>

    <div className='Second class'>
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="mb-2">{category.icon}</div>
              <p className="text-lg font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

    <div className='Third class'>
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Special Coffee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coffeeItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Rs. {item.price}</p>
              <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

    <div className='Fourth class'>
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Special Desserts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dessertItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Rs. {item.price}</p>
              <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    <div className='Fifth class'>
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
              <div className="flex justify-center mt-3">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    <div className='Sixth class'>
    <section className="bg-yellow-500 text-white py-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold">Stay Updated with Our Special Offers!</h2>
        <p className="mt-2 text-lg">Subscribe to our newsletter for the latest coffee trends and exclusive deals.</p>
        
        <form onSubmit={handleSubscribe} className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 w-64 rounded-l-md text-gray-700 focus:outline-none"
          />
          <button type="submit" className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-r-md text-white font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
    </div>
    </>
  )
}

export default Dashboard


