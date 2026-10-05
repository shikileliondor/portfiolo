import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../resources/js/pages/welcome.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../resources/css/app.css', import.meta.url), 'utf8');
const carousel = readFileSync(new URL('../resources/js/components/ui/phone-mockups-1-utils/phone-carousel.tsx', import.meta.url), 'utf8');

test('final polish includes accessibility and image performance safeguards', () => {
    assert.match(page, /<MotionConfig reducedMotion="user">/);
    assert.match(styles, /:focus-visible/);
    assert.match(styles, /prefers-reduced-motion: reduce/);
    assert.match(page, /loading="lazy"/);
    assert.match(carousel, /loading="lazy"/);
    assert.match(carousel, /decoding="async"/);
});
