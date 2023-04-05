import Portfolio from "../assets/portfolio.webp";
import Expelee from "../assets/expelee.png";
import Whatsapp from "../assets/whatsapp.webp";
import Todolist from "../assets/todolist.webp";
import InstagramClone from "../assets/instagramClone.webp";
import Calculator from "../assets/calculator.webp";
import stacking from "../assets/stacking.png";
import library from "../assets/library.png";
import koinpr from "../assets/koinpr.png";
import naturalganic from "../assets/naturalganic.png";
import admin from "../assets/admin.png";

export const projectData = [
  {
    id: 1,
    image: Expelee,
    summary: "Blockchain Website",
    overlay: "Expelee- The smart contract audit Website",
    title: "Expelee- The smart contract audit Website",
    features: [
      "The website for all the web3 related stuff. Key features are:",
      "1. Audit The Contract",
      "2. Check price of All The Coin",
      "3. Scan All networks Data at one place",
      "4. Generate Tokens",
      "5. And There are many more to come and in progress....",
    ],
    techStack: [
      "React",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "Redux",
      "Tailwind CSS",
      "Material-ui",
      "Solidity",
      "Hardhat",
      "Truffle",
    ],
    links: [
      "https://expeleeweb3.vercel.app/",
      "https://github.com/amankumarsuman/expeleeweb",
    ],
  },
  {
    id: 2,
    image: stacking,
    summary: "The Stacking decentralized Application",
    overlay: "Stacking-dApp",
    title: "Stacking decentralized Application",
    features: [
      "Stacking dapp is a decentralized Application based on blockchain. The key Features are:",
      "1. This stacking dApp  support staking for various cryptocurrencies, not just one. This feature will enable users to diversify their portfolio and maximize their returns.",
      "2. It offer flexible staking options, such as the ability to stake for different periods, stake different amounts, and unstake at any time. This feature will allow users to tailor their staking strategy to their specific needs.",
      "3. Having robust security measures in place to protect user funds from theft and hacking. This feature will provide users with peace of mind and confidence in the platform's safety.",
    ],
    techStack: ["NextJs", "Tailwind CSS", "Solidity", "Hardhat", "Metamask"],
    links: [
      "https://stacking-next.vercel.app/",
      "https://github.com/amankumarsuman/stackingNext",
    ],
  },

  {
    id: 3,
    image: library,
    summary: "Decentralized Library Management System",
    overlay: "Library Management System(Decentralized)",
    title: "Decentralized Library Management System",
    features: [
      "Some key features are: ",
      "1. Owner Can List the details of book issued to the student.",
      "2. Transfer the book to another student",
      "3. Transfer the ownership",
    ],
    techStack: ["React", "Tailwind CSS", "MUI", "Solidity", "Thirdweb"],
    links: [
      "https://github.com/amankumarsuman/propertyTransfer",
      "https://decentralisedlibrary.vercel.app/",
    ],
  },
  {
    id: 4,
    image: koinpr,
    summary: "Koinpr-The crypto PR Website",
    overlay: "Crypto PR Website-Ecommerce model",
    title: "Crypto PR Website with Publisher & Advertiser",
    features: [
      "Some key features are:",
      "User will get authenticated with JWT Token",
      "Advertiser & Publisher facility as per user type UI will change",
      "Stripe Integration",
    ],
    techStack: [
      "React",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "AWS",
      "Material-ui",
    ],
    links: [
      "https://koinpr-x2nc.vercel.app/",
      "https://github.com/amankumarsuman/koinpr",
    ],
  },
  {
    id: 5,
    image: naturalganic,
    summary: "Quick Grocery Delivery Application",
    overlay: "Naturalganic- Quick Grocery Delivery Application",
    title: "Naturalganic-A fullstack Grocery Delivery Application",
    features: [
      "It’s a basic Grocery Ecommerce webapplication",
      "Some key features are:",
      "1. For Admin, Admin can add details of products & manage their inventry",
      "2. For Customer, they can buy the product",
      "3. Chat bot for quick and easy order management for customer",
      "4. Backend deployed on AWS.",
    ],
    techStack: [
      "React",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "AWS-Amplify",
      "S3-Bucket",
      "Material-ui",
    ],
    links: [
      "https://naturalganic.shop/#/",
      "https://github.com/amankumarsuman/naturalganics",
    ],
  },
  {
    id: 6,
    image: admin,
    summary: "Simple admin portal",
    overlay: "Basic Admin Portal",
    title: "Basic Admin Portal",
    features: [
      "Admin Can see The details",
      "Admin Can Manupulate the details",
      "Functionality for switch the theme between Dark and Light",
    ],
    techStack: ["React", "Material-ui", "Nodejs", "ExpressJs"],
    links: [
      "https://koinpradmin.vercel.app/dashboard",
      "https://github.com/amankumarsuman/expelee-admin",
    ],
  },
  // {
  //   id: 10,
  //   image: "",
  //   summary: "End To End Chat",
  //   overlay: "Decentralized Chat",
  //   title: "End to End Encrypted Chat Application",
  //   features: [
  //     "Some key features are:",
  //     "Real-time chat feature with the help of Firebase.",
  //     "Backend and Frontend hosted on Vercel.",
  //   ],
  //   techStack: ["React", "MongoDB", "ExpressJS", "NodeJS", "Cryptojs"],
  //   links: [
  //     "https://endtoendchat.vercel.app/",
  //     "https://github.com/amankumarsuman/endtoendchat/tree/main/frontend",
  //   ],
  // },
];
