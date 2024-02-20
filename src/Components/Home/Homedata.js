import { GiWireframeGlobe } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaSackDollar } from "react-icons/fa6";
import  createaccount from '../Assets/account-create.png'
import person from '../Assets/person job search.jpg'
import hands from '../Assets/shake hand.jpg'
const Homedata = [
  {
    images:<GiWireframeGlobe size={35} color="skyblue"/>,
    Title: "Global Audience",
    para1: "Do you want to reach professional talent worldwide?",
    para2:"Access our professional platform in over 180 countries. Register today to access our platform.",
  },
  {
    images: <HiOutlineLightBulb size={35} color="orange"/>,
    Title: "Smart and Efficient",
    para1:"An efficient recruitment platform designed to simplify your hiring process",
    para2:"and save you valuable time",
  },
  {
    images: <FaSackDollar size={35} color="violet"/>,
    Title: "Cost-Effective",
    para1: "Say hello to customised plans. Cut costs, Increase efficiency & grow revenue.",
    para2:"Say goodbye to expensive solutions, say hello to fixed price subscription.",
  },
];

const Carddata = [
  {
    img:createaccount,
    Title:'Create Your Account',
    para1:'Sign up & complete the full registration. Use your profile for better visibility to recruiters.',
    para2:'We have got a CV uploader to make things faster.'
  },
  {
    img:person,
    Title:'Start your Job Search',
    para1:'Use your ONLINE JOB credentials to job search. Our algorithms will also help you,',
    para2:'find jobs on a global level that will fit your skills and experience.'
  },
  {
    img:hands,
    Title:'Apply and Get Hired',
    para1:'ONLINE JOB stays with job seekers throughout the hiring process.',
    para2:'Apply for jobs and communicate with recruiters directly via the ONLINE JOB portal.'
  }
];



export {Homedata,Carddata};
