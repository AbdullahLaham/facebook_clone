import styled from "styled-components";
export const StoriesCont = styled.div`
    width: 30rem;
    max-width: 30rem;
    overflow: hidden;
    background-color: white;
    margin: 1rem;
    border-radius: 1rem;
    padding: 0 1rem;
    padding-bottom: .5rem;
`;

export const SidebarHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: .5rem;
  padding: 0;
  margin: .1rem;
  cursor: pointer;
  color: #6D6D6D;
  border-radius: .2rem;
  font-size: 1.2rem;
  :hover {
    background-color: #F1F1F1;
  }
  gap: 1rem;
  width: 50%;
`;


export const StoryItem = styled.div`
  display: flex;
  justify-content: start;
  position: relative;
  width: 8rem;
  min-width: 8rem;
  background-color: red;
  height: 13.5rem;
  margin: .2rem;
  border-radius: 1rem;
  cursor: pointer;
  :hover {
    opacity: .9;
  }
`;

export const StoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 1rem;
  
`;


export const StoriesContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;

`;
export const UserImage = styled.div`
  

`;
