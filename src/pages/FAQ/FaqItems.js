import * as React from 'react';

const FaqItems = ({data}) => {
    return (
        <details>
        <summary>
            {data.title}
        </summary>
        <p>{data.summary}</p>
      </details>
    );
  };
  
  export default FaqItems;