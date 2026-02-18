/**
 * Shared scroll utility for consistent section navigation with fixed nav offset
 */
export function scrollToSection(sectionId: string, offset: number = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
