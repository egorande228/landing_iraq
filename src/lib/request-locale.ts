import { resolveLocale } from '@/lib/i18n';

export async function getRequestLocale() {
  return resolveLocale(undefined);
}
