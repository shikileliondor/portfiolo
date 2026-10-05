import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('../resources/js/pages/welcome.tsx', import.meta.url), 'utf8');
const componentUrl = new URL('../resources/js/components/ui/liquid-morph-floating-menu.tsx', import.meta.url);

test('portfolio uses the liquid navigation instead of the icon dock', () => {
    assert.equal(existsSync(componentUrl), true);
    assert.match(page, /<LiquidMorphFloatingMenu/);
    assert.doesNotMatch(page, /<FloatingDock/);
    for (const label of ['Accueil', 'À propos', 'Projets', 'Technologies', 'Contact']) {
        assert.match(page, new RegExp(`label: '${label}'`));
    }
});
