'use client'
const LoadingSpinner = () => {
  return (
   <div className="text-center">
  <button className="btn btn-info" type="button" disabled>
  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
</div>
  );
};

export default LoadingSpinner;
