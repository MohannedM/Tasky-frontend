import React from 'react';

const CustomFooter: React.FC = props => {
    return (
        
  <footer className="footer bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
        <p className="text-muted small mb-4 mb-lg-0">&copy; Tasky {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer> 
    )
}

export default CustomFooter;