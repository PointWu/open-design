// [FORK] Exam-mode master switch for the exam-platform fork.
//
// Same shape as `libraryUi.ts`: a single constant the product surface reads,
// so upstream merges always see this file as a pure addition (never a
// conflict).
//
// Resolution order:
//   1. `?exam=0` / `?exam=1` in the URL — dev-time A/B against stock
//      upstream in one browser without rebuilding. Note: in-app SPA
//      navigation drops the query string, so the override only applies to
//      the page load that carries it.
//   2. `DEFAULT_EXAM_MODE` — what the fork ships.
const DEFAULT_EXAM_MODE = true;

export function isExamMode(): boolean {
  if (typeof window === 'undefined') return DEFAULT_EXAM_MODE;
  const override = new URLSearchParams(window.location.search).get('exam');
  if (override === '0') return false;
  if (override === '1') return true;
  return DEFAULT_EXAM_MODE;
}

// [FORK] Exam mode: the only Settings sections a student may open. Every
// other section is hidden from the settings sidebar. Deep links that force a
// hidden section (openSettings('memory') etc.) still render it — hardening
// that path is a follow-up, not part of this switch.
export const EXAM_SETTINGS_SECTIONS: readonly string[] = ['execution', 'general'];

export function isSettingsSectionAllowed(section: string): boolean {
  return !isExamMode() || EXAM_SETTINGS_SECTIONS.includes(section);
}
