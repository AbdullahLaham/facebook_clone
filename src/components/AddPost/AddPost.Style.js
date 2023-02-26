import styled from "styled-components";
export const AddPostCont = styled.div`
    width: 30rem;
    max-width: 30rem;
    overflow: hidden;
    background-color: white;
    margin: 1rem;
    border-radius: 1rem;
    padding: 0 1rem;
    padding-bottom: .5rem;
    padding: 1rem;
`;

export const InputForm = styled.form `
    width: 100%;
    margin: .5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    padding-bottom: .6rem;
`;

export const Input = styled.input `
    width: 80%;
    height: 2.5rem;
    background-color: #F1F1F1;
    border: none;
    outline: none;
    ::placeholder {
        font-size: 1rem;
    }
    max-width: 30rem;
    border-radius: 1rem;
    padding: 0 1rem;

`;

export const PostTools = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ToolItem = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;
    cursor: pointer;
    :hover {
        background-color: #F1F1F1;
        border-radius: .8rem;
    }
`;

