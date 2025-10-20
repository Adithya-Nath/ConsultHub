import { useState, useEffect, useMemo } from 'react';
import Searchbar from './searchbar';
import { useSearchParams } from 'react-router-dom';
import { getReviewsFromStorage, addReviewToStorage } from './storageService';
import StarRating from './starRating'; 
import ViewDetailsCard from './viewDetailsCard'; 

const BASE_COMPANY_DATA = [
{ id: 1, name: 'Smart Solar', description: 'Your trusted partner for sustainable energy. We offer end-to-end solar solutions, from consultation and installation to maintenance.', gmail: 'info@smartsolar.com', phoneNumber: 7596324895 },
{ id: 2, name: 'Tony and the guy', description: 'Premium hair salon and styling services.', gmail: 'info@tonyandguy.com', phoneNumber: 9876543210 },
{ id: 3, name: 'OLX', description: 'Online marketplace for buying and selling used goods.', gmail: 'support@olx.in', phoneNumber: 9876512345 },
{ id: 4, name: 'Myntra', description: 'Your one-stop shop for fashion and lifestyle products.', gmail: 'care@myntra.com', phoneNumber: 8061561999 },
{ id: 5, name: 'Amazon', description: 'Global e-commerce leader for electronics, books, and more.', gmail: 'cs-reply@amazon.in', phoneNumber: 180030009009 },
{ id: 6, name: 'Tata Sky', description: 'Leading DTH service provider with a wide range of channels.', gmail: 'help@tatasky.com', phoneNumber: 18002086633 },
{ id: 7, name: 'TVS', description: 'Manufacturer of motorcycles, scooters, and three-wheelers.', gmail: 'customercare@tvsmotor.com', phoneNumber: 18002587111 },
{ id: 8, name: 'Zomato', description: 'Find restaurants and order food delivery online.', gmail: 'info@zomato.com', phoneNumber: 9998887776 },
{ id: 9, name: 'Swiggy', description: 'Fast food delivery from your favorite local restaurants.', gmail: 'support@swiggy.in', phoneNumber: 9998887775 },
{ id: 10, name: 'Byjus', description: 'Online learning platform for students of all ages.', gmail: 'contact@byjus.com', phoneNumber: 9241333666 }
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





