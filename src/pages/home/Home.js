import { useEffect } from "react";
import { nutDetail, supDetail, supList } from "../../api";

export const Home = () => {
  useEffect(() => {
    (async () => {
      const {
        body: { items: supListResult },
      } = await supList();
      // console.log(supListResult);

      const {
        body: { items: supDetailResult },
      } = await supDetail();
      // console.log(supDetailResult);

      const {
        I2710: { row },
      } = await nutDetail();
      console.log(row);
    })();
  }, []);

  return <div>Home</div>;
};
