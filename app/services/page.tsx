"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { 
  Code, PenTool, Box, 
  Rocket, CheckCircle2, LayoutDashboard, PlugZap, Server
} from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";

const services = [
  {
    id: "digitization",
    title: "Business Process Digitization",
    icon: LayoutDashboard,
    color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20",
    problem: "Manual processes, spreadsheets, and disconnected tools are slowing down your operations and causing errors.",
    solution: "We digitize your core workflows into centralized, automated systems that run your business efficiently.",
    features: ["Custom ERP/CRM Development", "Internal Admin Dashboards", "Workflow Automation", "Reporting & Analytics"],
    useCases: ["Replacing Excel with custom software", "Automating approval flows", "Centralizing operational data"]
  },
  {
    id: "software",
    title: "Custom Software Development",
    icon: Code,
    color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20",
    problem: "Off-the-shelf software doesn't fit your unique business model or scale with your growth.",
    solution: "We build scalable, secure, and high-performance custom web and mobile applications tailored to your exact needs.",
    features: ["Full-Stack Web Apps", "React Native Mobile Apps", "API Development", "Cloud Architecture"],
    useCases: ["Customer-facing SaaS platforms", "B2B vendor portals", "Native mobile applications"]
  },
  {
    id: "design",
    title: "Product Design & UX",
    icon: PenTool,
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20",
    problem: "Your software is functional but confusing to use, leading to poor user adoption and high training costs.",
    solution: "We design intuitive, accessibility-first interfaces that users actually want to interact with.",
    features: ["UI/UX Design", "Wireframing & Prototyping", "Design Systems", "User Testing"],
    useCases: ["Revamping legacy software UI", "Designing a new product from scratch", "Improving conversion funnels"]
  },
  {
    id: "integrations",
    title: "Payment & System Integrations",
    icon: PlugZap,
    color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20",
    problem: "Your data is trapped in silos, and manual data entry between systems is costing you time and money.",
    solution: "We build secure integration layers that connect your tools, databases, and payment processors seamlessly.",
    features: ["Payment Gateway Setup (Stripe, Local gateways)", "API Middleware", "Accounting Sync (QuickBooks, Xero)", "Webhook Handling"],
    useCases: ["Automating invoice generation", "Syncing CRM with operations data", "Handling complex USSD or local payments"]
  },
  {
    id: "support",
    title: "IT Support & Automation",
    icon: Server,
    color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20",
    problem: "Your infrastructure is unreliable, and your team is spending too much time on manual tech maintenance.",
    solution: "We provide robust IT support and automate infrastructure management so your systems stay online and secure.",
    features: ["Cloud Infrastructure Setup (AWS, Vercel)", "CI/CD Pipelines", "System Monitoring & Alerts", "Ongoing Technical Support"],
    useCases: ["Migrating legacy servers to the cloud", "Setting up automated backups", "Ensuring 99.9% uptime"]
  },
  {
    id: "startup",
    title: "Startup MVP Development",
    icon: Rocket,
    color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20",
    problem: "You have a validated idea but need a reliable technical partner to build a market-ready product quickly.",
    solution: "We architect and build robust Minimum Viable Products focused on core value, ready to launch and scale.",
    features: ["Rapid Prototyping", "Scalable Tech Stack", "Core Feature Development", "Launch Support"],
    useCases: ["Bringing a new SaaS to market", "Building a two-sided marketplace", "Creating a fintech proof-of-concept"]
  }
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We analyze your business operations, identify manual bottlenecks, and map out the digital systems required to solve them." },
  { step: "02", title: "Design", desc: "Our team designs the system architecture, database structure, and intuitive user interfaces focused on business outcomes." },
  { step: "03", title: "Development", desc: "We build the custom software, integrate necessary third-party tools, and implement workflow automation." },
  { step: "04", title: "Deployment", desc: "We deploy the solution securely to production, ensuring seamless data migration and zero downtime." },
  { step: "05", title: "Support", desc: "We provide ongoing IT support, system monitoring, and infrastructure scaling as your business grows." }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-125 h-125 bg-violet-600/6 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 tracking-wide uppercase mb-5">
              Services & Solutions
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              Digital Systems That Power Your <span className="text-blue-500">Business</span> Growth
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed max-w-2xl">
              We are solutions architects helping businesses digitize operations, automate workflows, and scale efficiently through custom software and system integration.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
              <Button href="/contact" icon>Start Your Project</Button>
              <Button href="#services" variant="secondary">Explore Services</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-20 lg:py-28 border-t border-edge bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Expertise</h2>
            <p className="text-dim max-w-2xl text-lg">We provide end-to-end digital systems development structured around solving real business problems.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`glass-card rounded-2xl border ${svc.border} p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center shrink-0`}>
                  <svc.icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-ink">{svc.title}</h2>
              </div>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-xs font-bold text-ghost uppercase tracking-wider mb-2">The Problem</h3>
                  <p className="text-sm text-dim leading-relaxed">{svc.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-ghost uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-sm text-ink leading-relaxed">{svc.solution}</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-edge">
                  <div>
                    <h3 className="text-xs font-bold text-ghost uppercase tracking-wider mb-3">What You Get</h3>
                    <ul className="space-y-2">
                      {svc.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-dim">
                          <CheckCircle2 className={`w-4 h-4 ${svc.color} shrink-0 mt-0.5`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-ghost uppercase tracking-wider mb-3">Use Cases</h3>
                    <ul className="space-y-2">
                      {svc.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-dim">
                          <Box className="w-4 h-4 text-ghost shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 border-t border-edge bg-surface-1/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Process</h2>
            <p className="text-dim max-w-2xl text-lg">A systematic approach to digitizing and scaling your operations.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-5 gap-6 lg:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-edge border-dashed border-b pointer-events-none" />
            
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-1 border border-edge flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
                  <span className="text-sm font-bold text-ghost">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-xs text-dim leading-relaxed text-center md:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Final CTA */}
      <section className="py-24 lg:py-32 border-t border-edge relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-75 bg-blue-500/10 rounded-t-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-ink mb-6 tracking-tight">
              Ready to digitize your <span className="text-blue-500">business operations</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-dim mb-10 max-w-2xl mx-auto">
              Stop relying on manual workflows and disconnected tools. Let's build the systems that will scale your business efficiently.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button href="/contact" size="lg" icon>
                Book a Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
