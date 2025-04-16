
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import testerAnimation from "../animations/qa-testing.json";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-slate-100 text-gray-900 px-4 py-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.section className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="w-full max-w-md mx-auto mb-6">
          <Lottie animationData={testerAnimation} loop={true} className="rounded-xl" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">Srujana Tekale</h1>
        <p className="text-2xl text-gray-600 mt-3">Software QA Engineer</p>
        <p className="text-md text-gray-500">Bay Area, CA</p>
      </motion.section>

      {/* About Section */}
      <motion.section className="mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-3 border-b pb-2">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="https://undraw.co/api/illustrations/dfbdb2a3-84ff-4d32-b837-b9cfa56093d8"
            alt="QA Testing Illustration"
            width={240}
            height={240}
            className="rounded-xl shadow-md"
          />
          <p className="leading-relaxed text-lg">
            I’m a Software QA Engineer with hands-on experience in both manual and automated testing. After completing an
            intensive training program at NeoTech Academy, I’ve built solid skills in SDLC, STLC, Selenium, Postman, Jenkins,
            and Agile Scrum methodologies. I’m passionate about ensuring quality in every stage of software delivery.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Java", "SQL", "HTML", "JavaScript",
            "Selenium WebDriver", "Cucumber", "TestNG", "Postman",
            "REST Assured", "JIRA", "Jenkins", "Git & GitHub",
            "Maven", "MySQL", "Agile Scrum"
          ].map(skill => (
            <Card key={skill} className="rounded-2xl shadow hover:shadow-md transition bg-white">
              <CardContent className="text-center py-4 font-medium">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Projects</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="py-4">
              <Image
                src="https://undraw.co/api/illustrations/84df9f2b-8f5e-46cb-8891-9d6f2d67c3b1"
                alt="HRM Testing"
                width={500}
                height={250}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold">Orange HRM – Human Resource Management</h3>
              <p>BDD framework with Selenium, Cucumber, and Jenkins integration.</p>
              <a href="https://github.com/your-github/orange-hrm" className="text-blue-600 hover:underline" target="_blank">GitHub Repository</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <Image
                src="https://undraw.co/api/illustrations/bc73e1f4-d946-40dc-86f5-bb47eb7a1e48"
                alt="Student Info System"
                width={500}
                height={250}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold">SIS – Student Information System</h3>
              <p>Automated regression test cases, backend SQL validation, and API testing using Postman and REST Assured.</p>
              <a href="https://github.com/your-github/sis-testing" className="text-blue-600 hover:underline" target="_blank">GitHub Repository</a>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section className="mb-14 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Resume</h2>
        <a href="/Srujana_Tekale_Resume.pdf" download>
          <Button className="rounded-full px-6 py-2 text-lg">Download My Resume</Button>
        </a>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Contact</h2>
        <p>Email: <a href="mailto:tekalesrujana@gmail.com" className="text-blue-600 hover:underline">tekalesrujana@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/srujanatekale" className="text-blue-600 hover:underline" target="_blank">linkedin.com/in/srujanatekale</a></p>
      </motion.section>
    </div>
  );
}
