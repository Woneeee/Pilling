import { useEffect, useState } from "react";
import { nutDetail, supDetail, supList } from "../../api";

export const Home = () => {
  const [supListData, setSupListData] = useState();
  const [supDetailData, setSupDetailData] = useState();
  const [nutData, setNutData] = useState();

  useEffect(() => {
    (async () => {
      const {
        body: { items: supListResult },
      } = await supList();

      const {
        body: { items: supDetailResult },
      } = await supDetail();

      const {
        I2710: { row: nutResult },
      } = await nutDetail();

      setSupListData(supListResult);
      setSupDetailData(supDetailResult);
      setNutData(nutResult);
    })();
  }, []);

  // console.log(supListData);
  // console.log(supDetailData);
  // console.log(nutData);

  return <div>Home</div>;
};
