import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Brain, Users, Mail, Github, Linkedin, MessageSquare, Headphones, GamepadIcon, HelpCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import BetaSignup from './pages/BetaSignup';

function HomePage() {
  const teamMembers = [
    {
      name: "Ashen",
      role: "Educational Psychologist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sithumi",
      role: "Lead Game Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Dulmina",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Thrishali",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Thinula",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    },
    {
      name: "James Wilson",
      role: "Game Artist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      linkedin: "#",
      github: "#"
    }
  ];

  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes! SnickerSnap is completely free during the beta period. After launch, we'll offer both free and premium features."
    },
    {
      question: "What ages is it for?",
      answer: "SnickerSnap is designed for children aged 6-12 years old, with different difficulty levels to match their learning pace."
    },
    {
      question: "Does it work on all devices?",
      answer: "Currently, SnickerSnap works on computers and tablets with modern web browsers. Mobile app coming soon!"
    },
    {
      question: "How does progress tracking work?",
      answer: "Parents and teachers can access detailed progress reports showing improvement in reading speed, accuracy, and comprehension."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 bg-gradient-to-b from-yellow-100 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            SnickerSnap
            <span className="block text-3xl md:text-4xl text-purple-600 mt-2 animate-color-pulse">
              A Fun Way to Learn!
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            An engaging game that makes reading easier for kids with dyslexia!
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="/beta-signup" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all hover:scale-105 transform">
              Join Beta
            </a>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is SnickerSnap?</h2>
              <p className="text-lg text-gray-600 mb-6">
                SnickerSnap is a fun and interactive game that helps children with dyslexia improve their reading skills through engaging exercises and personalized learning paths.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GamepadIcon className="w-6 h-6 text-purple-600" />
                  <span>Gamified learning experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-6 h-6 text-purple-600" />
                  <span>Advanced speech recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                  <span>Personal progress tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-600">Game Preview Video Coming Soon</p>
            </div>
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
              <p className="text-gray-600">Listen to the sounds and words</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match</h3>
              <p className="text-gray-600">Match letters and numbers</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GamepadIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete</h3>
              <p className="text-gray-600">Complete fun levels</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track</h3>
              <p className="text-gray-600">Track your progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Speech Recognition</h3>
              <p className="text-gray-600">Powered by Soapbox API & ML model for accurate voice detection</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Personal Learning</h3>
              <p className="text-gray-600">Adapts to each child's unique learning style and pace</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Three Levels</h3>
              <p className="text-gray-600">Progressive difficulty with different exercise types</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Kid-Friendly</h3>
              <p className="text-gray-600">Colorful design with intuitive interface</p>
            </div>
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
      <section className="py-20 bg-white">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <a href="mailto:contact@snickersnap.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  contact@snickersnap.com
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  Live Chat Support
                </a>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
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
                <button className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 SnickerSnap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beta-signup" element={<BetaSignup />} />
      </Routes>
    </Router>
  );
}

export default App;