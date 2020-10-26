import React from "react"
import { Link } from "react-router-dom"

const About: React.FC = () => {
  return (
    <div className=" text-center md:text-left p-3 sm:p-5 md:py-6 bg-gray-100 sm:w-3/4 md:m-auto container rounded-xl text-gray-800 shadow-md hover:shadow-lg sm:mt-4 md:mt-8  md:h-auto">
      <h3 className="text-xl font-semibold mb-4 hover:underline cursor-default inline-block">
        <i className="fas fa-hashtag"></i> About this project
      </h3>
      <br />
      <p className="text-base font-normal leading-5 tracking-wide text-gray-700">
        This is a <span className="text-gray-900">Google </span>
        screen project when searching, it was made with modern technologies
        like: <br />
        <span className="text-gray-800">
          <span className="pl-3">
            <i className="fas fa-caret-right"></i>{" "}
            <i className="fab fa-react"></i> React{" "}
          </span>
          <br />
          <span className="pl-3">
            <i className="fas fa-caret-right"></i>{" "}
            <i className="far fa-file-code"></i> TypeScript{" "}
          </span>
          <br />
          <span className="pl-3">
            <i className="fas fa-caret-right"></i>{" "}
            <i className="fas fa-file-code"></i> TailwindCss{" "}
          </span>
          <br />
        </span>
        <br />
        <br />
        It was also created by making use of Mobile First since TailwindCss
        helps a lot with that
        <br />
        <br />
        If you like the project you can follow me on my social networks where I
        will place future projects with the progress of my learning put into
        practice
        <br />
        <br />
      </p>
      <p className="text-center sm:text-left font-semibold text-gray-800 cursor-default">
        <i className="fas fa-hashtag"></i>
        <i className="fas fa-hashtag"></i> Social Media:
      </p>
      <div className="pl-4 text-center mt-2 md:mt-4 sm:text-left md:flex md:justify-around md:text-xl">
        <a
          href="https://twitter.com/lolesuncrak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-gray-900"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <br />
        <a
          href="https://github.com/mrLuisFer"
          target="_blank"
          className="hover:underline hover:text-gray-900"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> Github
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/luis-fernando-alvarez/"
          target="_blank"
          className="hover:underline hover:text-gray-900"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <br />
        <a
          href="https://www.facebook.com/profile.php?id=100013068189807"
          target="_blank"
          className="hover:underline hover:text-gray-900"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>
      <div className="text-left mt-4 md:mt-6 right-0 text-gray-500 hover:underline hover:text-gray-600 inline-block">
        <Link to="/">
          <i className="fas fa-arrow-left pr-2"></i>
          Return to the main
        </Link>
      </div>
    </div>
  )
}

export default About
