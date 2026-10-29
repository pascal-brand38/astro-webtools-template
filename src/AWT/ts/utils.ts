// Copyright (c) Pascal Brand
// MIT License
// part of AWT (astro-webtools-template)
//
// Utilities

import type { Config } from '@AWT/ts/types.ts'
import configUntyped from '@src/config/config.json' with { type: 'json' }

export function getConfig(): Config {
  const config: Config = configUntyped as Config
  return config
}

export function getConfigCustom(): any | false {
  const config: Config = getConfig()
  if (config.custom) {
    return config.custom
  }
  return false
}
