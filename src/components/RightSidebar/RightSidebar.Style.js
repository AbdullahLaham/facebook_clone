import styled from "styled-components";


export const SidebarCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: .8rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
`;
export const SidebarImage = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

`;
export const SidebarTitle = styled.p`
  height: 1rem;
`;

// SponsoredCont section
export const SponsoredCont = styled.div`
  border-bottom: 1px solid #C4C4C4;
`
export const SponsoredItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  margin-bottom: 1rem;

`
export const SponseredImage = styled.img`
  width: 7rem;
  height: 100%;
  padding: .5rem;
  object-fit: cover;

  border-radius: .9rem;

`
export const SponseredTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0;

`
export const SponseredDesc = styled.p`
  color: #000;
  color: #8C8C8C;
  margin-top: -.1rem;
`


// contacts section
export const ContactsCont = styled.div`
  width: 100%;

`
export const ContactsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 .5rem;
`
export const IconsCont = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: #7F7F7F;
  font-weight: bold;
`

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 0 .5rem;
  :hover {
    background-color: #EAEAEA;
  }
  width: 70%;
  border-radius: .4rem;
  cursor: pointer;

`;
export const UserName = styled.p`
  height: 1rem;
  font-weight: 500;

`;























