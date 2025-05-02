  document.addEventListener("DOMContentLoaded", function () {
    const html = document.documentElement;
    const lang = html.lang.toLowerCase();

    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
    } else {
      html.setAttribute("dir", "ltr");
    }
  });