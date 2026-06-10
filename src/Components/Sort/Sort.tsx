import { useTranslation } from 'react-i18next'
import { useUiStore } from '../../store/useUiStore'
import type { SortType } from '../../types/task'

export function Sort() {``
  const { t } = useTranslation()
  const sort = useUiStore((state) => state.sort)
  const search = useUiStore((state) => state.search)
  const setSort = useUiStore((state) => state.setSort)
  const setSearch = useUiStore((state) => state.setSearch)

  return (
    <div className="toolbar">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={t('search')}
      />

      <select value={sort} onChange={(event) => setSort(event.target.value as SortType)}>
        <option value="new">{t('sortNew')}</option>
        <option value="old">{t('sortOld')}</option>
        <option value="alphabet">{t('sortAlphabet')}</option>
      </select>
    </div>
  )
}