import VWorld from "./Virtual World.png";
import Portfolio from "./Portfolio.png";
import Daankaren from "./DaanKaren.png";
import UMatter from "./UMatter.png";
import FakeNews from "./Fake News.png";

export const projects = [
  {
    id: 1,
    img: FakeNews,
    title: "Fake News Detection API",
    description:
      "Created a fake news detection API endpoint that can be integrated into different platforms to classify news articles"
  },
  {
    id: 2,
    img: Daankaren,
    title: "Daankaren",
    description:
      "A donation platform that helps the users to select campaigns of their choice and donate money or other goods as per their will.(This project is in progress)",
    url: "https://daankarendeployed-1.onrender.com/",
  },
  {
    id: 3,
    img: Portfolio,
    title: "Portfolio Site",
    description:
      "My own portfolio site created entirely using ReactJS and CSS. It displays my projects and my skills along with some other things about me. It also provides the user the facility to contact me through multiple platforms.(This site basically)",
    url: "https://bhavya56arora11.github.io/Portfolio/",
  },

  {
    id: 4,
    img: UMatter,
    title: "UMatter",
    description:
      "A site which focuses on the mental health of students and helps them deal with various mental health related issues.",
    url: "https://bhavya56arora11.github.io/SIH-Project/",
  },
  {
    id: 5,
    img: VWorld,
    title: "Virtual World",
    description:
      "A virtual world interface created entirely with javascript with no pre-installed libraries used where the user can create road maps by choice and place markers on the roads.",
    url: "https://bhavya56arora11.github.io/Virtual-World-Project/",
  },
];
