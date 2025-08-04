'use client'
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
      <div className="spinner"></div>

      <style jsx>{`
        .spinner {
          border: 6px solid #e5e7eb; /* gray-200 */
          border-top: 6px solid #3b82f6; /* blue-500 */
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
