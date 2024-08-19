import { useEffect } from "react";
import { supDetail, supList } from "../../api";

export const Home = () => {
  useEffect(() => {
    (async () => {
      const {
        body: { items },
      } = await supList();
      console.log(items);
    })();
  }, []);

  return <div>Home</div>;
};
