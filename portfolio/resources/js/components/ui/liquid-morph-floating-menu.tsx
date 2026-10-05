import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

interface MenuItem {
    label: string;
    onClick?: () => void;
}

interface FloatingMenuProps {
    items?: MenuItem[];
}

function MenuButton({ label, onClick, isOpen, index }: MenuItem & { isOpen: boolean; index: number }) {
    const [hovered, setHovered] = useState(false);
    const animatingRef = useRef(false);
    const pendingLeaveRef = useRef(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const characters = label.split('');
    const lockDuration = 30 * characters.length + 300;

    useEffect(() => () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);

    const handleEnter = useCallback(() => {
        pendingLeaveRef.current = false;
        if (hovered) return;
        setHovered(true);
        animatingRef.current = true;
        timeoutRef.current = setTimeout(() => {
            animatingRef.current = false;
            if (pendingLeaveRef.current) {
                pendingLeaveRef.current = false;
                setHovered(false);
            }
        }, lockDuration);
    }, [hovered, lockDuration]);

    const handleLeave = useCallback(() => {
        if (animatingRef.current) pendingLeaveRef.current = true;
        else setHovered(false);
    }, []);

    return (
        <motion.button
            type="button"
            onClick={onClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="overflow-hidden text-[21px] font-semibold uppercase leading-none text-[#f7f1ed]"
            style={{ letterSpacing: '-0.03em', height: '1em' }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.4, delay: isOpen ? 0.28 + 0.06 * index : 0, ease }}
        >
            <span className="flex justify-center">
                {characters.map((character, characterIndex) => (
                    <span key={`${character}-${characterIndex}`} className="inline-block overflow-hidden" style={{ height: '1em' }}>
                        <span
                            className="flex flex-col"
                            style={{
                                transitionProperty: 'transform',
                                transitionDuration: hovered ? '800ms' : '0ms',
                                transitionDelay: hovered ? `${30 * characterIndex}ms` : '0ms',
                                transform: hovered ? 'translateY(-50%)' : 'translateY(0%)',
                                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        >
                            <span className="block" style={{ height: '1em', lineHeight: '1em' }}>{character === ' ' ? '\u00A0' : character}</span>
                            <span className="block text-[#65a7ff]" style={{ height: '1em', lineHeight: '1em' }} aria-hidden>{character === ' ' ? '\u00A0' : character}</span>
                        </span>
                    </span>
                ))}
            </span>
        </motion.button>
    );
}

export default function LiquidMorphFloatingMenu({ items = [] }: FloatingMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        const closeOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        const closeEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('mousedown', closeOutside);
        document.addEventListener('keydown', closeEscape);
        return () => {
            document.removeEventListener('mousedown', closeOutside);
            document.removeEventListener('keydown', closeEscape);
        };
    }, [isOpen]);

    return (
        <motion.div
            ref={containerRef}
            className="fixed bottom-5 left-1/2 z-[100] sm:bottom-8"
            style={{ x: '-50%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
        >
            <motion.div
                className="relative flex max-h-[calc(100dvh-2.5rem)] flex-col overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,.3)]"
                onClick={() => { if (!isOpen) setIsOpen(true); }}
                animate={{ width: isOpen ? 270 : 148, height: isOpen ? 326 : 48, borderRadius: isOpen ? 30 : 72 }}
                whileHover={isOpen ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.7, ease, height: { duration: isOpen ? 0.7 : 0.2 } }}
            >
                <motion.div
                    className="absolute inset-0 border border-[#dac84b] bg-[#f1dc55]"
                    style={{ borderRadius: 'inherit' }}
                />
                <motion.div
                    className="absolute left-1/2 h-[200%] w-[200%] rounded-full bg-[#07152e]"
                    style={{ x: '-50%' }}
                    animate={{ bottom: isOpen ? '-20%' : '-205%' }}
                    transition={{ duration: 0.75, ease, delay: isOpen ? 0.08 : 0 }}
                />

                <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 overflow-hidden" style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
                    {items.map((item, index) => (
                        <MenuButton
                            key={item.label}
                            {...item}
                            index={index}
                            isOpen={isOpen}
                            onClick={() => {
                                item.onClick?.();
                                setIsOpen(false);
                            }}
                        />
                    ))}
                </div>

                <motion.button
                    type="button"
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isOpen}
                    className="relative z-10 flex h-12 w-full shrink-0 cursor-pointer items-center justify-between px-5"
                    onClick={(event) => {
                        event.stopPropagation();
                        setIsOpen((open) => !open);
                    }}
                    animate={{ color: isOpen ? '#f7f1ed' : '#242424' }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-sm font-semibold">Menu</span>
                    <span className="relative flex h-6 w-6 items-center justify-center">
                        <motion.span className="absolute block h-0.5 w-[18px] rounded-full" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -3, backgroundColor: isOpen ? '#f7f1ed' : '#242424' }} transition={{ duration: 0.4, ease }} />
                        <motion.span className="absolute block h-0.5 w-[18px] rounded-full" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 3, backgroundColor: isOpen ? '#f7f1ed' : '#242424' }} transition={{ duration: 0.4, ease }} />
                    </span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
