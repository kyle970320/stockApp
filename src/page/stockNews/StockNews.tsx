import React, { useEffect, useState } from 'react';
import { AxiosApiNews } from '../../service/axios/AxiosApi';
import styles from './StockNews.module.css';
import useInput from '../../hooks/useInput';
import useDebounce from '../../hooks/useDebounce';
import Loading from '../../components/Loding';
interface newsData {
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
  title: string;
}
const StockNews = () => {
  const [stateNewsLoading, setNewsLoading] = useState<boolean>(false);
  const [stateStockNews, setStockNews] = useState<newsData[]>([]);
  const [stateNewsInput, handleChange, setNewsInput] = useInput('주식');
  const [debounce] = useDebounce(stateNewsInput, 200);
  useEffect(() => {
    const newsData = async () => {
      setNewsLoading(true);
      if (debounce.length > 0) {
        let encodeUTF = await encodeURI(stateNewsInput);
        const stockNewsData = await AxiosApiNews(encodeUTF);
        setStockNews(stockNewsData.data.items);
      }
      const handler = setTimeout(() => {
        setNewsLoading(false);
      }, 1000);
      return () => clearTimeout(handler);
    };
    newsData();
  }, [debounce]);
  return (
    <div className={styles.news}>
      <input
        type="text"
        placeholder="뉴스제목을 검색하세요"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {stateNewsLoading && (
        <div className={styles.lodingContainer}>
          <Loading />
        </div>
      )}
      {stateStockNews.length >= 1 &&
        !stateNewsLoading &&
        stateStockNews.map((news) => {
          return (
            <details key={news.link}>
              <summary
                dangerouslySetInnerHTML={{
                  __html: `${news.title}`,
                }}
              ></summary>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${news.description}`,
                }}
              ></p>
              <a href={news.link} target="_blank">
                기사 보러가기
              </a>
            </details>
          );
        })}
    </div>
  );
};

export default StockNews;
