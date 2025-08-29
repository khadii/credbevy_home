import React from "react";
import StyledParagraph, { BigStyledParagraph } from "../text";

export default function Sectionfive() {
  return (
    <section className="flex w-full items-center justify-center flex-col lg:px-24 py-24  px-[15px]">
      <div className="max-w-7xl w-full text-left space-y-8">
        <div className="text-center">
          <BigStyledParagraph>
            The Ultimate Guide to EMI: Why You Need an EMI Calculator
          </BigStyledParagraph>
        </div>

        <div>
          <StyledParagraph>
            The credit market in Nigeria is growing rapidly, driven by a rise in
            consumer demand for quick access to funds. Personal loans, payday
            loans, and other short-term credit products are increasingly
            popular, especially among individuals and small businesses seeking
            to meet urgent financial needs. To manage such loans effectively,
            borrowers must be aware of their monthly repayment obligations,
            often calculated as Equated Monthly Installments (EMI).
            <br />
            <br />
            In Nigeria, many online EMI calculators are available, including
            Credbevy’s tool. It’s important to use a reliable and accurate EMI
            calculator to assess how much you will need to repay monthly,
            helping you manage your current finances and plan for future
            expenses.
          </StyledParagraph>
        </div>
        
        {/* <hr className="my-8" /> */}

        <div>
          <BigStyledParagraph>
            Factors Affecting Your Loan Repayments
          </BigStyledParagraph>
          <StyledParagraph>
            When planning to apply for a loan, it’s essential to calculate the
            EMI, which depends on several factors:
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                <span className="font-semibold">Loan Tenure:</span> The length of
                the loan term affects the amount you will repay monthly. A
                shorter tenure will increase your EMI, while a longer tenure will
                reduce it. Choosing a suitable loan term is important for
                managing your budget.
              </li>
              <li>
                <span className="font-semibold">Interest Rate:</span> The rate of
                interest directly influences your monthly installments. Lower
                interest rates help reduce the overall repayment amount, so it’s
                worth comparing different lenders and products to get the best
                deal.
              </li>
              <li>
                <span className="font-semibold">Loan Amount:</span> The principal
                amount you borrow determines the size of your EMI. Larger loans
                will have higher EMI amounts, while smaller loans lead to more
                manageable payments.
              </li>
            </ul>
          </StyledParagraph>
        </div>

        {/* <hr className="my-8" /> */}

        <div>
          <BigStyledParagraph>
            How Can an Online EMI Calculator Help You?
          </BigStyledParagraph>
          <StyledParagraph>
            Nigeria’s loan market is growing rapidly, with an increasing number
            of individuals accessing credit facilities. It’s crucial to
            understand how much you will need to repay each month before taking
            out any loan. This is where an EMI calculator becomes invaluable.
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                <span className="font-semibold">Accurate Estimation of EMI:</span>{" "}
                The Credbevy EMI calculator provides an accurate estimate of your
                monthly repayments, allowing you to plan your finances ahead of
                time and ensure you don't overextend yourself.
              </li>
              <li>
                <span className="font-semibold">Saves Time:</span> Manual EMI
                calculations can be time-consuming and prone to errors. With
                Credbevy’s EMI calculator, you get instant, accurate results
                without the hassle.
              </li>
              <li>
                <span className="font-semibold">Helps in Decision Making:</span>{" "}
                It provides clear insights into your debt obligations, helping
                you choose loans that fit within your budget and keeping your
                debt-to-income ratio under control.
              </li>
            </ul>
          </StyledParagraph>
        </div>

        {/* <hr className="my-8" /> */}

        <div>
          <BigStyledParagraph>The Formula for EMI Calculation</BigStyledParagraph>
          <StyledParagraph>
            Credbevy uses a standard formula to calculate EMI:
            <div className="my-4 p-4 bg-gray-100 rounded-md">
              <code className="block text-center text-lg font-mono">
                EMI = P × R × (1+R)^N / ((1+R)^N - 1)
              </code>
            </div>
            Where:
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                <span className="font-semibold">P</span> = Principal amount
              </li>
              <li>
                <span className="font-semibold">R</span> = Rate of interest
              </li>
              <li>
                <span className="font-semibold">N</span> = Loan tenure (in months)
              </li>
            </ul>
            <p className="mt-4">
              This formula ensures the accurate computation of EMI across all
              loan types available on the Credbevy platform.
            </p>
          </StyledParagraph>
        </div>

        {/* <hr className="my-8" /> */}

        <div>
          <BigStyledParagraph>
            How to Use Credbevy’s EMI Calculator?
          </BigStyledParagraph>
          <StyledParagraph>
            Using the Credbevy EMI calculator is simple and straightforward:
            <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
              <li>
                Enter the principal loan amount, tenure, and interest rate.
              </li>
              <li>The calculator will instantly display the EMI amount.</li>
              <li>
                You can adjust the inputs to see how changes in loan amount,
                tenure, or interest rate affect your monthly repayment.
              </li>
            </ol>
          </StyledParagraph>
        </div>

        {/* <hr className="my-8" /> */}

        <div>
          <BigStyledParagraph>
            Advantages of Credbevy’s EMI Calculator
          </BigStyledParagraph>
          <StyledParagraph>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>
                <span className="font-semibold">Free of Charge:</span> You can
                use the Credbevy EMI calculator as many times as needed, without
                any cost.
              </li>
              <li>
                <span className="font-semibold">Accurate Results:</span> The
                calculator provides precise EMI figures, helping you plan your
                finances with confidence.
              </li>
              <li>
                <span className="font-semibold">Fast and Easy to Use:</span> In
                just a few seconds, you’ll have an accurate estimate of your EMI,
                saving you the time and effort of manual calculations.
              </li>
            </ul>
            <p className="mt-4">
              Credbevy’s suite of calculators, including EMI tools for various
              types of loans, makes it easy to evaluate different loan options
              and manage your repayments effectively. Whether you’re looking to
              finance a personal project, buy a home, or grow your business,
              Credbevy provides the tools you need to plan your financial future.
            </p>
          </StyledParagraph>
        </div>
      </div>
    </section>
  );
}