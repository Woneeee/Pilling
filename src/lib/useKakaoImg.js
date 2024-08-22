import { useEffect, useState } from "react";
import { getKakaoImg } from "../api";
import { PiImageSquareFill } from "react-icons/pi";

export const useKakaoImg = (searchWhat) => {
  const [imgData, setImgData] = useState();
  const [imgUrlData, setImgUrlData] = useState();

  useEffect(() => {
    imgSearchHandler();
  }, []);

  const imgSearchHandler = async () => {
    // paramter 설정
    const params = {
      query: searchWhat,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10, // 한 페이지에 보여 질 문서의 개수
    };

    const {
      data: { documents },
    } = await getKakaoImg(params); // api 호출
    // console.log(img.image_url); // 결과 호출
    setImgData(documents);

    const imgUrl = documents.map((res) => res.image_url);
    setImgUrlData(imgUrl);
  };

  return console.log(imgUrlData);
};
