import React from 'react'
import { Link } from 'react-router-dom';

const admin_footer = () => {
  return (
    <>
    <footer className="admin_footer_container">
      <p className="float-end"><Link to="#">Back to Top</Link></p>
      <p className="float-start"><Link to="#">Privacy</Link> &middot; <Link to="#">Terms</Link></p>
      <hr />
      <p className="copy text-center Admin_copy">Copyright (C) 2023 DreamAir All rights reserved.</p>
    </footer>
    </>
  );
};

export default admin_footer