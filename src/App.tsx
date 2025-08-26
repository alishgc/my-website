import React, { useState } from "react";

/**
 * Alish GC — Personal Website (inspired by dhruvrathee.com)
 *
 * ✅ One-file React component you can preview and edit.
 * ✅ Tweak the CONFIG object to change your info, colors, links & content.
 * ✅ Clean, modern Tailwind UI with responsive layout.
 *
 * Replace placeholder text, images and links with your own.
 */

const CONFIG = {
  site: {
    title: "Alish GC",
    tagline: "Student • Tech learner ",
    description:
      "I'm Alish, an 18 y/o student in Nepal exploring tech and contents. I share what I learn about study, tools, and simple finance.",
    primaryColor: "#0ea5e9", // sky-500
    darkColor: "#0b1220",
  },
  hero: {
    name: "Alish GC",
    role: "Student ",
    ctaPrimary: { label: "Subscribe", href: "#newsletter" },
    ctaSecondary: { label: "About Me", href: "#about" },
    portrait:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop", // replace with your photo URL
    social: [
      { label: "YouTube", href: "https://youtube.com/" },
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Twitter/X", href: "https://x.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
    ],
  },
  videos: {
    heading: "Latest Videos",
    items: [
      {
        title: "Study Routine for +2 (Mgmt)",
        thumb:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "BIT in Nepal: What I Learned",
        thumb:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Beginner Investing: Risks I Noticed",
        thumb:
          "https://images.unsplash.com/photo-1569025690938-a00729c9e1c5?q=80&w=800&auto=format&fit=crop",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
  blog: {
    heading: "Articles",
    items: [
      {
        title: "How I Take Notes for Hotel Management",
        date: "Aug 2025",
        excerpt:
          "My simple system for theory + practical topics in the new NEB syllabus.",
        url: "#",
      },
      {
        title: "Tools I Use to Learn Faster",
        date: "Aug 2025",
        excerpt: "Lightweight apps that don't distract but help me focus.",
        url: "#",
      },
      {
        title: "Stock Market Lessons (as a Student)",
        date: "Aug 2025",
        excerpt: "Notes from trying to buy only 10 units and timing entries.",
        url: "#",
      },
    ],
  },
  newsletter: {
    heading: "Get new posts & videos",
    blurb:
      "A short email when I publish something new. No spam. Unsubscribe anytime.",
    providerNote:
      "This form is just a demo. Connect to Buttondown, Mailchimp, or ConvertKit.",
  },
  contact: {
    email: "info@alishgc.com.np",
    location: "Kathmandu, Nepal",
  },
  footer: {
    copyrightName: "Alish GC",
  },
};

export default function PersonalSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">
            {CONFIG.site.title}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:opacity-80" href="#about">About</a>
            <a className="hover:opacity-80" href="#videos">Videos</a>
            <a className="hover:opacity-80" href="#blog">Articles</a>
            <a className="hover:opacity-80" href="#newsletter">Newsletter</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-300/60 px-3 py-2 text-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
              <a onClick={() => setMenuOpen(false)} href="#about">About</a>
              <a onClick={() => setMenuOpen(false)} href="#videos">Videos</a>
              <a onClick={() => setMenuOpen(false)} href="#blog">Articles</a>
              <a onClick={() => setMenuOpen(false)} href="#newsletter">Newsletter</a>
              <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{ background: `radial-gradient(800px 400px at 10% 10%, ${CONFIG.site.primaryColor}, transparent)` }}
        />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {CONFIG.hero.name}
            </h1>
            <p className="mt-2 text-lg opacity-80">{CONFIG.hero.role}</p>
            <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300">
              {CONFIG.site.description}
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={CONFIG.hero.ctaPrimary.href}
                className="rounded-2xl px-5 py-3 text-sm font-semibold border border-transparent"
                style={{ backgroundColor: CONFIG.site.primaryColor, color: "white" }}
              >
                {CONFIG.hero.ctaPrimary.label}
              </a>
              <a
                href={CONFIG.hero.ctaSecondary.href}
                className="rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 dark:border-slate-700"
              >
                {CONFIG.hero.ctaSecondary.label}
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm opacity-90">
              {CONFIG.hero.social.map((s) => (
                <a key={s.label} className="underline underline-offset-4 hover:opacity-70" href={s.href}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-800">
              <img
                src={CONFIG.hero.portrait}
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">About</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm currently studying +2 (Management) and planning for BIT. On this site, I publish short, practical posts
              about study methods, beginner-friendly tech, and what I'm learning about investing as a student.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              If you're a student in Nepal exploring similar paths, this site is for you. Let's grow together.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 ring-1 ring-slate-200 dark:ring-slate-800">
            <h3 className="font-semibold">Quick facts</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>📍 {CONFIG.contact.location}</li>
              <li>🎓 NEB Grade 12 </li>
              <li>🎯 Goal: Study BIT at TU </li>
              <li>✉️ Contact: {CONFIG.contact.email}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">{CONFIG.videos.heading}</h2>
          <a href="#" className="text-sm underline underline-offset-4 opacity-80">All videos →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.videos.items.map((v) => (
            <a key={v.title} href={v.url} className="group">
              <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                <img src={v.thumb} alt="thumb" className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <h3 className="mt-3 font-semibold leading-snug group-hover:underline underline-offset-4">
                {v.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">{CONFIG.blog.heading}</h2>
          <a href="#" className="text-sm underline underline-offset-4 opacity-80">All articles →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.blog.items.map((p) => (
            <a key={p.title} href={p.url} className="block group rounded-2xl p-5 ring-1 ring-slate-200 dark:ring-slate-800 hover:shadow-md transition">
              <div className="text-xs opacity-70">{p.date}</div>
              <h3 className="mt-2 font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="rounded-3xl ring-1 ring-slate-200 dark:ring-slate-800 p-8 md:p-10 bg-slate-50 dark:bg-slate-900/50">
          <h2 className="text-2xl md:text-3xl font-bold">{CONFIG.newsletter.heading}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{CONFIG.newsletter.blurb}</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-2xl px-4 py-3 ring-1 ring-slate-300 dark:ring-slate-700 bg-white dark:bg-slate-950"
            />
            <button
              type="button"
              className="rounded-2xl px-5 py-3 text-sm font-semibold border border-transparent"
              style={{ backgroundColor: CONFIG.site.primaryColor, color: "white" }}
              onClick={() => alert("Connect this form to your email provider.")}
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs opacity-70">{CONFIG.newsletter.providerNote}</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              For collaboration, questions, or just to say hi.
            </p>
            <ul className="mt-6 text-sm space-y-2">
              <li>✉️ {CONFIG.contact.email}</li>
              <li>📍 {CONFIG.contact.location}</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo form. Hook it to Formspree, Netlify Forms, or your backend.");
            }}
            className="space-y-3"
          >
            <input className="w-full rounded-2xl px-4 py-3 ring-1 ring-slate-300 dark:ring-slate-700 bg-white dark:bg-slate-950" placeholder="Your name" />
            <input type="email" className="w-full rounded-2xl px-4 py-3 ring-1 ring-slate-300 dark:ring-slate-700 bg-white dark:bg-slate-950" placeholder="Your email" />
            <textarea className="w-full rounded-2xl px-4 py-3 ring-1 ring-slate-300 dark:ring-slate-700 bg-white dark:bg-slate-950 min-h-[120px]" placeholder="Your message" />
            <button
              type="submit"
              className="rounded-2xl px-5 py-3 text-sm font-semibold border border-transparent"
              style={{ backgroundColor: CONFIG.site.primaryColor, color: "white" }}
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="opacity-80">© {new Date().getFullYear()} {CONFIG.footer.copyrightName}</div>
          <div className="flex gap-6 opacity-80">
            <a href="#privacy" className="hover:opacity-60">Privacy</a>
            <a href="#terms" className="hover:opacity-60">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
