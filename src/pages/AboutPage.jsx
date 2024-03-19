import Link from "next/link";
import React from "react";

const AboutPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-primary h-screen overflow-hidden">
      <div className="container mx-auto mt-10">
        <h1 className="text-gray-50 text-center text-3xl font-bold mb-5">
          About Our Marketplace
        </h1>
        <p className="text-gray-50 mb-3">
          Welcome to our marketplace &quot;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
            NexCart
          </span>
          &quot;, where you can discover a wide range of high-quality products
          from various sellers. Our platform provides a seamless shopping
          experience, connecting buyers with unique and exceptional items.
        </p>

        <h2 className="text-gray-50 text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-50 mb-3">
          Our mission is to create a vibrant and inclusive marketplace that
          empowers both buyers and sellers. We strive to foster a community
          where creativity and entrepreneurship thrive, offering a diverse
          selection of products to meet the needs and preferences of our
          customers.
        </p>

        <h2 className="text-gray-50 text-2xl font-bold mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-50 mb-3">
          <li>Curated selection of high-quality products.</li>
          <li>Support for local and independent sellers.</li>
          <li>Secure and convenient shopping experience.</li>
          <li>Community-driven platform fostering collaboration.</li>
          <li>Dedicated to customer satisfaction.</li>
        </ul>

        <h2 className="text-gray-50 text-2xl font-bold mb-3">Contact Us</h2>
        <p className="text-gray-50 mb-3">
          If you have any questions, feedback, or inquiries, feel free to reach
          out to us. We value your input and are here to assist you in any way
          possible.
        </p>

        <p className="text-gray-50 text-center">
          Thank you for being a part of our marketplace community!
        </p>
      </div>
      <Link href="/marketplace">
        <button className="bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 text-white px-4 py-2 ml-6 rounded-full">
          Marketplace
        </button>
      </Link>
      <div className="flex flex-col pt-24 items-center space-x-2 justify-center text-gray-50 text-xs">
        <span>
          <Link href={"/termsandconditions"} className="hover:text-blue-500">
            Terms & Conditions
          </Link>
          <span> | </span>
          <Link href={"/privacypolicy"} className="hover:text-blue-500">
            Privacy Policy
          </Link>
        </span>
        <span className="flex items-center justify-center">
          {`@${currentYear} Creative Minds Graphics (Pty) Ltd. All Rights Reserved`}
        </span>
      </div>
    </div>
  );
};

export default AboutPage;
