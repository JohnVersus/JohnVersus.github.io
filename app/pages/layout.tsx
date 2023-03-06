import styles from './Pages.module.css';

const Pages = ({ pages }: { pages: JSX.Element[] }) => {
  return (
    <>
      <div className={styles.scrollContainer}>
        {pages.map((page, i) => {
          return (
            <div key={i} className={styles.scrollChild}>
              {page}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pages;
