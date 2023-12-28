const paginatedList = document.querySelector('[data-load="pagination"]');
const listItems = paginatedList.querySelectorAll('.w-dyn-item');
const nextButton = document.querySelector('[data-load="next"]');
const prevButton = document.querySelector('[data-load="previous"]');
const paginationLimit = paginatedList.getAttribute('pagination-limit');
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add('disabled');
};

const enableButton = (button) => {
  button.classList.remove('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};


const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    $(item).hide();
    if (index >= prevRange && index < currRange) {  	
      $(item).show();
    }
  });
};

window.addEventListener('load', () => {
  setCurrentPage(1);

  prevButton.addEventListener('click', () => {
  	window.scrollTo({top: 0, behavior: 'smooth'});
    setCurrentPage(currentPage - 1); 
  });

  nextButton.addEventListener('click', () => {
  	window.scrollTo({top: 0, behavior: 'smooth'});
    setCurrentPage(currentPage + 1);
  });

});
