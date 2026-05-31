import { useState, useEffect } from 'react';
import {
  Gamepad2,
  Rocket,
  Code2,
  Database,
  Users,
  Zap,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Layers,
  Youtube,
  Joystick,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'portfolio', 'roblox', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'roblox', label: 'Roblox' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Grow A Garden Remake',
      category: 'Roblox Game',
      description: 'A full remake and enhancement of the popular Grow A Garden experience. Improved gameplay mechanics, visuals, farming systems, and player progression.',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Roblox Studio', 'Lua (Luau)', 'Roblox UI', 'DataStore', 'Remote Events'],
      features: ['Advanced crop growth system', 'Better animations', 'Economy & progression', 'Custom UI', 'Multiplayer support'],
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'A modern responsive portfolio website showcasing projects, skills, and achievements with clean design and smooth animations.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Canva Inspiration'],
      features: ['Responsive layout', 'Animated sections', 'Project showcase', 'Contact integration', 'Modern UI/UX'],
    },
    {
      id: 3,
      title: 'Bhav-Abyss Discord Server',
      category: 'Community Management',
      description: 'Custom-built Discord community server focused on gaming and content creation with automated moderation and custom branding.',
      image: 'https://images.pexels.com/photos/7974368/pexels-photo-7974368.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Discord API', 'Discord Bots', 'Automation', 'Moderation Systems'],
      features: ['Custom roles', 'Auto-moderation', 'Gaming channels', 'Event organization', 'Branded experience'],
    },
    {
      id: 4,
      title: 'Gaming Content & YouTube',
      category: 'Content Creation',
      description: 'Digital branding assets including thumbnails, profile pictures, banners, and YouTube channel visuals for content creators.',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Canva', 'Graphic Design', 'YouTube Branding', 'Photoshop'],
      features: ['Gaming profile pictures', 'YouTube thumbnails', 'Banner designs', 'Branding assets', 'Social optimization'],
    },
  ];

  const robloxGames = [
    {
      title: 'Hi Game',
      link: 'https://www.roblox.com/games/93948031876676/Hi',
      description: 'Check out my Roblox game creation. A unique gaming experience built with passion and creativity.',
      icon: Gamepad2,
    },
  ];

  const stats = [
    { value: '4+', label: 'Major Projects', icon: Rocket },
    { value: '100%', label: 'Passion Driven', icon: Star },
    { value: '∞', label: 'Creativity', icon: Zap },
    { value: '24/7', label: 'Dedicated', icon: TrendingUp },
  ];

  const skills = [
    'Roblox Lua',
    'Web Development',
    'UI/UX Design',
    'Community Management',
    'Content Creation',
    'Game Development',
    'JavaScript',
    'CSS/HTML',
    'Discord Bots',
    'Graphic Design',
    'Video Editing',
    'Community Engagement',
  ];

  const testimonials = [
    {
      text: "Abyssal's Roblox development skills are exceptional. The Grow A Garden remake shows incredible attention to detail.",
      author: "Gaming Community Member",
      role: "Roblox Player",
      avatar: "https://images.pexels.com/photos/7749094/pexels-photo-7749094.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      text: "The Discord server management and community building is top-notch. Great organization and engagement.",
      author: "Server Member",
      role: "Bhav-Abyss Community",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      text: "Innovative content creator with a passion for gaming. Always pushing creative boundaries.",
      author: "Content Collaborator",
      role: "Gaming Creator",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb w-96 h-96 bg-cyan-500 top-20 -left-48" />
        <div className="floating-orb w-80 h-80 bg-purple-500 top-1/3 -right-40 animation-delay-2000" />
        <div className="floating-orb w-72 h-72 bg-pink-500 bottom-20 left-1/4 animation-delay-4000" />
        <div className="floating-orb w-64 h-64 bg-teal-500 bottom-1/3 right-1/4" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Gamepad2 className="w-10 h-10 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">Abyssal</span>
                <span className="block text-xs text-cyan-400 font-mono tracking-widest">DEVELOPER</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden glass-strong transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center grid-pattern">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-cyan-500/30 animate-fade-in">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Creative Developer</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in">
                <span className="gradient-text">I'm Abyssal</span>
                <br />
                <span className="text-white">Game & Web Developer</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in">
                Passionate developer creating immersive gaming experiences on Roblox, building beautiful web solutions, and fostering vibrant gaming communities.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-8 animate-fade-in">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 rounded-full overflow-hidden font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>See My Work</span>
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 rounded-full neon-border font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-8">
                <a href="https://www.youtube.com/@YourYoutube" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/YourServer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Gamepad2 className="w-6 h-6" />
                </a>
                <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="relative order-first lg:order-last">
              <div className="glass-strong rounded-3xl p-1 animate-float">
                <img
                  src="/image copy.png"
                  alt="Abyssal Profile"
                  className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 glass-strong rounded-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center">
                    <Joystick className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Game Creator</p>
                    <p className="text-sm text-gray-400">Roblox Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 animate-bounce flex justify-center">
            <ChevronDown className="w-8 h-8 text-cyan-400 cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">About Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate developer and creative enthusiast dedicated to crafting immersive gaming experiences and innovative web solutions. With expertise in Roblox game development, web technologies, and community management, I bring ideas to life through code and creativity.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Whether it's building engaging Roblox games, designing beautiful websites, or fostering vibrant gaming communities, I approach every project with dedication and attention to detail.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-xl p-6">
                  <Code2 className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-semibold text-white">Developer</h3>
                  <p className="text-sm text-gray-400 mt-2">Game & Web Development</p>
                </div>
                <div className="glass rounded-xl p-6">
                  <Users className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="font-semibold text-white">Community</h3>
                  <p className="text-sm text-gray-400 mt-2">Discord & Gaming Communities</p>
                </div>
                <div className="glass rounded-xl p-6">
                  <Layers className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white">Creator</h3>
                  <p className="text-sm text-gray-400 mt-2">Content & Design</p>
                </div>
                <div className="glass rounded-xl p-6">
                  <TrendingUp className="w-8 h-8 text-teal-400 mb-3" />
                  <h3 className="font-semibold text-white">Innovator</h3>
                  <p className="text-sm text-gray-400 mt-2">Always Learning & Growing</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-strong rounded-3xl p-1">
                <img
                  src="https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Development Setup"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">
              <span className="gradient-text">Skills & Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="tech-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing my work across game development, web design, and community creation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group gradient-border rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 glass-strong space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <p className="text-xs text-cyan-400 font-semibold mb-2">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-dark-800 text-cyan-300 border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-semibold mb-2">KEY FEATURES</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Zap className="w-3 h-3 text-emerald-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section id="portfolio" className="relative section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-card">
                  <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What People Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-strong rounded-2xl p-8 hover-lift">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roblox Games Section */}
      <section id="roblox" className="relative section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">My Roblox Games</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check out my Roblox creations and gaming experiences
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {robloxGames.map((game, index) => (
              <a
                key={index}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group gradient-border rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 glass-strong space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <game.icon className="w-8 h-8 text-cyan-400" />
                        <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                      </div>
                      <p className="text-lg text-gray-400">{game.description}</p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </div>

                  <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                    <span>Play on Roblox</span>
                    <Rocket className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Let's Connect</span>
                </h2>
                <p className="text-lg text-gray-400">
                  Have a project in mind or want to collaborate? I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:ryankimutaikutto@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      ryankimutaikutto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">N/A</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Connect</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href="https://www.roblox.com/users/123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Joystick className="w-5 h-5" />
                      </a>
                      <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Gamepad2 className="w-5 h-5" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-cyan-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              <div>
                <span className="text-xl font-bold gradient-text">Abyssal</span>
                <span className="block text-xs text-cyan-400 font-mono">DEVELOPER</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              2024 Abyssal. All rights reserved. Built with passion and creativity.
            </p>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Socials</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
