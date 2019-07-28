import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import { StyledH2, CardStyle, CardDisplay, Image, Status, Para, CardFooter } from '../Styles';




const charactersAPI = 'https://rickandmortyapi.com/api/character/'

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect

  const [API, setAPI] = useState(charactersAPI);

  const [content, setContent] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios.get(charactersAPI)
      .then (res => {
        setContent(res.data.results);
      })
      .catch(e => {
        console.log('Server error', e);
      });
    };

    getCharacters();
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [API]);
 console.log(content);

  return (
    <section className='character-list grid-view'>
    {content.map(character => {
      return (
		<CardDisplay className="photo-card">
    <Image src={character.image}></Image>
			<CardStyle className="content-wrapper">
				<StyledH2>{character.name}</StyledH2>
				<Card.Content>
          <Status>{character.species} {character.status}</Status>
					<Para>Location: {character.location.name}</Para>
					<Para>Origin: {character.origin.name}</Para>
				</Card.Content>
			</CardStyle>
      <CardFooter>Episodes</CardFooter>

		</CardDisplay>
    )})}
    </section>
	);
};

export default CharacterList;


