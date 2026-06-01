import { Code2, Link, Mail, Phone, Send } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/riheasingh', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riya-kumari-97b33b318/', icon: Link },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative min-h-screen overflow-hidden bg-[#081122] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="font-display text-xs font-normal uppercase tracking-[0.38em] text-blue-300">
              Let's Talk
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Contact</h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.9fr]">
          <Reveal>
            <form className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="contact-label">Name</span>
                  <input className="contact-input" type="text" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="contact-label">Email</span>
                  <input className="contact-input" type="email" placeholder="you@example.com" />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="contact-label">Subject</span>
                <input className="contact-input" type="text" placeholder="How can I help you?" />
              </label>

              <label className="mt-5 block">
                <span className="contact-label">Message</span>
                <textarea className="contact-input min-h-36 resize-y" placeholder="Write your message here..." />
              </label>

              <button type="button" className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-2xl bg-blue-400 px-6 py-3 text-sm font-normal text-slate-950 transition hover:-translate-y-1 hover:bg-blue-300 hover:shadow-[0_24px_70px_-28px_rgba(56,189,248,0.9)]">
                <Send size={17} />
                Send Message
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="h-full rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
                <a
                  href="mailto:riheasingh07234@gmail.com"
                  className="mt-4 flex items-center gap-3 text-sm text-blue-300 transition hover:text-blue-200"
                >
                  <Mail size={19} />
                  riheasingh07234@gmail.com
                </a>
                <a
                  href="tel:+918092597612"
                  className="mt-3 flex items-center gap-3 text-sm text-blue-300 transition hover:text-blue-200"
                >
                  <Phone size={19} />
                  8092597612
                </a>
                <p className="mt-6 leading-7 text-slate-400">
                  Prefer email? Feel free to contact me directly or connect with me through my developer profiles.
                </p>
              </div>

              <div className="mt-8">
                <p className="font-display text-sm uppercase tracking-[0.28em] text-slate-400">Socials</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/30 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-blue-300/50 hover:text-blue-200"
                    >
                      <social.icon size={17} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
