import type { Extractor } from '../types'
import { isValidSelector } from '../utils'

export const splitCode = (code: string) => code.split(/[\s'"`;>=]+/g).filter(isValidSelector)

// 默认的代码提取器
export const extractorSplit: Extractor = {
  name: 'split',
  order: 0,
  extract({ code }) {
    return new Set(splitCode(code))
  },
}
