import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden p-8">
      <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>

        <p className="mb-4">
          Please read these Terms and Conditions (&quot;Terms&quot;) carefully
          before using NexCart, a marketplace application operated by [Your
          Company Name] (&quot;us,&quot; &quot;we,&quot; or &quot;our&quot;).
        </p>

        <h2 className="text-xl font-bold mb-2">Acceptance of Terms</h2>

        <p className="mb-4">
          By accessing or using NexCart, you agree to comply with and be bound
          by these Terms. If you disagree with any part of the Terms, you may
          not access NexCart.
        </p>

        <h2 className="text-xl font-bold mb-2">User Accounts</h2>

        <p className="mb-4">
          To use certain features of NexCart, you may be required to create a
          user account. You are responsible for maintaining the confidentiality
          of your account credentials and agree to notify us immediately of any
          unauthorized use of your account.
        </p>

        <h2 className="text-xl font-bold mb-2">Prohibited Activities</h2>

        <p className="mb-4">
          You agree not to engage in any of the following prohibited activities:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>Violating any applicable laws or regulations;</li>
          <li>
            Attempting to interfere with the proper functioning of NexCart;
          </li>
          <li>Using NexCart for any fraudulent or unlawful purpose.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>

        <p className="mb-4">
          All content on NexCart, including text, graphics, logos, and images,
          is the property of &quot;Creative Minds Graphics (Pty) Ltd&quot; and
          is protected by intellectual property laws. You may not use,
          reproduce, or distribute any content without our express written
          permission.
        </p>

        <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>

        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential
          damages arising out of your use of NexCart. Our total liability for
          any claims arising under these Terms is limited to the amount you paid
          us to use NexCart.
        </p>

        <h2 className="text-xl font-bold mb-2">Changes to Terms</h2>

        <p className="mb-4">
          We reserve the right to update or modify these Terms at any time. The
          updated version will be posted on NexCart, and your continued use
          constitutes acceptance of the changes.
        </p>

        <h2 className="text-xl font-bold mb-2">Contact Us</h2>

        <p>
          If you have questions or concerns about these Terms, please contact us
          at{" "}
          <Link href="https://creativemg.netlify.app/contact" target="_blank">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800">
              NexCart
            </span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
