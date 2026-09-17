import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import DiscoverWorks from '../components/DiscoverWorks';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-contact" style={{ paddingTop: '86px' }}>
      <Contact />
      <DiscoverWorks />
    </div>
  );
};

export default ContactPage;
