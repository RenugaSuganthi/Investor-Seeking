import React, { useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLock,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import TextPlugin from "gsap/TextPlugin";
import { GlobalContext } from "../GlobalContext/GlobalState";


gsap.registerPlugin(ScrollTrigger, TextPlugin);

const InvestorHome = ({ theme }) => {
  /* const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stepsRef = useRef([]);
  const featuresRef = useRef([]);
  const innovationRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Hero animation
    gsap.from(heroRef.current, {
      duration: 1.5,
      opacity: 0,
      y: -80,
      ease: "power3.out",
    });

    // About section
    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
      });
    }

    // Steps animation
    stepsRef.current.forEach((step, i) => {
      if (step) {
        gsap.from(step, {
          scrollTrigger: { trigger: step, start: "top 90%" },
          duration: 1,
          y: 60,
          opacity: 0,
          delay: i * 0.15,
          ease: "back.out(1.7)",
        });
      }
    });

    // Features animation
    featuresRef.current.forEach((feature, i) => {
      if (feature) {
        gsap.from(feature, {
          scrollTrigger: { trigger: feature, start: "top 85%" },
          duration: 1,
          opacity: 0,
          scale: 0.9,
          delay: i * 0.2,
          ease: "elastic.out(1, 0.75)",
        });
      }
    });

    // Innovation animation
    innovationRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          duration: 1,
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          ease: "power3.out",
        });
      }
    });

    // Stats counter animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll("h3"),
        { textContent: 0 },
        {
          textContent: (i, el) => el.dataset.value,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );
    }
  }, []); */

/*   const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stepsRef = useRef([]);
  const featuresRef = useRef([]);
  const innovationRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {

       const ctx = gsap.context(() => {
    if (!heroRef.current) return;

    // About section
    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
      });
    }

    // Steps animation
    stepsRef.current.filter(Boolean).forEach((step, i) => {
  gsap.from(step, {
    scrollTrigger: { trigger: step, start: "top 90%" },
    duration: 1,
    y: 60,
    opacity: 0,
    delay: i * 0.15,
    ease: "back.out(1.7)",
  });
});


    // Features animation
    featuresRef.current.forEach((feature, i) => {
      if (feature) {
        gsap.from(feature, {
          scrollTrigger: { trigger: feature, start: "top 85%" },
          duration: 1,
          opacity: 0,
          scale: 0.9,
          delay: i * 0.2,
          ease: "elastic.out(1, 0.75)",
        });
      }
    });

    // Innovation animation
    innovationRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          duration: 1,
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          ease: "power3.out",
        });
      }
    });

    // Stats counter animation (with TextPlugin)
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll("h3"),
        { textContent: 0 },
        {
          textContent: (i, el) => el.dataset.value,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );
    }
});
    return () => ctx.revert();
  }, [location.pathname]);

  const featureData = [
    {
      title: "Global Reach",
      desc: "Ideas are auto-translated to English for worldwide visibility.",
      icon: <FaGlobe size={40} />,
    },
    {
      title: "Secure Payments",
      desc: "Invest and receive payments via trusted UPI and GPay options.",
      icon: <FaLock size={40} />,
    },
    {
      title: "Collaboration",
      desc: "Investors and creators can connect, discuss, and innovate together.",
      icon: <FaUsers size={40} />,
    },
  ];

  const innovationPoints = [
    {
      title: "Exclusive Access",
      desc: "Get early access to high-potential ideas before they reach the public.",
      icon: <FaHandshake size={35} />,
    },
    {
      title: "Data-Driven Insights",
      desc: "AI-powered analytics to assess project potential & risk scores.",
      icon: <FaChartLine size={35} />,
    },
    {
      title: "Verified Projects",
      desc: "Every creator and idea is verified for authenticity & trust.",
      icon: <FaAward size={35} />,
    },
  ];

  const handleJoinClick = () => {
    if (isLoggedIn) {
      navigate("/Investorhome/innovations"); // ✅ goes to Innovations page
    } else {
      alert("Please login to access Innovations 🚀"); // ✅ stays on InvestorHome
    }
  };  */

/*   const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stepsRef = useRef([]);
  const featuresRef = useRef([]);
  const innovationRef = useRef([]);
  const statsRef = useRef(null);

  const { isLoggedIn } = useContext(GlobalContext); // ✅ read login state
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About
      if (aboutRef.current) {
        gsap.from(aboutRef.current, {
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
          duration: 1,
          x: -100,
          opacity: 0,
          ease: "power3.out",
        });
      }

      // Steps
      stepsRef.current.filter(Boolean).forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: { trigger: step, start: "top 90%" },
          duration: 1,
          y: 60,
          opacity: 0,
          delay: i * 0.15,
          ease: "back.out(1.7)",
        });
      });

      // Features
      featuresRef.current.forEach((feature, i) => {
        if (feature) {
          gsap.from(feature, {
            scrollTrigger: { trigger: feature, start: "top 85%" },
            duration: 1,
            opacity: 0,
            scale: 0.9,
            delay: i * 0.2,
            ease: "elastic.out(1, 0.75)",
          });
        }
      });

      // Innovation
      innovationRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%" },
            duration: 1,
            x: i % 2 === 0 ? -150 : 150,
            opacity: 0,
            ease: "power3.out",
          });
        }
      });

      // Stats
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll("h3"),
          { textContent: 0 },
          {
            textContent: (i, el) => el.dataset.value,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [location.pathname]);

  const handleJoinClick = () => {
    if (isLoggedIn) {
      navigate("/Investorhome/innovations");
    } else {
      alert("Please login to access Innovations 🚀");
    }
  }; */

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stepsRef = useRef([]);
  const featuresRef = useRef([]);
  const innovationRef = useRef([]);
  const statsRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  
  const { user } = useContext(GlobalContext);



  useEffect(() => {

       const ctx = gsap.context(() => {
    if (!heroRef.current) return;

    // About section
    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
      });
    }

    // Steps animation
    stepsRef.current.filter(Boolean).forEach((step, i) => {
  gsap.from(step, {
    scrollTrigger: { trigger: step, start: "top 90%" },
    duration: 1,
    y: 60,
    opacity: 0,
    delay: i * 0.15,
    ease: "back.out(1.7)",
  });
});


    // Features animation
    featuresRef.current.forEach((feature, i) => {
      if (feature) {
        gsap.from(feature, {
          scrollTrigger: { trigger: feature, start: "top 85%" },
          duration: 1,
          opacity: 0,
          scale: 0.9,
          delay: i * 0.2,
          ease: "elastic.out(1, 0.75)",
        });
      }
    });

    // Innovation animation
    innovationRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          duration: 1,
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          ease: "power3.out",
        });
      }
    });

    // Stats counter animation (with TextPlugin)
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll("h3"),
        { textContent: 0 },
        {
          textContent: (i, el) => el.dataset.value,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );
    }
});
    return () => ctx.revert();
  }, [location.pathname]);

  const featureData = [
    {
      title: "Global Reach",
      desc: "Ideas are auto-translated to English for worldwide visibility.",
      icon: <FaGlobe size={40} />,
    },
    {
      title: "Secure Payments",
      desc: "Invest and receive payments via trusted UPI and GPay options.",
      icon: <FaLock size={40} />,
    },
    {
      title: "Collaboration",
      desc: "Investors and creators can connect, discuss, and innovate together.",
      icon: <FaUsers size={40} />,
    },
  ];

  const innovationPoints = [
    {
      title: "Exclusive Access",
      desc: "Get early access to high-potential ideas before they reach the public.",
      icon: <FaHandshake size={35} />,
    },
    {
      title: "Data-Driven Insights",
      desc: "AI-powered analytics to assess project potential & risk scores.",
      icon: <FaChartLine size={35} />,
    },
    {
      title: "Verified Projects",
      desc: "Every creator and idea is verified for authenticity & trust.",
      icon: <FaAward size={35} />,
    },
  ];


