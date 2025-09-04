import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <p className="mx-auto border-1 border-gray-300 p-6 shadow-xl rounded-xl w-100 text-xl sm:w-130 md:w-150 ">
        This project is a React.js application built as part of a technical
        test. It demonstrates key React concepts such as state management, form
        handling with validation, API integration, and routing.
      </p>
    </>
  );
}
