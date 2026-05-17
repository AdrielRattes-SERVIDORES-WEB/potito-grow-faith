import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, BookHeart, Printer, Users, Check, Shield, Mail,
  Infinity as InfinityIcon, ChevronDown, Star, Gift, Heart, GraduationCap,
} from "lucide-react";
import potitoMockup from "@/assets/potito-mockup.png";
import heroPrayer from "@/assets/hero-prayer.png";
import bonusDiario from "@/assets/bonus-diario.png";
import bonusVersiculos from "@/assets/bonus-versiculos.png";
import bonusGuia from "@/assets/bonus-guia.png";
import bonusDesenhos from "@/assets/bonus-desenhos.png";
import bonusPlanner from "@/assets/bonus-planner.png";
import bonusesAll from "@/assets/bonuses-all.png";
import marianaPhoto from "@/assets/mariana.jpg";

export const Route = createFileRoute("/")(
  {
    component: Landing,
    head: () => ({
      meta: [
        { title: "Tarrito de Oraciones — 50 Oraciones para Plantar Fe en tu Hijo" },
        {
          name: "description",
          content:
            "Kit digital con 50 oraciones infantiles ilustradas, rótulos y molde del frasquito. Imprime, recorta y crea hoy mismo el momento favorito del día.",
        },
        { property: "og:title", content: "Tarrito de Oraciones — Kit Digital" },
        {
          property: "og:description",
          content: "50 oraciones ilustradas + rótulos + molde. Acceso inmediato por email.",
        },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    }),
  });

/* ── helpers ──────────────────────────────────────────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={visible ? "fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function CtaButton({ children, size = "lg" }: { children: React.ReactNode; size?: "lg" | "xl" }) {
  const sizes = {
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg sm:text-xl",
  };
  return (
    <a
      href="#checkout"
      className={`pulse-cta inline-flex items-center justify-center gap-2 rounded-full bg-primary font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:brightness-110 ${sizes[size]}`}
    >
      {children}
    </a>
  );
}

/* ── data ─────────────────────────────────────────────────── */

const benefits = [
  {
    icon: BookHeart,
    title: "50 Oraciones del Nivel Más Simple al Más Profundo",
    desc: "Organizadas por tema: gratitud, familia, escuela, miedos y sueños.",
  },
  {
    icon: Printer,
    title: "Listo para Imprimir en Minutos",
    desc: "Sin diseño, sin complicaciones. Abre el PDF y empieza hoy mismo.",
  },
  {
    icon: Users,
    title: "Para Toda la Familia Cristiana",
    desc: "Católicas, evangélicas, cualquier mamá que quiera criar a su hijo en la fe.",
  },
];

const items = [
  {
    main: true,
    title: "PDF con 50 Oraciones Infantiles Ilustradas",
    desc: "Oraciones organizadas por tema, con ilustraciones coloridas y lenguaje simple para niños de 3 a 12 años.",
    value: "VALORADO EN $29.90",
    image: potitoMockup,
    tag: "PRODUCTO PRINCIPAL",
  },
  {
    title: "Diario de Oración",
    desc: "Un espacio especial para anotar las bendiciones recibidas y los pedidos del corazón.",
    value: "VALORADO EN $7.90",
    image: bonusDiario,
    tag: "BONO #1",
  },
  {
    title: "Versículos Kids",
    desc: "Tarjetas con versículos ilustrados, fáciles de memorizar para los más pequeños.",
    value: "VALORADO EN $4.90",
    image: bonusVersiculos,
    tag: "BONO #2",
  },
  {
    title: "Guía de Padres",
    desc: "Cómo conducir el momento devocional en familia, paso a paso, sin complicaciones.",
    value: "VALORADO EN $9.90",
    image: bonusGuia,
    tag: "BONO #3",
  },
  {
    title: "Dibujos Bíblicos para Colorear",
    desc: "Páginas para colorear con temas de oración y escenas bíblicas favoritas de los niños.",
    value: "VALORADO EN $3.90",
    image: bonusDesenhos,
    tag: "BONO #4",
  },
  {
    title: "Planner Semanal de Oración",
    desc: "Organiza la semana de oración en familia: un momento, un propósito, cada día.",
    value: "VALORADO EN $5.90",
    image: bonusPlanner,
    tag: "BONO #5",
  },
];

const forYou = [
  "Quieres criar a tu hijo en la fe pero no sabes por dónde empezar",
  "Sientes que falta un momento especial de conexión espiritual en casa",
  "Buscas algo simple, lindo y que funcione de verdad",
  "Quieres alejarlo de las pantallas con una actividad con significado",
  "No tienes tiempo para crear material desde cero",
  "Quieres que orar sea el momento favorito de tu hijo",
];

const testimonials = [
  {
    text: "Mi hija de 5 años pide ella sola sacar su oración del Tarrito cada noche. ¡Nunca pensé que sería tan fácil!",
    name: "María G.",
    role: "mamá de 2 hijos",
  },
  {
    text: "Imprimí todo en 20 minutos y montamos juntos. Mi hijo de 7 años lo ama. Vale cada centavo.",
    name: "Ana L.",
    role: "mamá cristiana",
  },
  {
    text: "Es el regalo más lindo que le pude dar a mi sobrina. Simple, bonito y lleno de fe.",
    name: "Carmen R.",
    role: "tía orgullosa",
  },
];

const faqs = [
  {
    q: "¿Necesito experiencia para usar este material?",
    a: "No, está todo listo para imprimir y usar. Solo abres el PDF y empiezas.",
  },
  {
    q: "¿Es un pago único?",
    a: "Sí. Sin mensualidades ni suscripciones. Pagas una sola vez y es tuyo para siempre.",
  },
  {
    q: "¿Cómo recibo el material?",
    a: "Por email, al instante después del pago. Acceso inmediato.",
  },
  {
    q: "¿Puedo imprimir en casa?",
    a: "Sí, en cualquier impresora normal. También puedes llevarlo a una imprenta.",
  },
  {
    q: "¿Funciona para niños de cualquier edad?",
    a: "Sí, está pensado para niños de 3 a 12 años, con oraciones de distintos niveles.",
  },
];

/* ── sub-components ───────────────────────────────────────── */

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-white transition-all hover:shadow-md">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-base font-bold text-foreground sm:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden px-5 transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-honey">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl leading-tight">
        {children}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg">{sub}</p>}
    </div>
  );
}

