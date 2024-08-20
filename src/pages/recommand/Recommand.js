import { useEffect, useState } from "react";
import { supDetail, supList } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const STitle = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const TitleWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  background-color: aliceblue;
  h5 {
    font-size: 20px;
    text-align: center;
  }
  h2 {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 500;
  }
`;

const NutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slateblue;
`;

const NutWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  height: 200px;
  background-color: skyblue;
`;

export const Recommand = () => {
  const [supListData, setSupListData] = useState();
  const [supDetailData, setSupDetailData] = useState();
  const [nutData, setNutData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

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
  // console.log(supDetailData);
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
          <STitle>
            <TitleWrap>
              <h5>기능별 영양성분 및 제품</h5>

              <h2>{id}에 좋은</h2>
            </TitleWrap>
          </STitle>

          <NutContainer>
            <NutWrap></NutWrap>
          </NutContainer>
        </>
      )}
    </>
  );
};
