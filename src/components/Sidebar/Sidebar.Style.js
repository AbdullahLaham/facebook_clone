import styled from "styled-components";


export const SidebarCont = styled.div`
  min-width: 21%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: .8rem;
`;

export const SidebarItem = styled.div`
  width: 100%;
  display: flex;
  padding: 0 .4rem;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  cursor: pointer;
  :hover {
    background-color: #EAEAEA;
    border-radius: .3rem;
  }
`;
export const SidebarImage = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

`;
export const SidebarTitle = styled.p`
  height: 1rem;
  font-weight: 500;

`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;
export const UserName = styled.p`
  height: 1rem;
  font-weight: 500;

`;