import { progressStyleGenerator } from 'globals/utils'
import { CHART_MIN_HEIGHT } from 'globals/constants'

export const PROGRESS_SIZE = 36
export const outerStyleInline = { position: 'relative' }
export const outerStyleStandalone = {
  ...outerStyleInline,
  minHeight: CHART_MIN_HEIGHT
}
export const progressStyle = progressStyleGenerator(PROGRESS_SIZE)
