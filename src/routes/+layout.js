export const prerender = true;

import { dictionary } from 'svelte-i18n';
import roGlobal from '../i18n/ro.json';
import enGlobal from '../i18n/en.json';

export function _setDictionary(ro, en) {
	dictionary.set({ ro: { ...roGlobal, ...ro }, en: { ...enGlobal, ...en } });
}
