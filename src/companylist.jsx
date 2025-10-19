import { useState, useEffect, useMemo } from 'react';
import Searchbar from './searchbar';
import { useSearchParams } from 'react-router-dom';
import { getReviewsFromStorage, addReviewToStorage } from './storageService';
import StarRating from './starRating'; 
import ViewDetailsCard from './viewDetailsCard'; 

const BASE_COMPANY_DATA = [
  { id: 1, name: 'Smart Solar' },
  { id: 2, name: 'Tony and the guy' },
  { id: 3, name: 'OLX' },
  { id: 4, name: 'Myntra' },
  { id: 5, name: 'Amazon' },
  { id: 6, name: 'Tata Sky' },
  { id: 7, name: 'TVS' },
  { id: 8, name: 'Zomato' },
  { id: 9, name: 'Swiggy' },
  { id: 10, name: 'Byjus' },
];


const loadAndMergeData = () => {
  const allReviews = getReviewsFromStorage();
  
  return BASE_COMPANY_DATA.map(company => {
    const companyReviews = allReviews[company.id]?.reviews || [];
    const reviewCount = companyReviews.length;
    const totalRating = companyReviews.reduce((acc, r) => acc + r.rating, 0);
    const averageRating = reviewCount > 0 ? (totalRating / reviewCount) : 0;

    return {
      ...company,
      reviews: companyReviews,
      reviewCount: reviewCount,
      averageRating: averageRating,
    };
  });
};


function Companylist() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';


  const [companies, setCompanies] = useState(() => loadAndMergeData());
  const [searchTerm, setSearchTerm] = useState(queryFromUrl);
  
  const [selectedCompany, setSelectedCompany] = useState(null);

 


  const handleViewDetails = (company) => {
    setSelectedCompany(company);
  };

  const handleSearch = (event) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);
    
    if (newTerm) {
      setSearchParams({ q: newTerm });
    } else {
      setSearchParams({}); 
    }
  };

  const handleReviewSubmit = (companyId, newReview) => {
    addReviewToStorage(companyId, newReview);

    const updatedCompanies = loadAndMergeData();
    setCompanies(updatedCompanies);

   
    const updatedSelectedCompany = updatedCompanies.find(c => c.id === companyId);
    setSelectedCompany(updatedSelectedCompany);

     
  };

  const filteredCompanies = useMemo(() => 
    companies.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [companies, searchTerm]
  );

  return (
    <div className="container py-5">
      <Searchbar searchTerm={searchTerm} onSearch={handleSearch} />
      
      <h2 className="text-center mb-4">OUR COMPANIES</h2>
      
      {filteredCompanies.length > 0 ? (
        <ul className="list-group">
          {filteredCompanies.map(company => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={company.id}
            >
              <div>
                <span className="fw-bold fs-5">{company.name}</span>
                {/* --- NEW RATING DISPLAY --- */}
                {company.reviewCount > 0 && (
                  <span className="text-muted d-block d-sm-inline-block">
                    <StarRating rating={company.averageRating} />
                    {company.averageRating.toFixed(1)} out of 5
                    <span className="ms-2">({company.reviewCount} ratings)</span>
                  </span>
                )}
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleViewDetails(company)} 
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center p-5 border rounded bg-light">
          <p className="lead text-muted">
            Sorry, no companies found matching "{searchTerm}".
          </p>
        </div>
      )}

      
      <ViewDetailsCard 
        company={selectedCompany}
        show={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onReviewSubmit={handleReviewSubmit}
      />
    </div>
  );
}

export default Companylist;





