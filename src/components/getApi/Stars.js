import React from "react";
import { useRecoilValue } from "recoil";
import { getStars } from "../../atoms/apiAsync";
const Stars = () => {
  const userRepoStars = useRecoilValue(getStars);
  const stars = userRepoStars ? `${userRepoStars} 개` : "";

  return <>{stars}</>;
};
export default Stars;
