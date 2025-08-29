import Image from "next/image";

const ACTIVE_FILTER = "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)";

type IconProps = {
  isActive: boolean;
  className?: string;
};

export const SendIconWrapper = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      src="/images/send.svg"
      alt="Send"
      height={24}
      width={24}
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Level = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      src="/images/level.svg"
      alt="Level"
      height={24}
      width={24}
      priority={true}
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Global = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      src="/images/global.svg"
      alt="Global"
      height={24}
      width={24}
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Repeat = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      src="/images/repeat.svg"
      alt="Repeat"
      height={24}
      width={24}
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Wallet = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      src="/images/wallet.svg"
      alt="Wallet"
      height={24}
      width={24}
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Command = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/command.svg"
      alt="Command"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Profile = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/profile-2user.svg"
      alt="Profile"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Call = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/call-calling.svg"
      alt="Call"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Briefcase = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/briefcase.svg"
      alt="Briefcase"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Teacher = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/teacher.svg"
      alt="Teacher"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Earth = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/earth.svg"
      alt="Earth"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Message = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/message-question.svg"
      alt="Message"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Book = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/book-saved.svg"
      alt="Book"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Video = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/video-slash.svg"
      alt="Video"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Dollar = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/dollar-circle.svg"
      alt="Dollar"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Bank = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/bank.svg"
      alt="Bank"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Lock = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/lock.svg"
      alt="Lock"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const UnLock = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/unlock.svg"
      alt="Unlock"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const Bubble = ({ isActive, className = "" }: IconProps) => (
  <div className={className}>
    <Image
      priority={true}
      height={24}
      width={24}
      src="/images/bubble.svg"
      alt="Bubble"
      style={{
        filter: isActive ? ACTIVE_FILTER : "",
      }}
    />
  </div>
);

export const product = [
  {
    title: "Product",
    links: [
      {
        name: "Personal Loans",
        text: "Our personal loans are designed to provide you with the financial freedom.",
        icon: Dollar,
        path: "/joinus",
      },
      {
        name: "Business Loans",
        text: "Whether you're looking for working capital, equipment financing, etc.",
        icon: Briefcase,
        path: "/joinus/about-us",
      },
      {
        name: "Mortgage Loans",
        text: "Designed to help you secure the keys to your dream property.",
        icon: Bank,
        path: "/joinus/about-us",
      },
    ],
  },
  {
    title: "Categories",
    links: [
      {
        name: "Secured (Collateralized) Loans",
        text: "These are loans that require collateral for approval. They are usually of higher amount.",
        icon: Lock,
        path: "/joinus/product-catigory",
      },
      {
        name: "Unsecured (Non-collateralized) Loans",
        text: "These are loans that do not require collateral. Mostly personal loans.",
        icon: UnLock,
        path: "/joinus/product-catigory",
      },
    ],
  },
];

export const Features = [
  {
    title: "Features For Borrowers",
    links: [
      {
        name: "Multiple Loan Offers",
        text: "See multiple loan offers from different lenders that you qualify for.",
        icon: Bubble,
        path: "/features",
      },
      {
        name: "Withdrawal",
        text: "Withdraw money directly from your Credbevy Wallet to your bank account.",
        icon: SendIconWrapper,
        path: "/features",
      },
      {
        name: "Credit Score",
        text: "View your credit score to know how to improve your score and get higher loans.",
        icon: Level,
        path: "/features",
      },
      {
        name: "Loan Matching Algorithm",
        text: "Efficiently match lenders to borrowers through AI-Powered algorithm.",
        icon: Global,
        path: "/features",
      },
    ],
  },
  {
    title: "Features For Lenders",
    links: [
      {
        name: "Loan Matching Algorithm",
        text: "Efficiently match lenders to borrowers through AI-Powered algorithm.",
        icon: Global,
        path: "/features",
      },
      {
        name: "Webhook Integration",
        text: "Webhook API for lenders who use external loan management systems to integrate with us.",
        icon: Repeat,
        path: "/features",
      },
      {
        name: "Wallet System",
        text: "In-app Wallet allowing lenders fund accounts, disburse loans or receive repayments.",
        icon: Wallet,
        path: "/features",
      },
      {
        name: "Diverse Loan Types",
        text: "Offer various types of loans from personal loans to business, mortgage loans.",
        icon: Command,
        path: "/features",
      },
    ],
  },
];

export const Resources = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        text: "Learn about our story, our mission and what drives us as a company.",
        icon: Profile,
        path: "/about",
      },
      {
        name: "Contact Us",
        text: "Reach out to us, we are looking forward to hearing from you.",
        icon: Call,
        path: "/contact-us",
      },
      {
        name: "Career",
        text: "We are always looking for trained people to join our growing professionals.",
        icon: Briefcase,
        path: "/careers",
      },
      {
        name: "Legal",
        text: "Legal documentations and information needed for the public viewing.",
        icon: Teacher,
        path: "/legal",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "News and Media",
        text: "The latest industry news, educational contents and trends to help you learn finances.",
        icon: Earth,
        path: "/news",
      },
      {
        name: "FAQs",
        text: "Frequently Asked Questions on issues of loans, Credbevy and other things.",
        icon: Message,
        path: "/faqs",
      },
      {
        name: "Press",
        text: "Press releases, news and writings and press resources.",
        icon: Book,
        path: "/press",
      },
      {
        name: "Educational Videos",
        text: "Check out our educational videos to get more perspective on how Credbevy works.",
        icon: Video,
        path: "/videos",
      },
    ],
  },
];
