import { useEffect, useState, useRef } from 'react';

const GitImage = ({ src = '', maxRetries = 3, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const loadImage = async () => {
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      setCurrentSrc(URL.createObjectURL(blob));
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

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (imgRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadImage();
            if (observer) {
              observer.unobserve(imgRef.current as HTMLImageElement);
            }
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    loadImage();
  }, [src]);

  if (currentSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img ref={imgRef} src={currentSrc} {...props} alt={src} />;
  } else {
    return <></>;
  }
};

export default GitImage;
