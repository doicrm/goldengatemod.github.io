import { useI18n } from 'vue-i18n'

export default function (key: string, fallback: string): string {
  const { te, t } = useI18n()
  return te(key) ? t(key) : fallback
}
