import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden p-8">
      <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy explains how NexCart, a marketplace application
          ("we," "our," or "us"), collects, uses, and shares your personal
          information when you use our services. By accessing or using NexCart,
          you agree to the terms outlined in this Privacy Policy.
        </p>

        <h2 className="text-xl font-bold mb-2">Information We Collect</h2>

        <p className="mb-4">
          We collect information that you provide directly to us, such as your
          name, email address, and payment information when you register for an
          account, make a purchase, or communicate with us.
        </p>

        <p className="mb-4">
          We may also collect information about your use of NexCart, including
          your browsing history, preferences, and interactions with the
          platform.
        </p>

        <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>

        <p className="mb-4">
          We may use your information for the following purposes:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>Provide, maintain, and improve NexCart;</li>
          <li>Process transactions and send transaction notifications;</li>
          <li>Respond to your comments, questions, and requests;</li>
          <li>Send you marketing communications;</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Information Sharing</h2>

        <p className="mb-4">
          We may share your personal information with third parties for the
          following purposes:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>With vendors, service providers, and partners;</li>
          <li>For legal or safety reasons;</li>
          <li>In connection with a business transaction.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Security</h2>

        <p className="mb-4">
          We take reasonable measures to protect your personal information from
          unauthorized access and disclosure. However, no security system is
          impenetrable.
        </p>

        <h2 className="text-xl font-bold mb-2">Your Choices</h2>

        <p className="mb-4">
          You can manage your communication preferences by updating your account
          settings. You may also request access to, correction, or deletion of
          your personal information.
        </p>

        <h2 className="text-xl font-bold mb-2">
          Changes to This Privacy Policy
        </h2>

        <p className="mb-4">
          We may update this Privacy Policy from time to time. The updated
          version will be posted on NexCart, and your continued use constitutes
          acceptance of the changes.
        </p>

        <h2 className="text-xl font-bold mb-2">Contact Us</h2>

        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at [Your Contact Information].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
