// Copyright (c) Pascal Brand
// MIT License
// part of AWT (astro-webtools-template)
//
// Define types used in the AWT project. These types are used for type checking and code completion in TypeScript.

import type { FlagName } from "astro-flag";

export interface LanguageType {
  langs: string[],
  flags: FlagName[],

  urlLanguageAlgorithm?: '-lang.html'
}

export interface NavUrlType {
  [lang: string]: {
    url: string;
    alt: string
  };
}

export type SocialName = 'facebook' | 'youtube'

/** Config of AWT usage
 * It is the object type stored in @src/config/config.json
 */
export interface Config {
  /** sitemap path in the url
   * @example "/sitemap.xml"
   * @default false, meaning no sitemap is used
   */
  sitemapUrl?: string | false;

  /** favicon path in the url
   * @example "/favicon.svg"
   * @default false, meaning no favicon is used
   * @todo favicon type is image/svg+xml, but it can also be a different type.
   *       We should add a faviconType property to specify the type of the favicon, such as .ico ...
   *       The change must be done in \@AWT/layouts/Head.astro to update the hardcoded type in the
   *       type="image/svg+xml" tag.
   */
  faviconUrl?: `${string}.svg` | false,

  languages: LanguageType,

  socials?: {
    name: SocialName,
    href: string,
    color?: string,
    size?: number,
  }[],

  navPages?: NavUrlType[] | false,
}
