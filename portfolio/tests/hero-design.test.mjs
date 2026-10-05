import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../resources/js/pages/welcome.tsx', import.meta.url), 'utf8');

test('hero uses the approved compact two-direction composition', () => {
    assert.match(source, /data-hero-layout="compact-dynamic"/);
    assert.match(source, /initial=\{\{ opacity: 0, x: -50 \}\}/);
    assert.match(source, /initial=\{\{ opacity: 0, x: 50 \}\}/);
    assert.match(source, /text-\[clamp\(2\.25rem,4vw,4rem\)\]/);
    assert.match(source, /data-hero-ticker="forward"/);
    assert.match(source, /data-hero-ticker="reverse"/);
    assert.doesNotMatch(source, /BEYAM Studio/);
});
