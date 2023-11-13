import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media(max-width: 360px) {
    margin-top: 1rem;
  }
  
  @media(min-width: 600px) {
    p {
      font-size: 20px;
    }
  }  
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: ${props => props.theme["gray-100"]};
  text-align: center;

  label {
    line-height: 1.7;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 360px) {
    label {
      line-height: 1.6;
      padding-inline: 1.5rem;
    }
  }

  @media(max-width: 320px) {
    margin-top: 0.5rem;

    label {
      font-size: 1rem;
    }
  }

  @media(min-width: 600px) {
    label {
      font-size: 20px;
    }
  }  
`;

export const Select = styled.select`
  height: 2.5rem;
  border: none;
  border-radius: 6px;
  padding-left: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;
  
  option {
    font-weight: 500;
    border: 0;
  }
`;