import Image from "next/image";
export const SendIconWrapper = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    src="/images/send.svg"
    alt="Send"
    height={24}
    width={24}
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Level = ({ isActive }: { isActive: boolean }) => (
  <Image
    src="/images/level.svg"
    alt="Send"
    height={24}
    width={24}
    priority={true} 
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);
export const Global = ({ isActive }: { isActive: boolean }) => (
  <Image
    src="/images/global.svg"
    alt="Send"
    height={24}
    width={24}
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Repeat = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    src="/images/repeat.svg"
    alt="Send"
    height={24}
    width={24}
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Wallet = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    src="/images/wallet.svg"
    alt="Send"
    height={24}
    width={24}
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Command = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/command.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Profile = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/profile-2user.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Call = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/call-calling.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)"
        : "",
    }}
  />
);

export const Briefcase = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/briefcase.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Teacher = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/teacher.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Earth = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/earth.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Message = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/message-question.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Book = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/book-saved.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Video = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/video-slash.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Dollar = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/dollar-circle.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Bank = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/bank.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Lock = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/lock.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const UnLock = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/unlock.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);

export const Bubble = ({ isActive }: { isActive: boolean }) => (
  <Image
  priority={true} 
    height={24}
    width={24}
    src="/images/bubble.svg"
    alt="Send"
    style={{
      filter: isActive
        ? "brightness(0) saturate(100%) invert(33%) sepia(28%) saturate(776%) hue-rotate(141deg) brightness(93%) contrast(88%)" // #156064
        : "",
    }}
  />
);
export const product = [
  {
    title: "Product",
    links: [
      {
        name: "Personal Loans",
        text: "Our personal loans are designed to provide you with the financial freedom.",
        icon: Dollar,
        path: "/",
      },
      {
        name: "Business Loans",
        text: "Whether you're looking for working capital, equipment financing, etc.",
        icon: Briefcase,
        path: "/features",
      },
      {
        name: "Mortgage Loans",
        text: "Designed to help you secure the keys to your dream property.",
        icon: Bank,
        path: "/features",
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
        path: "LockKeyhole",
      },
      {
        name: "Unsecured (Non-collateralized) Loans",
        text: "These are loans that do not require collateral. Mostly personal loans.",
        icon: UnLock,
        path: "/features",
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
        path: "/contact",
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
