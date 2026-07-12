import { useState, ImgHTMLAttributes } from 'react';

type GitImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  maxRetries?: number;
};

const GitImage = ({ src = '', maxRetries = 3, alt = '', ...props }: GitImageProps) => {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    setErrorCount((count) => count + 1);
  };

  if (errorCount > maxRetries) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          minHeight: '8rem',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--bg-soft)',
          color: 'var(--text-subtle)',
          fontSize: '0.85rem',
        }}
      >
        Preview unavailable
      </div>
    );
  }

  const retrySrc = errorCount > 0 ? `${src}${src.includes('?') ? '&' : '?'}retry=${errorCount}` : src;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={retrySrc} onError={handleError} alt={alt} {...props} />;
};

export default GitImage;
