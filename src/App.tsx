import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { Link } from "react-router-dom";

import BetaSignup from './pages/BetaSignup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'; // Import Mousewheel module
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-fade'; // Import additional effects if needed
import 'swiper/css/navigation'; // If you're using navigation arrows
import 'swiper/css/pagination';
import 'swiper/css/mousewheel'; // Import Mousewheel styles if needed
import { BookOpen, Brain, Users, Mail, Github, Linkedin, MessageSquare, Headphones, GamepadIcon, HelpCircle, Instagram, Cpu } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Ashen",
      role: "Team Leader & Game Developer",
      image: "images/Ashen.jpg",
      linkedin: "https://www.linkedin.com/in/ashen-alwis-3626a0274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/ashenalwiz"
    },
    {
      name: "Sithumi",
      role: "Game Developer",
      image: "images/Sithumi.jpeg",
      linkedin: "#",
      github: "https://github.com/Sithumi-SS"
    },
    {
      name: "Dulmina",
      role: "Game Developer",
      image: "images/Dulmina.jpg",
      linkedin: "https://www.linkedin.com/in/dulmina-hettiarachchi-8aa923296",
      github: "https://github.com/dulminahxxx"
    },
    {
      name: "Thrishali",
      role: "Game Developer",
      image: "images/Thrishali.jpg",
      linkedin: "www.linkedin.com/in/thrishali-gamage-11844a294",
      github: "https://github.com/ThrishaliN"
    },
    {
      name: "Thinula",
      role: "Game Developer",
      image: "/images/Thinula.png",
      linkedin: "https://www.linkedin.com/in/thinula-harischandra-218208272/",
      github: "https://github.com/thinulaH"
    },
    {
      name: "Afra",
      role: "Game Developer",
      image: "images/Afra.jpg",
      linkedin: "https://www.linkedin.com/in/fathima-afra-87a2a3303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/Afra10"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes! Readaroo is completely free during the beta period. After launch, we'll offer both free and premium features."
    },
    {
      question: "What ages is it for?",
      answer: "Readaroo is designed for children aged 5-10 years old, with different difficulty levels to match their learning pace."
    },
    {
      question: "Does it work on all devices?",
      answer: "Readaroo will only work on mobile phones and tablets (iOS and Android)."
    },
    {
      question: "How does progress tracking work?",
      answer: "Parents and teachers can access detailed progress reports showing improvement in reading speed, accuracy, and comprehension."
    }
  ];

  // If loading, show the Loading component
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {/* Remove the showJoinBeta prop from Navbar */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-purple-50">
              {/* Hero Section */}
              <section className="pt-20 pb-10 px-4 bg-gradient-to-b from-yellow-100 to-yellow-50">
                <div className="max-w-6xl mx-auto text-center animate-fade-in">
                  <h1 className="text-5xl md:text-6xl mt-8 font-bold text-gray-900 mb-6 animate-slide-up">
                    Readaroo
                    <span className="block text-3xl md:text-4xl text-purple-600 mt-2 animate-color-pulse">
                      A Fun Way to Learn!
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
                  An engaging game that supports learning and development for kids with dyslexia, making education fun and accessible!
                  </p>
                  <div
                    className="flex justify-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Link
                      to="/beta-signup"
                      className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all hover:scale-105 transform"
                    >
                      Join Waitlist
                    </Link>
                  </div>

                  {/* Kids Image Under the Section */}
                  <div className="mt-12 flex justify-center">
                    <img
                      src="/images/kids.jpg"
                      alt="Kids Reading"
                      className="w-full max-w-3xl rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Rest of the sections remain unchanged */}
              {/* Game Overview */}
              <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">What is Readaroo?</h2>
                      <p className="text-lg text-gray-600 mb-6">
                          Readaroo is a fun, interactive game that helps children with dyslexia improve reading and other skills through engaging exercises and personalized learning paths.                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <GamepadIcon className="w-6 h-6 text-purple-600" />
                          <span>Gamified learning experience</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Cpu className="w-6 h-6 text-purple-600" /> {/* Changed icon to Cpu */}
                          <span>Advanced chat bot</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Brain className="w-6 h-6 text-purple-600" />
                          <span>Personal progress tracking</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg aspect-video overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/bahryE0Xtio"
                        title="Game Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>

              {/* Image Section */}
              <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="images/Colorful Organic Child Psychology Presentation.png"
                      alt="Hero Section Image"
                      className="w-full transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F61] to-[#FFD700] opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section className="py-20 bg-purple-50">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Headphones className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Listen</h3>
                      <p className="text-gray-600">Listen to sounds, words, and instructions</p>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <BookOpen className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Match</h3>
                      <p className="text-gray-600">Match audio to visuals in fun interactive exercises</p>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <GamepadIcon className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Complete</h3>
                      <p className="text-gray-600">Complete engaging levels with progressive challenges</p>
                    </div>
                    <div className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Brain className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Track</h3>
                      <p className="text-gray-600">Track your learning progress and achievements</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section id="features" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Dyslexia-Friendly Design</h3>
                      <p className="text-gray-600">Uses accessible fonts and vibrant visuals for an intuitive experience</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">AI ChatBot</h3>
                      <p className="text-gray-600">An intelligent chatbot that assists children with learning and provides instant feedback.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Interactive Games</h3>
                      <p className="text-gray-600">Engaging activities with increasing complexity</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Parental Dashboard</h3>
                      <p className="text-gray-600">Track progress and adjust learning goals with ease</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile Apps Coming Soon Section */}
              <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                    Mobile Apps Coming Soon!
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 animate-fade-in-up">
                    Stay tuned for our mobile apps on Google Play Store and Apple App Store.
                  </p>

                  {/* Store Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 animate-fade-in-up">
                    {/* Google Play Store Icon */}
                    <a href="#" className="transform hover:scale-105 transition-all duration-300">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play Store"
                        className="h-12 sm:h-16 w-auto"
                      />
                    </a>

                    {/* Apple App Store Icon */}
                    <a href="#" className="transform hover:scale-105 transition-all duration-300">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Apple App Store"
                        className="h-12 sm:h-16 w-auto"
                      />
                    </a>
                  </div>

                  {/* Modern Wall Art for Screenshots */}
                  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {[
                      "images/Screenshot0.png",
                      "images/Screenshot1.png",
                      "images/Screenshot2.png",
                      "images/Screenshot3.png",
                      "images/Screenshot4.png",
                      "images/Screenshot5.png",
                      "images/Screenshot6.png",
                      "images/Screenshot7.png",
                      "images/Screenshot8.png",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <img
                          src={src}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md transform hover:scale-101 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-purple-600" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Team Section */}
              <section id="team" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="bg-purple-50 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                        <p className="text-gray-600 text-center mb-4">{member.role}</p>
                        <div className="flex justify-center space-x-4">
                          {member.github && (
                            <a href={member.github} className="text-gray-600 hover:text-purple-600 transition-colors">
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a href={member.linkedin} className="text-gray-600 hover:text-purple-600 transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <footer className="relative bg-[#634f87] text-white py-12 overflow-hidden">
                {/* Argyle Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/argyle.png')] opacity-20 pointer-events-none"></div>

                <div className="relative max-w-6xl mx-auto px-4">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                      <div className="space-y-2">
                        <a href="mailto:teamreadaroo@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                          <Mail className="w-5 h-5" />
                          teamreadaroo@gmail.com
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                          <MessageSquare className="w-5 h-5" />
                          Live Chat Support
                        </a>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/readaroo/" className="hover:text-gray-300 transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/ashenalwiz/Project-Snikersnap" className="hover:text-gray-300 transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/readaroo/" className="hover:text-gray-300 transition-colors">
                          <Instagram className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                      <p className="mb-4">Stay updated with our latest developments</p>
                      <div className="flex">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="px-4 py-2 rounded-l-md w-full text-gray-900 transition-all duration-300"
                        />
                        <button className="bg-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-800 transition-all duration-300">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-500 text-center">
                    <p>&copy; 2024 Readaroo. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
          }
        />
        <Route path="/beta-signup" element={<BetaSignup />} />
      </Routes>
    </Router>
  );
}

export default App;