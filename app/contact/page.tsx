import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="w-full mt-[6%] flex flex-col md:flex-row justify-between pt-12 md:pt-16 px-4 h-auto flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-[55%] p-4 mb-6 md:mb-0">
          <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
          <p className="text-lg leading-8">
            &quot;We&#39;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out using
            the form below.&quot; <br /> Here are Our Social Links:
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-600 text-white p-6 rounded shadow-lg w-full md:w-[40%]">
          <form>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 text-black mb-4 p-2 border border-gray-300 rounded"
            />

            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 mb-4 text-black p-2 border border-gray-300 rounded"
            />

            <label htmlFor="number" className="block text-sm font-medium">
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full mt-2 mb-4 p-2 text-black border border-gray-300 rounded"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 py-6 text-lg">
        <Link
          href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/"
          className=" text-blue-600 hover:text-blue-800 text-center w-full sm:w-auto"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn
        </Link>
        <Link
          href="https://github.com/shoby056"
          className="text-blue-600 hover:text-blue-800 text-center w-full sm:w-auto"
        >
          <i className="fa-brands fa-github" aria-hidden="true" ></i> Github
        </Link>
        <Link
          href="https://www.facebook.com/shoby056"
          className="text-blue-600 hover:text-blue-800 text-center w-full sm:w-auto"
        >
          <i className="fa-brands fa-facebook" aria-hidden="true"></i> Facebook
        </Link>
        <Link
          href="mailto:shkshoaib056@gmail.com"
          className="text-blue-600 hover:text-blue-800 text-center w-full sm:w-auto"
        >
          <i className="fa-solid fa-envelope" aria-hidden="true"></i> shkshoaib056@gmail.com
        </Link>
      </div>

      <Footer />
    </div>
  );
}
