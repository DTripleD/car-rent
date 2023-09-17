import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 24px;
  padding: 40px;
  max-width: 100%;
  z-index: 100;
  overflow-y: auto;
  max-height: 100%;
  overflow-y: hidden;
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  /* @media (min-width: 768px) {
    padding: 30px;
    max-width: 100%;
    max-height: 600px;
    overflow-y: scroll;
    top: 40%;
  }
  @media (max-width: 1080px) {
    top: 50%;
    padding: 30px;
    max-width: 100%;
    height: 600px;
    overflow-y: scroll;
  } */
`;

export const BtnClose = styled.button`
  position: absolute;
  color: ${(props) => props.theme.colors.black};
  top: -30px;
  right: -20px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose)`
  display: block;
  color: #121417;
  width: 24px;
  height: 24px;
`;

export const ContentWrapper = styled.div`
  position: relative;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 24px;

  @media (min-width: 768px) {
    width: 461px;
  }
  @media (min-width: 1440px) {
    width: 461px;
  }
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
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

export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
  margin-bottom: 14px;
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

export const Descriprion = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Accessories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 6px;
`;

export const AccessoryListItem = styled.li`
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

export const RentalBlock = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalInfo = styled.ul`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: ${(props) => props.theme.colors.primary};
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const RentalBtn = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;
