import { Head } from '@inertiajs/react';
import AmourSunrisePreloader from '@/components/ui/amour-sunrise-preloader';
import { Footer } from '@/components/ui/footer';
import IntegrationCardDemo from '@/components/ui/integration-card';
import LiquidMorphFloatingMenu from '@/components/ui/liquid-morph-floating-menu';
import PhoneMockupBasic from '@/components/ui/phone-mockups-1';
import { ArrowUpRight, Code2, Download, Mail } from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { useState } from 'react';

export default function Welcome() {
    const [activeProject, setActiveProject] = useState(0);
    const scrollTo = (selector: string) => document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    const navigation = [
        { label: 'Accueil', onClick: () => scrollTo('#top') },
        { label: 'À propos', onClick: () => scrollTo('#services') },
        { label: 'Projets', onClick: () => scrollTo('#projects') },
        { label: 'Technologies', onClick: () => scrollTo('#ecosystem') },
        { label: 'Contact', onClick: () => scrollTo('#contact') },
    ];

    const projects = [
        {
            name: 'IvoireQuiz',
            type: 'Culture ivoirienne',
            role: 'Conception · Développement mobile',
            stack: ['Mobile', 'UI/UX', 'API'],
            problem: 'Faire découvrir la culture et l’histoire de la Côte d’Ivoire à travers une expérience ludique, claire et accessible.',
            image: '/images/projects/ivoire-quiz-mobile.jpeg',
        },
        {
            name: 'Oriente Moi',
            type: 'Orientation scolaire',
            role: 'Conception · Développement mobile',
            stack: ['Mobile', 'Laravel', 'UI/UX'],
            problem: 'Aider les jeunes à trouver une filière, un métier et une école adaptés à leur projet en Côte d’Ivoire.',
            image: '/images/projects/oriente-moi-mobile.jpeg',
        },
        {
            name: 'BEYAM Budget',
            type: 'Gestion budgétaire',
            role: 'Conception · Développement mobile',
            stack: ['Flutter', 'Laravel', 'UI/UX'],
            problem: 'Permettre de suivre ses revenus, ses dépenses et son budget mensuel depuis une interface simple et immédiatement compréhensible.',
            image: '/images/projects/beyam-budget-mobile.jpeg',
        },
    ];

    return (
        <>
            <Head title="BEYAM — Portfolio" />
            <MotionConfig reducedMotion="user">
              <AmourSunrisePreloader
                word="BEYAM"
                caption="PORTFOLIO — CRÉATIF"
                height="100dvh"
                durationMs={3200}
            >
                <main
                    id="top"
                    data-responsive-polish="compact"
                    className="relative min-h-screen scroll-smooth overflow-hidden bg-white text-[#111111] selection:bg-[#ff4d22] selection:text-white"
                >
                    <motion.header
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="relative z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12"
                    >
                        <a href="#top" className="text-lg font-semibold tracking-[-0.04em]">
                            BEYAM<span className="text-[#ff4d22]">.</span>
                        </a>
                        <div className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-black/50 sm:flex sm:text-xs">
                            <span className="h-2 w-2 rounded-full bg-[#b7ff5a] shadow-[0_0_12px_#b7ff5a]" />
                            Disponible
                        </div>
                    </motion.header>

                    <section className="relative z-10 bg-white px-3 pt-2 pb-10 sm:px-6 sm:py-10 lg:px-8">
                        <div
                            data-hero-layout="compact-dynamic"
                            className="relative mx-auto min-h-[610px] max-w-[1500px] overflow-hidden rounded-[2rem] bg-[#06162d] text-white sm:min-h-[620px] sm:rounded-[3.5rem]"
                        >
                            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(101,167,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(101,167,255,.09)_1px,transparent_1px)] [background-size:48px_48px]" />
                            <motion.div
                                className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#357ce8]/25 blur-[90px]"
                                animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
                                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute -bottom-40 left-[32%] h-[360px] w-[360px] rounded-full bg-[#65a7ff]/15 blur-[100px]"
                                animate={{ x: [0, 45, 0], y: [0, -20, 0] }}
                                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            <div className="relative z-10 grid min-h-[610px] items-center gap-10 px-5 py-9 sm:min-h-[620px] sm:px-12 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-14">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative z-20 max-w-xl"
                                >
                                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65 backdrop-blur-md sm:mb-7 sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff5a] shadow-[0_0_10px_#b7ff5a]" />
                                        Disponible pour de nouveaux projets
                                    </div>
                                    <h1 className="text-[clamp(2.25rem,4vw,4rem)] font-black uppercase leading-[0.94] tracking-[-0.055em]">
                                        Yann-Morel
                                        <span className="ml-2 text-[#65a7ff] sm:ml-3">Effobi</span>
                                    </h1>
                                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-lg">
                                        Je conçois des expériences web et mobiles utiles, rapides et agréables à utiliser.
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
                                        <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#06162d] transition duration-300 hover:-translate-y-1 hover:bg-[#65a7ff] hover:shadow-[0_14px_35px_rgba(101,167,255,.3)]">
                                            Voir mes projets
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                        <a href="mailto:morelyann10@gmail.com" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-5 py-3.5 text-sm font-bold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                                            Me contacter
                                        </a>
                                        <a href="/cv-yann-morel-effobi.pdf" download="CV-Yann-Morel-Effobi.pdf" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#65a7ff]/45 bg-[#65a7ff]/10 px-5 py-3.5 text-sm font-bold text-[#9fc8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#65a7ff] hover:text-[#06162d] sm:col-auto">
                                            <Download className="h-4 w-4" />
                                            Télécharger mon CV
                                        </a>
                                    </div>

                                    <div className="mt-7 flex gap-8 border-t border-white/10 pt-5 text-[11px] sm:mt-10 sm:gap-14 sm:pt-6 sm:text-xs">
                                        <div><span className="block uppercase tracking-[0.18em] text-white/35">Basé à</span><strong className="mt-2 block text-white/85">Abidjan, CI</strong></div>
                                        <div><span className="block uppercase tracking-[0.18em] text-white/35">Spécialité</span><strong className="mt-2 block text-white/85">Web & Mobile</strong></div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative hidden min-h-[420px] items-center justify-center overflow-hidden lg:flex"
                                >
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-6 space-y-5">
                                        <div data-hero-ticker="forward" className="relative overflow-hidden border-y border-[#65a7ff]/25 bg-[#65a7ff] py-5 text-[#06162d] shadow-[0_20px_60px_rgba(53,124,232,.25)]">
                                            <motion.div className="flex w-max whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
                                                {[0, 1].map((copy) => (
                                                    <div key={copy} className="flex items-center gap-7 pr-7 text-sm font-black uppercase tracking-[0.2em]">
                                                        {['Web design', 'Mobile', 'Laravel', 'React', 'UI/UX'].map((label) => (
                                                            <span key={`${copy}-${label}`} className="flex items-center gap-7">{label}<span className="h-1.5 w-1.5 rounded-full bg-[#06162d]" /></span>
                                                        ))}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>

                                        <div data-hero-ticker="reverse" className="relative overflow-hidden border-y border-white/15 bg-white/[0.07] py-4 text-white/70 backdrop-blur-md">
                                            <motion.div className="flex w-max -translate-x-1/2 whitespace-nowrap" animate={{ x: ['-50%', '0%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
                                                {[0, 1].map((copy) => (
                                                    <div key={copy} className="flex items-center gap-7 pr-7 text-xs font-semibold uppercase tracking-[0.22em]">
                                                        {['Créer', 'Développer', 'Simplifier', 'Livrer', 'Évoluer'].map((label) => (
                                                            <span key={`${copy}-${label}`} className="flex items-center gap-7">{label}<span className="text-[#65a7ff]">✦</span></span>
                                                        ))}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>

                                    <motion.div className="absolute top-8 right-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-xl font-black backdrop-blur-md" animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>B.</motion.div>
                                    <motion.div className="absolute bottom-8 left-16 rounded-full border border-white/15 bg-[#06162d]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 backdrop-blur-md" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>Abidjan · Côte d’Ivoire</motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="mx-auto mt-12 flex max-w-[1500px] items-center justify-between px-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/45 sm:hidden">
                            <span>Projets sélectionnés</span><span>2024 — 2026</span>
                        </div>
                    </section>

                    <section
                        id="services"
                        data-profile-layout="simple-editorial"
                        className="relative z-10 scroll-mt-24 bg-white px-5 py-16 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="mx-auto max-w-[1500px] border-t border-black/15 pt-8">
                            <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#357ce8]">À propos</p>
                                    <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                                        Curieux, autonome et attentif aux détails.
                                    </h2>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.1 }} className="lg:border-l lg:border-black/15 lg:pl-16">
                                    <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-black/65 sm:text-xl">
                                        <p>Je développe des interfaces web et mobiles en cherchant toujours le bon équilibre entre simplicité, utilité et qualité visuelle.</p>
                                        <p>J’apprends en construisant. Chaque projet est une occasion de comprendre un besoin, tester une idée et livrer une solution claire.</p>
                                    </div>

                                    <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">Méthode</p>
                                            <p className="mt-3 text-lg font-semibold">Penser · Créer · Affiner</p>
                                            <p className="mt-2 text-sm leading-relaxed text-black/50">Du besoin initial jusqu’au produit final.</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">Compétences</p>
                                            <p className="mt-3 text-lg font-semibold">React · Laravel · TypeScript</p>
                                            <p className="mt-2 text-sm leading-relaxed text-black/50">Tailwind CSS · UI/UX · Motion</p>
                                        </div>
                                    </div>

                                    <a href="mailto:morelyann10@gmail.com" className="mt-10 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold transition hover:text-[#357ce8]">
                                        Travaillons ensemble <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section
                        id="projects"
                        className="relative z-10 scroll-mt-24 bg-[#eeece5] px-5 py-16 text-[#2b2b2b] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="mx-auto grid max-w-[1500px] items-center gap-6 sm:gap-10 lg:min-h-[620px] lg:grid-cols-[0.8fr_1.2fr]">
                            <motion.div
                                key={projects[activeProject].name}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-2xl"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#007ea7]">
                                    Réalisations mobiles · 0{activeProject + 1}
                                </p>
                                <h2 className="mt-8 max-w-[13ch] text-[clamp(2.25rem,4vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                                    Des applications conçues pour des usages réels.
                                </h2>
                                <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/55">
                                    {projects[activeProject].problem}
                                </p>

                                <div className="mt-10 grid gap-6 border-t border-black/15 pt-7 sm:grid-cols-2">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Projet</p>
                                        <p className="mt-2 text-xl font-semibold">{projects[activeProject].name}</p>
                                        <p className="mt-1 text-sm font-medium text-[#007ea7]">{projects[activeProject].type}</p>
                                        <p className="mt-1 text-sm text-black/45">{projects[activeProject].role}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Stack</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {projects[activeProject].stack.map((technology) => (
                                                <span key={technology} className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold">
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={projects[activeProject].image}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#07152e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#357ce8]"
                                >
                                    Voir le projet
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </motion.div>

                            <div className="flex items-center justify-center">
                                <PhoneMockupBasic
                                    images={projects.map((project) => ({
                                        src: project.image,
                                        alt: `Interface mobile ${project.name}`,
                                    }))}
                                    activeIndex={activeProject}
                                    onActiveChange={setActiveProject}
                                />
                            </div>
                        </div>

                        <div className="mx-auto mt-8 max-w-[1500px] border-t border-black/10 pt-10 sm:mt-16 sm:pt-14">
                            <div className="mb-10 max-w-2xl">
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#007ea7]">Réalisations web</p>
                                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Des expériences web utiles.</h3>
                            </div>

                            <div className="grid gap-8 lg:grid-cols-2">
                                {[
                                    {
                                        name: 'IvoirCuisson.ci',
                                        url: 'https://www.ivoircuisson.ci/',
                                        domain: 'ivoircuisson.ci',
                                        image: '/images/projects/ivoircuisson-site.png',
                                        alt: 'Page d’accueil du site IvoirCuisson.ci',
                                        description: 'Un site vitrine et e-commerce ivoirien pensé pour présenter des équipements de cuisson et guider rapidement vers les produits.',
                                        stack: ['Laravel', 'React', 'E-commerce'],
                                    },
                                    {
                                        name: 'Gestion scolaire',
                                        url: '/images/projects/erp-scolaire-dashboard.jpeg',
                                        domain: 'application-scolaire.local',
                                        image: '/images/projects/erp-scolaire-dashboard.jpeg',
                                        alt: 'Tableau de bord de l’application ERP Scolaire CI',
                                        description: 'Un tableau de bord qui centralise les inscriptions, les classes, les paiements et le suivi quotidien d’un établissement.',
                                        stack: ['Laravel', 'React', 'Tailwind CSS'],
                                    },
                                ].map((project, index) => (
                                    <motion.article
                                        key={project.name}
                                        initial={{ opacity: 0, y: 45 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.65, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f8f7f3] shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                                        >
                                            <div className="flex h-10 items-center gap-1.5 border-b border-black/10 px-4">
                                                <span className="h-2 w-2 rounded-full bg-black/20" />
                                                <span className="h-2 w-2 rounded-full bg-black/20" />
                                                <span className="h-2 w-2 rounded-full bg-black/20" />
                                                <span className="mx-auto rounded-full bg-white px-5 py-1 text-[9px] text-black/35">
                                                    {project.domain}
                                                </span>
                                            </div>
                                            <div className="overflow-hidden bg-white">
                                                <img
                                                    src={project.image}
                                                    alt={project.alt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                                                />
                                            </div>
                                        </a>
                                        <div className="px-1 pt-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Application web</p>
                                                    <h4 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{project.name}</h4>
                                                </div>
                                                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${project.name}`} className="rounded-full border border-black/15 p-3 transition hover:bg-[#07152e] hover:text-white">
                                                    <ArrowUpRight className="h-5 w-5" />
                                                </a>
                                            </div>
                                            <p className="mt-4 max-w-xl leading-relaxed text-black/50">{project.description}</p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {project.stack.map((technology) => (
                                                    <span key={technology} className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold">{technology}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>

                            <p className="ml-auto mt-16 max-w-2xl border-t border-black/10 pt-7 text-base leading-relaxed text-black/45 sm:text-lg">
                                D’autres réalisations ne sont pas présentées ici afin de respecter leur confidentialité.
                            </p>
                        </div>
                    </section>

                    <section
                        id="ecosystem"
                        className="relative z-10 scroll-mt-24 overflow-hidden bg-white px-5 py-16 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                            <div className="mx-auto grid max-w-[1500px] items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-2xl lg:sticky lg:top-32"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#357ce8]">
                                    Outils & technologies
                                </p>
                                <h2 className="mt-5 max-w-[11ch] text-[clamp(2.35rem,4.2vw,5rem)] font-semibold leading-[0.93] tracking-[-0.055em]">
                                    Un workflow
                                    <span className="block text-[#357ce8]">connecté.</span>
                                </h2>
                                <p className="mt-8 max-w-lg text-lg leading-relaxed text-black/50">
                                    Chaque outil trouve sa place dans un processus fluide, du premier écran au produit livré.
                                </p>
                                <div className="mt-12 flex gap-10 border-t border-black/10 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
                                    <span>06 outils</span>
                                    <span>01 système</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 70, rotate: 1.5 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                whileHover={{ y: -8, rotate: -0.4 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full max-w-[560px] justify-self-center rounded-[2rem] bg-[#f4f5f6] py-5 shadow-[0_24px_60px_rgba(7,21,46,0.1)] sm:px-4 sm:py-7"
                            >
                                <IntegrationCardDemo />
                            </motion.div>
                        </div>
                    </section>

                    <Footer
                        logo={
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-base font-black text-[#07152e]">
                                B.
                            </span>
                        }
                        brandName="BEYAM"
                        socialLinks={[
                            { icon: <Mail className="h-5 w-5" />, href: 'mailto:morelyann10@gmail.com', label: 'Envoyer un e-mail' },
                            { icon: <FaLinkedinIn className="h-5 w-5" />, href: 'https://www.linkedin.com/in/yann-morel-effobi-brou-5474782a1', label: 'LinkedIn' },
                            { icon: <SiGithub className="h-5 w-5" />, href: 'https://github.com/shikileliondor/shikileliondor', label: 'GitHub' },
                        ]}
                        mainLinks={[
                            { href: '#top', label: 'Accueil' },
                            { href: '#services', label: 'Profil' },
                            { href: '#projects', label: 'Projets' },
                            { href: '#ecosystem', label: 'Technologies' },
                        ]}
                        legalLinks={[]}
                        copyright={{ text: '© 2026 BEYAM', license: 'Conçu et développé à Abidjan.' }}
                    />

                    <nav aria-label="Navigation principale">
                        <LiquidMorphFloatingMenu items={navigation} />
                    </nav>
                </main>
              </AmourSunrisePreloader>
            </MotionConfig>
        </>
    );
}
