import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterMeals.module.css';
import { useEffect, useState } from 'react';

export default function FilterMeals({ onFilter }) {
  function inputChangeHandle(e) {
    // const keyword = e.target.value.trim();
    setKeyword(e.target.value.trim());
    // onFilter(keyword);
  }

  // 改成用useEffect
  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    //降低數據過濾 輸入完後再過濾 1秒後觸發
    // 開啟定時器要先關掉上一次的
    const timer = setTimeout(() => {
      onFilter(keyword);
    }, 1000);

    // 清除上次Effect執行所帶來的影響
    return () => {
      clearTimeout(timer);
    };
  }, [keyword, onFilter]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          value={keyword} //雙向綁定
          type='text'
          placeholder={'請輸入關鍵字'}
          className={classes.searchInput}
          onChange={inputChangeHandle}
        />
        <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
      </div>
    </div>
  );
}
