import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-center items-center py-10 bg-white text-black">
        <div className="max-w-[1240px] min-w-[440px] mx-10 md:mx-5 w-full ">
          <h1 className="text-2xl font-bold text-center">Privacy Policy</h1>
          <div className="py-4">
            <p className="text-md py-1">
              This Privacy Policy describes how we collect, use, and disclose
              personal information when you visit our website ("Site"). By using
              the Site, you consent to the practices described in this Privacy
              Policy.
            </p>
            <div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Information We Collect
                </h2>
                <p className="text-md py-1">
                  Personal Information: We may collect personal information,
                  such as your name, email address, and contact information,
                  when you voluntarily provide it to us through forms or other
                  interactive features on the Site.
                </p>
                <p className="text-md py-1">
                  Usage Data: We may automatically collect certain information
                  about your device, browsing actions, and patterns when you
                  visit the Site. This may include your IP address, browser
                  type, operating system, referring URLs, and pages visited.
                </p>
              </div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">Use of Information</h2>
                <p className="text-md py-1">
                  We may use the personal information you provide to respond to
                  your inquiries, provide information or services you request,
                  and improve the content and functionality of the Site.
                </p>
                <p className="text-md py-1">
                  We may use the usage data to analyze trends, administer the
                  Site, track users' movements, and gather demographic
                  information for aggregate use. This information helps us
                  understand how users interact with the Site and improve its
                  design and functionality.
                </p>
              </div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Disclosure of Information
                </h2>
                <p className="text-md py-1">
                  We may share your personal information with trusted
                  third-party service providers who assist us in operating the
                  Site, conducting our business, or servicing you, as long as
                  they agree to keep this information confidential.
                </p>
                <p className="text-md py-1">
                  We may also disclose personal information when required by law
                  or in response to a valid legal request.
                </p>
                <p className="text-md py-1">
                  In the event of a merger, acquisition, or sale of all or a
                  portion of our assets, personal information may be transferred
                  as part of the transaction. We will notify you via email or a
                  prominent notice on the Site of any change in ownership or
                  uses of your personal information.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">Data Security</h2>
                <p className="text-md py-1">
                  We take reasonable measures to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction. However, no data transmission over the
                  internet or electronic storage method is 100% secure.
                  Therefore, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-md py-1">
                  We may use cookies and similar tracking technologies to
                  enhance your experience on the Site. Cookies are small text
                  files that are placed on your device to collect standard
                  internet log information and visitor behavior information. You
                  can set your browser to refuse cookies or alert you when
                  cookies are being sent. However, some parts of the Site may
                  not function properly without cookies.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">Third-Party Links</h2>
                <p className="text-md py-1">
                  The Site may contain links to third-party websites that are
                  not owned or controlled by us. This Privacy Policy applies
                  only to our Site. We have no control over the privacy
                  practices or content of third-party websites, and we encourage
                  you to review their privacy policies before providing any
                  personal information.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">Children's Privacy</h2>
                <p className="text-md py-1">
                  The Site is not intended for individuals under the age of 18.
                  We do not knowingly collect personal information from
                  children. If you believe we have inadvertently collected
                  personal information from a child, please contact us, and we
                  will promptly delete it.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Changes to the Privacy Policy
                </h2>
                <p className="text-md py-1">
                  We reserve the right to modify this Privacy Policy at any time
                  without prior notice. Any changes will be effective
                  immediately upon posting the updated Privacy Policy on the
                  Site. Your continued use of the Site after any modifications
                  constitutes your acceptance of the revised Privacy Policy.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <p className="text-md py-1">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy, please contact us using the contact
                  information provided on the Site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
