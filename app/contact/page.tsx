"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import { Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@techandus.rw",
    link: "mailto:hello@techandus.rw",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda",
    link: null,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  }
  ,
  {
    icon: Phone,
    label: "Phone",
    value: "+250 780 840 983",
    link: "tel:+250780840983",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    link: null,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  }
];

const projectTypes = [
  "Web Application",
  "Mobile App",
  "Business System",
  "API Integration",
  "AI Integration",
  "Not sure yet",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-blue-600/6 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase mb-5">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-5">
              Let&apos;s talk about{" "}
              <span className="gradient-text">your project</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll follow up with honest thoughts, a rough plan, and a clear sense of what working together looks like.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-10 border border-emerald-500/20 text-center flex flex-col items-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-2">Message sent!</h2>
                    <p className="text-dim text-sm leading-relaxed max-w-sm">
                      Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", company: "", projectType: "", message: "" }); }}
                    className="text-sm text-blue-400 hover:opacity-80 flex items-center gap-1.5 transition-opacity"
                  >
                    Send another message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 lg:p-9 border border-edge space-y-5">
                  <h2 className="text-lg font-semibold text-ink mb-1">Start the conversation</h2>
                  <p className="text-sm text-ghost mb-6">No commitment. Just a clear discussion about what you need.</p>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-dim mb-2">Your Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Mugisha"
                        className="w-full bg-surface-1 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder-ghost focus:border-blue-500/50 focus:bg-surface-2 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dim mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-surface-1 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder-ghost focus:border-blue-500/50 focus:bg-surface-2 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Company + Project type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-dim mb-2">Company (optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Minerz Corp"
                        className="w-full bg-surface-1 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder-ghost focus:border-blue-500/50 focus:bg-surface-2 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dim mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full bg-surface-1 border border-edge rounded-xl px-4 py-3 text-sm text-dim focus:border-blue-500/50 transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-well text-ghost">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-well text-ink">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-dim mb-2">Tell us about your project *</label>
                    <textarea
                      required
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe what you're building, what problem it solves, and where you are right now..."
                      className="w-full bg-surface-1 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder-ghost focus:border-blue-500/50 focus:bg-surface-2 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-ghost text-center">
                    We respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Contact info cards */}
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card-hover rounded-2xl p-5 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-ghost mb-0.5">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className={`text-sm font-medium ${info.color} hover:underline`}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* What to expect */}
              <div className="glass-card rounded-2xl p-6 border border-edge">
                <h3 className="text-sm font-semibold text-ink mb-4">What happens next</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We review your message within 24 hours" },
                    { step: "2", text: "We schedule a short discovery call" },
                    { step: "3", text: "You get a written proposal with timeline and scope" },
                    { step: "4", text: "If it's a fit, we kick off your project" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">
                        {item.step}
                      </span>
                      <p className="text-xs text-dim leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="rounded-2xl p-5 bg-blue-500/5 border border-blue-500/15">
                <p className="text-xs text-dim leading-relaxed">
                  <span className="text-blue-400 font-semibold">No pressure.</span> We&apos;ll be direct about whether we&apos;re the right fit. If we&apos;re not, we&apos;ll tell you — and point you in a better direction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
