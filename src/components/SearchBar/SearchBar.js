import React from "react";
import SearchItem from "./SearchItem/SearchItem";
import AV from "leancloud-storage";

const SearchBar = (props) => {
  const searchItems = {
    benhao: "本号",
    benming: "本名",
    nan: "男",
    nv: "女",
    jubenleixing: "剧本类型",
    guanjianci: "关键词",
    // miaoshu: "描述",
    // beizhu: "备注",
  };

  const search = () => {
    const query = new AV.SearchQuery("juben");
    query.queryString("benHao:126");
    query
      .find()
      .then(function (results) {
        console.log("Find " + query.hits() + " docs.");
        //处理 results 结果
        console.log(results);
      })
      .catch(function (err) {
        //处理 err
      });
  };

  return (
    <div>
      {Object.entries(searchItems).map((item) => {
        return <SearchItem key={item[0]} name={item[1]} />;
      })}
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;
