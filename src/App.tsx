import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

import BetaSignup from './pages/BetaSignup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-fade'; // Import additional effects if needed
import 'swiper/css/navigation'; // If you're using navigation arrows
import 'swiper/css/pagination';
import { BookOpen, Brain, Users, Mail, Github, Linkedin, MessageSquare, Headphones, GamepadIcon, HelpCircle, Instagram } from 'lucide-react';

function App() {
  const [showNavJoinBeta, setShowNavJoinBeta] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const homeJoinBetaRef = useRef<HTMLDivElement>(null);

  // Handle scroll to show/hide the Navbar "Join Beta" button
  useEffect(() => {
    const handleScroll = () => {
      if (homeJoinBetaRef.current) {
        const homeJoinBetaButton = homeJoinBetaRef.current;
        const rect = homeJoinBetaButton.getBoundingClientRect();
        const isHomeJoinBetaVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Show the Navbar "Join Beta" button only if the home button is not visible
        setShowNavJoinBeta(!isHomeJoinBetaVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      role: "",
      image: "images/Ashen.jpg",
      linkedin: "https://www.linkedin.com/in/ashen-alwis-3626a0274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/ashenalwiz"
    },
    {
      name: "Sithumi",
      role: "",
      image: "images/Sithumi.jpeg",
      linkedin: "#",
      github: "https://github.com/Sithumi-SS"
    },
    {
      name: "Dulmina",
      role: "",
      image: "images/Dulmina.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Thrishali",
      role: "",
      image: "images/Thrishali.jpg",
      linkedin: "www.linkedin.com/in/thrishali-gamage-11844a294",
      github: "https://github.com/ThrishaliN"
    },
    {
      name: "Thinula",
      role: "",
      image: "/images/Thinula.png",
      linkedin: "https://www.linkedin.com/in/thinula-harischandra-218208272/",
      github: "https://github.com/thinulaH"
    },
    {
      name: "Afra",
      role: "",
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
      <Navbar showJoinBeta={showNavJoinBeta} />
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
      An engaging game that makes reading easier for kids with dyslexia!
    </p>
    <div
      ref={homeJoinBetaRef}
      className="flex justify-center gap-4 animate-fade-in-up"
      style={{ animationDelay: '0.4s' }}
    >
      <a
        href="/beta-signup"
        className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all hover:scale-105 transform"
      >
        Join Beta
      </a>
    </div>
  </div>

  {/* Kids Image Under the Section */}
  <div className="mt-12 flex justify-center">
    <img
      src="/images/kids.jpg"
      alt="Kids Reading"
      className="w-full max-w-3xl rounded-lg shadow-lg"
    />
  </div>
</section>

              {/* Game Overview */}
              <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">What is Readaroo?</h2>
                      <p className="text-lg text-gray-600 mb-6">
                        Readaroo is a fun and interactive game that helps children with dyslexia improve their reading skills through engaging exercises and personalized learning paths.
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
              <section id="features" className="py-20 bg-white">
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

    {/* Phone Mockups */}
<div className="mt-16 relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
  {/* Mobile View Swiper */}
  <Swiper
    spaceBetween={20} // Added space between slides
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }} // Ensure autoplay continues after interaction
    centeredSlides={true} // Center the current slide
    breakpoints={{
      640: {
        slidesPerView: 1, // 1 slide on mobile
      },
      768: {
        slidesPerView: 2, // 2 slides on tablet
        spaceBetween: 30, // Adjust space for tablet
      },
      1024: {
        slidesPerView: 3, // 3 slides on desktop
        spaceBetween: 40, // More space for desktop
      },
    }}
    className="w-full"
  >
    {/* Slide 2 */}
    <SwiperSlide>
      <div className="relative flex justify-center">
        <img
          src="images/Screenshot-2.png"
          alt="Phone Mockup 2"
          className="w-96 sm:w-128 md:w-144 relative z-10 animate-float hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        {/* Additional hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
      </div>
    </SwiperSlide>
    {/* Slide 1 */}
    <SwiperSlide>
      <div className="flex center">
        <img
          src="images/Screenshot-1.png"
          alt="Phone Mockup 1"
          className="w-80 sm:w-104 md:w-128 animate-float hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div className="relative flex justify-center">
        <img
          src="images/Screenshot-2.png"
          alt="Phone Mockup 2"
          className="w-96 sm:w-128 md:w-144 relative z-10 animate-float hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        {/* Additional hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
      </div>
    </SwiperSlide>
    {/* Slide 3 */}
    <SwiperSlide>
      <div className="flex justify-center">
        <img
          src="images/Screenshot-3.png"
          alt="Phone Mockup 3"
          className="w-80 sm:w-104 md:w-128 animate-float hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
    </SwiperSlide>
  </Swiper>
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