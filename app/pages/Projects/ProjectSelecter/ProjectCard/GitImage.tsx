import { useState } from 'react';

const GitImage = ({ src = '', maxRetries = 3, ...props }) => {
  const [errorCount, setErrorCount] = useState(0);
  const [retrySuffix, setRetrySuffix] = useState(''); // New state variable for the retry suffix

  const handleError = () => {
    console.log(`Error loading image at ${src}. Retry count: ${errorCount + 1}`);
    setErrorCount((count) => count + 1);
    setRetrySuffix(`?retry=${errorCount + 1}`); // Change the retry suffix each time handleError runs
  };

  if (errorCount > maxRetries) {
    console.log(`Failed to load image at ${src} after ${maxRetries} attempts.`);
    return null; // Or you can render an alternative content
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src + retrySuffix} onError={handleError} {...props} alt={src} />; // Add the retry suffix to the src prop
};

export default GitImage;
