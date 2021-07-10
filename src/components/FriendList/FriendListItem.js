import React from 'react';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="avatar" width="48" />
        <p class="name">{name}</p>
    </>
);

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;