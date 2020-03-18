import * as React from 'react';
import Footer from '../footer/footer';

function NotFoundPage() {
  return (
    <div className="page-content" style={{
      height: `100vh`,
      display: `flex`,
      flexDirection: `column`,
    }}>
      <div style={
        {
          fontSize: `30px`,
          fontWeight: `bold`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          color: `#dfcf77`,
          width: `100%`,
          height: `100%`,
        }
      }>
        <p>Page not found</p>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(NotFoundPage);
