import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase,
  BookOpen,
  Instagram,
  Facebook,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Master Haircare",
    description: "Couture cuts, balayage, and restorative treatments designed for your unique profile.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAwZCuR9EItGJPmJ6yKcqAU94imaQ6ndfYHPf4isIRpjACzMJtQqg3aUf5_LL-StEszateCZ2TOX_d69UbqYLcFmYylqiAZtd9QVWaIgfINugewdNlsiz9t6nu8Gy1iKUp0cZ_OqUZY4DrhMr2DUAxcfG9Gwn0G01BNfo9yMe8S0W-yJcG_btSZxLxNrIz5_jfXjxJCVDJR4EjcUqbiqEeTE71Sx8J8vL0u1tGwyIf6DocxJWYhRXPM2_q046aV92iQYim9hWxDjJ0",
    alt: "Professional stylist cutting long hair in a sleek, airy salon environment"
  },
  {
    title: "Advanced Skincare",
    description: "Targeted derma-therapies and clinical facials for radiant, rejuvenated skin.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNLj5L9DhbhAj08z2W4-Uqk9OTpb59Gmu1Z78fIdioDsQzwcEZVYywEwBLR2vzBCNfXhpiVVS55RTv7AsIISnzAsXNcmx5306unxOiFFRHZJK2ts76MutyBVdktC4RuDABMCdZW0Bq54cUlyqlaxJpX4rKaJsfHJvbGFaK1eBg7sT_sxPTSthYXjW0TRO_GFWpLWwbikH-kA37X5QNl71RVGyNf1YVTrYVk8VPAxqDMKdJwxgD0RvwTjTeJG42X36yDvFnGEo7yEB9",
    alt: "Close up of a luxury facial treatment with essential oils"
  },
  {
    title: "Bridal Artistry",
    description: "Exquisite makeup for weddings and editorial shoots by master artists.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKl5xcXcsYJe4rGN-GIcQvfATN2wPslsc-NQHj5UnbML5tOyrYKZ5p1ndN9KAZ8cRScDVln8QBQa43-LecCjN0AvA-UMHPvfuo37t2XFdxhB4W6b7pcOf9gVaj52VSyrD8sMeZe-s29C8Qp6PEd6fO7wd1Ew9ylbL09yGA7FK0Up2ZCil7oUkFEzAwhtsdZz7l5tZ_mr27ZNgpWlhUPRnETBtwLATidIlw_AQzh9r5u-lAQhinw6BlpPAzzN4cmSmAB0MycGYa_om",
    alt: "High-fashion bridal makeup application"
  },
  {
    title: "Men's Grooming",
    description: "Precision fades, luxury shaves, and grooming rituals in a refined setting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKjVFyMJkksbnup7uEcv6l39N9upMcIlfiFfbKGEzSZ-TLYx4rysn7ibYwpPiVY1dEUvHc4M0QmyyZ4cwDgqa2wiAg64oZWWGCI4zseuQfndSTm0ULMitUbDdgrsBLhnHqMQ5y5cxy8RVykReaNqzR8JcBJDsihO3hMrt9ah0ISBGoODF3D2QeMYD0gnMbXQNco8N21tFOx8olcHgz9sWeiShr9pqQlxDavTWdUD6yTmaEElQXRtmNoKgncDfCdwJELyDXgrJ7Xww-",
    alt: "Modern barbershop grooming session"
  },
  {
    title: "Nail Atelier",
    description: "Bespoke nail art, extensions, and restorative spa manicures.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbN9Mj6eCh6C_SHns3MWD51JAsaf0PQnQSMAyA7i2SlK880aIjnPMlwB8qYrF62tLzAfzslXB_2p8GUrF51PKFHSJEZXk7hRXDAocZPNzSpYnPEWBJUw1ElALgjVgZCLnU_gwl8sz0aD2c76lhVJUFw4En2HPJkgmW46azuBBgaq0GwJXI1xJygSXzyAOoOSNLuqTE2DnWVB-vUB2Jj3cjkdbUy_GfCSwVrjCUeJI2jkUEnWc7tf27MIPHmLLApMR3WSPBhHSDNCE",
    alt: "Elegant nail art application in a high-end spa"
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenating body treatments and aromatherapy for total relaxation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNLj5L9DhbhAj08z2W4-Uqk9OTpb59Gmu1Z78fIdioDsQzwcEZVYywEwBLR2vzBCNfXhpiVVS55RTv7AsIISnzAsXNcmx5306unxOiFFRHZJK2ts76MutyBVdktC4RuDABMCdZW0Bq54cUlyqlaxJpX4rKaJsfHJvbGFaK1eBg7sT_sxPTSthYXjW0TRO_GFWpLWwbikH-kA37X5QNl71RVGyNf1YVTrYVk8VPAxqDMKdJwxgD0RvwTjTeJG42X36yDvFnGEo7yEB9",
    alt: "Serene spa therapy room"
  }
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Premium Client",
    text: "The best salon experience in Greater Noida. The staff is professional and the gold-themed interior is truly luxurious. Highly recommended for hair styling!",
    rating: 5
  },
  {
    name: "Rahul Verma",
    role: "Academy Student",
    text: "As a student at the academy, I've learned so much. The mentors are patient and give attention to every detail. It's the perfect place to start a beauty career.",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "Regular Client",
    text: "Unbeatable atmosphere. Their skincare treatment left my face glowing for weeks. The professional touch is evident in everything they do.",
    rating: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-2xl font-headline italic leading-none ${isScrolled ? "text-on-surface" : "text-white"}`}>
              Golden Touch
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] mt-1 font-body font-semibold ${isScrolled ? "text-on-surface/70" : "text-white/70"}`}>
              Salon & Academy
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["Services", "Academy", "Gallery", "About", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-body font-semibold transition-colors hover:text-primary-container ${
                  isScrolled ? "text-on-surface" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
            <button className="gold-gradient text-white px-8 py-2.5 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-primary-container/20 transition-all active:scale-95">
              Call Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className={isScrolled ? "text-on-surface" : "text-white"} /> : <Menu size={28} className={isScrolled ? "text-on-surface" : "text-white"} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {["Services", "Academy", "Gallery", "About", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-on-surface font-headline text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="gold-gradient text-white py-4 rounded-md font-bold uppercase tracking-widest">
              Call Now
            </button>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-on-surface">
          <div className="absolute inset-0 z-0">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-hairdresser-cutting-hair-of-a-woman-40290-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback/Overlay Image */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMYBw45dSDlFGRK6KRCC63AoBfc_9IlKbTFTyCS7t6023v8nmNqFHof4DTBAkT3sUh1oSnPTs3Bhap6LwSegy39oQlBP6Ru4van6uYtB3qxBCSlHclwYuJs8__QIsR3KYryjroY47jxS6U8ihwR9Ya3zto8Kbn-BT-uZ42EhO8L5BaeD8vHeeVeARX8xZ7RGjhFCsptkTRmBpTkBMPymdGbFdxZhzZ5Scdxzod_XDZVEw1bpwpEAVACTjsuXblR_zGUCpBigUttBY"
              alt="Professional hair styling session"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/60 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-primary-container uppercase tracking-[0.4em] mb-6 block text-sm font-bold">
                Premier Unisex Salon
              </span>
              <h1 className="text-white text-5xl md:text-8xl font-headline font-bold leading-[1.1] mb-8">
                Where Beauty Meets Professionalism.
              </h1>
              <p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-2xl">
                Greater Noida’s Elite Destination for Luxury Grooming & Professional Beauty Education.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="gold-gradient text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm shadow-2xl hover:translate-y-[-4px] transition-all">
                  Book Appointment
                </button>
                <button className="ghost-border text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:translate-y-[-4px] transition-all">
                  Explore Academy
                </button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary-container to-transparent"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-surface-bright overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-20 -left-10 text-[12rem] font-headline text-outline-variant opacity-10 select-none pointer-events-none">
                GT
              </div>
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">The Atelier</span>
              <h2 className="text-on-surface text-4xl md:text-6xl font-headline leading-tight mb-10">
                Elevating Beauty through Academic Rigor & Artistry.
              </h2>
              <div className="space-y-8 text-secondary text-lg leading-relaxed max-w-xl">
                <p>Located in the heart of Alpha 1, Greater Noida, Golden Touch Unisex Professional Salon & Academy is more than a destination for luxury care—it is a sanctuary for transformation.</p>
                <p>We blend the delicate touch of high-end aesthetics with the structured discipline of our professional academy, ensuring every client and student experiences the gold standard of the industry.</p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbN9Mj6eCh6C_SHns3MWD51JAsaf0PQnQSMAyA7i2SlK880aIjnPMlwB8qYrF62tLzAfzslXB_2p8GUrF51PKFHSJEZXk7hRXDAocZPNzSpYnPEWBJUw1ElALgjVgZCLnU_gwl8sz0aD2c76lhVJUFw4En2HPJkgmW46azuBBgaq0GwJXI1xJygSXzyAOoOSNLuqTE2DnWVB-vUB2Jj3cjkdbUy_GfCSwVrjCUeJI2jkUEnWc7tf27MIPHmLLApMR3WSPBhHSDNCE"
                  alt="Luxury salon interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 w-64 h-80 bg-white p-2 shadow-2xl z-20 hidden lg:block"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsI9WbRP2SF0CI-rqskk23H8Hhf0TEZIy1E5H7zioDEbSJoGt-TpcQWZDeSAXCWTt_MMvBh-kY4C-QSvjTBg52DwLDHW-EYsKXsuGVIzfYGSxULnZKwMVJtwdOIwrIqAVCIGX51gH_iYeqdLgGm9mAg16ArKAHTbI-JtFabbwgLeEbmE2zTCsE2lEgjN0BjcPO2Hwvo7npetTGBUlK2VgNjCRTFg5WRkf2cmbqp1TOUd095VXWywv07uqD-isEwunD3khuLeBIsbV8"
                  alt="Makeup application close-up"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div>
                <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-headline mt-4">Signature Services</h2>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 group">
                View All Services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[500px] overflow-hidden rounded-lg bg-on-surface"
                >
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                    <h3 className="text-white text-3xl font-headline mb-4">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-20">
              <button className="gold-gradient text-white px-12 py-5 rounded-md font-bold uppercase tracking-widest shadow-xl hover:translate-y-[-4px] transition-all flex items-center gap-3">
                Full Service Menu <BookOpen size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Academy Section */}
        <section id="academy" className="py-32 bg-on-surface text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMKnNwCys0iEZZ7QQ3-jAfXA6QJdSYJY1JmN2UxG9mMQ5lq5w-hff4qh56_teywm8PPa81B6ad1SZ13PltuLhXOZ-SXjS3egm6oOPjXYgwGu_91soEdD3znQsJivHG9slnrTWK4_7g9f9pQFL5X6uv6gKCs-C7Uv8xtNTROHwgJ02MYiSEz7tKDJ9GqBTbiHHZPIgL191K3wl1o7NEiLVDqzV_hKi2VF5Hvtvh3KGiQ8aYTUd_ExInHWFcoAmT4N5w-cxFbH-LiI7"
              alt="Academy background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="bg-primary-container/20 text-primary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8 inline-block">
                  The Academy
                </span>
                <h2 className="text-5xl md:text-7xl font-headline leading-tight mb-10">
                  Join The Elite <br/>
                  <span className="italic text-primary-container">Beauty Scholars</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl">
                  Our curriculum is designed by master artisans to transform talent into professional expertise. From hair styling to advanced skincare, start your career at the most prestigious academy in Greater Noida.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start gap-5 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <GraduationCap className="text-primary-container shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-white mb-1">Certified Courses</h4>
                      <p className="text-white/50 text-xs uppercase tracking-wider">3-6 Months Duration</p>
                      <p className="text-primary-container/80 text-[10px] uppercase font-bold mt-2">International Certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Briefcase className="text-primary-container shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-white mb-1">Placement Support</h4>
                      <p className="text-white/50 text-xs uppercase tracking-wider">95% Success Rate</p>
                      <p className="text-primary-container/80 text-[10px] uppercase font-bold mt-2">Industry Partnerships</p>
                    </div>
                  </div>
                </div>

                <button className="gold-gradient px-12 py-5 rounded-md font-bold text-white tracking-widest uppercase hover:translate-y-[-4px] transition-all shadow-2xl">
                  Apply for Admission
                </button>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-[12px] border-white/5 relative z-10">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMKebsRj2Zi4KfFy6pLgPeyRq-QdRz1-ao7-lcnXzaEUMJ4ZRY3DOTQ6O6BeoVN6crWJgya2sFC_mTrLfMlHMbEobo_Ui17aI5TlkrIlOcGNatSi5RGj5CHi1gXAq0cIThhuw3YKCzhBbuJSxulVGyDE9eE7_iJ06cInP1s4x9T-WOeJM-a_aZQZZpved3zlTNOwHh_0GrXYYooYiSWgN4nlMs1Xfv2wC2f8OsYmmsa7pxEomobYHEQsCZSN51dR_SG8TJeQOho1vu"
                    alt="Beauty students in training"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Badge */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-16 -right-16 w-48 h-48 z-20 hidden md:flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-xl"></div>
                  <div className="w-40 h-40 bg-primary-container rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl border-4 border-white/20">
                    <CheckCircle2 className="text-on-primary-container mb-2" size={24} />
                    <span className="text-on-primary-container font-extrabold text-[10px] leading-tight uppercase tracking-widest">
                      Enrollment Open 2024
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-32 bg-surface-bright">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">The Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-headline mt-4">Visual Journey</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
              {/* Large Feature */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbN9Mj6eCh6C_SHns3MWD51JAsaf0PQnQSMAyA7i2SlK880aIjnPMlwB8qYrF62tLzAfzslXB_2p8GUrF51PKFHSJEZXk7hRXDAocZPNzSpYnPEWBJUw1ElALgjVgZCLnU_gwl8sz0aD2c76lhVJUFw4En2HPJkgmW46azuBBgaq0GwJXI1xJygSXzyAOoOSNLuqTE2DnWVB-vUB2Jj3cjkdbUy_GfCSwVrjCUeJI2jkUEnWc7tf27MIPHmLLApMR3WSPBhHSDNCE"
                  alt="Salon Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                  <span className="text-white font-headline text-2xl">Luxury Atelier Interior</span>
                </div>
              </motion.div>

              {/* Vertical Feature */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:row-span-2 relative group overflow-hidden rounded-lg"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsI9WbRP2SF0CI-rqskk23H8Hhf0TEZIy1E5H7zioDEbSJoGt-TpcQWZDeSAXCWTt_MMvBh-kY4C-QSvjTBg52DwLDHW-EYsKXsuGVIzfYGSxULnZKwMVJtwdOIwrIqAVCIGX51gH_iYeqdLgGm9mAg16ArKAHTbI-JtFabbwgLeEbmE2zTCsE2lEgjN0BjcPO2Hwvo7npetTGBUlK2VgNjCRTFg5WRkf2cmbqp1TOUd095VXWywv07uqD-isEwunD3khuLeBIsbV8"
                  alt="Makeup Artistry"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                  <span className="text-white font-headline text-xl">Bridal Artistry</span>
                </div>
              </motion.div>

              {/* Square Features */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMKebsRj2Zi4KfFy6pLgPeyRq-QdRz1-ao7-lcnXzaEUMJ4ZRY3DOTQ6O6BeoVN6crWJgya2sFC_mTrLfMlHMbEobo_Ui17aI5TlkrIlOcGNatSi5RGj5CHi1gXAq0cIThhuw3YKCzhBbuJSxulVGyDE9eE7_iJ06cInP1s4x9T-WOeJM-a_aZQZZpved3zlTNOwHh_0GrXYYooYiSWgN4nlMs1Xfv2wC2f8OsYmmsa7pxEomobYHEQsCZSN51dR_SG8TJeQOho1vu"
                  alt="Academy Training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-6">
                  <span className="text-white font-headline text-lg">Academy Training</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKjVFyMJkksbnup7uEcv6l39N9upMcIlfiFfbKGEzSZ-TLYx4rysn7ibYwpPiVY1dEUvHc4M0QmyyZ4cwDgqa2wiAg64oZWWGCI4zseuQfndSTm0ULMitUbDdgrsBLhnHqMQ5y5cxy8RVykReaNqzR8JcBJDsihO3hMrt9ah0ISBGoODF3D2QeMYD0gnMbXQNco8N21tFOx8olcHgz9sWeiShr9pqQlxDavTWdUD6yTmaEElQXRtmNoKgncDfCdwJELyDXgrJ7Xww-"
                  alt="Men's Grooming"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-6">
                  <span className="text-white font-headline text-lg">Men's Grooming</span>
                </div>
              </motion.div>

              {/* Horizontal Feature */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 relative group overflow-hidden rounded-lg"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMYBw45dSDlFGRK6KRCC63AoBfc_9IlKbTFTyCS7t6023v8nmNqFHof4DTBAkT3sUh1oSnPTs3Bhap6LwSegy39oQlBP6Ru4van6uYtB3qxBCSlHclwYuJs8__QIsR3KYryjroY47jxS6U8ihwR9Ya3zto8Kbn-BT-uZ42EhO8L5BaeD8vHeeVeARX8xZ7RGjhFCsptkTRmBpTkBMPymdGbFdxZhzZ5Scdxzod_XDZVEw1bpwpEAVACTjsuXblR_zGUCpBigUttBY"
                  alt="Styling session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                  <span className="text-white font-headline text-xl">Masterclass Sessions</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Voices of Excellence</span>
              <h2 className="text-4xl md:text-5xl font-headline mt-4">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-12 rounded-lg shadow-sm border border-outline-variant/10 flex flex-col"
                >
                  <div className="flex gap-1 text-primary-container mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-on-surface italic leading-relaxed mb-10 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-on-surface">{testimonial.name}</h5>
                        <CheckCircle2 size={14} className="text-primary" fill="currentColor" />
                      </div>
                      <p className="text-secondary text-xs uppercase tracking-widest font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="flex flex-col justify-center">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">Find Us</span>
                <h2 className="text-4xl md:text-6xl font-headline mt-4 mb-16">Visit Our Atelier</h2>
                
                <div className="space-y-16">
                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-2xl mb-3">Location</h4>
                      <p className="text-secondary text-lg leading-relaxed">
                        Alfa Marg, Alpha 1, Block B, Alpha I,<br/>
                        Greater Noida, UP 201310
                      </p>
                      <a href="#" className="text-primary font-bold text-sm flex items-center gap-2 mt-4 hover:underline">
                        Get Directions on Maps <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-2xl mb-3">Phone</h4>
                      <p className="text-secondary text-lg">7302614904</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-2xl mb-3">Hours</h4>
                      <p className="text-secondary text-lg">Mon - Sun: 10:00 AM - 08:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="mt-20 pt-20 border-t border-outline-variant/20">
                  <h3 className="text-3xl font-headline mb-8">Send an Inquiry</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors p-4 w-full outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors p-4 w-full outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors p-4 w-full outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Your Message</label>
                      <textarea 
                        rows={4}
                        placeholder="How can we help you?"
                        className="bg-surface-container-low border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors p-4 w-full outline-none resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="gold-gradient text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm shadow-lg hover:translate-y-[-2px] transition-all active:scale-95"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>

              <div className="h-[650px] lg:h-auto bg-surface-container rounded-lg overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 grayscale opacity-70 group-hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsLe9iK2PRS_zrgn5Ey5hmnkrFTtCNrMjgZPa32buXCQtPwvArwcJJaVyL-3oyFpwELwugCP0EtPaA2hMovX_shh9mXhpKmc-Y2CuKyGFGU_y69yLsSd1pdNyA3e31XrngU5NWDFIXKqWnfjYmAoD1MVB00sWehbx_sAV0IM252_83NYh393B4pxXaK6xyoLX8g6kOanpnJVpFFYudthmNA-1OAPlAWbX4g2qbpxxxnH0BpizRQidTtCVj3np1ryPkfKleiIbjdvNl"
                    alt="Location map"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-on-surface mb-1">Golden Touch Salon</p>
                      <p className="text-xs text-secondary uppercase tracking-widest">Alpha 1, Greater Noida</p>
                    </div>
                    <ArrowUpRight className="text-primary" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex flex-col mb-8">
                <span className="text-2xl font-headline italic leading-none text-on-surface">
                  Golden Touch
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-body font-semibold text-on-surface/60">
                  Salon & Academy
                </span>
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                Alfa Marg, Alpha 1, Block B, Alpha I, Greater Noida, UP 201310
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-primary hover:scale-110 transition-transform">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-primary hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-on-surface">Navigation</h4>
              <ul className="space-y-4">
                {["Salon Services", "Academy Courses", "About GT", "Book Appointment"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-on-surface">Academy</h4>
              <ul className="space-y-4">
                {["Hair Styling", "Skin Science", "Makeup Artistry", "Nail Technology"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-on-surface">Newsletter</h4>
              <p className="text-secondary text-sm mb-6">Subscribe for exclusive beauty tips and academy updates.</p>
              <div className="flex border-b border-outline-variant pb-3 group focus-within:border-primary transition-colors">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent border-none focus:ring-0 w-full text-sm p-0"
                />
                <button className="text-primary font-bold uppercase text-[10px] tracking-widest hover:opacity-70 transition-opacity">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-outline-variant/30 text-center">
            <p className="text-secondary text-xs">
              © 2024 Golden Touch Unisex Professional Salon & Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
