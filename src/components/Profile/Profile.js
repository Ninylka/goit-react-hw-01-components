
import {Container, DivDescription, Foto, Name, Tag, Location, ListStates, SpanLi, SpanQuant, LiItemStates, } from './Profile.styled'

export const Profile = ({ card: { avatar, username, tag, location , stats :{ followers, views, likes }} }) => {
    return (
  <Container>
    <DivDescription>
    <Foto
      src={avatar}
      alt={username}
      width="220" 
      height="220"
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </DivDescription>
  <ListStates>
    <LiItemStates>
      <SpanLi>Followers</SpanLi>
      <SpanQuant>{followers}</SpanQuant>
    </LiItemStates>
    <LiItemStates>
      <SpanLi>Views</SpanLi>
      <SpanQuant>{views}2000</SpanQuant>
    </LiItemStates>
    <LiItemStates>
      <SpanLi>Likes</SpanLi>
      <SpanQuant>{likes}</SpanQuant>
    </LiItemStates>
  </ListStates>
  </Container>
    );
  };

  

