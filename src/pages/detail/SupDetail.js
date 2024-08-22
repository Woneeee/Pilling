import { useEffect, useState } from "react";
import { supDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import mark from "../../img/mark.jpg";
import { point } from "../../GlobalStyled";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
  margin-top: 60px;
  border-bottom: 1px solid #55555540;
`;

const MainWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  /* background-color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCon = styled.div`
  max-width: 500px;
  width: 100%;
  height: 600px;
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55%;
  /* background-color: lightgray; */
`;

const STitle = styled.div`
  margin-top: 70px;
  text-align: center;
  h5 {
    margin-bottom: 20px;
    letter-spacing: -1px;
    opacity: 0.6;
  }
  h2 {
    font-size: 25px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const Mark = styled.div`
  margin-top: 45px;
  font-size: 17px;
  opacity: 0.6;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const MarkImg = styled.div`
  width: 30px;
  height: 30px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  /* background-color: antiquewhite; */
  h2 {
    font-size: 25px;
    margin-top: 40px;
    font-weight: 500;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

const InfoText = styled.div`
  margin-top: 25px;
  font-size: 20px;
  font-weight: 500;
  h5 {
    width: 105px;
    padding: 7px 10px;
    background-color: ${point.verySmooth};
    border-radius: 18px;
    letter-spacing: -1px;
  }
  p {
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.8;
  }
  @media screen and (max-width: 510px) {
    h5 {
      font-size: 19px;
      width: 90x;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const SupDetail = () => {
  const [supDetailData, setSupDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [supNameData, setSupNameData] = useState();

  useEffect(() => {
    (async () => {
      const {
        body: { items: detail1 },
      } = await supDetail(1);
      const {
        body: { items: detail2 },
      } = await supDetail(2);
      const {
        body: { items: detail3 },
      } = await supDetail(3);
      const supDetailResult = detail1.concat(detail2, detail3);

      setSupDetailData(supDetailResult);
      setIsLoading(false);

      const supName = supDetailResult.filter((res) =>
        res.item.PRDUCT.includes(id)
      );
      setSupNameData(supName[0].item);
    })();
  }, []);

  // console.log(supNameData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainContainer>
            <MainWrap>
              <MainCon>
                <Img>
                  <img src="" alt="" />
                </Img>
                <STitle>
                  <h5>{supNameData.ENTRPS}</h5>
                  <h2>{supNameData.PRDUCT}</h2>
                </STitle>
                <Mark>
                  <MarkImg>
                    <img src={mark} alt="" />
                  </MarkImg>

                  <p> &nbsp; 건강기능식품</p>
                </Mark>
              </MainCon>
            </MainWrap>
          </MainContainer>

          <InfoContainer>
            <InfoWrap>
              <h2>상품정보</h2>

              <InfoText>
                <h5>기본 정보:</h5> <p>{supNameData.BASE_STANDARD}</p>
                <h5>주요 기능:</h5>
                <p
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: point.color,
                    textDecorationThickness: 3,
                    fontWeight: "500",
                  }}
                >
                  {supNameData.MAIN_FNCTN}
                </p>
                <h5>섭취 방법:</h5> <p>{supNameData.SRV_USE}</p>
                <h5>유효 기간:</h5> <p>{supNameData.DISTB_PD}</p>
                <h5>보관 방법: </h5> <p>{supNameData.PRSRV_PD}</p>
                <h5>주의 사항:</h5> <p>{supNameData.INTAKE_HINT1}</p>
              </InfoText>
            </InfoWrap>
          </InfoContainer>
        </>
      )}
    </>
  );
};
