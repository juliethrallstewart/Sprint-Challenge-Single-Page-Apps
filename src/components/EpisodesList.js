import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import { StyledH2, CardStyle, CardDisplay, Image, Status, Para, CardFooter } from '../Styles';




const episodesAPI = 'https://rickandmortyapi.com/api/episode'

const EpisodesList = () => {
  // TODO: Add useState to track data from useEffect

  const [API, setAPI] = useState(episodesAPI);

  const [content, setContent] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
      axios.get(episodesAPI)
      .then (res => {
        setContent(res.data.results);
      })
      .catch(e => {
        console.log('Server error', e);
      });
    };

    getEpisodes();
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [API]);
 console.log(content);

  return (
    <section className='character-list grid-view'>
    {content.map(episode => {
      return (
		<CardDisplay className="photo-card">
    {/* <Image src={character.image}></Image> */}
			<CardStyle className="content-wrapper">
				<StyledH2>{episode.name}</StyledH2>
				<Card.Content>
            {/* <Status>Location: {location.type} {location.dimension}</Status> */}
				</Card.Content>
			</CardStyle>
		</CardDisplay>
    )})}
    </section>
	);
};

export default EpisodesList;