/* ── page ─────────────────────────────────────────────────── */

function Landing() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="section-pink-band px-5 pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              ✨ +1.000 mamás ya lo usan
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              TARRITO DE ORACIÓN CON{" "}
              <br className="hidden sm:block" />
              <span className="highlight-pink text-primary">+50 ORACIONES</span>
              <br />
              <span className="highlight-pink text-primary">INFANTILES</span> LISTAS
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Kit digital completo: oraciones ilustradas + rótulos + molde del frasquito.
              Imprime, recorta y crea este momento especial <strong className="text-foreground">HOY MISMO</strong>.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mx-auto mt-8 max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src={heroPrayer}
                alt="Mamá e hijo orando juntos con su Tarrito de Oración"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8">
              <CtaButton size="xl">
                <Sparkles className="h-5 w-5" /> QUIERO MI TARRITO DE ORACIÓN
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── QUÉ VAS A RECIBIR ─── */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionTitle sub="Producto principal + 5 bonos exclusivos para empezar hoy.">
              ¿Qué Vas a  <span className="highlight-pink text-primary">Recibir?🌸</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <div className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-lg ${it.main ? "sm:col-span-2 lg:col-span-3" : ""}`}>
                  <div className={`flex items-center justify-center overflow-hidden bg-pink-50 ${it.main ? "p-6 sm:p-8" : "p-4 sm:p-6"}`}>
                    <img
                      src={it.image}
                      alt={it.title}
                      className={`w-full object-contain ${it.main ? "h-56 sm:h-72" : "h-52 sm:h-56"}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${it.main ? "bg-primary text-white" : "bg-pink-100 text-primary"}`}>
                      {it.tag}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-foreground">{it.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{it.desc}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-muted-foreground line-through">{it.value}</span>
                      {!it.main && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          HOY GRATIS
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bonuses banner */}
          <Reveal delay={200}>
            <div className="mt-14 overflow-hidden rounded-3xl bg-pink-50 p-6 sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <img
                  src={bonusesAll}
                  alt="Todos los bonos exclusivos del Tarrito de Oración"
                  className="mx-auto w-full rounded-2xl"
                />
                <div className="text-center md:text-left">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Bonos exclusivos incluidos
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
                    Todo esto va contigo, hoy <span className="text-primary">GRATIS</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Más de 5 materiales extras pensados para que la fe crezca en familia, día a día.
                  </p>
                  <div className="mt-6">
                    <CtaButton size="lg">
                      <Sparkles className="h-5 w-5" /> QUIERO MI TARRITO AHORA
                    </CtaButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CÓMO FUNCIONA ─── */}
      <section className="section-pink-band px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionTitle sub="Un ritual sencillo que transforma la noche en familia.">
              CÓMO VOY A <span className="highlight-green text-green-600">RECIBIR?</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <div className="group h-full rounded-2xl bg-white p-7 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-primary">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHECKOUT / PRECIO ─── */}
      <section id="checkout" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle>
              ELIGE TU <span className="highlight-green text-green-600">PLAN</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 rounded-3xl bg-white p-8 text-center shadow-xl ring-2 ring-primary/30 sm:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Total valorado en
              </p>
              <p className="mt-1 text-2xl font-bold text-muted-foreground line-through">$69.40</p>
              <p className="mt-4 text-foreground">Hoy tendrás acceso completo a TODO esto por solo</p>
              <p className="mt-3 text-7xl font-extrabold text-primary sm:text-8xl">
                $4<span className="text-5xl sm:text-6xl">,99</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                USD · Puedes pagar en tu moneda local
              </p>

              <ul className="mx-auto mt-8 max-w-md space-y-2 text-left">
                {items.map((it) => (
                  <li key={it.title} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{it.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Garantía 7 días</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4 text-primary" /> Acceso inmediato</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1"><InfinityIcon className="h-4 w-4 text-primary" /> Para siempre</span>
              </div>

              <div className="mt-8">
                <CtaButton size="xl">
                  <Sparkles className="h-5 w-5" /> QUIERO MI ACCESO AHORA
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── AUTORA ─── */}
      <section className="section-pink-band px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionTitle>
              MATERIAL <span className="highlight-pink text-primary">DESARROLLADO</span> POR:
            </SectionTitle>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-md sm:p-12">
              <div className="relative">
                <img
                  src={marianaPhoto}
                  alt="Mariana Silva, profesora cristiana"
                  className="h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-pink-200 sm:h-40 sm:w-40"
                />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-foreground">Marina López</h3>
              <p className="mt-1 font-semibold text-primary">Profesora cristiana</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Posgrado en neurociencia, educación y desarrollo infantil — Universidad de Barcelona
              </p>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Soy apasionada por la educación cristiana infantil y dedicada a crear
                herramientas que acercan a los niños a Dios de forma ligera, lúdica e
                inolvidable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionTitle>
              Mira lo que las <br className="sm:hidden" />
              <span className="highlight-pink text-primary"> Mamás </span> están diciendo
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-border/60">
                  <Stars />
                  <p className="mt-4 flex-1 text-sm text-foreground/90">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-pink-band px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle>
              DÚVIDAS <span className="highlight-pink text-primary">FRECUENTES</span>
            </SectionTitle>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <Faq q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GARANTIA ─── */}
      <section className="px-5 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-primary/40 bg-white p-8 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              GARANTÍA DE <span className="highlight-green text-green-600">RIESGO</span>
              <br />
              <span className="text-green-600">CERO</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Si no te encanta el material, te devolvemos el 100% del valor en hasta 7 días.
              Simple y justo.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold">
              <span className="rounded-full bg-gray-50 px-4 py-2 text-foreground ring-1 ring-border">
                🔒 Pago 100% seguro
              </span>
              <span className="rounded-full bg-gray-50 px-4 py-2 text-foreground ring-1 ring-border">
                📩 Acceso inmediato por email
              </span>
              <span className="rounded-full bg-gray-50 px-4 py-2 text-foreground ring-1 ring-border">
                💛 Garantía de 7 días
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="section-pink-band px-5 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              ¡EMPIEZA <span className="highlight-pink text-primary">HOY MISMO!</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              En minutos estarás creando con tu hijo el momento más especial del día.
              Haz clic abajo y planta fe en su corazón:
            </p>
            <div className="mt-8">
              <CtaButton size="xl">
                <Sparkles className="h-5 w-5" /> GARANTIZAR MI KIT DE ORACIÓN
              </CtaButton>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              💛 Acceso inmediato · Garantía de 7 días
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-muted-foreground">
        © 2026 Tarrito de Oración · Todos los derechos reservados
      </footer>
    </main>
  );
}
