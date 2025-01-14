import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import { StyledH2, CardStyle, CardDisplay, Image, Status, Para, CardFooter } from '../Styles';




const locationsAPI = 'https://rickandmortyapi.com/api/location'

const LocationsList = () => {
  // TODO: Add useState to track data from useEffect

  const [API, setAPI] = useState(locationsAPI);

  const [content, setContent] = useState([]);

  useEffect(() => {
    const getLocations = () => {
      axios.get(locationsAPI)
      .then (res => {
        setContent(res.data.results);
      })
      .catch(e => {
        console.log('Server error', e);
      });
    };

    getLocations();
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [API]);
 console.log(content);

  return (
    <section className='character-list grid-view'>
    {content.map(location => {
      return (
		<CardDisplay className="photo-card">
    {/* <Image src={character.image}></Image> */}
			<CardStyle className="content-wrapper">
				<StyledH2>{location.name}</StyledH2>
				<Card.Content>
            <Status>Location: {location.type} {location.dimension}</Status>
				</Card.Content>
			</CardStyle>
		</CardDisplay>
    )})}
    </section>
	);
};

export default LocationsList;
