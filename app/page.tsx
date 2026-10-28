"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Search,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe2,
  Calendar,
  Sparkles,
  ChevronRight,
  Download,
  Share2,
  ExternalLink,
  ShieldCheck,
  Star,
  CheckCircle2,
  Menu,
  X,
  Volume2,
  Bookmark,
  Eye,
  SlidersHorizontal,
  Compass,
} from "lucide-react";

interface Book {
  id: string;
  title: string;
  devanagariTitle: string;
  author: string;
  code: string;
  category: "gita" | "ramayan" | "purana" | "upanishad" | "kalyan" | "devotional";
  subsidizedPrice: number;
  originalValue: number;
  languages: string[];
  pages: number;
  description: string;
  image: string;
  tag?: string;
  rating: number;
  reviewsCount: number;
}

const BOOKS_DATA: Book[] = [
  {
    id: "gita-prabodhani",
    title: "Chitramay Shrimad Bhagavad Gita",
    devanagariTitle: "चित्रमय श्रीमद्भगवद्गीता (प्रबोधिनी टीका)",
    author: "Maharshi Ved Vyas / Gita Press Commentary",
    code: "Code 2335",
    category: "gita",
    subsidizedPrice: 80,
    originalValue: 250,
    languages: ["Hindi", "Sanskrit", "English", "Nepali"],
    pages: 416,
    description:
      "A revered illustrated edition featuring original Sanskrit verses, word-by-word meaning, and simple Hindi exposition, enriched with multicolour plates.",
    image: "/uploads/bhagavad_gita.webp",
    tag: "Most Popular",
    rating: 5.0,
    reviewsCount: 14200,
  },
  {
    id: "ramcharitmanas-satik",
    title: "Shri Ramcharitmanas (Satik)",
    devanagariTitle: "श्रीरामचरितमानस (सटीक)",
    author: "Goswami Tulsidas Ji",
    code: "Code 21",
    category: "ramayan",
    subsidizedPrice: 260,
    originalValue: 650,
    languages: ["Hindi", "Awadhi", "Nepali", "Gujarati"],
    pages: 1056,
    description:
      "The definitive edition of Goswami Tulsidas' immortal epic, with pure Awadhi chaupais and authoritative Hindi translation, Aarti, and Ramayan Mahatmya.",
    image: "/uploads/ramcharitmanas.webp",
    tag: "Spiritual Classic",
    rating: 5.0,
    reviewsCount: 19850,
  },
  {
    id: "gita-sadhak-sanjeevani",
    title: "Gita Sadhak Sanjeevani",
    devanagariTitle: "गीता साधक-संजीवनी (विस्तृत व्याख्या)",
    author: "Param Pujya Swami Ramsukhdas Ji Maharaj",
    code: "Code 1080",
    category: "gita",
    subsidizedPrice: 380,
    originalValue: 950,
    languages: ["Hindi", "English", "Assamese"],
    pages: 1184,
    description:
      "Universally acclaimed as one of the greatest and most comprehensive practical commentaries on the Bhagavad Gita for spiritual seekers of all paths.",
    image: "/uploads/sadhak_sanjeevani.webp",
    tag: "Magnum Opus",
    rating: 5.0,
    reviewsCount: 8940,
  },
  {
    id: "hanuman-chalisa",
    title: "Sachitra Shri Hanuman Chalisa",
    devanagariTitle: "सचित्र श्री हनुमान चालीसा एवं संकटमोचन",
    author: "Goswami Tulsidas Ji",
    code: "Code 141",
    category: "devotional",
    subsidizedPrice: 15,
    originalValue: 50,
    languages: ["Hindi", "Sanskrit", "Nepali", "Bengali"],
    pages: 48,
    description:
      "Beautiful illustrated pocket edition of Hanuman Chalisa, Sankatmochan, Bajrang Baan, and Hanuman Aarti with word meanings.",
    image: "/uploads/hanuman_chalisa.webp",
    tag: "Everyday Prayer",
    rating: 5.0,
    reviewsCount: 35000,
  },
  {
    id: "shrimad-bhagwat-mahapuran",
    title: "Chitramay Shrimadbhagwat Mahapuran",
    devanagariTitle: "चित्रमय श्रीमद्भागवत महापुराण (२ खण्ड)",
    author: "Maharshi Ved Vyas",
    code: "Code 2390",
    category: "purana",
    subsidizedPrice: 520,
    originalValue: 1400,
    languages: ["Hindi", "Sanskrit"],
    pages: 1520,
    description:
      "Complete 12 Skandhas of the glorious Bhagavata Mahapurana with verse-by-verse translation and sacred paintings of Lord Krishna's divine lilas.",
    image: "/uploads/shrimadbhagwat.webp",
    tag: "Sacred Mahapuran",
    rating: 4.9,
    reviewsCount: 6120,
  },
  {
    id: "valmiki-ramayan",
    title: "Shrimad Valmiki Ramayan",
    devanagariTitle: "श्रीमद्वाल्मीकीय रामायण (सटीक)",
    author: "Adi Kavi Maharshi Valmiki",
    code: "Code 1338",
    category: "ramayan",
    subsidizedPrice: 650,
    originalValue: 1600,
    languages: ["Hindi", "Sanskrit", "Tamil", "Gujarati"],
    pages: 1840,
    description:
      "The primordial Sanskrit epic composed by Maharshi Valmiki, presenting the pristine narrative of Maryada Purushottam Shri Rama with Hindi commentary.",
    image: "/uploads/valmiki_ramayan.webp",
    tag: "Adi Kavya",
    rating: 5.0,
    reviewsCount: 4800,
  },
  {
    id: "ishadi-nau-upanishad",
    title: "Ishadi Nau Upanishad Set",
    devanagariTitle: "ईशादि नौ उपनिषद् (भाष्य सहित)",
    author: "Ancient Vedic Rishis",
    code: "Code 69",
    category: "upanishad",
    subsidizedPrice: 190,
    originalValue: 480,
    languages: ["Hindi", "Sanskrit", "Bengali"],
    pages: 576,
    description:
      "Nine principal classical Upanishads (Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Shvetashvatara) with word analysis and exposition.",
    image: "/uploads/upanishad_set.webp",
    tag: "Vedic Wisdom",
    rating: 4.9,
    reviewsCount: 3910,
  },
  {
    id: "kalyan-centenary",
    title: "Kalyan Centenary Special Issue",
    devanagariTitle: "कल्याण शताब्दी विशेषांक (वार्षिकांक)",
    author: "Edited by Kalyan Editorial Board",
    code: "Kalyan Spl",
    category: "kalyan",
    subsidizedPrice: 120,
    originalValue: 300,
    languages: ["Hindi"],
    pages: 480,
    description:
      "Commemorative centenary edition celebrating 100 years of the historic Kalyan monthly magazine, with rare articles by saints and spiritual luminaries.",
    image: "/uploads/media1788431499826.png",
    tag: "Centennial Issue",
    rating: 5.0,
    reviewsCount: 7600,
  },
];

