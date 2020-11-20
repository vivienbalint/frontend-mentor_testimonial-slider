let pageIndex = 1;
showPages(pageIndex);

function plusPages(n) {
  showPages((pageIndex += n));
}

function showPages(n) {
  const pages = document.getElementsByClassName("page");

  if (n > pages.length) {
    pageIndex = 1;
  }

  if (n < 1) {
    pageIndex = pages.length;
  }

  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.add("hide");
  }

  pages[pageIndex - 1].classList.remove("hide");
}
