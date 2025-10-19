import { useState } from "react";
import Searchbar from "./searchbar";
import { useSearchParams } from "react-router-dom";

const initialCompanyData = [
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

function Companylist() {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const queryFromUrl = searchParams.get('q') || "";
  const [companies, setCompanies] = useState(initialCompanyData);
  
  const [searchTerm, setSearchTerm] = useState(queryFromUrl);

  const handleViewDetails = (companyName) => {
    alert(`Viewing details for: ${companyName}`);
  };

    const handleSearch = (event) => {
        const newTerm = event.target.value;
        setSearchTerm(newTerm);
        setSearchParams({ q: newTerm });
    };

  
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <Searchbar searchTerm={searchTerm} onSearch={handleSearch} />
      
      <h2 className="text-center mb-4">OUR COMPANIES</h2>
      
      {filteredCompanies.length>0 ? (
      <ul className="list-group">

        {filteredCompanies.map(company => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={company.id}
          >
            {company.name}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleViewDetails(company.name)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
      ):(
        <div className="text-center p-5 border rounded bg-light">
          <p className="lead text-muted">
            Sorry, no companies found matching "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
}

export default Companylist;