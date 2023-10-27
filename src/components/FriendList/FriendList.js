
import { FriendListItem } from './FriendListItem';
  import {ListFriends} from './FriendList.styled'

export  const FriendList = ({friends}) => {
    return(
      <ListFriends>
      {friends.map(friend => ( 
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
        ))}
    </ListFriends>
    )
      }
  
 
