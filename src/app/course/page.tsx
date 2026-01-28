import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const labImages = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1074&auto=format&fit=crop",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1331&auto=format&fit=crop",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1074&auto=format&fit=crop",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1331&auto=format&fit=crop",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?q=80&w=1170&auto=format&fit=crop",
  },
];

const Course = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-white">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Diploma in Nursing Science
        </h1>
        <p className="leading-relaxed">
          Diploma in Computer Engineering program can be a good choice for your
          career. Computers are an amazing creation of science and technology.
          Over the last twenty years, this industry has grown rapidly worldwide.
        </p>
      </section>
      {/* About Course */}{" "}
      <section className="mb-12 gap-8">
        {" "}
        <div>
          {" "}
          <h2 className="text-2xl font-semibold mb-4">
            About the Program
          </h2>{" "}
          <p className="text-white leading-relaxed mb-4">
            {" "}
            Research has shown that since 1998, most jobs have been created
            worldwide in computer and computer-related fields. With the
            development of computer and communication technology, there has been
            a huge change in the workplace of every government and
            non-government organization.{" "}
          </p>{" "}
          <p className="text-white leading-relaxed">
            {" "}
            After completing the Diploma in Computer Engineering course at a
            polytechnic institute under Bangladesh Technical Education Board, a
            student gets ample opportunity to work in programming, software
            firms, IT firms, and industrial factories.{" "}
          </p>{" "}
        </div>{" "}
      </section>
      {/* Career Prospects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Career Prospects</h2>
        <p className="leading-relaxed">
          A four-year-long Diploma in Computer Engineering is highly valued
          among the young generation for its job-oriented syllabus. After
          completing SSC, a student can join this course and receive the status
          of a Diploma Engineer.
        </p>
      </section>
      {/* Career Path */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Career Path</h2>
        <ul className="space-y-3">
          {[
            "Software Developer",
            "IT Support Engineer",
            "Network Administrator",
            "Web Developer",
            "System Analyst",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>
      {/* Admission Eligibility */}
      <section className="mb-12 p-6 rounded-2xl bg-[#1a2f45]">
        <h2 className="text-2xl font-semibold mb-4">Admission Eligibility</h2>
        <ul className="space-y-2">
          <li>Minimum SSC equivalent from any discipline</li>
          <li>Minimum GPA: 2.00</li>
          <li>HSC (Science): Direct admission to 3rd Semester</li>
          <li>
            HSC (Vocational): Direct admission to 4th Semester (Passing year
            2011, GPA 2.00)
          </li>
        </ul>
      </section>
      {/* Admission Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Admission Guidelines</h2>
        <p className="mb-4">
          Students are encouraged to collect the admission form from the
          admission office. To confirm admission, students must submit:
        </p>

        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaCircle className="text-blue-500 text-[8px]" />4 copies of recent
            passport-size photographs
          </li>
          <li className="flex items-center gap-3">
            <FaCircle className="text-blue-500 text-[8px]" />
            Original SSC transcript
          </li>
          <li className="flex items-center gap-3">
            <FaCircle className="text-blue-500 text-[8px]" />
            Photocopy of Parent’s NID card
          </li>
          <li className="flex items-center gap-3">
            <FaCircle className="text-blue-500 text-[8px]" />
            Properly filled admission form
          </li>
        </ul>

        <p className="mt-4 font-semibold text-red-500">
          Note: Admission is limited to available seats.
        </p>
      </section>
      {/* Apply Button */}
      <div className="mb-12">
        <button className="w-[350px] lg:w-[450px] h-14 rounded-md text-lg font-bold bg-[#1a2f45] hover:bg-[#2a4f75] transition">
          Apply Now
        </button>
      </div>
      {/* Lab Facilities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Lab Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labImages.map((lab) => (
            <div key={lab.id} className="h-48 rounded-2xl overflow-hidden">
              <img
                src={lab.imageUrl}
                alt="Lab Facility"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Course;
