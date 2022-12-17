import styles from './Layout.module.css';

const Error404 = () => {
  return (
    <div className={styles.Error}>
      404, page Not Found
      <p>제공되지 않는 url 입니다</p>
    </div>
  );
};

export default Error404;
