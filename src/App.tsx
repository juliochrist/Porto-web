import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Network,
  Phone,
  Rocket,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const navItems = ['About', 'Journey', 'Projects', 'Skills', 'Vision', 'Contact']

const githubUrl = 'https://github.com/juliochrist?tab=repositories'
const avatarUrl = '/avatar/julio-christianto.jpg'

const timeline = [
  {
    title: 'Business Experience',
    text: '8+ years inside sales, purchasing, and daily business operations.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Learning Web Development',
    text: 'Modern frontend foundations through React, TypeScript, Tailwind CSS, and Vite.',
    icon: Code2,
  },
  {
    title: 'Building Products',
    text: 'Turning operational pain points into focused, testable product ideas.',
    icon: Layers3,
  },
  {
    title: 'AI-Powered Solutions',
    text: 'Using AI-assisted development to move faster from concept to useful software.',
    icon: BrainCircuit,
  },
  {
    title: 'Future Technology Company',
    text: 'A long-term mission to build tools for sharper business and personal decisions.',
    icon: Rocket,
  },
]

const projects = [
  {
    name: 'TradeIntel',
    tagline: 'AI Trading Intelligence Platform',
    problem: 'Retail traders struggle with discipline and performance tracking.',
    solution: 'AI-powered trading journal and decision-support platform.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI Workflows'],
    color: 'from-blue-500/35 via-cyan-400/10 to-slate-950',
    icon: TrendingUp,
    image: '/project-screenshots/tradeintel.png',
    imageTone: 'dark',
    demoUrl: 'https://tradeintel-v2.vercel.app',
    githubUrl,
  },
  {
    name: 'SmartPOS AI',
    tagline: 'Business Intelligence for UMKM',
    problem: 'Small businesses still rely on spreadsheets.',
    solution: 'Sales, inventory, finance, and AI insights in one platform.',
    tech: ['React', 'Vite', 'Data UI', 'AI Insights'],
    color: 'from-emerald-400/30 via-blue-500/10 to-slate-950',
    icon: Building2,
    image: '/project-screenshots/smartpos-ai.png',
    imageTone: 'dark',
    demoUrl: 'https://smartpos-ai-seven.vercel.app',
    githubUrl,
  },
  {
    name: 'Life OS',
    tagline: 'Personal Operating System',
    problem: 'People manage tasks, notes, finances, and goals across multiple apps.',
    solution: 'A unified dashboard for personal productivity and organization.',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Product Systems'],
    color: 'from-teal-300/40 via-emerald-300/20 to-slate-100',
    icon: Target,
    image: '/project-screenshots/life-os.png',
    imageTone: 'light',
    demoUrl: 'https://life-os-beta-mocha.vercel.app',
    githubUrl,
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Tools',
    icon: Sparkles,
    skills: ['Git', 'GitHub', 'VS Code', 'AI Tools'],
  },
  {
    title: 'Business',
    icon: BarChart3,
    skills: ['Sales', 'Purchasing', 'Business Operations', 'Product Thinking'],
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-[#E5E7EB]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0F17]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="size-10 overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] shadow-2xl shadow-blue-500/10">
              <img
                src={avatarUrl}
                alt="Julio Christianto"
                className="h-full w-full object-cover object-[50%_34%] transition duration-300 group-hover:scale-110"
              />
            </span>
            <span className="hidden text-sm font-medium text-white sm:inline">Julio Christianto</span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm text-[#9CA3AF] transition hover:bg-white/[0.06] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:juliochristianto@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B0F17] transition hover:bg-blue-100"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </nav>

      <section id="hero" className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
          <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_180deg,rgba(59,130,246,0.18),rgba(139,92,246,0.14),rgba(20,184,166,0.12),rgba(59,130,246,0.18))] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              <BadgeCheck className="size-4 text-blue-300" />
              Apple Developer Academy Applicant
            </div>
            <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Building AI-Powered Products That Solve Real Problems
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-7 text-[#9CA3AF] sm:text-lg">
              I am a self-taught developer with over 8 years of experience in sales, purchasing, and business
              operations. I am currently learning modern web development and building AI-powered products focused on
              business intelligence, productivity, and decision-making.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-500/25 transition hover:bg-blue-400"
              >
                View Projects <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                Contact Me <Mail className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-[#1F2937] bg-[#111827] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-16 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-xl shadow-black/30">
                      <img
                        src={avatarUrl}
                        alt="Julio Christianto portrait"
                        className="h-full w-full object-cover object-[50%_32%]"
                      />
                    </div>
                    <div>
                    <p className="text-sm text-[#9CA3AF]">Product Builder Profile</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Julio Christianto</h2>
                    </div>
                  </div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-200">
                    <BrainCircuit className="size-6" />
                  </div>
                </div>
                <div className="grid gap-3">
                  {[
                    ['8+ years', 'Sales, purchasing, operations'],
                    ['3 concepts', 'AI product portfolio'],
                    ['Founder path', 'Business-first technology mindset'],
                  ].map(([value, label]) => (
                    <motion.div
                      key={value}
                      whileHover={{ y: -4, scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                      className="rounded-2xl border border-white/10 bg-[#0B0F17]/80 p-4 transition-colors hover:border-blue-300/35 hover:bg-white/[0.04]"
                    >
                      <p className="text-xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-sm text-[#9CA3AF]">{label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                  <p className="text-sm font-medium text-blue-100">Current focus</p>
                  <p className="mt-2 text-sm leading-6 text-[#E5E7EB]">
                    Learning by building practical software for traders, UMKM owners, and people who want better systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" eyebrow="About Me" title="From business operations to technology products">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassPanel>
            <p className="text-base leading-7 text-[#E5E7EB]">
              Julio Christianto is building a bridge between real-world business experience and modern software
              creation. After more than 8 years across sales, purchasing, and business operations, his transition into
              technology comes from a clear desire: solve practical problems through software.
            </p>
            <p className="mt-5 leading-7 text-[#9CA3AF]">
              His learning path includes the Meta Front-End Developer Certificate on Coursera and a hands-on focus on
              React, TypeScript, JavaScript, Tailwind CSS, Vite, and AI-assisted development.
            </p>
          </GlassPanel>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Sales experience',
              'Purchasing experience',
              'Business operations',
              'Product thinking',
              'Meta Front-End Developer Certificate',
              'AI-assisted development',
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                className="flex items-center gap-3 rounded-2xl border border-[#1F2937] bg-[#111827]/80 p-4 transition-colors hover:border-blue-300/35 hover:bg-white/[0.04]"
              >
                <CheckCircle2 className="size-5 shrink-0 text-blue-300" />
                <span className="font-medium text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="journey" eyebrow="My Journey Timeline" title="A founder journey built from practical experience">
        <div className="grid gap-4 lg:grid-cols-5">
          {timeline.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="relative rounded-2xl border border-[#1F2937] bg-[#111827]/80 p-5 transition-colors hover:border-blue-300/40 hover:bg-white/[0.045]"
              >
                <div className="mb-5 grid size-11 place-items-center rounded-xl bg-white/[0.05] text-blue-200">
                  <Icon className="size-5" />
                </div>
                <p className="text-sm text-[#9CA3AF]">0{index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">{step.text}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured Projects" title="Product concepts with real business problems at the center">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.018 }}
                className="group overflow-hidden rounded-3xl border border-[#1F2937] bg-[#111827]/85 shadow-2xl shadow-black/20 transition-colors duration-300 hover:border-blue-300/45 hover:bg-[#111827] hover:shadow-blue-950/30"
              >
                <div className={`h-56 bg-gradient-to-br ${project.color} p-4`}>
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl border shadow-2xl ${
                      project.imageTone === 'light'
                        ? 'border-white/70 bg-white/80 shadow-emerald-950/20'
                        : 'border-white/10 bg-black/30 shadow-black/40'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} product screenshot`}
                      className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-x-0 top-0 flex items-center justify-between p-3 ${
                        project.imageTone === 'light'
                          ? 'bg-gradient-to-b from-white/85 to-transparent text-slate-800'
                          : 'bg-gradient-to-b from-black/75 to-transparent text-white'
                      }`}
                    >
                      <span className="rounded-full border border-current/15 bg-current/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                        Product UI
                      </span>
                      <span className="grid size-9 place-items-center rounded-xl border border-current/15 bg-current/[0.06] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <Icon className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-blue-300">{project.tagline}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                  <div className="mt-5 space-y-4">
                    <CaseLabel label="Problem" value={project.problem} />
                    <CaseLabel label="Solution" value={project.solution} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#E5E7EB]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0B0F17] transition hover:-translate-y-0.5 hover:bg-blue-100"
                    >
                      Live Demo <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                    >
                      GitHub <Code2 className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A practical toolkit for learning, shipping, and understanding users">
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <GlassPanel key={group.title}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-[#3B82F6]/15 text-blue-200">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-xl border border-[#1F2937] bg-[#0B0F17]/75 px-3 py-2 text-sm text-[#E5E7EB]">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            )
          })}
        </div>
      </Section>

      <Section id="vision" eyebrow="Vision" title="Why I Build">
        <div className="rounded-[2rem] border border-blue-400/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.16),rgba(139,92,246,0.13),rgba(17,24,39,0.85))] p-6 shadow-2xl shadow-blue-950/30 sm:p-10">
          <p className="max-w-4xl text-xl font-medium leading-snug text-white sm:text-2xl">
            My long-term goal is to create technology products that help individuals and small businesses make better
            decisions through data and artificial intelligence.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Business intelligence', 'Productivity systems', 'Decision support'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-blue-50 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s connect">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassPanel>
            <div className="flex items-center gap-4">
              <div className="size-16 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-xl shadow-black/30">
                <img
                  src={avatarUrl}
                  alt="Julio Christianto portrait"
                  className="h-full w-full object-cover object-[50%_32%]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Julio Christianto</h3>
            </div>
            <p className="mt-3 leading-7 text-[#9CA3AF]">
              Future product builder focused on AI-powered business intelligence, productivity, and decision-making.
            </p>
          </GlassPanel>
          <div className="grid gap-3 sm:grid-cols-2">
            <ContactLink href="mailto:juliochristianto@gmail.com" icon={Mail} label="Email" value="juliochristianto@gmail.com" />
            <ContactLink href="tel:+6281321202069" icon={Phone} label="Phone" value="+62 813 2120 2069" />
            <ContactLink href={githubUrl} icon={Share2} label="GitHub" value="github.com/juliochrist" />
            <ContactLink href="#" icon={Network} label="LinkedIn" value="Add profile link" />
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Julio Christianto. Built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.</p>
          <p>Designed for product thinking, business clarity, and future technology building.</p>
        </div>
      </footer>
    </main>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-9 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className="rounded-3xl border border-[#1F2937] bg-[#111827]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-blue-300/35 hover:bg-white/[0.045] hover:shadow-blue-950/25 sm:p-7"
    >
      {children}
    </motion.div>
  )
}

function CaseLabel({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">{label}</p>
      <p className="mt-1 text-sm leading-6 text-[#E5E7EB]">{value}</p>
    </div>
  )
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: React.ElementType
  label: string
  value: string
}) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group rounded-2xl border border-[#1F2937] bg-[#111827]/80 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/20"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="grid size-10 place-items-center rounded-xl bg-white/[0.05] text-blue-200">
          <Icon className="size-5" />
        </div>
        <ArrowRight className="size-4 text-[#9CA3AF] transition group-hover:translate-x-1 group-hover:text-blue-200" />
      </div>
      <p className="text-sm text-[#9CA3AF]">{label}</p>
      <p className="mt-1 break-words font-medium text-white">{value}</p>
    </a>
  )
}

export default App
