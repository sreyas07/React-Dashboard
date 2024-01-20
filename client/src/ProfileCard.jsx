import React from 'react';
import profileImage from './assets/media.png';
import facebookLogo from './assets/facebook.png';
import instagramLogo from './assets/instagram.png';
import twitterLogo from './assets/twitter.png';

const ProfileCard = () => {
  const profileData = {
    photoUrl: profileImage,
    name: 'John Doe',
    role: 'CEO',
    contactLinks: [
      { logoUrl: facebookLogo, link: 'https://facebook.com/in/johndoe' },
      { logoUrl: instagramLogo, link: 'https://instagram.com/johndoe' },
      { logoUrl: twitterLogo, link: 'https://twitter.com/johndoe' },
    ],
  };

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const photoStyles = {
    width: '100%',
    height: 'auto',
    maxHeight: '60%',
    objectFit: 'cover',
  };

  const detailsStyles = {
    width: 'fit-content',
    padding: '0px 10px',
  };

  const linkStyles = {
    margin: '10px',
  };

  const mediaQueryStyles = {
    '@media (max-width: 600px)': {
      width: '80%',
    },
  };

  return (
    <div style={{ display: 'flex', width: '250px', height: '350px', margin: '0rem 2rem', backgroundColor: 'white' }}>
      <div style={{ ...cardStyles, ...mediaQueryStyles }}>
        <img src={profileData.photoUrl} alt={profileData.name} style={photoStyles} />
        <div style={detailsStyles}>
          <h4>{profileData.name}</h4>
          <p>{profileData.role}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {profileData.contactLinks.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" style={linkStyles}>
              <img src={link.logoUrl} alt={`Link ${index + 1}`} style={{ width: '30px', height: '30px' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
