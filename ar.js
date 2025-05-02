// Function to update the 'dir' attribute based on the current 'lang'
function updateDirection() {
  const html = document.documentElement;
  const lang = html.lang.toLowerCase();
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

// Initial call to set the correct direction
updateDirection();

// Create a MutationObserver to watch for changes to the 'lang' attribute
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      updateDirection();
    }
  }
});

// Start observing the <html> element for attribute changes
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang']
});

