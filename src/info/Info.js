import self from "../img/self.png";
// import mock1 from "../img/mock1.png";
// import mock2 from "../img/mock2.png";
// import mock3 from "../img/mock3.png";
// import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";
import project1 from "../img/project1.png"
import project2 from "../img/project2.png"
import project3 from "../img/project3.png"
import project4 from "../img/project4.png"
import project5 from "../img/project5.png"
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Irfan",
  lastName: "Ullah",
  initials: "iu", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by tea",
    },
    {
      emoji: "🌎",
      text: "based in the Islamabad/Pakistan.",
    },
    {
      emoji: "💼",
      text: "Sr. Software Engineer at IKONIC",
    },
    {
      emoji: "📧",
      text: "irfanullahatozi@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/peerzadai",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/code_tune/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/irfanullahatozi/",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/irfanullahatozi/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Irfan Ullah. I'm a Sr. software engineer for IKONIC. I studied Information Technology at UET, Taxila, I enjoy long drive on the empty roads in the later night, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "node",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "express",
      "python",
      "nextjs",
      "AWS(ec2)",
      "mongodb",
      "postgresql",
    ],
    exposedTo: ["react native"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    {
      label: "driving",
      emoji: "🚗",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Yodel",
      live: "http://yodel.today/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: project1,
    },
    {
      title: "RiskShark",
      live: "https://www.riskshark.io/",
      // source: "https://github.com/paytonjewell",
      image: project2,
    },
    {
      title: "Madbop",
      live: "https://madbop.com/",
      // source: "https://github.com/paytonjewell",
      image: project3,
    },
    {
      title: "Nowwhere",
      live: "https://nowwhere.io/",
      // source: "https://github.com/paytonjewell",
      image: project4,
    },
    {
      title: "MTVRS",
      live: "https://mtvrs.io/login",
      // source: "https://github.com/paytonjewell",
      image: project5,
    },
  ],
  timeline: [
    {
      title: "Sr. Software Engineer",
      description: "Started working as an Sr. Software Engineer in IKONIC.",
      emoji: <WorkIcon />,
      color: "#1565c0",
      year: "Aug 2022",
    },
    {
      title: "Post Graduation",
      description: "Post Graduation is completed from UET, Peshawar.",
      emoji: <SchoolIcon />,
      color: "#c62828",
      year: "2021",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Started working as an Sr. Software Engineer in Troon Technologies.",
      emoji: <WorkIcon />,
      color: "#9e9d24",
      year: "Jan 2021",
    },
    {
      title: "Research Assitant",
      description:
        "Started working as an Research Assitant in NCBC Lab UET, Peshawar.",
      emoji: <ScienceIcon />,
      color: "#4caf50",
      year: "Jan 2019",
    },
    {
      title: "Start Postgraduate College",
      description: "Strated Master in Computer Science",
      emoji: <ApartmentIcon />,
      color: "#ff8f00",
      year: "2018",
    },
    {
      title: "Software Engineer",
      description:
        "Started working as a Software Engineer in Allainet Pvt Ltd.",
      emoji: <WorkIcon />,
      color: "#00bcd4",
      year: "Jan 2016",
    },
    {
      title: "Associate S. Engineer",
      description:
        "Started working as an Associate Software Engineer in Technokeet Pvt Ltd.",
      emoji: <WorkIcon />,
      color: "#b2a300",
      year: "Jan 2015",
    },
    {
      title: "Intern",
      description: "Started Internship in Technokeet Pvt Ltd.",
      emoji: <WorkIcon />,
      color: "#482880",
      year: "Sep 2014",
    },
    {
      title: "Graduation",
      description: "Complete Graduation from UET, Taxila.",
      emoji: <SchoolIcon />,
      color: "#4caf50",
      year: "2014",
    },
    {
      title: "Start college",
      description: "Strated bachelor of Information technology in 2010",
      emoji: <ApartmentIcon />,
      color: "#2196f3",
      year: "2010",
    },
  ],
};
