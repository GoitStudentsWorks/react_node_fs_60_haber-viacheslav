import { useState, useEffect } from 'react';
import { getOurFriends } from 'redux/pets/petsService';
// import dataFriends from './sponsors.json';

import { CardItem } from './CardItem/CardItem';
import { Title, Wrapper, CardList } from './Friends.styled';

export const OurFriends = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsData = await getOurFriends();
        console.log(friendsData.data);
        SetData([...friendsData.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, []);

  return (
    <Wrapper>
      <Title>Our friends</Title>
      <CardList>
        {data.map(friend => {
          const {
            _id: id,
            email,
            address,
            url,
            addressUrl,
            imageUrl,
            phone,
            title,
            workDays,
          } = friend;
          console.log(workDays);
          return (
            <CardItem
              key={id}
              email={email}
              address={address}
              url={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              phone={phone}
              title={title}
              workDays={workDays}
            />
          );
        })}
      </CardList>
    </Wrapper>
  );
};
