import React, { useContext, useState, useEffect } from "react";
import { ArtistContext } from "../../context/ArtistContext";
import { Container, Wrap, Logo, SelectArtist } from "./styles";
import axios from "axios";

export default function Header(props) {
    const { artist, setArtist } = useContext(ArtistContext);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('/getArtists').then((res) => {
          setArtists(res.data);
        });
      }, []);

    const options = artists.map(artist => <option key={artist} children={artist} value={artist} />);

    return (<>
        <Container className="flex_col_cent">
            <Wrap>
                <Logo>Pop<span>Quiz</span></Logo>
                <SelectArtist onChange={(e) => {setArtist(e.target.value)}} children={options} />
            </Wrap>
        </Container>
    </>)
};