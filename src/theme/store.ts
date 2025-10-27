import type { ThemePref } from './pref'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { themePrefInitial } from './pref'

interface PrefState extends ThemePref {}

const persisted = persist<PrefState>(() => ({
  ...themePrefInitial,
}), {
  name: 'pref',
  version: 2,
})

export const usePref = create<PrefState>()(persisted)
