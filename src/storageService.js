
const STORAGE_KEY = "companyReviews";


export const getReviewsFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};


export const addReviewToStorage = (companyId, newReview) => {

  const allReviews = getReviewsFromStorage();

  const companyReviews = allReviews[companyId]?.reviews || [];

  const updatedReviews = [...companyReviews, newReview];

  const updatedAllReviews = {
    ...allReviews,
    [companyId]: {
      reviews: updatedReviews,
    },
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAllReviews));
};