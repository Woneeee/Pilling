import { useEffect, useState } from "react";
import { nutDetail, supDetail, supList } from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import styled from "styled-components";
import { Conditions } from "./components/Conditions";

const Container = styled.div`
  /* max-width: 1260px; */
  width: 100%;
  height: 100%;
  background-color: #c6dff120;
  margin: 0 auto;
`;

export const Home = () => {
  const [supListData, setSupListData] = useState();
  const [supDetailData, setSupDetailData] = useState();
  const [nutData, setNutData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        body: { items: supListResult },
      } = await supList();

      const {
        body: { items: supDetailResult },
      } = await supDetail();

      // const {
      //   I2710: { row: nutResult },
      // } = await nutDetail();

      setSupListData(supListResult);
      setSupDetailData(supDetailResult);
      // setNutData(nutResult);
      setIsLoading(false);
    })();
  }, []);

  // console.log(supListData);
  console.log(supDetailData);
  // console.log(nutData);
  // console.log(
  //   supDetailData?.filter((res) => res.item.MAIN_FNCTN.includes("단백질"))
  // );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <MainBanner />

            <Conditions />
          </Container>
        </>
      )}
    </>
  );
};
