import Navbar from "./navbar";
import Footer from "./footer";

function Courses() {
  const courses = [
    {
      title: "Full Stack Web Development",
      desc: "HTML, CSS, JavaScript, React & Node.js",
      duration: "6 Months",
      level: "Beginner–Advanced",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "/enroll?course=full-stack-web-development"
    },
    {
      title: "Data Science & AI",
      desc: "Python, ML, AI & Analytics",
      duration: "8 Months",
      level: "Intermediate",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "/enroll"
    },
    {
      title: "UI / UX Design",
      desc: "Figma, UX Research & Prototyping",
      duration: "4 Months",
      level: "Beginner",
      price: "₹3,999",
      image: "https://tse4.mm.bing.net/th/id/OIP.wblqYsnbD2OJmYMVrfnOxgHaEK?pid=Api&P=0&h=180",
      link: "/enroll"
    },
    {
      title: "Mobile App Development",
      desc: "Flutter & React Native",
      duration: "6 Months",
      level: "Intermediate",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      link: "/enroll"
    },
    {
      title: "Cyber Security",
      desc: "Ethical Hacking & Network Security",
      duration: "5 Months",
      level: "Advanced",
      price: "₹7,499",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      link: "/enroll"
    },
    {
      title: "Cloud Computing",
      desc: "AWS, Azure & DevOps",
      duration: "4 Months",
      level: "Intermediate",
      price: "₹5,999",
      image: "https://tse2.mm.bing.net/th/id/OIP.aSADf-o3ISytJMMpdTEKQAHaE8?pid=Api&P=0&h=180",
      link: "/enroll"
    },
    {
      title: "Digital Marketing",
      desc: "SEO, Ads, Social Media & Analytics",
      duration: "3 Months",
      level: "Beginner",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      link: "/enroll"
    },
    {
      title: "Python Programming",
      desc: "Core Python to Advanced Concepts",
      duration: "3 Months",
      level: "Beginner",
      price: "₹2,999",
      image: "https://tse4.mm.bing.net/th/id/OIP.10RgzK8pXC7L-r4Ip5PlXwHaEL?pid=Api&P=0&h=180",
      link: "/enroll"
    },
    {
      title: "Java Programming",
      desc: "Core Java, OOP & Spring Basics",
      duration: "4 Months",
      level: "Beginner–Intermediate",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
      link: "/enroll"
    },
    {
      title: "DevOps Engineering",
      desc: "CI/CD, Docker, Kubernetes",
      duration: "5 Months",
      level: "Advanced",
      price: "₹7,999",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      link: "/enroll"
    },
    {
      title: "Blockchain Development",
      desc: "Solidity, Smart Contracts & Web3",
      duration: "4 Months",
      level: "Advanced",
      price: "₹8,499",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
      link: "/enroll"
    },
    {
      title: "Software Testing",
      desc: "Manual & Automation Testing",
      duration: "3 Months",
      level: "Beginner",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      link: "/enroll"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 max-w-7xl mx-auto px-6 py-20">

        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.desc}</p>

              <div className="flex justify-between text-sm text-gray-500">
                <span>⏱ {course.duration}</span>
                <span>🎯 {course.level}</span>
              </div>

              <div className="flex justify-between items-center pt-3">
                <span className="text-blue-600 font-bold text-lg">
                  {course.price}
                </span>

                <a
                  href={course.link}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      <Footer />
    </>
  );
}

export default Courses;