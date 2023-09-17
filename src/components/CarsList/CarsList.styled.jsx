import styled from "@emotion/styled";

import Select from "react-select";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 50px 29px;
  margin-bottom: 100px;
`;

export const FormWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
  align-items: flex-end;
`;

export const SearchBtn = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 14px 44px;
  background-color: ${(props) => props.theme.colors.primary};
  color: rgba(255, 255, 255, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background: ${(props) => props.theme.colors.primariHover};
  }

  &:focus {
    outline: none;
  }
`;

export const FormName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(138, 138, 137, 1);
`;

const StyledSelect = styled(Select)`
  .select__menu {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 14px;
    outline: 0;
    border: 0;
    /* margin-top: 4px; */
    z-index: 2;
  }

  .select__menu:hover {
    outline: 0;
  }

  .select__menu-list {
    /* max-height: 335px; */
    overflow-x: hidden;
  }

  .select__value-container {
    display: flex;
    padding: 0;
    margin: 0;
  }

  .select__control {
    cursor: pointer;

    font-size: 14px;
    border: 0;
    border-radius: 0;
    background-color: rgba(247, 247, 251, 1);
    border-radius: 14px;
    padding: 14px 18px;

    :hover {
      outline: 0;
      box-shadow: 0;
      outline: 0;
      box-shadow: none;
      border: 0;

      html,
      body {
        overflow: hidden;
      }
    }
    :focus {
      html,
      body {
        overflow: hidden;
      }
    }
  }

  .select__indicator-separator {
    display: none;
  }

  .select__input-container {
    color: transparent;
    font-size: 14px;
    line-height: ${14 / 14}px;
    padding: 0;
    margin: 0;
  }

  .select__input {
    color: white;
    font-size: 14px;
    line-height: ${14 / 14}px;
  }

  .select__placeholder {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    margin: 0;
  }

  .select__option {
    background-color: transparent;
    color: ${(props) => props.theme.colors.grey};
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.grey};
    }
  }

  .select__control--is-focused {
    outline: 0;
  }

  .select__indicator {
    padding: 0;
    svg {
      fill: ${(props) => props.theme.colors.grey};
      transition: transform 300ms ease;
      :hover {
        fill: ${(props) => props.theme.colors.grey};
        transform: rotate(180deg);
      }
      :focus {
        fill: ${(props) => props.theme.colors.grey};
        transform: rotate(180deg);
      }
      :active {
        fill: ${(props) => props.theme.colors.grey};
        transform: rotate(180deg);
      }
    }
  }

  .select__single-value {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.black};
  }

  .select__menu-list::-webkit-scrollbar {
    width: 8px;
  }
  .select__menu-list::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.lightGrey};
    border-radius: 14px;
  }
`;

export const StyledSelectBrand = styled(StyledSelect)`
  width: 224px;
`;

export const StyledSelectPrice = styled(StyledSelect)`
  width: 125px;
`;

export const MileageInputsWraper = styled.div`
  display: flex;
  max-width: 320px;
`;

export const MileageInput = styled.input`
  border: none;
  outline: none;
  width: 50px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  background-color: inherit;
  &::placeholder {
    color: #121417;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const LoadMoreBtn = styled.button`
  font-weight: 500px;
  font-size: 16px;
  line-height: 24px;

  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  border: none;
  text-decoration: underline;
  transition: color 300ms ease;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primariHover};
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  gap: 15px;
  width: 160px;
  padding: 14px 24px;
  align-items: center;
  border-radius: 14px 0 0 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  gap: 10px;
`;

export const WrapperRight = styled.div`
  display: flex;
  gap: 10px;
  width: 160px;
  padding: 14px 24px;
  align-items: center;
  border-radius: 0 14px 14px 0;
  background: #f7f7fb;
  border: none;
  outline: none;

  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;
