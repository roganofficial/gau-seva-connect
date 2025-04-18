
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                How we collect, use, and protect your information
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                गौ सेवा Connect Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make donations, or participate in our programs.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, postal address, phone number, and donation information.</li>
                <li><strong>Payment Information:</strong> Credit card details, bank account information, and transaction history.</li>
                <li><strong>Communication Preferences:</strong> Your preferences for receiving communications from us.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Processing donations and maintaining donation records</li>
                <li>Communicating with you about our programs, events, and impact</li>
                <li>Responding to your inquiries and providing customer service</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Sending tax receipts and acknowledgments for donations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-3">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in payment processing, email delivery, and website hosting.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property.</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
              </ul>
              <p className="text-gray-700 mb-6">
                <strong>We do not sell or rent your personal information to third parties for marketing purposes.</strong>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Donor Privacy</h2>
              <p className="text-gray-700 mb-3">
                We respect the privacy of our donors and maintain the following principles:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>We will not share your personal information with any third party unless you give us specific permission to do so.</li>
                <li>You may choose to remain anonymous when making donations, and we will honor that choice.</li>
                <li>You can opt out of communications from us at any time.</li>
                <li>We use industry-standard security measures to protect your financial information.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-3">You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <br />
                गौ सेवा Connect Foundation
                <br />
                Email: privacy@gauseva-connect.org
                <br />
                Phone: +91 12345 67890
                <br />
                Address: 123 Gaushala Road, Village Name, District, State - PIN Code
              </p>

              <p className="text-gray-500 mt-8">Last Updated: April 12, 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
