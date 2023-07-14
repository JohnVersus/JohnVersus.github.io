import { useEffect, useState } from 'react';

const GitImage = ({ src = '', maxRetries = 3, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loadImage = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        if (!cancelled) {
          setCurrentSrc(URL.createObjectURL(blob));
        }
      } catch (error) {
        console.log(`Error loading image at ${src}. Retry count: ${errorCount + 1}`);
        if (errorCount < maxRetries) {
          setErrorCount((count) => count + 1);
        } else {
          console.log(`Failed to load image at ${src} after ${maxRetries} attempts.`);
          setCurrentSrc(''); // Or set to alternative content
        }
      }
    };
    loadImage();
    return () => {
      cancelled = true;
    };
  }, [src, errorCount, maxRetries]);

  if (currentSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={currentSrc} {...props} alt={src} />;
  } else {
    return <></>;
  }
};

export default GitImage;
