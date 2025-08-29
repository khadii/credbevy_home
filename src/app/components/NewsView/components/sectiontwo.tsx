import React from "react";
import StyledParagraph, { BigStyledParagraph } from "./text";

export default function Sectiontwo() {
  return (
    <section className="flex w-full items-center justify-center flex-col lg:px-24 px-[15px]">
      <div className="max-w-7xl w-full  text-center space-y-6">
        <div className="">
          <StyledParagraph>
            In today's fast-paced world, mobile banking has become an essential
            tool for managing our finances on the go. With just a few taps on
            your smartphone, you can check your balance, pay bills, transfer
            money, and even deposit checks. However, with great convenience
            comes the need for heightened security and smart usage. In this
            guide, we'll explore how to make the most of mobile banking while
            keeping your financial information safe.
          </StyledParagraph>
        </div>
        <div>
          <BigStyledParagraph>
            The Benefits of Mobile Banking
          </BigStyledParagraph>
        </div>
        <div>
          <StyledParagraph>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <span className="font-semibold">24/7 Access:</span> Check your
                accounts anytime, anywhere.
              </li>
              <li>
                <span className="font-semibold">Convenience:</span> Perform
                banking tasks without visiting a branch.
              </li>
              <li>
                <span className="font-semibold">Real-time Alerts:</span> Get
                instant notifications about account activity.
              </li>
              <li>
                <span className="font-semibold">Bill Pay:</span> Pay your bills
                quickly and easily.
              </li>
              <li>
                <span className="font-semibold">Mobile Check Deposit:</span>{" "}
                Deposit checks using your phone's camera.
              </li>
              <li>
                <span className="font-semibold">Money Transfer:</span> Send
                money to friends and family with ease.
              </li>
            </ul>
            <p>
              Now, let's look at how to use these features safely and
              effectively.
            </p>
          </StyledParagraph>
        </div>

        <div>
          <BigStyledParagraph>
            Security Tips for Mobile Banking
          </BigStyledParagraph>
        </div>
        <div>
          <StyledParagraph>
            <ul className="list-decimal list-inside  space-y-2 ">
              <li className="font-semibold">Use Strong, Unique Passwords</li>
              Create a strong, unique password for your mobile banking app.
              Avoid using easily guessable informa􀆟on like birthdays or common
              words. Consider using a password manager to generate and store
              complex passwords securely.
              <li className="font-semibold">
                Enable Two-Factor Authentication (2FA)
              </li>
              Most banks offer 2FA, which adds an extra layer of security. This
              typically involves entering a code sent to your phone or email
              a􀅌er you enter your password. Always opt for this feature when
              available.
              <li className="font-semibold">Avoid Public Wi-Fi</li>
              Public Wi-Fi networks are o􀅌en unsecured, making it easy for
              hackers to intercept your data. If you must use public Wi-Fi, use
              a Virtual Private Network (VPN) to encrypt your connection
              <li className="font-semibold">Keep Your App Updated</li>
              Regular updates o􀅌en include security patches. Enable automatic
              updates for your banking app to ensure you always have the latest
              protection.
              <li className="font-semibold">Use Official Apps Only</li>
              Only download banking apps from official app stores (Google Play
              Store for Android, App Store for iOS). Be wary of lookalike apps
              that might be designed to steal your information.
              <li className="font-semibold">Enable Device Security</li>Use your
              phone's built-in security features like fingerprint recognition,
              face ID, or at least a strong PIN or pattern lock.
              <li className="font-semibold">Don't Save Login Informa􀆟on</li>
              Avoid saving your username and password in the app or your
              browser. While it's less convenient, it's much more secure.
              <li className="font-semibold">UBe Cautious with SMS</li>Be wary of
              text messages claiming to be from your bank, especially if they
              ask you to click on a link or provide personal information. When
              in doubt, contact your bank directly using the number on their
              official website.
              <li className="font-semibold">Use App-Based Authentication</li>If
              your bank offers it, use app-based authentication instead of
              SMS-based. It's more secure and less vulnerable to SIM swapping
              attacks.
              <li className="font-semibold">Log Out After Each Session</li>
              Always log out of your banking app when you're done, especially if
              you're using a shared device
            </ul>
            <p>
              Now, let's look at how to use these features safely and
              effectively.
            </p>
          </StyledParagraph>
        </div>

        <StyledParagraph>
          <p className="">
            Now that we've covered security, let's look at how to use mobile
            banking for effective money management:
          </p>

          <ol className="list-decimal list-inside space-y-6">
            <li>
              <span className="font-semibold">Set Up Alerts</span>
              <p className="ml-4 mt-2">
                Most banking apps allow you to set up alerts for various
                activities:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Low balance warnings</li>
                <li>Large transaction notifications</li>
                <li>Bill payment reminders</li>
                <li>Suspicious activity alerts</li>
              </ul>
              <p className="ml-4 mt-2">
                Use these to stay on top of your finances and catch any
                unauthorized activity quickly.
              </p>
            </li>

            <li>
              <span className="font-semibold">Use Budgeting Features</span>
              <p className="ml-4 mt-2">
                Many banking apps now include budgeting tools. These can help
                you:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Categorize your spending</li>
                <li>Set budget limits for different categories</li>
                <li>Track your progress over time</li>
              </ul>
              <p className="ml-4 mt-2">
                Take advantage of these features to gain insights into your
                spending habits.
              </p>
            </li>

            <li>
              <span className="font-semibold">Automate Your Savings</span>
              <p className="ml-4 mt-2">
                Use your app to set up automatic transfers to your savings
                account. Even small, regular contributions can add up over time.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Take Advantage of Mobile Check Deposit
              </span>
              <p className="ml-4 mt-2">
                Save time by depositing checks through your app. Just make sure
                to:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Endorse the check properly</li>
                <li>Keep the physical check until the deposit clears</li>
                <li>Check your bank's limits on mobile deposits</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold">Use Bill Pay Features</span>
              <p className="ml-4 mt-2">
                Set up automatic bill payments to avoid late fees. Just make
                sure you always have sufficient funds in your account.
              </p>
            </li>

            <li>
              <span className="font-semibold">Monitor Your Credit Score</span>
              <p className="ml-4 mt-2">
                Some banking apps offer free credit score monitoring. Regularly
                checking your score can help you catch identity theft early and
                understand how your financial behaviors impact your
                creditworthiness.
              </p>
            </li>

            <li>
              <span className="font-semibold">
                Use Personal Finance Insights
              </span>
              <p className="ml-4 mt-2">
                Look for features that provide insights into your spending
                patterns or offer personalized financial advice. These can help
                you make more informed decisions about your money.
              </p>
            </li>
          </ol>
        </StyledParagraph>
      </div>
    </section>
  );
}
