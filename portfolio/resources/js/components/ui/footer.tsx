import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface FooterProps {
    logo: ReactNode;
    brandName: string;
    socialLinks: Array<{ icon: ReactNode; href: string; label: string }>;
    mainLinks: Array<{ href: string; label: string }>;
    legalLinks: Array<{ href: string; label: string }>;
    copyright: { text: string; license?: string };
}

export function Footer({ logo, brandName, socialLinks, mainLinks, legalLinks, copyright }: FooterProps) {
    return (
        <footer id="contact" className="scroll-mt-24 bg-[#07152e] px-5 pt-16 pb-28 text-white sm:px-8 lg:px-12 lg:pt-20 lg:pb-28">
            <div className="mx-auto max-w-[1500px]">
                <div className="items-start justify-between md:flex">
                    <a href="#top" className="flex items-center gap-3" aria-label={brandName}>
                        {logo}
                        <span className="text-xl font-bold tracking-[-0.04em]">{brandName}</span>
                    </a>
                    <ul className="mt-6 flex list-none space-x-3 md:mt-0">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <Button variant="secondary" size="icon" className="rounded-full" asChild>
                                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={link.label}>
                                        {link.icon}
                                    </a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 border-t border-white/15 pt-7 lg:grid lg:grid-cols-10">
                    <nav className="lg:col-[4/11]">
                        <ul className="-mx-2 -my-1 flex list-none flex-wrap lg:justify-end">
                            {mainLinks.map((link) => (
                                <li key={link.label} className="mx-2 my-1 shrink-0">
                                    <a href={link.href} className="text-sm text-white/80 underline-offset-4 transition hover:text-white hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-6 lg:col-[4/11] lg:mt-3">
                        <ul className="-mx-3 -my-1 flex list-none flex-wrap lg:justify-end">
                            {legalLinks.map((link) => (
                                <li key={link.label} className="mx-3 my-1 shrink-0">
                                    <a href={link.href} className="text-sm text-white/45 underline-offset-4 hover:text-white hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 text-sm leading-6 text-white/45 lg:col-[1/4] lg:row-[1/3] lg:mt-0">
                        <div>{copyright.text}</div>
                        {copyright.license && <div>{copyright.license}</div>}
                    </div>
                </div>
            </div>
        </footer>
    );
}
