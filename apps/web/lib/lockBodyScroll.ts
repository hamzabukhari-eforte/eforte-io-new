const SCROLLBAR_VAR = "--scrollbar-compensation";
const LOCK_CLASS = "scroll-locked";

export const SCROLLBAR_COMPENSATION_CLASS =
  "pr-(--scrollbar-compensation)";

let lockCount = 0;
let previousPaddingRight = "";
let previousCompensation = "";

export function lockBodyScroll(): () => void {
  const { body, documentElement } = document;

  if (lockCount === 0) {
    previousPaddingRight = body.style.paddingRight;
    previousCompensation = documentElement.style.getPropertyValue(SCROLLBAR_VAR);

    const scrollbarWidth = Math.max(
      0,
      window.innerWidth - documentElement.clientWidth
    );

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
      documentElement.style.setProperty(SCROLLBAR_VAR, `${scrollbarWidth}px`);
    }

    documentElement.classList.add(LOCK_CLASS);
  }

  lockCount += 1;

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount > 0) return;

    documentElement.classList.remove(LOCK_CLASS);
    body.style.paddingRight = previousPaddingRight;
    if (previousCompensation) {
      documentElement.style.setProperty(SCROLLBAR_VAR, previousCompensation);
    } else {
      documentElement.style.removeProperty(SCROLLBAR_VAR);
    }
  };
}
