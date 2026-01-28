import React from "react";

const About = () => {
    const leadershipData = [
      {
        id: 1,
        title: "Message from the Chairman",
        name: "M. Rezaul Karim Chowdhury",
        designation: "Founder & Chairman",
        image:
          "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with real image
        message:
          "Technical and vocational education plays a vital role in reducing unemployment, creating self-employment opportunities, and developing skilled human resources. Our goal is to prepare competent professionals who can contribute effectively to national and global development through quality education and practical training.",
      },
      {
        id: 2,
        title: "Message from the Principal",
        name: "Shafal Kumar Barua",
        designation: "Principal",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with real image
        message:
          "Bangladesh is a developing country where skilled manpower is the key to sustainable growth. Through modern, industry-oriented education and discipline, we aim to empower students with knowledge, skills, and ethical values to succeed in their professional careers.",
      },
    ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      {/* Page Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Learn about our institution’s history, mission, values, and the
          leadership that guides us toward excellence.
        </p>
      </section>

      {/* 1. Institution History */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Institution History</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our institution was established with a vision to provide quality
            technical and professional education. Over the years, we have grown
            into a trusted name in education, producing skilled graduates who
            contribute effectively to society.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With modern facilities, experienced faculty members, and an
            industry-oriented curriculum, we continue to adapt to the evolving
            demands of the global workforce.
          </p>
        </div>
        <div className=" rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Institution"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="mb-20  p-10 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide inclusive, innovative, and industry-relevant education
              that empowers students with knowledge, skills, and ethical values
              for lifelong success. To be a leading educational institution
              recognized for academic excellence, innovation, and positive
              societal impact at both national and international levels.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be a leading educational institution recognized for academic
              excellence, innovation, and positive societal impact at both
              national and international levels.To provide inclusive,
              innovative, and industry-relevant education that empowers students
              with knowledge, skills, and ethical values for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1709715357510-b687304cee3a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Core Values"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We are committed to integrity, discipline, respect, and
            accountability in all academic and administrative activities.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our values promote ethical behavior, teamwork, innovation, and a
            student-centered learning environment that nurtures personal and
            professional growth.To provide inclusive, innovative, and
            industry-relevant education that empowers students with knowledge,
            skills, and ethical values for lifelong success. To be a leading
            educational institution recognized for academic excellence,
            innovation, and positive societal impact at both national and
            international levels.
          </p>
        </div>
      </section>

      {/* 4. Leadership Messages */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {leadershipData.map((leader) => (
            <div
              key={leader.id}
              className="bg-[#dedcdb] rounded-xl p-8 text-center shadow-sm"
            >
              {/* Image */}
              <div className="flex justify-center -mt-20 mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="  w-56 h-56 rounded-full object-cover border-4  shadow-md"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {leader.title}
              </h3>

              {/* Message */}
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                {leader.message}
              </p>

              {/* Name & Designation */}
              <div className="mt-6">
                <p className="font-semibold text-gray-800">{leader.name}</p>
                <p className="text-sm text-gray-500">{leader.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
