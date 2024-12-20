import { useEffect, useState } from "react";
import { getKakaoImg, nutDetail, supDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/swiperStyle.css";
import { useScrollTop } from "../../lib/useScrollTop";
import noImg from "../../img/no_image.jpg";

const STitle = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h5 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }
  h2 {
    margin-top: 60px;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
    h5 {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
    }
  }
`;

const SupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const SupWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h2 {
    font-size: 25px;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
    h2 {
      font-size: 23px;
    }
  }
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 50px;
  margin-top: 20px;
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
`;

const Con = styled.div`
  width: 100%;
`;

const Img = styled.div`
  width: 100%;
  height: 280px;
  border: 1px solid #88888820;
  border-radius: 14px;
  img {
    height: 100%;
    object-fit: cover;
    border: 1px solid #88888820;
    border-radius: 14px;
  }
  @media screen and (max-width: 510px) {
    height: 180px;
  }
`;

const Text = styled.div`
  p {
    opacity: 0.7;
    margin-top: 10px;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
  }
  @media screen and (max-width: 510px) {
    p {
      font-size: 15px;
    }
    h2 {
      font-size: 17px;
      line-height: 22px;
    }
  }
`;

export const Recommand = () => {
  useScrollTop();

  const [supDetailData, setSupDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [supNameData, setSupNameData] = useState();
  const [supProData, setProData] = useState();
  const [imgData, setImgData] = useState([]);

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

      const supName = supDetailResult.filter(
        (res) => res.item.MAIN_FNCTN.includes(id) === true
      );
      setSupNameData(supName);

      const supProduct = supName.map((res) => res.item.PRDUCT);
      setProData(supProduct);

      // -----------------------------------------------------------
      // 카카오이미지 가져오기
      const imgSearchHandler = async (searchWhat) => {
        // paramter 설정
        const params = {
          query: searchWhat,
          sort: "accuracy", // accuracy | recency 정확도 or 최신
          page: 1, // 페이지번호
          size: 1, // 한 페이지에 보여 질 문서의 개수
        };

        const {
          data: { documents },
        } = await getKakaoImg(params); // api 호출
        setImgData([...imgData, documents[0]?.image_url]);
      };

      imgSearchHandler(supProduct[0]);
    })();
  }, []);

  // console.log(supDetailData);
  // console.log(nutData);

  // console.log(nutNameData);x
  // console.log(supNameData);

  // console.log(supProData);
  // console.log(imgData);

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

          <SupContainer>
            <SupWrap>
              <h2>제품</h2>

              <Product>
                {supNameData.map((res) => (
                  <Link
                    key={res.item.PRDUCT}
                    to={`/supdetail/${res.item.PRDUCT}`}
                  >
                    <Con>
                      <Img>
                        {imgData ? (
                          <img
                            src={imgData}
                            alt=""
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <img src={noImg} alt="no_img" />
                        )}
                      </Img>

                      <Text>
                        <p>{res.item.ENTRPS}</p>
                        <h2>{res.item.PRDUCT}</h2>
                      </Text>
                    </Con>
                  </Link>
                ))}
              </Product>
            </SupWrap>
          </SupContainer>
        </>
      )}
    </>
  );
};
