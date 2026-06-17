import Image from "next/image";

const services = [
  {
    name: "Quantum360",
    title: "Institutional Intelligence Framework",
    idealFor:
      "Premium schools seeking a comprehensive, reusable, whole-school evaluation system.",
    duration: "Approximately 12 weeks",
    description:
      "A full-stack, AI-ready quality assurance and evaluation framework for the entire school.",
    points: [
      "Integrated evaluation across teaching-learning, assessment, HR, governance, infrastructure and stakeholder experience.",
      "KPIs and KRAs for teachers, departments and institutional processes.",
      "AI-assisted analytics to identify patterns, risks and opportunities.",
      "Institutional Intelligence Playbook your team can continue to operate independently.",
    ],
  },
  {
    name: "EduMetric",
    title: "HR & Teacher Performance Engine",
    idealFor:
      "Schools prioritising teacher quality, appraisal fairness and strategic HR decisions.",
    duration: "Approximately 4 weeks",
    description:
      "A data-rich teacher and HR evaluation system aligned with your academic vision.",
    points: [
      "Multi-perspective teacher KPI and KRA framework.",
      "Evidence-based appraisal processes linked to HR decisions.",
      "Observation rubrics, self-review templates and student feedback tools.",
      "Analytics views highlighting high performers, support needs and training gaps.",
    ],
  },
  {
    name: "Precision Eval",
    title: "Modular Diagnostic Labs",
    idealFor:
      "Schools needing a sharp, time-bound diagnostic in one or two focus areas.",
    duration: "Typically 3–5 days per module",
    description:
      "Focused evaluation modules for classrooms, assessments, student voice and school processes.",
    points: [
      "Classroom Observation Lab.",
      "Assessment & Outcomes Lab.",
      "Student Voice & Parent Experience Lab.",
      "Process Excellence Lab.",
      "Board-ready insights, tools and recommendations.",
    ],
  },
];

const featuredTestimonial = {
  quote:
    "We came away with systems we actually use, not just a report on a shelf.",
  body:
    "Smita’s approach is hands-on, evidence-driven and deeply respectful of the school’s context.",
  person: "Principal",
  school: "CBSE school, Noida",
};

const testimonials = [
  {
    quote:
      "We thought our processes were ‘good enough’ until we saw the Elevare report.",
    body:
      "Elevare gave us a genuinely integrated picture of teaching, assessments, HR and student experience. The final playbook, with KPIs, rubrics and review rhythms, has become a core part of how we run the school.",
    person: "Principal",
    school: "CBSE school, Gurgaon",
  },
  {
    quote:
      "Elevare gave us a language for quality that both educators and promoters could agree on.",
    body:
      "We now have a common institutional intelligence framework across campuses. The combination of on-ground observation and AI-assisted analytics helped us identify patterns we had never seen before.",
    person: "Director",
    school: "K-12 school group, Mumbai",
  },
  {
    quote:
      "Teacher appraisal stopped being a yearly headache and became an ongoing conversation.",
    body:
      "Teachers can now see the criteria, the evidence and the support plans. It no longer feels like a surprise judgment at the end of March.",
    person: "Senior Academic Coordinator",
    school: "CBSE school, Delhi",
  },
  {
    quote:
      "For the first time, HR decisions are backed by credible academic data.",
    body:
      "Increments, confirmations and role allocations are now informed by agreed-upon KPIs and documented evidence.",
    person: "Head – HR",
    school: "CBSE–Cambridge school, Bengaluru",
  },
  {
    quote:
      "Elevare helped us put structure behind what we were promising parents.",
    body:
      "We now have board-ready data and narratives that we can share in parent meetings and admissions conversations.",
    person: "Managing Trustee",
    school: "CBSE school, Ahmedabad",
  },
  {
    quote:
      "The biggest change was in how we talk about quality internally.",
    body:
      "Our leadership meetings became far more focused. We now review a small, agreed set of institutional KPIs every month.",
    person: "Vice-Principal",
    school: "CBSE school, Hyderabad",
  },
];

const whyElevare = [
  "Designed by an academician with 20+ years of experience in schools and teacher education.",
  "Grounded in NCERT, CBSE and quality-assurance experience.",
  "Built for premium urban schools serving data-savvy parents.",
  "AI-enabled, not AI-dependent: analytics support professional judgment.",
  "Focused on implementation, not just reports.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#16231f]">
      <section className="border-b border-[#ded7ca] bg-[#fbfaf7]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 pb-2">
          <Image
            src="/elevare-logo.png"
            alt="Elevare"
            width={260}
            height={80}
            priority
            className="h-auto w-[200px] -ml-6 mix-blend-multiply md:w-[240px]"
          />

          <a
            href="#contact"
            className="hidden rounded-full bg-[#172d27] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0f211c] lg:inline-flex"
          >
            Request a Strategy Call
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-0 pb-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
              AI-enabled evaluation for premium schools
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#13221e] md:text-6xl">
              Turn school data into institutional intelligence.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#4f5c56]">
              Elevare helps premium urban schools build robust, data-driven
              evaluation frameworks for teachers, institutional processes and
              student outcomes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#172d27] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#0f211c]"
              >
                Book a Strategy Call
              </a>
              <a
                href="#services"
                className="rounded-full border border-[#bfb6a7] px-7 py-4 text-center text-sm font-semibold text-[#172d27] transition hover:bg-white"
              >
                Explore the Evaluation Stack
              </a>
            </div>
            <div className="mt-10 max-w-2xl rounded-[1.5rem] border border-[#ded7ca] bg-white/70 p-6 shadow-sm">
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7338]">
    Client voice
  </p>
  <p className="mt-3 text-xl font-semibold leading-8 text-[#172d27]">
    “{featuredTestimonial.quote}”
  </p>
  <p className="mt-4 text-base leading-7 text-[#5d675f]">
    {featuredTestimonial.body}
  </p>
  <div className="mt-5 border-t border-[#ebe4d8] pt-4">
    <p className="text-sm font-semibold text-[#172d27]">
      {featuredTestimonial.person}
    </p>
    <p className="text-sm text-[#6f746f]">{featuredTestimonial.school}</p>
  </div>
