const debounce = (func: Function, wait: number) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default debounce;