// Navigation handler
const handleNavClick = (path) => {
  if (!user && path !== "/Investorhome" && path !== "/Investorhome/") {
    localStorage.setItem("redirectPath", path); // save intended path
    navigate("/login"); // go to login first
  } else {
    navigate(path); // go directly if logged in
  }
};




 

  return (
    <motion.div
      className="pt-27 p-8 rounded-xl min-h-screen"
      style={{
        backgroundColor: theme === "dark" ? "#0f172a" : "#f9fafb",
        color: theme === "dark" ? "#f8fafc" : "#1e293b",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-cover bg-center h-[500px] rounded-lg shadow-lg flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <motion.div
          className="relative z-10 p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Investors Seeking Platform 💡
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
            A bridge between <span className="font-semibold">Innovators</span> and{" "}
            <span className="font-semibold">Investors</span>. Support brilliant minds, share your ideas, and make them a reality.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="mt-16 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Our platform empowers creators and connects them with investors. We ensure a{" "}
          <b>secure</b>, <b>transparent</b>, and <b>global</b> environment where collaboration thrives and innovations turn into reality.
        </p>
      </section>

      {/* How It Works */}
      <section className="mt-16 p-6 border rounded-xl shadow-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <h2 className="text-4xl font-bold mb-8 text-center">How It Works 🚀</h2>
        <ul className="space-y-6 text-lg">
          {[
            "Sign up easily using Google Authentication.",
            "Select your role: Investor (₹50) or Creator (₹10/idea).",
            "Creators can upload ideas with images, documents & proof.",
            "Investors explore, review, and connect with creators.",
            "Transactions are secure via UPI, GPay, and more.",
            "Ideas are translated to English by default for global reach.",
          ].map((step, index) => (
            <li
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              <span className="text-blue-600 dark:text-blue-400">✔</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Features */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Key Features ✨</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="p-8 rounded-2xl shadow-xl text-center cursor-pointer transform hover:scale-105 transition"
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
              }}
              whileHover={{ y: -10 }}
            >
              <div className="text-blue-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Points */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Why Investors Love Us ❤️</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {innovationPoints.map((point, i) => (
            <div
              key={i}
              ref={(el) => (innovationRef.current[i] = el)}
              className="p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition"
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#fefefe",
              }}
            >
              <div className="text-purple-500 mb-4 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Impact 🌍</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Ideas Shared", value: 1200 },
            { label: "Investors Joined", value: 350 },
            { label: "Successful Deals", value: 480 },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <h3 data-value={stat.value} className="text-5xl font-extrabold mb-2 text-blue-600 dark:text-blue-400">
                0
              </h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl rounded-full shadow-md flex items-center gap-3 mx-auto"
  onClick={() => handleNavClick("/Investorhome/innovations")} // ✅ will respect login rules now
>
  Join Now & Share Your Ideas 🌍 <FaArrowRight />
</motion.button>

      </div>
    </motion.div>
  );
};

export default InvestorHome;
