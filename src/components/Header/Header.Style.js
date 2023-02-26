import styled from "styled-components"
export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem .8rem;
  background-color: white;
  
`
export const InputContainer = styled.div`
    position: relative;

`

export const SearchIcon = styled.div`
    position: absolute;
    left: .7rem;
    top: .7rem;
    font-size: 1.1rem;
    color: gray;
    color: black;
`

export const Input = styled.input`
  width: 100%;
  height: 1rem;
  font-size: 14px;
  padding: .8rem;
  border: none;
  border-radius: 3px;
  outline: none;
  background: #F4FCFF;
  ::placeholder {
    color: #b9b9b9;
  }
  padding-left: 2.5rem;
  border-radius: 2rem;
  position: relative;
`;
export const LogoCont = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  
`;
export const IconCont = styled.div`
    padding: .5rem 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding-bottom: .5rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;

    :hover {
      background-color: #E7E7E7;
    }
    :active {
      border-bottom: 3px solid blue;
    }
    margin: 0 1rem ;
`

export const IconsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;

`
export const RightIcon = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 1rem;
  width: 1rem;
  :hover {
    background-color: #D8D8FF;
  }
  
  margin: 0 .3rem;
  background-color: #E7E7FF;
  border-radius: 50%;
  cursor: pointer;
  
`