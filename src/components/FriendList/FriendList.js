import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
        ))}
    </ul>
);

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}

export default FriendList;