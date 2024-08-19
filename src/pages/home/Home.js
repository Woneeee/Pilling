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

      const nutResult = await nutDetail();
      console.log(nutResult.12710);
    })();
  }, []);

  return <div>Home</div>;
};
