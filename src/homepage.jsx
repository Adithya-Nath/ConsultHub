import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/companylist?q=${searchTerm}`);
    };
    return (
        <div>

            <div className="container-fluid bg-light text-dark p-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold text-primary">Welcome to ConsultHub</h1>
                    <p className="lead my-4">
                        ConsultHub is a comprehensive online platform that connects users with a wide array of consulting companies. Search, compare, and make informed decisions based on detailed profiles and authentic peer reviews.
                    </p>
                    <div className="input-group w-75 mx-auto">
                        <input type="search" placeholder="Search by service, company name, or keyword" className="form-control" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            <div className="container my-5">

                <section className="how-it-works mb-5">
                    <h2 className="text-center display-6 fw-bold mb-4">A Streamlined Process for Finding Experts and Growing Your Business</h2>
                    <div className="row g-4">

                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">For Clients Seeking Services</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Search & Filter:</strong> Easily search for companies by service type, name, or keywords and filter results by rating, location, and more.</li>
                                        <li className="list-group-item"><strong>Compare & Evaluate:</strong> Browse company cards and click to view detailed profiles, services, and contact details. Read user reviews and ratings to make an informed choice.</li>
                                        <li className="list-group-item"><strong>Connect & Hire:</strong> Once you've found the right fit, use the provided contact details to connect with the company and confidently start your project.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title text-primary">For Consulting Companies</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Register Your Firm:</strong> Apply to list your company by completing a registration form and paying a fee through our secure payment gateway.</li>
                                        <li className="list-group-item"><strong>Get Approved:</strong> Our admin team will review your application. You can view your application status (Pending, Approved, or Rejected) and receive status notifications.</li>
                                        <li className="list-group-item"><strong>Build Your Presence:</strong> Once approved, log in to your dashboard to manage your profile, edit details, add or remove services, and view all user ratings and reviews.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-section text-center mb-5">
                    <h2 className="display-6 fw-bold mb-4">See ConsultHub in Action</h2>
                    <div className="col-lg-8 mx-auto">
                        <div className="ratio ratio-16x9">
                            <video src="/Consulthub_Finding_Your_Ideal_Company.mp4" title="ConsultHub in action" controls autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                <section className="why-join text-center bg-light p-5 rounded">
                    <h2 className="display-6 fw-bold mb-4">Why Join ConsultHub?</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h5>For Clients</h5>
                            <p>ConsultHub empowers you to confidently choose the right company for your needs. We streamline the process of finding and evaluating consulting services through a centralized directory with detailed profiles and authentic user feedback.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>For Consulting Firms</h5>
                            <p>Expand your reach and build a reputable online presence. Our platform offers a valuable channel for marketing your services, ultimately fostering a trustworthy and dynamic digital marketplace.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="card text-center">
                <div class="card-header">
                </div>
                <div class="card-body">
                    <h5 class="card-title">The Company Consulting Platform</h5>
                    <p class="card-text">ConsultHub is an online platform designed to connect users with a wide array of consulting companies. It streamlines the process of finding and evaluating consulting services by providing a centralized directory with detailed company profiles and authentic user feedback. The platform aims to create a transparent and efficient marketplace for clients and consulting firms alike, fostering a trustworthy and dynamic digital community.</p>
                    <a href="#" class="btn btn-primary">Find Companies</a>
                </div>
                <div class="card-footer text-body-secondary p-3 mb-2 bg-dark-subtle text-dark-emphasis">
                    @ConsultHub2025
                </div>
            </div>
        </div>
    );
}

export default Homepage;
