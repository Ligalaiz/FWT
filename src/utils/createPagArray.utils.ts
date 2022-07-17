const createPagArray = (paginationArr: number[], currentPage: number) => {
  let tempPaginationNumber = [...paginationArr];

  if (tempPaginationNumber.length > 3) {
    if (currentPage < 3) tempPaginationNumber = tempPaginationNumber.slice(0, 3);

    if (currentPage >= 3 && currentPage <= paginationArr.length - 1) {
      const slice1 = paginationArr.slice(currentPage - 2, currentPage);
      const slice2 = paginationArr.slice(currentPage, currentPage + 1);
      tempPaginationNumber = [...slice1, ...slice2];
    }

    if (currentPage > paginationArr.length - 1)
      tempPaginationNumber = tempPaginationNumber.slice(paginationArr.length - 3);
  }

  return tempPaginationNumber;
};

export { createPagArray };
