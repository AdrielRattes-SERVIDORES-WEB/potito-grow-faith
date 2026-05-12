import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, BookHeart, Printer, Users, Check, Shield, Mail,
  Infinity as InfinityIcon, ChevronDown, Star, Gift, Heart, GraduationCap,
} from "lucide-react";
import potitoMockup from "@/assets/potito-mockup.png";
import heroPrayer from "@/assets/hero-prayer.jpg";
import bonusDiario from "@/assets/bonus-diario.png";
import bonusVersiculos from "@/assets/bonus-versiculos.png";
import bonusGuia from "@/assets/bonus-guia.png";
import bonusDesenhos from "@/assets/bonus-desenhos.png";
import bonusPlanner from "@/assets/bonus-planner.png";
import bonusesAll from "@/assets/bonuses-all.png";
import marianaPhoto from "@/assets/mariana.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Potito de Oración — 50 Oraciones para Plantar Fe en tu Hijo" },
      {
        name: "description",
        content:
          "Kit digital con 50 oraciones infantiles ilustradas, rótulos y molde del frasquito. Imprime, recorta y crea hoy mismo el momento favorito del día.",
      },
      { property: "og:title", content: "Potito de Oración — Kit Digital" },
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
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Pacifico&display=swap",
      },
    ],
  }),
});

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