const MILESTONES = [
  {
    metric: "16.21+ Crore",
    label: "Shrimad Bhagavad Gita",
    sublabel: "Published across 100+ editions & sizes",
    color: "from-amber-500 to-orange-600",
  },
  {
    metric: "11.73+ Crore",
    label: "Literature of Tulsidas Ji",
    sublabel: "Ramcharitmanas, Vinay Patrika & Chalisa",
    color: "from-orange-600 to-red-600",
  },
  {
    metric: "11.09+ Crore",
    label: "Balupyogi & Moral Books",
    sublabel: "Character-building for children & youth",
    color: "from-red-600 to-rose-600",
  },
  {
    metric: "2.67+ Crore",
    label: "Puranas & Upanishads",
    sublabel: "Classical Vedic texts and epics",
    color: "from-amber-600 to-yellow-600",
  },
];

const PILLARS = [
  {
    title: "No Donations & Zero Ads",
    devanagari: "विज्ञापन रहित एवं दान विहीन",
    desc: "Gita Press strictly does not solicit public donations nor accept commercial advertisements in any publication, preserving absolute textual integrity and independence.",
    icon: ShieldCheck,
  },
  {
    title: "Highly Subsidized Prices",
    devanagari: "अति रियायती मूल्य",
    desc: "Books are priced at nominal costs—often below manufacturing price—ensuring that economic barriers never stand between a seeker and spiritual wisdom.",
    icon: Award,
  },
  {
    title: "Devotional Sanctity",
    devanagari: "पवित्र आध्यात्मिक वातावरण",
    desc: "Every day at the printing press begins with collective prayer. Dedicated sevaks walk the press floor constantly reciting and reminding the Holy Name to every artisan.",
    icon: Sparkles,
  },
  {
    title: "Palm-Leaf Manuscript Archives",
    devanagari: "३५००+ प्राचीन पाण्डुलिपियाँ",
    desc: "The NEPAL archives preserve over 3,500 ancient hand-written manuscripts, including over 100 historical interpretations of the Shrimad Bhagavad Gita.",
    icon: BookOpen,
  },
];

