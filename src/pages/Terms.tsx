
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Terms and Conditions</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Guidelines for donations, volunteering, and interactions with our organization
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                These Terms and Conditions ("Terms") govern your use of the गौ सेवा Connect Foundation website, donation platform, and participation in our programs. By accessing our website, making a donation, or volunteering with us, you agree to comply with and be bound by these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Donation Terms</h2>
              <p className="text-gray-700 mb-3">When you make a donation to गौ सेवा Connect Foundation:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>All donations are voluntary and non-refundable unless specifically required by law.</li>
                <li>We will use donations for our charitable purposes as described on our website and in our mission statement.</li>
                <li>Tax receipts will be provided for donations as applicable under Indian tax laws.</li>
                <li>Recurring donations will continue until canceled by the donor.</li>
                <li>We reserve the right to decline donations that may compromise our ethical standards.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Volunteering Terms</h2>
              <p className="text-gray-700 mb-3">When volunteering with गौ सेवा Connect Foundation:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Volunteers must be at least 18 years old, or have parental/guardian consent if under 18.</li>
                <li>Volunteers agree to follow all safety guidelines and instructions provided by our staff.</li>
                <li>Volunteers may be required to sign additional waivers or agreements before participating in certain activities.</li>
                <li>We reserve the right to terminate volunteer relationships at any time.</li>
                <li>Volunteers are not employees and are not entitled to compensation or benefits.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cow Adoption Program</h2>
              <p className="text-gray-700 mb-3">Participants in our cow adoption program agree to the following:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>"Adoption" is symbolic and does not confer ownership rights to the adopter.</li>
                <li>Adoption fees are used for the care and maintenance of all cows in our shelter.</li>
                <li>The Foundation maintains full responsibility for the care and welfare of all cows.</li>
                <li>Adopters may visit their symbolically adopted cow during designated visiting hours.</li>
                <li>The Foundation reserves the right to make decisions regarding the care and treatment of all animals.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Website Usage</h2>
              <p className="text-gray-700 mb-3">When using our website:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>You agree not to use our website for any unlawful purpose or in violation of these Terms.</li>
                <li>All content on our website is owned by गौ सेवा Connect Foundation and is protected by copyright laws.</li>
                <li>You may not reproduce, distribute, or create derivative works from our content without permission.</li>
                <li>We may use cookies and similar technologies to enhance your browsing experience.</li>
                <li>We do not guarantee uninterrupted access to our website or the accuracy of its content.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                गौ सेवा Connect Foundation and its officers, trustees, employees, and volunteers shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website, services, or participation in our programs, even if we have been advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify, defend, and hold harmless गौ सेवा Connect Foundation, its trustees, officers, employees, and volunteers from and against any claims, liabilities, damages, losses, costs, or expenses arising from your violation of these Terms or any applicable laws.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in [District/City], India.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or services after such changes constitutes your acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
                <br />
                <br />
                गौ सेवा Connect Foundation
                <br />
                Email: legal@gauseva-connect.org
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

export default Terms;
