import React from "react";
import StyledParagraph, { BigStyledParagraph } from "../text";

export default function Sectionthree() {
  return (
    <section className="flex w-full items-center justify-center flex-col px-24 py-24">
      <div className="max-w-7xl w-full text-left space-y-8">
        <div className="text-center">
          <BigStyledParagraph>
            Terms and Conditions
          </BigStyledParagraph>
        </div>

        <div>
          <BigStyledParagraph>1. Introduction</BigStyledParagraph>
          <StyledParagraph>
            Welcome to Credbevy. By using our platform, website, mobile app, or
            services, you agree to the following terms and conditions. These
            terms govern your access to and use of our services, including all
            applications, content, and functionality offered through our
            platform.
            <br />
            <br />
            Please read these terms carefully. By using our services, you
            confirm that you accept these terms and agree to comply with them.
            If you do not agree to these terms, you must not use our platform.
          </StyledParagraph>
        </div>

        <div>
          <BigStyledParagraph>2. Definitions</BigStyledParagraph>
          <StyledParagraph>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Credbevy:</span> refers to the
                AI-powered loan marketplace platform, operated by Stripling
                Technology Solutions LTD.
              </li>
              <li>
                <span className="font-semibold">User:</span> refers to any
                individual or entity using the Credbevy platform, including
                borrowers and lenders.
              </li>
              <li>
                <span className="font-semibold">Borrower:</span> refers to any
                user seeking a loan through the Credbevy platform.
              </li>
              <li>
                <span className="font-semibold">Lender:</span> refers to any
                financial institution, bank, or individual providing loans
                through the Credbevy platform.
              </li>
              <li>
                <span className="font-semibold">Services:</span> refers to all
                functionalities, applications, and services provided by Credbevy
                to borrowers and lenders.
              </li>
            </ul>
          </StyledParagraph>
        </div>

        <div>
          <BigStyledParagraph>
            3. Eligibility to Use the Platform
          </BigStyledParagraph>
          <StyledParagraph>
            To use the Credbevy platform:
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <span className="font-semibold">Borrowers</span> must be at least
                18 years of age and legally capable of entering into a binding
                contract.
              </li>
              <li>
                <span className="font-semibold">Lenders</span> must be licensed,
                registered, or otherwise authorized to provide loans in their
                respective jurisdictions.
              </li>
              <li>
                All users must provide accurate and complete registration
                information. Credbevy reserves the right to deny access or
                suspend accounts if false information is provided.
              </li>
            </ul>
          </StyledParagraph>
        </div>

        <div>
          <BigStyledParagraph>
            4. Using the Credbevy Platform
          </BigStyledParagraph>
          <div className="space-y-4">
            <StyledParagraph>
              <span className="font-semibold">4.1. Borrowers’ Use</span>
              <div className="mt-2 ml-4">
                Borrowers agree to:
                <ul className="list-disc list-inside space-y-1 mt-1 ml-4">
                  <li>
                    Use the Credbevy platform for the purpose of applying for
                    loans.
                  </li>
                  <li>
                    Provide accurate, current, and complete information when
                    submitting loan applications.
                  </li>
                  <li>
                    Acknowledge that Credbevy does not guarantee loan approval and
                    that each lender has its own eligibility criteria.
                  </li>
                </ul>
              </div>
            </StyledParagraph>
            <StyledParagraph>
              <span className="font-semibold">4.2. Lenders’ Use</span>
              <div className="mt-2 ml-4">
                Lenders agree to:
                <ul className="list-disc list-inside space-y-1 mt-1 ml-4">
                  <li>
                    Offer loan products to borrowers according to the terms
                    agreed upon with Credbevy.
                  </li>
                  <li>
                    Comply with all applicable laws, regulations, and licensing
                    requirements in providing loans.
                  </li>
                  <li>
                    Provide complete and accurate details about loan products,
                    including interest rates, repayment terms, and fees.
                  </li>
                </ul>
              </div>
            </StyledParagraph>
          </div>
        </div>
        <div>
          <BigStyledParagraph>
            5. Loan Application and Approval Process
          </BigStyledParagraph>
          <StyledParagraph>
            <span className="font-semibold">For Borrowers:</span> Loan
            applications submitted through Credbevy will be matched with lenders
            based on the information you provide. However, the final decision
            on loan approval and terms will be made by the lender. Credbevy does
            not control or guarantee the approval process, rates, or loan amounts.
            <br />
            <br />
            <span className="font-semibold">For Lenders:</span> Lenders will
            review borrower applications and make decisions based on their own
            lending criteria. Credbevy facilitates this process but is not
            responsible for the outcome of loan applications.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>6. Fees and Payments</BigStyledParagraph>
          <StyledParagraph>
            <span className="font-semibold">Borrowers:</span> Credbevy charges a very
            small processing fee to the borrowers, which will be communicated to
            the borrowers during the loan application process. However, you are
            responsible for any fees charged by the lender, including but not
            limited to interest rates, late fees, and other costs associated with
            the loan.
            <br />
            <br />
            <span className="font-semibold">Lenders:</span> Lenders may be charged
            a fee for using the Credbevy platform. These fees will be agreed upon
            during the onboarding process and are subject to Credbevy's fee
            schedule. Failure to pay fees may result in suspension or
            termination of access to the platform.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>7. Data Privacy</BigStyledParagraph>
          <StyledParagraph>
            Credbevy is committed to protecting your privacy. By using our
            platform, you agree to the collection and use of your data in
            accordance with our Privacy Policy. This includes:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Personal and financial information you provide during the loan
                application process.
              </li>
              <li>
                Information shared between Credbevy and lenders to facilitate
                loan approvals.
              </li>
            </ul>
            <div className="mt-2">
              For more details on how we handle your data, please refer to our
              Privacy Policy.
            </div>
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>8. Intellectual Property Rights</BigStyledParagraph>
          <StyledParagraph>
            All content, materials, trademarks, and designs used on the Credbevy
            platform are the intellectual property of Credbevy and are protected
            by applicable intellectual property laws. You may not copy,
            distribute, modify, or use any of our intellectual property without
            written consent from Credbevy.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>9. Prohibited Activities</BigStyledParagraph>
          <StyledParagraph>
            Users are prohibited from:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Providing false or misleading information.</li>
              <li>Using the platform for fraudulent or illegal activities.</li>
              <li>
                Interfering with the security, integrity, or functionality of
                the Credbevy platform.
              </li>
              <li>
                Attempting to gain unauthorized access to the platform or
                related systems.
              </li>
            </ul>
            <div className="mt-2">
              Any violation of these terms may result in the termination of
              your account and legal action.
            </div>
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>10. Limitation of Liability</BigStyledParagraph>
          <StyledParagraph>
            <span className="font-semibold">For Borrowers:</span> Credbevy is not
            a lender and does not provide loans directly. We facilitate
            connections between borrowers and lenders but do not guarantee loan
            approval or the terms of any loan. Any agreement for a loan is
            between you and the lender.
            <br />
            <br />
            <span className="font-semibold">For Lenders:</span> Credbevy does not
            guarantee the performance of borrowers. The platform provides
            pre-qualification tools, but lenders are responsible for conducting
            due diligence on loan applicants.
            <br />
            <br />
            Credbevy shall not be liable for any direct, indirect, incidental,
            or consequential damages arising from the use of our platform,
            including but not limited to loss of data, revenue, or profit.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>11. Dispute Resolution</BigStyledParagraph>
          <StyledParagraph>
            In the event of a dispute between users (borrowers and lenders),
            Credbevy will not be a party to such disputes. Borrowers and lenders
            must resolve disputes directly. Credbevy may, at its sole discretion,
            offer assistance in resolving disputes, but this is not guaranteed.
            <br />
            <br />
            Any legal disputes or claims related to the use of the Credbevy
            platform will be governed by the laws of Lagos, Nigeria. Disputes
            must first be resolved through informal negotiations. If a resolution
            cannot be reached, disputes will be settled through binding
            arbitration.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>
            12. Account Suspension and Termination
          </BigStyledParagraph>
          <StyledParagraph>
            Credbevy reserves the right to suspend or terminate user accounts at
            its discretion, including but not limited to situations involving:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Violation of these terms.</li>
              <li>Suspicion of fraudulent activity.</li>
              <li>Non-payment of fees (for lenders).</li>
            </ul>
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>
            13. Changes to Terms and Conditions
          </BigStyledParagraph>
          <StyledParagraph>
            Credbevy may modify these Terms and Conditions from time to time.
            When changes are made, we will notify users by updating the date at
            the top of this page. Continued use of the platform after changes
            are posted constitutes your acceptance of the revised terms.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>14. Contact Information</BigStyledParagraph>
          <StyledParagraph>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <span className="font-semibold">Email:</span>
                support@credbevy.com
              </li>
              <li>
                <span className="font-semibold">Address:</span> Lagos, Nigeria
              </li>
            </ul>
          </StyledParagraph>
        </div>
      </div>
    </section>
  );
}