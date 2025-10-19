import React, { useState } from 'react';
import StarRating from './starRating';

function ViewDetailsCard({ company, show, onClose, onReviewSubmit }) {
  const [userName, setUserName] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [error, setError] = useState('');

  if (!show || !company) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0 || !userComment.trim() || !userName.trim()) {
      setError('Please provide your name, a rating, and a comment.');
      return;
    }

    const newReview = {
      user: userName,
      rating: Number(userRating),
      comment: userComment,
      date: new Date().toISOString(),
    };

    onReviewSubmit(company.id, newReview);
    
  
    setUserName('');
    setUserRating(0);
    setUserComment('');
    setError('');
    onClose();
  };

  const modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="modal show" style={modalStyle} tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{company.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Overall Rating */}
            <h4>
              <StarRating rating={company.averageRating} />
              <span className="align-middle">
                {company.averageRating.toFixed(1)} out of 5
              </span>
            </h4>
            <p className="text-muted">
              ({company.reviewCount} global ratings)
            </p>
            <hr />

            {/* Add Review Form */}
            <h5>Submit Your Review</h5>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g., John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userRating" className="form-label">Your Rating</label>
                <select
                  id="userRating"
                  className="form-select"
                  value={userRating}
                  onChange={(e) => setUserRating(e.target.value)}
                >
                  <option value="0" disabled>Select a rating...</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="userComment" className="form-label">Your Review</label>
                <textarea
                  className="form-control"
                  id="userComment"
                  rows="3"
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  placeholder="What did you like or dislike?"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
            <hr />

            {/* Existing Reviews */}
            <h5>User Reviews</h5>
            {company.reviews && company.reviews.length > 0 ? (
              <ul className="list-group list-group-flush">
                {company.reviews.slice().reverse().map((review, index) => ( // Show newest first
                  <li key={index} className="list-group-item">
                    <strong>{review.user}</strong>
                    <StarRating rating={review.rating} />
                    <p className="mb-1">{review.comment}</p>
                    <small className="text-muted">
                      {new Date(review.date).toLocaleDateString()}
                    </small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet. Be the first to add one!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetailsCard;