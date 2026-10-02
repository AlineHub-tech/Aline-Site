import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      name: 'ByteFlow Ltd',
      category: 'Digital Services Platform',
      tech: 'Web Development · Branding · Digital Marketing',
      desc: 'A digital engineering and business growth platform for modern teams, presenting ByteFlow’s website development, branding, and digital marketing services.',
      link: 'https://byte-flow-ltd.vercel.app/'
    },
    {
      name: 'Chivucha Investment Ltd',
      category: 'Investment',
      fullStack: true,
      tech: 'React.js · Vite · Axios · Node.js · Express.js · MongoDB Atlas · Mongoose · JWT · bcryptjs · html5-qrcode',
      desc: 'An inventory and order fulfillment platform with role-based security using JWT and bcryptjs, separating administrator CRUD controls from staff read-only access. Automated stock calculations use Loaded Volume minus Dispatched Volume to determine the current balance and block actions when inventory is exhausted. Every inventory change is logged with exact timezone details, with print styles for corporate A4 PDF reports. A live command-center dashboard presents backend metrics and progress toward a 1,500 Pcs maximum stock threshold. The QR/barcode scan engine uses device cameras and html5-qrcode for instant database lookups and live specification streaming. Built with responsive React.js and Vite, Axios, a modular Node.js and Express.js REST API, MongoDB Atlas, and Mongoose.',
      link: 'https://chivucha-invest-ltd.vercel.app/'
    },
    {
      name: 'Aline Personal Portfolio',
      category: 'Web Development',
      tech: 'React · Framer Motion · css Vanilla',
      desc: 'A modern personal portfolio built with React, showing projects, skills, and achievements. It includes a clean UI, dynamic project fetching, and responsive design optimized for mobile and desktop users. Made to present professional work and experience clearly.',
      link: 'https://aline-site-seven.vercel.app/'
    },
    {
      name: 'ABT Hub',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · Node.js · MongoDB · Javascript · Express.js · css Vanilla',
      desc: 'ABT Hub is a modern platform for A Better Tomorrow Foundation Hub that helps members track financial operations and projects with full transparency. The main dashboard displays real-time data on total savings, fines, and weekly contribution statuses. It also provides a clear breakdown of financial allocations across outreach, investments, and operations, alongside the progress trackers for active community projects.',
      link: 'https://abt-hub-org.vercel.app/'
    },
    {
      name: 'U & J Shop',
      category: 'E-commerce',
      fullStack: true,
      tech: 'React · Stripe · Next.js · javascript · Firebase',
      desc: 'U & J Shop is a premium fashion e-commerce platform delivering elite boutique apparel, elegant dresses, curated matching sets, and luxury designer handbags. Optimized with a high-converting, single-tap WhatsApp checkout form, the platform ensures a seamless ordering experience paired with guaranteed, 100% free door-to-door delivery from our Muhanga hub straight to Kigali.',
      link: 'https://uj-shipping-com.vercel.app/'
    },
    {
      name: 'Imena Move Kids',
      category: 'Web Development',
      fullStack: true,
      tech: 'Framer · MongDB · React · Express.js · Node.js · Tailwind css',
      desc: 'Imena Moves is a dance management platform for Imena Moves Kidz featuring full member CRUD operations and daily attendance tracking. The public dashboard displays real-time analytics for total dancers, active collaborators, and daily presence. It features an automated broadcast system for instant administrative announcements, keeping families and partners connected via live MongoDB updates.',
      link: 'https://imena-moves-kidz.vercel.app/'
    },
    {
      name: 'Nexus News Network',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · Node.js & Express · MongoDB & Mongoose · JWT (JSON Web Tokens) · Cloudinary · Multer',
      desc: 'Nexus News Network is a modern digital news platform that delivers timely, high-quality content across major categories including politics, business, culture, sports, opinion, and community. It features multi-section news coverage, a responsive design for smooth browsing, and a robust admin dashboard providing full CRUD content management to control published articles and dynamic media updates.',
      link: 'https://nexus-news-network.vercel.app/'
    },
    {
      name: 'A Better Tomorrow Foundation',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · MySQL · css Vanilla · javascript',
      desc: 'The A Better Tomorrow (ABT) Foundation web platform serves as a digital portal for the organization\'s mission to support vulnerable groups through mental health services and economic empowerment. It highlights the Hope Center project and includes an interactive portal for member registration. For more information',
      link: 'https://a-better-tomorrow-foundation-org.vercel.app/'
    },
    {
      name: 'Buy & Get',
      category: 'Web Development',
      fullStack: true,
      tech: 'Next.js · Stripe API · React · Tailwind css',
      desc: 'Buy&Get is a modern full-stack e-commerce platform designed for online shopping. It allows users to browse products, shop by category, and access special offers. The platform features an advanced layout with multi-currency support, internationalization options, search capabilities, a comprehensive comparison system, and detailed customer product reviews',
      link: 'https://buy-get-e-commerce.vercel.app/'
    },
    {
      name: 'A Better-T Solution',
      category: 'Web Development',
      tech: 'Vite · React · Tailwind CSS',
      desc: 'A Better Tech Solutions is a modern and premium digital agency website engineered to provide businesses and startups with top-tier technology and creative services. The platform features a responsive user experience highlighting core solutions like high-performance web development, digital infrastructure (cloud hosting and domain registration), and search engine optimization (SEO). It seamlessly connects clients to comprehensive multimedia branding services—such as professional graphic design, photography, and corporate videography—built to elevate brand identity and accelerate business growth.',
      link: 'https://a-better-t-solutions.vercel.app/store'
    },
    {
      name: 'Citizen Complaint',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · PostgreSQL',
      desc: 'The Citizen Complaints & Engagement System is a modern, responsive digital governance platform built to bridge the gap between citizens and authorities. It empowers users to submit and track community issues, suggestions, and feedback through an intuitive, accessible interface. Designed with built-in transparency, the system displays logged concerns in real time, enabling local administrators and service providers to track progress, prioritize community needs, and respond efficiently. This standalone architecture leverages localized storage mechanisms, making the system highly reliable, offline-friendly, and an ideal framework for rapid prototyping and minimum viable products (MVPs).',
      link: 'https://citizen-complaint-six.vercel.app/'
    },
    {
      name: 'IntabweFlow',
      category: 'Web Development',
      fullStack: true,
      tech: 'TypeScript · Node.js',
      desc: 'IntambweFlow is a productivity dashboard built with React and Vite. It helps users track daily tasks, manage finances (income/expenses), and log daily learning progress. It features a weekly progress tracker (%) using LocalStorage for data persistence and a clean, responsive UI with CSS Flexbox/Grid.',
      link: 'https://intambwe-flow-com.vercel.app/'
    },
    {
      name: 'Voice Impowered',
      category: 'Web Development',
      tech: 'React · Typescript · Tailwind css',
      desc: 'Empowered Voice is a premium spiritual growth platform and knowledge hub founded by author Ellen Luna. It is built to awaken potential, strengthen faith, and cultivate values rooted in the Word of God, the writings of great thinkers, and the study of history\'s greatest heroes. Designed to reach audiences across Rwanda and the world, Empowered Voice carries a clear mission to speak, to advocate, and to empower as many lives as possible through wisdom, faith, and truth.'
    },
    {
      name: 'Personal Banking',
      category: 'Web Development',
      fullStack: true,
      tech: 'TypeScript · Node.js',
      desc: 'Personal Bank is a modern React web app for managing digital savings and transactions. Users can deposit, withdraw, check balances, and customize their profiles easily. Featuring dark/light mode, responsive design, and secure dashboard navigation Personal Bank offers a smart, smooth banking experience online.'
    },
    {
      name: 'NovaPay System',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · Node.js & Express · MongoDB & Mongoose · JWT (JSON Web Tokens)',
      desc: 'NovaPay is a premier digital banking ecosystem designed for the modern Rwandan economy. With institutional trust, it offers a seamless interface for automated goal-based savings, instant multi-bank transfers, and AI-driven wealth analytics. Experience military-grade security with a professional, edge-to-edge responsive design.'
    },
    {
      name: 'Accountant System',
      category: 'Web Development',
      fullStack: true,
      tech: 'React · MySQL',
      desc: 'AccPro is a professional, high-density financial suite designed for modern Rwandan firms. Built for precision and speed, it automates payroll generation, RRA & RSSB tax compliance, and audit-ready reporting. With a secure, local-first architecture, it empowers accountants to lead with clarity.',
      link: 'https://vercel.app'
    },
    {
      name: 'Plus',
      category: 'Web Development',
      tech: 'Typescript · React · vanilla css',
      desc: 'DevPulse is an enterprise-grade agile project management dashboard built with React and strict TypeScript. Featuring a sleek, responsive Cyberpunk theme (Matte Black & Electric Purple), it delivers real-time sprint velocity metrics, repository tracking, and an interactive HTML5 drag-and-drop Kanban workspace with zero lag.'
    },
    {
      name: 'LifeOS',
      category: 'Web Development',
      fullStack: true,
      tech: 'MERN Stack / Product Development',
      desc: 'An advanced multi-layered personal assistant and mentor manager framework. Formulated to streamline lifestyle routines, track financial accountability, analyze discipline parameters, and process custom progress summaries.'
    },
    {
      name: 'Kigali Bites',
      category: 'Product Concept',
      tech: 'UI/UX / Figma / Product Concept Build',
      desc: 'A complete food discovery interface designed to connect culinary businesses with local consumers. Built to map out rapid checkout interfaces, dynamic menu browsing, and optimization dispatch modules in Kigali.'
    }
  ];

  const orderedProjects = [...projects].sort((projectA, projectB) => Number(Boolean(projectB.fullStack)) - Number(Boolean(projectA.fullStack)));

  const ventures = [
    {
      title: 'ByteFlow Ltd — Founder & Builder',
      slogan: 'Engineering Digital Success.',
      desc: 'My flagship technology company focused on delivering full-stack web architectures, specialized branding blueprints, enterprise web systems, hosting configurations, and digital product consulting.'
    },
    {
      title: 'A Better Tomorrow Foundation — Founder',
      slogan: 'Restoring Hope, Building Future.',
      desc: 'A direct social impact platform structured to offer genuine aid, critical mindset mentorship, and practical skill workshops for street youth and vulnerable communities in Rwanda.'
    },
    {
      title: 'Chapters Studio — Founder & Creative',
      slogan: 'Capturing Moments. Telling Stories.',
      desc: 'My multimedia creative lens focused on curated photography journals, cinematic event recordings, organic lookbooks, and high-concept editorial brand asset generation.'
    }
  ];

  return (
    <div className="ele-projects-page ele-view-fade">
      {/* PROJECTS SECTION */}
      <section className="ele-portfolio-showcase-section">
        <div className="ele-section-header">
          <span className="ele-section-num">04 // PRODUCTION WORKS</span>
          <h2 className="ele-section-main-title">Selected Work</h2>
        </div>
        <div className="ele-projects-editorial-stack">
          {orderedProjects.map((proj, idx) => (
            <article key={idx} className="ele-project-strip-item">
              <div className="ele-project-strip-header">
                <h3>{proj.name}</h3>
                <div className="ele-project-meta">
                  {proj.fullStack && <span className="ele-project-type-tag">Full-Stack</span>}
                  <span className="ele-project-tech-tag">{proj.category} · {proj.tech}</span>
                </div>
              </div>
              <p className="ele-project-desc-para">{proj.desc}</p>
              {proj.link && (
                <a className="ele-project-live-link" href={proj.link} target="_blank" rel="noreferrer">
                  View project <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section className="ele-ventures-section">
        <div className="ele-section-header">
          <span className="ele-section-num">05 // ENTERPRISE NODES</span>
          <h2 className="ele-section-main-title">Things I’m building beyond myself.</h2>
        </div>
        <div className="ele-ventures-editorial-grid">
          {ventures.map((ven, idx) => (
            <div key={idx} className="ele-venture-strip-card">
              <h3>{ven.title}</h3>
              <p className="ele-venture-slogan-label">“{ven.slogan}”</p>
              <p className="ele-venture-body-desc">{ven.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
