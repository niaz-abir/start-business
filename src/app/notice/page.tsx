import Link from "next/link";
import React from "react";
import { FiSearch, FiEye } from "react-icons/fi";

const notices = [
  {
    id: 1,
    date: "Jan 04, 2026",
    title:
      "Confirmation of Registration for the Spring Semester 2026 (for the existing students)",
    category: "Course Related",
    link: "https://drive.google.com/file/d/18mzZG-m1uFE190bOnqUr74nKmssx904T/view?usp=sharing",
  },
  {
    id: 2,
    date: "Jan 04, 2026",
    title:
      "Commencement of Classes and Orientation Program of Spring Semester 2026 (for the newly admitted students)",
    category: "Class Related",
    link: "https://drive.google.com/file/d/18mzZG-m1uFE190bOnqUr74nKmssx904T/view?usp=sharing",
  },
  {
    id: 3,
    date: "Jan 04, 2026",
    title:
      "Admission is going on – Undergrad Data Science and Engineering, Master's in Computer Science and Engineering",
    category: "General",
    link: "https://drive.google.com/file/d/18mzZG-m1uFE190bOnqUr74nKmssx904T/view?usp=sharing",
  },
  {
    id: 4,
    date: "Jan 01, 2026",
    title: "Welcome to BUBT new website",
    category: "General",
    link: "https://drive.google.com/file/d/18mzZG-m1uFE190bOnqUr74nKmssx904T/view?usp=sharing",
  },
  {
    id: 5,
    date: "Jan 01, 2026",
    title: "🎉 Happy New Year 2026 🎉",
    category: "General",
    link: "https://drive.google.com/file/d/18mzZG-m1uFE190bOnqUr74nKmssx904T/view?usp=sharing",
  },
];

const Notice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-bold">All Notices</h1>
        <p className="text-white text-2xl mt-2 mb-8">
          Important Academic & Administrative Updates
        </p>
      </div>

      {/* Notice Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#293194] text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Published</th>
              <th className="px-6 py-3 text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr
                key={notice.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                  {notice.date}
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-800">{notice.title}</p>
                  <span className="text-xs text-gray-500">
                    {notice.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link href={notice.link}>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                      <FiEye />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
