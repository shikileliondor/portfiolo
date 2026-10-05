import { ImageItem, PhoneCarousel } from '@/components/ui/phone-mockups-1-utils/phone-carousel';

const defaultImages: ImageItem[] = [
    { src: '/images/projects/teamflow-mobile.png', alt: 'Interface mobile TeamFlow' },
    { src: '/images/projects/pulse-finance-mobile.png', alt: 'Interface mobile Pulse Finance' },
    { src: '/images/projects/learnloop-mobile.png', alt: 'Interface mobile LearnLoop' },
];

export default function PhoneMockupBasic({
    images = defaultImages,
    activeIndex,
    onActiveChange,
}: {
    images?: ImageItem[];
    activeIndex?: number;
    onActiveChange?: (index: number) => void;
}) {
    return <PhoneCarousel images={images} activeIndex={activeIndex} onActiveChange={onActiveChange} />;
}
