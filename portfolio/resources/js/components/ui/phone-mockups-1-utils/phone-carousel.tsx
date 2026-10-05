import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface ImageItem {
    src: string;
    alt: string;
}

interface PhoneCarouselProps {
    images: ImageItem[];
    activeIndex?: number;
    onActiveChange?: (index: number) => void;
}

export function PhoneCarousel({ images, activeIndex, onActiveChange }: PhoneCarouselProps) {
    const [internalActive, setInternalActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const active = activeIndex ?? internalActive;

    const move = (step: number) => {
        const next = (active + step + images.length) % images.length;
        setDirection(step);
        setInternalActive(next);
        onActiveChange?.(next);
    };

    if (!images.length) return null;

    const previous = (active - 1 + images.length) % images.length;
    const next = (active + 1) % images.length;

    const Phone = ({ item, position }: { item: ImageItem; position: 'left' | 'center' | 'right' }) => (
        <div
            className={position === 'center'
                ? 'relative z-20 w-[230px] overflow-hidden rounded-[2.8rem] border-[8px] border-[#202328] bg-[#202328] shadow-[0_35px_70px_rgba(6,22,45,.28)] sm:w-[270px]'
                : `absolute top-12 z-10 hidden w-[205px] overflow-hidden rounded-[2.5rem] border-[7px] border-[#45484d] bg-[#45484d] opacity-75 shadow-2xl md:block ${position === 'left' ? 'left-[2%] -rotate-[11deg]' : 'right-[2%] rotate-[11deg]'}`}
        >
            <div className="absolute top-2 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#202328]" />
            <div className="aspect-[9/19] overflow-hidden rounded-[2.15rem] bg-white">
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover object-top" />
            </div>
        </div>
    );

    return (
        <div className="flex w-full flex-col items-center gap-7">
            <div className="relative flex min-h-[520px] w-full max-w-[720px] items-center justify-center sm:min-h-[590px]">
                {images.length > 1 ? <Phone item={images[previous]} position="left" /> : null}
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={images[active].src}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 45, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction * -45, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Phone item={images[active]} position="center" />
                    </motion.div>
                </AnimatePresence>
                {images.length > 2 ? <Phone item={images[next]} position="right" /> : null}
            </div>

            <div className="flex items-center gap-4">
                <button onClick={() => move(-1)} aria-label="Projet précédent" className="rounded-full border border-[#07152e]/20 p-3 transition hover:bg-[#07152e] hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="min-w-14 text-center text-xs font-semibold tabular-nums text-[#07152e]/60">
                    {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
                <button onClick={() => move(1)} aria-label="Projet suivant" className="rounded-full border border-[#07152e]/20 p-3 transition hover:bg-[#07152e] hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
