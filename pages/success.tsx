import { Container } from "@/styles/utils";
import { NextPage } from "next";
import styled from "styled-components";

const Main = styled.main`
    ${Container};
    min-height: 589px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Success: NextPage = () => {
    return (
        <Main>
            <span>Compra realizada com sucesso!</span>
        </Main>
    )
}

export default Success