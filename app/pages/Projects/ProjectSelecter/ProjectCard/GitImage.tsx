import { useState } from 'react';

const GitImage = ({ src = '', maxRetries = 3, ...props }) => {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    setErrorCount((count) => count + 1);
  };

  if (errorCount > maxRetries) {
    return null; // Or you can render an alternative content
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} onError={handleError} {...props} alt={src} />;
};

export default GitImage;
