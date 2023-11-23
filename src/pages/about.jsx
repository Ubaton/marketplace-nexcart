import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">About Our Marketplace</h1>
      <p className="text-gray-50 mb-5">
        Welcome to our marketplace, where you can discover a wide range of
        high-quality products from various sellers. Our platform provides a
        seamless shopping experience, connecting buyers with unique and
        exceptional items.
      </p>

      <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
      <p className="text-gray-50 mb-5">
        Our mission is to create a vibrant and inclusive marketplace that
        empowers both buyers and sellers. We strive to foster a community where
        creativity and entrepreneurship thrive, offering a diverse selection of
        products to meet the needs and preferences of our customers.
      </p>

      <h2 className="text-2xl font-bold mb-3">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-50 mb-5">
        <li>Curated selection of high-quality products.</li>
        <li>Support for local and independent sellers.</li>
        <li>Secure and convenient shopping experience.</li>
        <li>Community-driven platform fostering collaboration.</li>
        <li>Dedicated to customer satisfaction.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
      <p className="text-gray-50 mb-5">
        If you have any questions, feedback, or inquiries, feel free to reach
        out to us. We value your input and are here to assist you in any way
        possible.
      </p>

      <p className="text-gray-50">
        Thank you for being a part of our marketplace community!
      </p>
    </div>
  );
};

export default About;