</div>
          </div>

          <div className="hidden rounded-[2rem] border border-[#ded7ca] bg-white p-8 shadow-sm lg:block">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7338]">
              Built for leadership teams
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-4xl font-semibold">3</p>
                <p className="mt-2 text-[#5d675f]">
                  Entry points: whole-school intelligence, teacher performance,
                  or focused diagnostics.
                </p>
              </div>
              <div className="h-px bg-[#ebe4d8]" />
              <div>
                <p className="text-4xl font-semibold">20+</p>
                <p className="mt-2 text-[#5d675f]">
                  Years of experience across school education, teacher
                  education, evaluation and quality assurance.
                </p>
              </div>
              <div className="h-px bg-[#ebe4d8]" />
              <div>
                <p className="text-4xl font-semibold">AI</p>
                <p className="mt-2 text-[#5d675f]">
                  Used for pattern detection and analytics while preserving
                  context, judgment and school realities.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
            Who we serve
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Built for premium urban schools.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4f5c56]">
            We work with CBSE and other board-affiliated schools that compete on
            academic rigour, student experience and reputation in demanding
            urban markets. Our clients typically serve parents who ask tough
            questions about results, safety, teacher quality and transparency.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
              How Elevare Works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              On-site evaluation. Custom program design. Practical implementation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4f5c56]">
              Elevare is not a remote reporting exercise. The engagement begins
              inside the school, with direct observation, leadership
              conversations, teacher interviews, process reviews and
              evidence-based evaluation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {[
              ["01", "Visit the school"],
              ["02", "Conduct interviews"],
              ["03", "Evaluate and assess"],
              ["04", "Create the program"],
              ["05", "Train implementation"],
            ].map(([step, title]) => (
              <div
                key={step}
                className="rounded-3xl border border-[#ded7ca] bg-[#f8f5ef] p-6"
              >
                <p className="text-sm font-semibold text-[#9a7338]">{step}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#172d27] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6b16f]">
              The Elevare Evaluation Stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Choose a focused entry point. Scale into a complete evaluation
              ecosystem.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b16f]">
                  {service.name}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-5 text-[#dce5df]">{service.description}</p>

                <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-[#eef4ef]">
                  <p>
                    <span className="font-semibold text-white">Ideal for:</span>{" "}
                    {service.idealFor}
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-white">Duration:</span>{" "}
                    {service.duration}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#dce5df]">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b16f]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

            

      <section className="bg-[#f8f5ef] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
        Trusted by school leaders
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight">
        Practical systems schools actually use.
      </h2>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <article
          key={item.quote}
          className="flex min-h-[320px] flex-col rounded-[1.75rem] border border-[#ded7ca] bg-white p-7 shadow-sm"
        >
          <p className="text-5xl leading-none text-[#9a7338]">“</p>
          <h3 className="mt-2 text-xl font-semibold leading-7 text-[#172d27]">
            {item.quote}
          </h3>
          <p className="mt-5 flex-1 text-sm leading-7 text-[#4f5c56]">
            {item.body}
          </p>
          <div className="mt-6 border-t border-[#ebe4d8] pt-5">
            <p className="font-semibold text-[#172d27]">{item.person}</p>
            <p className="mt-1 text-sm text-[#6f746f]">{item.school}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
            Why Elevare
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Evaluation that is rigorous, usable and credible.
          </h2>
        </div>

        <div className="grid gap-4">
          {whyElevare.map((item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-[#ded7ca] bg-white p-6"
            >
              <p className="text-sm font-semibold text-[#9a7338]">
                0{index + 1}
              </p>
              <p className="mt-3 text-lg leading-8 text-[#3f4a45]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7338]">
              Start with a conversation
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Request a strategy call.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4f5c56]">
              Share a few details about your school and current evaluation
              practices. Elevare will recommend the most suitable entry tier:
              Quantum360, EduMetric or PrecisionEval.
            </p>
          </div>

          <form className="rounded-[2rem] border border-[#ded7ca] bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              {["School name", "City", "Email", "Phone"].map((label) => (
                <label key={label} className="block">
                  <span className="text-sm font-medium">{label}</span>
                  <input className="mt-2 w-full rounded-xl border border-[#d8d0c2] px-4 py-3 outline-none focus:border-[#172d27]" />
                </label>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#172d27] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0f211c]"
            >
  Request a Strategy Call
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#ded7ca] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#6f746f] md:flex-row">
          <p>© 2026 Elevare School Intelligence</p>
          <p>AI-enabled evaluation ecosystems for premium schools</p>
        </div>
      </footer>
    </main>
  );
}