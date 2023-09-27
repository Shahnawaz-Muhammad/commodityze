import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TermsAndConditons = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-center items-center py-10 bg-white text-black">
        <div className="max-w-[1240px] min-w-[440px] mx-10 md:mx-5 w-full ">
          <h1 className="text-2xl font-bold text-center">
            Terms And Conditions
          </h1>
          <div className="py-4">
            <p className="text-md py-1">
              Please read these Terms and Conditions ("Agreement") carefully
              before using our website ("Site"). This Agreement sets forth the
              legally binding terms and conditions for your use of the Site. By
              accessing or using the Site in any manner, including browsing the
              Site, you agree to be bound by this Agreement.
            </p>
            <div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">Intellectual Property</h2>
                <p className="text-md py-1">
                  All content, trademarks, logos, and materials available on the
                  Site, including but not limited to text, graphics, images,
                  videos, and audio clips (collectively referred to as
                  "Content"), are the intellectual property of the Site owner or
                  its licensors. The Content is protected by copyright,
                  trademark, and other intellectual property laws. You may not
                  use, modify, reproduce, distribute, transmit, or display the
                  Content without the prior written consent of the Site owner.
                </p>
              </div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">Use of the Site</h2>
                <p className="text-md py-1">
                  You may use the Site for lawful purposes and in accordance
                  with this Agreement. You agree not to:
                </p>
                <ul className="text-md ml-6">
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>Violate any applicable law or regulation.</p>
                  </li>
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>
                      Attempt to gain unauthorized access to any portion or
                      feature of the Site.
                    </p>
                  </li>
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>
                      Interfere with or disrupt the Site's functionality or
                      security measures.
                    </p>
                  </li>
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>
                      Engage in any activity that could harm, disable,
                      overburden, or impair the Site or its servers.
                    </p>
                  </li>
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>
                      Use the Site to transmit any viruses, malware, or other
                      harmful computer code.
                    </p>
                  </li>
                  <li className="flex flex-row gap-4">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} />
                    <p>
                      Collect or store personal information about others without
                      their consent.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Third-Party Content and Links
                </h2>
                <p className="text-md py-1">
                  The Site may contain links to third-party websites,
                  advertisements, or services that are not owned or controlled
                  by us. We do not endorse or assume any responsibility for any
                  such third-party content, products, or services. Your
                  interactions with third-party websites are solely between you
                  and the third party, and you should read and understand their
                  terms and conditions and privacy policies.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Disclaimer of Warranties
                </h2>
                <p className="text-md py-1">
                  The Site and its Content are provided on an "as-is" and "as
                  available" basis without any warranties of any kind, whether
                  express or implied. We do not guarantee that the Site will be
                  error-free, secure, or continuously available. You acknowledge
                  and agree that your use of the Site is at your own risk.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Limitation of Liability
                </h2>
                <p className="text-md py-1">
                  To the maximum extent permitted by law, we shall not be liable
                  for any direct, indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to damages for
                  loss of profits, data, or other intangible losses arising out
                  of or in connection with your use of the Site or inability to
                  access or use the Site.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">Indemnification</h2>
                <p className="text-md py-1">
                  You agree to indemnify and hold us and our affiliates,
                  officers, agents, employees, and partners harmless from and
                  against any claims, liabilities, damages, losses, costs, or
                  expenses, including reasonable attorneys' fees, arising out of
                  or in any way connected with your use of the Site or violation
                  of this Agreement.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Modifications to the Agreement
                </h2>
                <p className="text-md py-1">
                  We reserve the right, at our sole discretion, to modify or
                  replace this Agreement at any time without prior notice. Your
                  continued use of the Site after any such changes constitutes
                  your acceptance of the new Agreement. It is your
                  responsibility to review this Agreement periodically for
                  changes.
                </p>
              </div>

              <div className="my-3">
                <h2 className="text-lg font-semibold">
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-md py-1">
                  This Agreement shall be governed by and construed in
                  accordance with the laws of [Jurisdiction]. Any legal action
                  or proceeding arising out of or in connection with this
                  Agreement shall be brought exclusively in the courts of
                  [Jurisdiction].
                </p>
                <p className="text-md py-1">
                  If any provision of this Agreement is held to be invalid or
                  unenforceable, such provision shall be struck and the
                  remaining provisions shall be enforced. The failure of our
                  site to enforce any right or provision of this Agreement shall
                  not be deemed a waiver of such right or provision.
                </p>
                <p className="text-md py-1 font-semibold">
                  By using our Site, you acknowledge that you have read,
                  understood, and agree to be bound by this Agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditons;
