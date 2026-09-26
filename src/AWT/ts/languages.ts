// Copyright (c) Pascal Brand
// MIT License
// part of AWT (astro-webtools-template)

import type { Config, LanguageType } from '@AWT/ts/types.ts';
import configUntyped from '@src/config/config.json' with { type: 'json' };
const config: Config = configUntyped as Config;

const languages: LanguageType = config.languages;

type LangType = typeof languages.langs[number];

/** calling langFromAstroUrlPathname(Astro.url.pathname)
 * returns the language of the current page (fr,...) as provided
 * in config.languages
 */
function langFromAstroUrlPathname(pathname: string): LangType {
  if (pathname === '/') {
    return languages.langs[0]; // default language
  }

  switch (languages.urlLanguageAlgorithm) {
    case '-lang.html':
      for (const lang of languages.langs) {
        if (pathname.endsWith(`-${lang}.html`)) {
          return lang;
        }
      }
      break;
  }

  return languages.langs[0]; // default language
}

/** calling astroUrlPathnameToTranslatedPath(Astro.url.pathname, 'fr')
 * returns the url of the corresponding page in french.
 * In case Astro.url.pathname, the same pathname is returned
 */
function astroUrlPathnameToTranslatedPath(pathname: string, lang: LangType) {
  const originalLang = langFromAstroUrlPathname(pathname)
  if (originalLang === lang) {
    return pathname;
  }

  if (pathname === '/') {
    switch (languages.urlLanguageAlgorithm) {
      case '-lang.html':
        return `index-${lang}.html`
    }
  }

  switch (languages.urlLanguageAlgorithm) {
    case '-lang.html':
      const regex = (originalLang === languages.langs[0]) ? /\.html$/ : /\-[a-z][a-z]\.html$/
      const suffix = (lang === languages.langs[0]) ? '.html' : `-${lang}.html`
      const translatedPath = pathname.replace(regex, suffix)
      if (translatedPath === '/index.html') {
        return '/'
      } else {
        return translatedPath
      }
  }
}

export {
  langFromAstroUrlPathname,
  astroUrlPathnameToTranslatedPath,
}
export type {
  LangType,
}