import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <p className="flex justify-around mx-auto w-100 text-xl sm:w-130 md:w-150">
        This project is a React.js application built as part of a technical
        test. It demonstrates key React concepts such as state management, form
        handling with validation, API integration, and routing.
      </p>
    </>
  );
}
