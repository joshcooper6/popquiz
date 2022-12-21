import React from "react";
import { Container, Wrap, Logo, SelectArtist } from "./styles";

export default function Header(props) {
    return (<>
        <Container className="flex_col_cent">
            <Wrap>
                <Logo>Pop<span>Quiz</span></Logo>
                {/* <SelectArtist>

                </SelectArtist> */}
            </Wrap>
        </Container>
    </>)
};