import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  border-top: 1px solid lightblue;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .info, .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`