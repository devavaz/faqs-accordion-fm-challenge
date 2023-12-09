const openSections = {};

function toggleAccordion(sectionId) {
  const section = document.getElementById(sectionId);
  const arrowIcon = document.getElementById('arrow' + sectionId.slice(-1));

  if (openSections[sectionId]) {
    section.style.display = 'none';
    arrowIcon.src = '/assets//images/plus.svg';
    openSections[sectionId] = false;
  } else {
   
   
    for (const key in openSections) {
      if (openSections.hasOwnProperty(key) && openSections[key] === true && key !== sectionId) {
        const otherSection = document.getElementById(key);
        const otherArrowIcon = document.getElementById('arrow' + key.slice(-1));
        otherSection.style.display = 'none';
        otherArrowIcon.src = '/assets//images/plus.svg';
        openSections[key] = false;
      }
    }
    
    section.style.display = 'block';
    arrowIcon.src = '/assets//images/minus.svg';
    openSections[sectionId] = true;
  }
}
