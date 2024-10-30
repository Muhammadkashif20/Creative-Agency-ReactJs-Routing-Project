import React from "react";
import image1 from '../Components/image/1st.jpeg'
import image2 from '../Components/image/2nd.jpeg'
import image3 from '../Components/image/3rd.jpeg'
import image4 from '../Components/image/4th.jpeg'
import image5 from '../Components/image/5th.jpeg'
import image6 from '../Components/image/6th.png'
import image7 from '../Components/image/7th.jpeg'
import image8 from '../Components/image/8th.jpeg'
import image9 from '../Components/image/9th.jpeg'
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating stunning and responsive websites that engage users.",
    image:image1 ,
  },
  {
    id: 2,
    title: "Branding",
    description:
      "Building strong brands through creative strategies and design.",
    image: image2,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Boosting online presence and driving traffic to your business.",
    image: image3,
  },
  {
    id: 4,
    title: "Content Creation",
    description: "Crafting engaging content that resonates with your audience.",
    image:image4,
  },
  {
    id: 5,
    title: "SEO Services",
    description: "Improving your website’s visibility on search engines.",
    image: image5,
  },
  {
    id: 6,
    title: "Social Media Management",
    description: "Managing your social media presence for better engagement.",
    image: image6,
  },
  {
    id: 7,
    title: "E-commerce Solutions",
    description: "Building and managing online stores for your business.",
    image: image7,
  },
  {
    id: 8,
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for your needs.",
    image: image8,
  },
  {
    id: 9,
    title: "Graphic Design",
    description:
      "Creating visually appealing graphics and designs for your brand.",
    image: image9,
  }, 
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="m-4 p-3 bg-blue-600 text-white rounded-md cursor-pointer hover:shadow-xl">See Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
