import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../resources/js/pages/welcome.tsx', import.meta.url), 'utf8');

test('profile section uses the approved simple editorial layout', () => {
    assert.match(source, /data-profile-layout="simple-editorial"/);
    assert.match(source, />À propos</);
    assert.match(source, /React · Laravel · TypeScript/);
    assert.doesNotMatch(source, /disciplines réunies/);
});
