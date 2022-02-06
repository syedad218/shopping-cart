import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    background: transparent
      url("https://thumbs.gfycat.com/BriefUnhappyChimneyswift-size_restricted.gif")
      center no-repeat;
  }
  .text-content {
    font-family: arial;
    padding: 1rem;
  }
`;
