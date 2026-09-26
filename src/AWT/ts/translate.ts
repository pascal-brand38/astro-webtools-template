// Copyright (c) Pascal Brand
// MIT License
// part of AWT (astro-webtools-template)

import translation from '@src/config/translation.json' with { type: 'json' };
import type { LangType } from '@AWT/ts/languages'

function translate(textInDefaultLanguage: string, lang: LangType) {
  const result = translation[textInDefaultLanguage as keyof typeof translation]
  if (!result) {
    throw `Cannot translate: ${textInDefaultLanguage}`
  }

  return result[lang as keyof typeof result] || textInDefaultLanguage
}

export {
  translate
}
