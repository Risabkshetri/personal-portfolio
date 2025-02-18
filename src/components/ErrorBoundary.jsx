import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Component Error:", error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container" style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "#fff8f8",
          border: "1px solid #ffcdd2",
          borderRadius: "4px",
          textAlign: "center"
        }}>
          <h2>Sorry, something went wrong with the 3D component.</h2>
          <p>Try using a browser with better WebGL support, like Chrome or Firefox.</p>
          {/* Provide a fallback image or component */}
          <img 
            src="/fallback-computer-image.jpg" 
            alt="Computer 3D model (fallback)" 
            style={{ maxWidth: "80%", margin: "20px auto" }}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;