import React from 'react'

const script = () => {
  return (
    <React.Fragment>
      {/* bootstrap */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      {/* <script src="/js/dashboard.js"></script> */}

      {/* jQuery */}
      <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

      {/* site */}
      <script src="/js/script.js"></script>

      {/* .../resources/vendor JS*/}
      {/* <script src="/js/select2/select2.min.js"></script> */}
      {/* <script src="/js/jquery.validate.min.js"></script> */}
      {/* <script src="/js/bootstrap-wizard/bootstrap.min.js"></script> */}
      {/* <script src="/js/jquery.bootstrap.wizard.min.js"></script> */}
      <script src="/js/moment.min.js"></script>
      {/* <script src="/js/daterangepicker.js"></script> */}

      {/* Main JS*/}
      <script src="/js/global.js"></script>
    </React.Fragment>
  );
};
        

export default script