import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Tanish Balwal .L</h1>
        <p className="text-lg text-gray-600">Software Developer Engineer</p>
        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a href="mailto:tanishbalwall@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/tanishbalwall"><Linkedin className="w-5 h-5" /></a>
          <a href="tel:+919663800208"><Phone className="w-5 h-5" /></a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>
            Confident and solution-focused Software Engineering student with a strong foundation in Java, Python, and C++. Passionate about building scalable applications and solving real-world problems through technology.
          </p>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="list-disc ml-5">
            <li>SSLC – The Great Eastern International Public School, 2021</li>
            <li>PCMC – Jain College, 2021–2023</li>
            <li>B.Tech – Jain (Deemed-to-be University), 2023–2027 (CGPA: 7.0/7)</li>
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-xl md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="space-y-2 list-disc ml-5">
            <li><strong>YouTube Views Project:</strong> Built with MATLAB and Python to predict trends using matrix inversion.</li>
            <li><strong>E₀ Cell Calculator:</strong> Tkinter-based Python app for electrochemical cell calculations.</li>
            <li><strong>Meal Combo Preferences:</strong> Python-MySQL app to analyze customer purchase patterns.</li>
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <p>Java, Python, C++, SQL, MATLAB</p>
          <p>Project Management, Teamwork, Communication, Critical Thinking</p>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc ml-5">
            <li>Operating Systems</li>
            <li>Graph Theory</li>
            <li>Python Programming</li>
            <li>Advanced Excel</li>
            <li>Advanced Tally</li>
          </ul>
        </div>

        <div className="md:col-span-2 text-center mt-6">
          <a href="/resume.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}