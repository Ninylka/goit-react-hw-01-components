
import { LiItemFriends, SpanStatus, FotoFriends, NameFriends } from './FriendList.styled'
export  const FriendListItem = ({friend}) => {
    const { avatar, name, isOnline } = friend;
    return(
          <LiItemFriends key={friend.id}>
             <SpanStatus isOnline={isOnline}>{isOnline}</SpanStatus>
  <FotoFriends src={avatar} alt={name} width="48" />
  <NameFriends>{name}</NameFriends>
          </LiItemFriends>
        );
  };
 
