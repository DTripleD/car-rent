import styled from "@emotion/styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

export const Item = styled.li`
  width: 274px;
  flex-basis: calc((100% - 87px) / 4);
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const CarImgWrap = styled.div`
  position: relative;
  width: 100%;
  width: 274px;
  height: 268px;
`;

export const CarImg = styled.img`
  display: block;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  object-position: center center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 24px;
`;

export const CarInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: rgba(52, 112, 255, 1);
  font-size: 16px;
`;

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ bgColor }) =>
    bgColor === false ? "#EBD8FF" : "#5CD3A8"};
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
  max-height: 40px;
  overflow: hidden;
`;

export const SecondaryCarText = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  padding-right: 6px;

  &:last-child {
    padding-right: 0;
    border: none;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 28px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #1946af;
  }
`;

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const HeartIcon = styled(HiOutlineHeart)`
  display: block;
  color: rgb(255 255 255 / 80%);
  width: 18px;
  height: 18px;
`;

export const HeartIconBlue = styled(HiHeart)`
  display: block;
  color: ${(props) => props.theme.colors.primary};
  width: 18px;
  height: 18px;
`;
