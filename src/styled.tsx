import styled from "styled-components";

type props = {}

export const AllDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonDiv = styled.div<{$buttonWidth?: number; $buttonHeight?: number}>`
    height: ${props => props.$buttonHeight}px;
    width: ${props => props.$buttonWidth}px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
    background-color: yellow;
    &&:hover{
        background-color: gray;
    }
`