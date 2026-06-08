import { create } from 'zustand'
import type { LanguageType, SortType, ThemeType } from '../types/task'

type UiState = {
  theme: ThemeType
  language: LanguageType
  isCreateModalOpen: boolean
  sort: SortType
  search: string
  openCreateModal: () => void
  closeCreateModal: () => void
  setTheme: (theme: ThemeType) => void
  setLanguage: (language: LanguageType) => void
  setSort: (sort: SortType) => void
  setSearch: (search: string) => void
}

function getSavedTheme(): ThemeType {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

function getSavedLanguage(): LanguageType {
  return localStorage.getItem('language') === 'en' ? 'en' : 'ru'
}

export const useUiStore = create<UiState>((set) => ({
  theme: getSavedTheme(),
  language: getSavedLanguage(),
  isCreateModalOpen: false,
  sort: 'new',
  search: '',

  openCreateModal: () => set({ isCreateModalOpen: true }),
  closeCreateModal: () => set({ isCreateModalOpen: false }),

  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
    set({ theme })
  },

  setLanguage: (language) => {
    localStorage.setItem('language', language)
    set({ language })
  },

  setSort: (sort) => set({ sort }),
  setSearch: (search) => set({ search }),
}))