function CtaButton({
  children,
  variant = "primary",
  size = "lg",
}: {
  children: React.ReactNode;
  variant?: "primary" | "honey";
  size?: "lg" | "xl";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const sizes = {
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg sm:text-xl",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_12px_30px_-10px_oklch(0.81_0.12_5/0.6)] hover:shadow-[0_18px_45px_-10px_oklch(0.81_0.12_5/0.75)] hover:bg-primary/95",
    honey:
      "bg-honey text-honey-foreground shadow-[0_14px_35px_-10px_oklch(0.87_0.14_85/0.7)] hover:shadow-[0_20px_50px_-10px_oklch(0.87_0.14_85/0.85)] hover:bg-honey/95",
  };
  return (
    <a href="#checkout" className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </a>
  );
}

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
    text: "Mi hija de 5 años pide ella sola sacar su oración del potito cada noche. ¡Nunca pensé que sería tan fácil!",
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

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card/80 backdrop-blur transition-all hover:shadow-soft">
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

function Landing() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-5 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-bold text-foreground shadow-soft ring-1 ring-border backdrop-blur">
                <Check className="h-4 w-4 text-primary" /> +1.000 mamás ya lo usan
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                <span className="text-foreground">¡50 Oraciones Listas para </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-honey bg-clip-text text-transparent">
                  Plantar Fe
                </span>
                <span className="text-foreground"> en el Corazón de tu Hijo!</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Kit digital completo: oraciones ilustradas + rótulos + molde del frasquito.
                Imprime, recorta y crea este momento especial <strong className="text-foreground">HOY MISMO</strong>.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <CtaButton size="xl">
                  <Sparkles className="h-5 w-5" /> Quiero mi Potito de Oración
                </CtaButton>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                💛 Acceso inmediato · Pago único · Garantía 7 días
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/30 via-secondary/25 to-honey/30 blur-3xl" />
              <div className="relative float">
                <img
                  src={heroPrayer}
                  alt="Mamá e hijo orando juntos con su Potito de Oración"
                  width={1024}
                  height={1408}
                  className="relative w-full rounded-[2rem] drop-shadow-[0_30px_50px_rgba(192,150,200,0.45)]"
                />
              </div>
              <span className="absolute -top-2 right-4 rounded-2xl bg-honey px-4 py-2 font-display text-xl text-honey-foreground shadow-soft -rotate-6">
                ✨ Digital
              </span>
              <span className="absolute -bottom-2 left-2 rounded-2xl bg-secondary px-4 py-2 font-display text-xl text-secondary-foreground shadow-soft rotate-6">
                🙏 50 oraciones
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PODER */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
              El Poder Está en el Momento
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Un ritual sencillo que transforma la noche en familia.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <div className="group h-full rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-soft">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">{b.title}</h3>
                  <p className="mt-3 text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECIBIR */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
              ¿Qué Vas a Recibir? 🌸
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Producto principal + 5 bonos exclusivos para empezar hoy.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl p-7 ring-1 transition-all hover:-translate-y-1 ${
                    it.main
                      ? "bg-gradient-to-br from-primary/15 via-card to-secondary/15 ring-primary/40 shadow-glow md:col-span-2"
                      : "bg-card ring-border shadow-soft hover:shadow-glow"
                  }`}
                >
                  <div className="flex flex-col items-start gap-5 sm:flex-row">
                    <div
                      className={`relative shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/20 shadow-soft ${
                        it.main ? "w-full sm:w-56" : "w-full sm:w-40"
                      }`}
                    >
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                          it.main
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/40 text-foreground"
                        }`}
                      >
                        {it.tag}
                      </span>
                      <h3 className="mt-3 text-xl font-extrabold text-foreground">{it.title}</h3>
                      <p className="mt-2 text-muted-foreground">{it.desc}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-foreground/5 px-3 py-1 text-sm font-bold text-foreground/70 line-through">
                          {it.value}
                        </span>
                        {!it.main && (
                          <span className="rounded-full bg-honey px-3 py-1 text-sm font-extrabold text-honey-foreground">
                            HOY GRATIS
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-honey/25 via-card to-primary/15 p-6 shadow-soft ring-1 ring-border sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <img
                  src={bonusesAll}
                  alt="Todos los bonos exclusivos del Potito de Oración"
                  className="mx-auto w-full max-w-md rounded-2xl shadow-soft"
                />
                <div>
                  <span className="inline-block rounded-full bg-honey px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-honey-foreground">
                    Bonos exclusivos incluidos
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                    Todo esto va contigo, hoy GRATIS
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Más de 5 materiales extras pensados para que la fe crezca en familia, día a día.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUTORA */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid items-center gap-10 rounded-[2.5rem] bg-card p-8 shadow-soft ring-1 ring-border sm:p-12 md:grid-cols-[auto_1fr]">
              <div className="relative mx-auto">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 to-honey/40 blur-2xl" />
                <img
                  src={marianaPhoto}
                  alt="Mariana Silva, profesora cristiana"
                  className="relative h-48 w-48 rounded-full object-cover shadow-glow ring-4 ring-card sm:h-56 sm:w-56"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                  <GraduationCap className="h-4 w-4" /> Quién está detrás
                </span>
                <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                  Mariana Silva
                </h2>
                <p className="mt-1 font-bold text-primary">Profesora cristiana</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Posgrado en neurociencia, educación y desarrollo infantil — PUCRS
                </p>
                <p className="mt-5 text-foreground/90">
                  Soy apasionada por la educación cristiana infantil y dedicada a crear
                  herramientas que acercan a los niños a Dios de forma ligera, lúdica e
                  inolvidable.
                </p>
                <p className="mt-3 text-foreground/90">
                  Con el <strong>Potito de Oración</strong> ya he ayudado a miles de familias a
                  transformar el momento de la oración en una experiencia de alegría y conexión
                  profunda entre padres, hijos y el Creador. 💛
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-card to-primary/20 p-8 shadow-glow ring-1 ring-border sm:p-14">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
              Este Kit es para Ti:
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {forYou.map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="flex items-start gap-3 rounded-2xl bg-card/80 p-5 ring-1 ring-border backdrop-blur">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-foreground">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <CtaButton size="xl">
              <Heart className="h-5 w-5" /> Quiero este kit ahora
            </CtaButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
              Lo Que las Mamás Están Diciendo 💛
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
                  <Stars />
                  <p className="mt-4 flex-1 text-foreground/90">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-lg text-primary-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-extrabold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESUMEN + PRECIO */}
      <section id="checkout" className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-[2.5rem] bg-card p-8 shadow-glow ring-1 ring-primary/30 sm:p-12">
              <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
                Recapitulando Todo lo que Vas a Recibir:
              </h2>
              <ul className="mt-8 space-y-3">
                {items.map((it) => (
                  <li
                    key={it.title}
                    className="flex items-start justify-between gap-4 rounded-2xl bg-muted/60 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-semibold text-foreground">{it.title}</span>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-muted-foreground">
                      {it.value.replace("VALORADO EN ", "")}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-3xl bg-gradient-to-br from-primary/15 to-honey/20 p-6 text-center ring-1 ring-primary/30">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Total valorado en
                </p>
                <p className="font-display text-2xl text-foreground/70 line-through">$69.40</p>
                <p className="mt-3 text-base text-foreground">
                  Hoy tendrás acceso completo a TODO esto por solo
                </p>
                <p className="mt-2 font-display text-6xl text-primary sm:text-7xl">$4.99</p>
                <p className="text-sm text-muted-foreground">
                  USD · Puedes pagar en tu moneda local
                </p>
                <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-bold text-foreground shadow-soft ring-1 ring-border">
                  <Shield className="h-4 w-4 text-primary" /> Garantía 7 días
                  <span className="text-muted-foreground">·</span>
                  <Mail className="h-4 w-4 text-primary" /> Acceso inmediato
                  <span className="text-muted-foreground">·</span>
                  <InfinityIcon className="h-4 w-4 text-primary" /> Para siempre
                </div>
                <div className="mt-7">
                  <CtaButton size="xl">
                    <Sparkles className="h-5 w-5" /> Quiero mi acceso ahora
                  </CtaButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="px-5 py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-gradient-to-br from-honey/30 via-card to-primary/15 p-8 text-center shadow-soft ring-1 ring-border sm:p-14">
            <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-glow">
              <Shield className="h-10 w-10" />
            </div>
            <h2 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
              ¡Pruébalo sin Riesgo!
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Si no te encanta el material, te devolvemos el 100% del valor en hasta 7 días.
              Simple y justo.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-bold">
              <span className="rounded-full bg-card px-4 py-2 text-foreground ring-1 ring-border">
                🔒 Pago 100% seguro
              </span>
              <span className="rounded-full bg-card px-4 py-2 text-foreground ring-1 ring-border">
                📩 Acceso inmediato por email
              </span>
              <span className="rounded-full bg-card px-4 py-2 text-foreground ring-1 ring-border">
                💛 Garantía de 7 días
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
              Preguntas Frecuentes
            </h2>
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

      {/* CTA FINAL */}
      <section className="px-5 py-20">
        <Reveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-primary to-secondary p-10 text-center text-primary-foreground shadow-glow sm:p-16">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              ¡Empieza Hoy Mismo!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-95">
              En minutos estarás creando con tu hijo el momento más especial del día.
              Haz clic abajo y planta fe en su corazón:
            </p>
            <div className="mt-10">
              <CtaButton variant="honey" size="xl">
                <Sparkles className="h-5 w-5" /> Garantizar mi kit de oración
              </CtaButton>
            </div>
            <p className="mt-6 text-sm opacity-90">
              💛 Acceso inmediato · Garantía de 7 días
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 py-10 text-center text-sm text-muted-foreground">
        © 2025 Potito de Oración · Todos los derechos reservados
      </footer>
    </main>
  );
}
