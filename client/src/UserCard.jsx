import React from 'react';
import userImage from './assets/Rectangle 10.png';

const UserCard = () => {
  const user = {
    name: 'John Doe',
    email: 'john@doe.com',
    logoUrl: userImage,
  };

  const cardStyle = {
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '170px',
    height: 'auto',
    backgroundColor: 'white',
  };

  const userInfoStyle = {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const leftSideStyle = {
    textAlign: 'left',
    fontSize: '1rem',
    padding: '0',
  };

  const rightSideStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '60%',
    height: '60%',
    objectFit: 'cover',
    margin: '5px',
    padding: '10px',
  };

  const userDataStyle = {
    margin: '0',
  };

  return (
    <div style={cardStyle} className="user-card">
      <div style={userInfoStyle} className="user-info">
        <div style={leftSideStyle} className="left-side">
          <p style={userDataStyle}><b>{user.name}</b></p>
          <p style={userDataStyle}>{user.email}</p>
        </div>
      </div>
      <div style={rightSideStyle} className="right-side">
        <img style={imageStyle} src={user.logoUrl} alt="Logo" />
      </div>
    </div>
  );
};

export default UserCard;