export default function GitaPressLandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<"EN" | "HI" | "NE">("EN");
  const [isPlayingShloka, setIsPlayingShloka] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [cartToast, setCartToast] = useState<string | null>(null);

  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchesCategory =
      selectedCategory === "all" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.devanagariTitle.includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (bookTitle: string) => {
    setCartCount((prev) => prev + 1);
    setCartToast(`"${bookTitle}" added to your study bag!`);
    setTimeout(() => setCartToast(null), 3000);
  };

  const copyShloka = () => {
    const text =
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥\n— श्रीमद्भगवद्गीता २.४७";
    navigator.clipboard.writeText(text);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-stone-900 selection:bg-amber-200">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-gradient-to-r from-[#8B1E0F] via-[#B83D1B] to-[#781B0C] text-amber-100 text-xs py-2 px-4 shadow-sm border-b border-amber-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center">
            <span className="bg-amber-400 text-amber-950 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase shadow-xs">
              Centenary • 1923-2026
            </span>
            <span className="font-medium text-amber-50">
              Recipient of the Prestigious Gandhi Peace Prize | Subsidized Sacred Scriptures for All Humanity
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono flex-wrap justify-center">
            <a
              href="tel:+919235400244"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>Book Sales: +91-9235400244</span>
            </a>
            <span className="text-amber-400/50 hidden sm:inline">|</span>
            <a
              href="mailto:booksales@gitapress.org"
              className="flex items-center gap-1 hover:text-white transition-colors hidden sm:flex"
            >
              <Mail className="w-3 h-3 text-amber-300" />
              <span>booksales@gitapress.org</span>
            </a>
            <span className="text-amber-400/50">|</span>
            {/* Language Switcher */}
            <div className="inline-flex rounded-md bg-amber-950/60 p-0.5 border border-amber-500/30">
              {(["EN", "HI", "NE"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    activeLanguage === lang
                      ? "bg-amber-400 text-amber-950 shadow-xs"
                      : "text-amber-200 hover:text-white"
                  }`}
                >
                  {lang === "EN" ? "Eng" : lang === "HI" ? "हिन्दी" : "नेपाली"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/70 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-12 h-12 md:w-14 md:h-14 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Gita Press NEPAL Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#8A1F11] leading-tight">
                  GITA PRESS
                </span>
                <span className="text-[11px] md:text-xs font-semibold text-amber-800 tracking-wider">
                  NEPAL • गीताप्रेस
                </span>
                <span className="text-[10px] text-stone-500 hidden sm:block">
                  Serving Humanity for Truth and Peace Since 1923
                </span>
              </div>
            </Link>

            {/* Search Bar - Center */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Gita, Ramayan, Puranas, Upanishad, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-amber-200 bg-amber-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-800 placeholder-stone-400 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Quick Actions & Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-stone-700">
                <a href="#books" className="hover:text-[#8A1F11] transition-colors">
                  Sacred Books
                </a>
                <a href="#kalyan" className="hover:text-[#8A1F11] transition-colors">
                  Kalyan Magazine
                </a>
                <a href="#gate" className="hover:text-[#8A1F11] transition-colors">
                  Historic Gate & Art
                </a>
                <a href="#digital" className="hover:text-[#8A1F11] transition-colors">
                  E-Books & App
                </a>
                <a href="#about" className="hover:text-[#8A1F11] transition-colors">
                  Heritage
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    alert("Study Bag has " + cartCount + " items selected.")
                  }
                  className="relative p-2 rounded-full hover:bg-amber-100/60 text-stone-700 transition-colors"
                  aria-label="Study Bag"
                >
                  <ShoppingCart className="w-5 h-5 text-stone-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#8A1F11] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>

                <a
                  href="#books"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#A72B19] to-[#C94A29] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore Catalogue</span>
                </a>

                {/* Mobile Hamburger */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-stone-700 hover:bg-amber-100 xl:hidden"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search & Menu dropdown */}
          {mobileMenuOpen && (
            <div className="mt-3 pt-3 border-t border-amber-200/80 xl:hidden flex flex-col gap-3 pb-2 animate-in fade-in slide-in-from-top-2">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Gita, Ramcharitmanas, code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-amber-200 bg-amber-50/50 text-stone-800 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-800">
                <a
                  href="#books"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md bg-amber-50/70 hover:bg-amber-100 text-[#8A1F11]"
                >
                  📖 Sacred Books
                </a>
                <a
                  href="#kalyan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md bg-amber-50/70 hover:bg-amber-100 text-[#8A1F11]"
                >
                  📰 Kalyan Patrika
                </a>
                <a
                  href="#gate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md bg-amber-50/70 hover:bg-amber-100 text-[#8A1F11]"
                >
                  🏛️ Historic Gate
                </a>
                <a
                  href="#digital"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md bg-amber-50/70 hover:bg-amber-100 text-[#8A1F11]"
                >
                  📱 Mobile & E-Books
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating Add to Cart Toast */}
      {cartToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-500/40 animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-medium">{cartToast}</span>
        </div>
      )}

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF6ED] via-[#FFF9F2] to-[#FFFDF9] border-b border-amber-100 pt-8 pb-16 md:pt-14 md:pb-24">
        {/* Background Decorative Sanskrit Shloka Pattern */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center overflow-hidden">
          <span className="text-[20vw] font-serif font-black tracking-widest text-[#8A1F11]">
            ॐ गीताप्रेस
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                <span>World&apos;s Largest Publisher of Hindu Religious Texts • Estd. 1923</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#7A190C] tracking-tight leading-[1.15]">
                Serving Humanity for{" "}
                <span className="bg-gradient-to-r from-[#B93815] to-[#D96B27] bg-clip-text text-transparent">
                  Truth &amp; Peace
                </span>{" "}
                for Over a Century
              </h1>

              {/* Subtitle */}
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Gita Press, NEPAL has placed authentic spiritual wisdom into the hands of more than{" "}
                <strong className="font-semibold text-stone-900">45 Crore households</strong>. From the immortal verses of the{" "}
                <span className="text-[#8A1F11] font-medium">Bhagavad Gita</span> to the sweet devotion of the{" "}
                <span className="text-[#8A1F11] font-medium">Ramcharitmanas</span>, published in 15+ languages at highly subsidized prices without a single commercial advertisement.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#books"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#982212] via-[#BA3817] to-[#D9551E] text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse 3,000+ Sacred Books</span>
                </a>

                <a
                  href="#digital"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#8A1F11] border border-amber-300 text-sm font-semibold transition-all hover:scale-[1.01]"
                >
                  <Download className="w-4 h-4 text-orange-600" />
                  <span>Free E-Books &amp; Audio App</span>
                </a>

                <a
                  href="#gate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-stone-700 hover:text-[#8A1F11] text-xs font-medium hover:bg-amber-100/50 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Tour Leela Chitra Mandir</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-700 text-xs">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Commercial Ads</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Public Donations</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Subsidized Non-Profit</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>15+ Indian Languages</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Outer decorative ring */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-amber-200/50 via-orange-100/30 to-amber-50 p-4 border border-amber-200/70 shadow-lg">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xs flex items-center justify-center p-4">
                  {/* Hero banner illustration */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/banner/hero.png"
                      alt="Gita Press Centennial Illustration with Lord Krishna and Arjuna"
                      fill
                      className="object-contain drop-shadow-md"
                      priority
                    />
                  </div>

                  {/* Overlaid Award Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-amber-200/80 flex items-center gap-3 max-w-[210px]">
                    <div className="w-9 h-9 rounded-full bg-amber-100 text-[#8A1F11] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                        Govt of India
                      </p>
                      <p className="text-xs font-bold text-stone-900 leading-tight">
                        Gandhi Peace Prize 2021
                      </p>
                    </div>
                  </div>

                  {/* Overlaid Book Stack Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-amber-200/80 flex items-center gap-2.5">
                    <div className="relative w-10 h-10 shrink-0">
                      <Image
                        src="/images/book.png"
                        alt="Book Stack"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-500 block">
                        Spiritual Heritage
                      </span>
                      <span className="text-xs font-bold text-[#8A1F11]">
                        45+ Crore Copies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Shloka Reflection Card */}
          <div className="mt-12 bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-amber-200/80 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span>Daily Sacred Wisdom • दैनिक गीता अमृत</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setIsPlayingShloka(!isPlayingShloka)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 hover:bg-amber-100 text-amber-900 font-medium transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>{isPlayingShloka ? "Reciting..." : "Listen Chant"}</span>
                </button>
                <button
                  onClick={copyShloka}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedNotice ? "Copied!" : "Share Shloka"}</span>
                </button>
              </div>
            </div>

            <div className="pt-4 text-center space-y-2">
              <p className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#8A1F11] tracking-wide leading-relaxed">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br className="hidden sm:inline" />
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
              </p>
              <p className="text-xs text-stone-500 font-mono italic">
                Shrimad Bhagavad Gita — Chapter 2, Verse 47
              </p>
              <p className="text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto pt-1 font-serif">
                &ldquo;You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, nor be attached to inaction.&rdquo;
              </p>
              {activeLanguage === "NE" && (
                <p className="text-xs text-amber-900/90 font-serif max-w-2xl mx-auto pt-1">
                  नेपाली: &ldquo;तिमीलाई कर्म गर्ने मात्र अधिकार छ, त्यसको फलमा कहिल्यै होइन। त्यसैले फलको हेतु नबन र अकर्ममा पनि तिम्रो आसक्ति नहोस्।&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTORIC CENTENNIAL METRICS */}
      <section className="py-12 bg-gradient-to-r from-[#8A1F11] via-[#A82B18] to-[#7A190C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-amber-300 font-mono text-xs font-semibold uppercase tracking-widest">
              Unrivalled Legacy of Publication
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              A Century of Illuminating Humanity
            </h2>
            <p className="text-amber-100/80 text-xs sm:text-sm">
              Authentic scripture count published since inception in 1923 at NEPAL
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl sm:text-4xl font-serif font-extrabold text-amber-300 tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {item.metric}
                </div>
                <h3 className="text-base font-bold text-white mt-2 group-hover:text-amber-200 transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-amber-100/70 mt-1">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary stats row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-amber-100">
            <div>
              <span className="font-bold text-white text-base">3,500+</span>
              <p className="text-amber-200/70">Ancient Manuscripts in Archives</p>
            </div>
            <div className="hidden sm:block text-amber-400/40">•</div>
            <div>
              <span className="font-bold text-white text-base">100+</span>
              <p className="text-amber-200/70">Gita Commentary Editions</p>
            </div>
            <div className="hidden sm:block text-amber-400/40">•</div>
            <div>
              <span className="font-bold text-white text-base">15+</span>
              <p className="text-amber-200/70">Languages (Sanskrit to English)</p>
            </div>
            <div className="hidden sm:block text-amber-400/40">•</div>
            <div>
              <span className="font-bold text-white text-base">50+</span>
              <p className="text-amber-200/70">Dedicated Branch Bookstores</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SACRED BOOKS & SCRIPTURES CATALOGUE */}
      <section id="books" className="py-16 md:py-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-800 bg-orange-100/70 px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Original Subsidized Editions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#7A190C]">
                Explore Sacred Scriptures
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
                Every copy printed with reverent devotion, authoritative accuracy, and sold at highly subsidized rates to keep God&apos;s word within everyone&apos;s reach.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { id: "all", label: "All Works" },
                { id: "gita", label: "Bhagavad Gita" },
                { id: "ramayan", label: "Ramayan & Manas" },
                { id: "purana", label: "Puranas" },
                { id: "upanishad", label: "Upanishads" },
                { id: "kalyan", label: "Kalyan Issues" },
                { id: "devotional", label: "Stotras & Chalisa" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#8A1F11] text-white shadow-xs"
                      : "bg-amber-100/60 text-stone-700 hover:bg-amber-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Book Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden group"
              >
                {/* Book Cover Image Area */}
                <div className="relative h-64 bg-gradient-to-b from-amber-50/70 to-orange-50/40 p-4 flex items-center justify-center overflow-hidden border-b border-amber-100">
                  {book.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#8A1F11] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {book.tag}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 z-10 text-[10px] font-mono text-stone-500 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-stone-200">
                    {book.code}
                  </span>

                  <div className="relative w-40 h-52 transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="p-2.5 rounded-full bg-white text-stone-900 hover:bg-amber-100 transition-colors shadow-md"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4 text-[#8A1F11]" />
                    </button>
                    <button
                      onClick={() => handleAddToCart(book.title)}
                      className="p-2.5 rounded-full bg-[#8A1F11] text-white hover:bg-[#A82B18] transition-colors shadow-md"
                      title="Add to Study Bag"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold text-amber-800 line-clamp-1">
                      {book.devanagariTitle}
                    </p>
                    <h3 className="font-serif text-base font-bold text-stone-900 leading-snug group-hover:text-[#8A1F11] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                      By {book.author}
                    </p>
                  </div>

                  {/* Languages pill */}
                  <div className="flex flex-wrap gap-1">
                    {book.languages.map((l) => (
                      <span
                        key={l}
                        className="text-[10px] font-medium bg-amber-50 text-stone-600 px-2 py-0.5 rounded border border-amber-200/50"
                      >
                        {l}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono text-stone-400 self-center ml-auto">
                      {book.pages} pgs
                    </span>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold text-[#8A1F11]">
                          ₹{book.subsidizedPrice}
                        </span>
                        <span className="text-xs text-stone-400 line-through">
                          ₹{book.originalValue}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider block">
                        Subsidized Seva Rate
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(book.title)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-100/80 hover:bg-[#8A1F11] text-[#8A1F11] hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-amber-200">
              <BookOpen className="w-12 h-12 text-stone-400 mx-auto mb-3" />
              <p className="text-stone-700 font-medium">No scriptures match your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-[#8A1F11] font-bold underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Bottom CTA for Full Catalogue */}
          <div className="mt-12 text-center bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-6 rounded-2xl border border-amber-200/70 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-stone-900 font-serif">
                Looking for a specific Shloka, Purana, or Stotra code?
              </h4>
              <p className="text-xs text-stone-600">
                Explore our full digital library with over 3,000 titles available for download.
              </p>
            </div>
            <a
              href="https://gitapress.org/catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#8A1F11] text-white text-xs font-semibold hover:bg-[#A82B18] transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Download PDF Catalogue</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. BOOK QUICK PREVIEW MODAL */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-amber-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-64 bg-amber-50 rounded-2xl p-4 flex items-center justify-center border border-amber-200/50">
                <div className="relative w-44 h-56">
                  <Image
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-orange-800 font-bold bg-orange-100 px-2 py-0.5 rounded">
                    {selectedBook.code}
                  </span>
                  <p className="text-xs font-medium text-amber-900 mt-2">
                    {selectedBook.devanagariTitle}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs text-stone-500">Author: {selectedBook.author}</p>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedBook.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div>
                    <span className="text-stone-400 text-[10px] block">Languages</span>
                    <span className="font-semibold text-stone-800">
                      {selectedBook.languages.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] block">Pages</span>
                    <span className="font-semibold text-stone-800">
                      {selectedBook.pages} Pages
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#8A1F11]">
                        ₹{selectedBook.subsidizedPrice}
                      </span>
                      <span className="text-sm text-stone-400 line-through">
                        ₹{selectedBook.originalValue}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-medium">
                      Subsidized Non-Profit Publication
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleAddToCart(selectedBook.title);
                        setSelectedBook(null);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#8A1F11] hover:bg-[#A82B18] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Study Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. ARCHITECTURAL MARVEL: THE HISTORIC ENTRANCE & LEELA CHITRA MANDIR */}
      <section id="gate" className="py-16 md:py-24 bg-[#FAF5EE] border-y border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Photography of the Gate */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200 bg-black group aspect-[4/3]">
                <Image
                  src="/images/aboutus/main-enterence.png"
                  alt="Historic Entrance Gate of Gita Press NEPAL"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-amber-300 text-xs font-mono uppercase tracking-wider">
                    Inaugurated April 29, 1955
                  </span>
                  <h4 className="text-lg md:text-xl font-serif font-bold text-white">
                    The Grand Temple Gateway of Gita Press
                  </h4>
                  <p className="text-xs text-amber-100/80 mt-1 max-w-md">
                    Inaugurated by the First President of India, Dr. Rajendra Prasad.
                  </p>
                </div>
              </div>

              {/* Gallery thumbnails */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm">
                  <Image
                    src="/images/aboutus/Entrance-1.png"
                    alt="Pillars of Gita Press Entrance"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-1 left-2 bg-black/60 backdrop-blur-xs text-[10px] text-amber-200 px-2 py-0.5 rounded">
                    Ellora Cave Pillars
                  </div>
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm">
                  <Image
                    src="/images/aboutus/Entrance.png"
                    alt="Arjuna Krishna Chariot at Gate"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-1 left-2 bg-black/60 backdrop-blur-xs text-[10px] text-amber-200 px-2 py-0.5 rounded">
                    Ajanta Arch &amp; Rath
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural & Art Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-900 bg-amber-200/60 px-3 py-1 rounded-full">
                <Compass className="w-3.5 h-3.5 text-orange-700" />
                <span>NEPAL Pilgrimage &amp; Art Heritage</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#7A190C] leading-tight">
                A Panorama of Ancient Indian Temple Architecture
              </h2>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                The main entrance to Gita Press is a masterpiece of Indian heritage. Every aspect mirrors revered ancient architectural styles:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-200 text-[#8A1F11] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-stone-900 font-serif">Pillars of Ellora Caves:</strong>{" "}
                    The massive carved stone pillars at the base draw direct inspiration from the immortal monolithic rock-cut cave temples of Ellora.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-200 text-[#8A1F11] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900 font-serif">The Ajanta Circular Hollow:</strong>{" "}
                    Behind the divine chariot of Sri Krishna imparting the Gita to Arjuna rests a circular hollow echoing the famous facade of Ajanta cave temples.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-200 text-[#8A1F11] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900 font-serif">Meenakshi Gopuram Peak:</strong>{" "}
                    The summit of the entrance recalls the magnificent gopuram crests of the Meenakshi Temple in Madurai, South India, unifying North and South Indian temple styles.
                  </div>
                </div>
              </div>

              {/* Leela Chitra Mandir highlight card */}
              <div className="bg-white p-5 rounded-2xl border border-amber-300/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span>Leela Chitra Mandir (Divine Art Gallery)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Inside the complex lies the renowned <strong className="text-stone-800">Leela Chitra Mandir</strong>, preserving <span className="font-semibold text-stone-900">684+ original classical paintings</span> depicting the lilas of Sri Rama and Sri Krishna, alongside marble plaques inscribing all <strong className="text-[#8A1F11]">700 Sanskrit verses of the Bhagavad Gita</strong>.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#8A1F11]">
                  <span>Visitors Welcome Daily • Free Entry</span>
                  <span>•</span>
                  <span>NEPAL, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KALYAN MONTHLY MAGAZINE SPOTLIGHT */}
      <section id="kalyan" className="py-16 md:py-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#7A190C] via-[#992312] to-[#601206] rounded-3xl text-white p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Continuous Since 1927 • मासिक पत्रिका कल्याण
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-amber-100 leading-tight">
                  Kalyan &amp; Kalyana-Kalpataru
                </h2>
                <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                  Founded and nurtured by <strong className="text-white">Bhaiji Shri Hanuman Prasad Poddar</strong>, <em>Kalyan</em> is one of the world&apos;s oldest continuously published spiritual monthly journals. Each year, Kalyan publishes an exhaustive, encyclopedic annual special number (वार्षिकांक) dedicated to holy scriptures, divine incarnations, sadhana, and saints.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-black/25 rounded-xl p-3 border border-white/10">
                    <span className="text-lg font-bold text-amber-300">98+ Years</span>
                    <p className="text-[11px] text-amber-200/80">Unbroken Monthly Publication</p>
                  </div>
                  <div className="bg-black/25 rounded-xl p-3 border border-white/10">
                    <span className="text-lg font-bold text-amber-300">2.5 Lakh+</span>
                    <p className="text-[11px] text-amber-200/80">Monthly Subscribers</p>
                  </div>
                  <div className="bg-black/25 rounded-xl p-3 border border-white/10">
                    <span className="text-lg font-bold text-amber-300">English Edition</span>
                    <p className="text-[11px] text-amber-200/80">Kalyana-Kalpataru (Since 1934)</p>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <a
                    href="https://gitapress.org/kalyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-amber-400 text-amber-950 text-xs font-bold hover:bg-amber-300 transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Subscribe to Kalyan (Annual ₹250)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:kalyan@gitapress.org"
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
                  >
                    Contact Kalyan Editorial: kalyan@gitapress.org
                  </a>
                </div>
              </div>

              {/* Real Kalyan Centenary Cover Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300/60 bg-black/40">
                  <Image
                    src="/uploads/media1788431499826.png"
                    alt="Kalyan Centenary Special Issue Cover"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm p-2 rounded-lg text-center text-[10px] text-amber-200">
                    कल्याण शताब्दी वार्षिकांक (Centenary Commemorative Volume)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY GITA PRESS IS UNIQUE: 4 SACRED PILLARS */}
      <section id="about" className="py-16 md:py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-orange-800 text-xs font-mono font-bold uppercase tracking-widest bg-orange-100/70 px-3 py-1 rounded-full">
              Sacred Guiding Principles • हमारे मूल सिद्धांत
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#7A190C]">
              Why Gita Press Stands Apart From Any Publisher
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Established under Gobind Bhawan Karyalaya, founded by Brahmalina Shri Jayadayalji Goyandka, the institution operates purely as a divine spiritual trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#8A1F11] flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-orange-700" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-800 font-semibold block">
                      {p.devanagari}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Founders Tribute banner */}
          <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-center font-serif text-xl font-bold text-[#7A190C] mb-6">
              Revered Founders &amp; Spiritual Luminaries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-stone-100">
                  <Image
                    src="/uploads/media1750249460310.webp"
                    alt="Sethji Shri Jayadayal Goyandka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Sethji Shri Jayadayal Goyandka
                  </h4>
                  <p className="text-[11px] text-amber-900 font-medium">Founder, Gita Press</p>
                  <p className="text-[10px] text-stone-500 mt-1">
                    Staunch devotee who established Gita Press in 1923 to bring the Bhagavad Gita into every household without commercial motives.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-stone-100">
                  <Image
                    src="/uploads/media1750249460311.webp"
                    alt="Bhaiji Shri Hanuman Prasad Poddar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Bhaiji Shri Hanuman Prasad Poddar
                  </h4>
                  <p className="text-[11px] text-amber-900 font-medium">
                    Founding Editor, Kalyan Patrika
                  </p>
                  <p className="text-[10px] text-stone-500 mt-1">
                    Spiritual giant who edited Kalyan for decades, inspiring millions of seekers with pure devotion, Vedic ethos, and character-building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DIGITAL ERA: MOBILE APP & E-BOOK READER */}
      <section id="digital" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#FDF7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-900 bg-orange-100 px-3 py-1 rounded-full">
                <Globe2 className="w-3.5 h-3.5 text-orange-600" />
                <span>Modern Digital Access for New Generations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#7A190C] leading-tight">
                Gita Press In Your Pocket: Free E-Books &amp; Audio Recitations
              </h2>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Experience thousands of sacred texts on your phone, tablet, or web browser. Download the official Gita Press App from Google Play and the Apple App Store for seamless spiritual study anywhere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3,000+ Online E-Books in PDF &amp; Reader</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sundarkand &amp; Gita Audio Recitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Offline Reading &amp; Multi-language Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Free with Zero Popups or Ads</span>
                </div>
              </div>

              {/* App store buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.gita_press"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <Image
                    src="/images/google_play.svg"
                    alt="Download on Google Play"
                    width={140}
                    height={42}
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/gita-press-NEPAL/id6747818123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="Download on Apple App Store"
                    width={140}
                    height={42}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* App Mockup Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl p-4 flex items-center justify-center">
                <div className="relative w-full h-full drop-shadow-2xl">
                  <Image
                    src="/images/Store-img.png"
                    alt="Gita Press Mobile Application on Devices"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WORLDWIDE NETWORK & BRANCHES */}
      <section className="py-16 bg-[#F8F3EC] border-t border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-900 uppercase tracking-widest bg-orange-100/80 px-3 py-1 rounded-full">
              Presence Across Nations
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#7A190C]">
              50+ Official Branch Stores &amp; Stalls
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Find authorized Gita Press branches in major pilgrimage hubs, metro cities, railway stations, and Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs">
            {[
              { city: "NEPAL (Head Office)", state: "Uttar Pradesh" },
              { city: "Varanasi", state: "Uttar Pradesh" },
              { city: "Ayodhya Dham", state: "Uttar Pradesh" },
              { city: "Rishikesh & Haridwar", state: "Uttarakhand" },
              { city: "Kathmandu", state: "Nepal" },
              { city: "Delhi (Nai Sarak)", state: "New Delhi" },
              { city: "Mumbai (Girgaon)", state: "Maharashtra" },
              { city: "Kolkata", state: "West Bengal" },
              { city: "Patna", state: "Bihar" },
              { city: "Bengaluru", state: "Karnataka" },
              { city: "Hyderabad", state: "Telangana" },
              { city: "Cuttack", state: "Odisha" },
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white p-3 rounded-xl border border-amber-200/70 shadow-2xs hover:border-amber-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-700 mx-auto mb-1" />
                <p className="font-bold text-stone-900">{st.city}</p>
                <p className="text-[10px] text-stone-500">{st.state}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-stone-500">
            Over <strong className="text-stone-800">2,500+ Indian Railway Stations</strong> feature an authorized Gita Press bookstall.
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#1C1815] text-amber-100/90 pt-16 pb-10 border-t border-amber-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Info & Logo */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/footer_logo.png"
                    alt="Gita Press Footer Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-white tracking-wide block">
                    GITA PRESS
                  </span>
                  <span className="text-xs text-amber-300 font-mono">
                    NEPAL • गीताप्रेस नेपाल
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
                A unit of Gobind Bhawan Karyalaya registered under the West Bengal Societies Act. Established in 1923 for promoting and spreading the principles of Sanatana Dharma.
              </p>

              <div className="space-y-1.5 text-xs text-stone-300 font-mono">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>P.O. Gita Press, NEPAL (273005), Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Book Sales: +91-9235400244 / Kalyan: +91-9235400242</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>booksales@gitapress.org | kalyan@gitapress.org</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Sacred Texts
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                <li>
                  <a href="#books" className="hover:text-amber-300 transition-colors">
                    Shrimad Bhagavad Gita
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-amber-300 transition-colors">
                    Shri Ramcharitmanas
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-amber-300 transition-colors">
                    Puranas &amp; Upanishads
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-amber-300 transition-colors">
                    Balupyogi Literature
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-amber-300 transition-colors">
                    Devotional Stotras &amp; Chalisa
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: The Institution */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                The Heritage
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                <li>
                  <a href="#gate" className="hover:text-amber-300 transition-colors">
                    Leela Chitra Mandir (Art Gallery)
                  </a>
                </li>
                <li>
                  <a href="#gate" className="hover:text-amber-300 transition-colors">
                    Historic Gate Inaugurated 1955
                  </a>
                </li>
                <li>
                  <a href="#kalyan" className="hover:text-amber-300 transition-colors">
                    Kalyan &amp; Kalyana-Kalpataru
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-300 transition-colors">
                    Founders: Jayadayal Goyandka &amp; Bhaiji
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitapress.org/catalogue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Complete Book Catalogue (PDF)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: App & Socials */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Mobile App &amp; Media
              </h4>
              <p className="text-xs text-stone-300">
                Download the official app to access free scriptures and daily audio:
              </p>

              <div className="flex gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.gita_press"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/google_play.svg"
                    alt="Google Play"
                    width={110}
                    height={34}
                    className="h-8 w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/gita-press-NEPAL/id6747818123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={110}
                    height={34}
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Verified payment methods */}
              <div className="pt-2">
                <span className="text-[10px] text-stone-400 block mb-1">
                  Secure Subsidized Dispatch
                </span>
                <Image
                  src="/images/payment.svg"
                  alt="Accepted Payment Options"
                  width={220}
                  height={28}
                  className="h-6 w-auto opacity-80"
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://facebook.com/gitapress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors"
                  aria-label="Facebook"
                >
                  <Image
                    src="/images/fb_new.svg"
                    alt="Facebook"
                    width={18}
                    height={18}
                  />
                </a>
                <a
                  href="https://instagram.com/gitapress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/insta_new.svg"
                    alt="Instagram"
                    width={18}
                    height={18}
                  />
                </a>
                <a
                  href="https://twitter.com/gitapress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors"
                  aria-label="Twitter X"
                >
                  <Image
                    src="/images/x.svg"
                    alt="X"
                    width={18}
                    height={18}
                  />
                </a>
                <a
                  href="https://youtube.com/gitapress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors"
                  aria-label="YouTube"
                >
                  <Image
                    src="/images/youtube.svg"
                    alt="YouTube"
                    width={18}
                    height={18}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-3">
            <p>
              © 1923–2026 Gita Press, NEPAL (Gobind Bhawan Karyalaya). All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://gitapress.org/privacy" className="hover:text-amber-200">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="https://gitapress.org/terms-condition" className="hover:text-amber-200">
                Terms &amp; Conditions
              </a>
              <span>•</span>
              <a href="https://gitapress.org/refund-policy" className="hover:text-amber-200">
                Subsidized Seva Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
