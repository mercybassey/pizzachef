import React from 'react';

import {SpinnerOverlay, Spinner} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
   return  isLoading ? (
       <SpinnerOverlay>
           <Spinner />
       </SpinnerOverlay>
   ) : (
       <WrappedComponent {...otherProps} />
   );
};

export default WithSpinner;