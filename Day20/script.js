 function scrollToSection(sectionId, behavior) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: behavior });
}