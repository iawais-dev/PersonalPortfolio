import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-screen flex justify-center  flex-col text-white py-16 ">  <section id="about" className="px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed">
          I'm a passionate <span className="font-semibold">Web Developer</span> dedicated to creating responsive, scalable, and user-friendly websites.
          With a strong focus on **modern web technologies**, I specialize in building clean and interactive web applications that provide seamless user experiences.
        </p>
      </div>
    </section>

    {/* Education Section*/}
    <section id="education" className=" py-10 ">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Education</h2>

    <div className="shadow-lg rounded-lg">
      {/* Mobile */}
      <div className="block sm:hidden">
        <div className=" bg-white text-black p-4 mb-4">
          <h3 className="font-bold">Study Level: HSSC</h3>
          <p><strong>Institution:</strong> FG Boys Inter College, Karachi Cantt</p>
          <p><strong>Duration:</strong> Ongoing</p>
          <p><strong>Percentage:</strong> -</p>
        </div>
        <div className="bg-white text-black p-4 mb-4">
          <h3 className="font-bold">Study Level: SSC</h3>
          <p><strong>Institution:</strong> Fg boys school, karachi Cantt</p>
          <p><strong>Duration:</strong> Completed</p>
          <p><strong>Percentage:</strong> 76%</p>
        </div>
      </div>

      <div className="hidden sm:block">
        <table className="min-w-full table-auto text-gray-800">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="py-3 px-6 text-center">Study Level</th>
              <th className="py-3 px-6 text-center">Institution</th>
              <th className="py-3 px-6 text-center">Duration</th>
              <th className="py-3 px-6 text-center">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="py-3 px-6">HSSC</td>
              <td className="py-3 px-6">FG Boys Inter College, Karachi Cantt</td>
              <td className="py-3 px-6">Ongoing</td>
              <td className="py-3 px-6">-</td>
            </tr>
            <tr className="bg-white">
              <td className="py-3 px-6">SSC</td>
              <td className="py-3 px-6">Fg boys school, karachi Cantt</td>
              <td className="py-3 px-6">Completed</td>
              <td className="py-3 px-6">76%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>






    </div>
  
  );
};

export default AboutSection;
