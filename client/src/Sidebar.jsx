import React from 'react';
import backgroundImage from './assets/Rectangle 1.png';
import mainLogoImage from './assets/Briefcase.png';
import mainLogoNameImage from './assets/StatBoard.png';
import dashboardLogoImage from './assets/Circled Menu.png';
import supportLogoImage from './assets/Support.png';
import pluginsLogoImage from './assets/Puzzle.png';
import helpLogoImage from './assets/Help.png';
import logoutLogoImage from './assets/Shutdown.png';

const imageUrls = {
    mainLogo: mainLogoImage,
    mainLogoName: mainLogoNameImage,
    dashboard: dashboardLogoImage,
    support: supportLogoImage,
    plugins: pluginsLogoImage,
    help: helpLogoImage,
    logout: logoutLogoImage,
};

const Sidebar = () => {
    const sidebarStyle = {
        width: '100%',
        maxWidth: '250px',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '20px',
        color: 'white',
    };

    const logoContainerStyle = {
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const logoImageStyle = {
        width: '80px',
        height: '80px',
    };

    const logoNameImageStyle = {
        width: '100px',
        marginTop: '10px',
    };

    const optionsStyle = {
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const optionStyle = {
        display: 'flex',
        marginBottom: '15px',
        padding: '10px 20px',
        borderRadius: '10px 0px 0px 10px',
        cursor: 'pointer',
        marginLeft: '20px',
    };

    const selectedStyle = {
        backgroundColor: 'white',
        color: 'black',
    };

    const optionImgStyle = {
        width: '20px',
        height: '20px',
        marginRight: '10px',
    };

    const logoutStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: '#f82f2f',
    };

    return (
        <div style={sidebarStyle}>
            <div style={logoContainerStyle}>
                <img src={imageUrls.mainLogo} alt="Logo" style={logoImageStyle} />
                <img src={imageUrls.mainLogoName} alt="Logo Name" style={logoNameImageStyle} />
            </div>

            <div style={optionsStyle}>
                <div style={{ ...optionStyle, ...selectedStyle }}>
                    <img src={imageUrls.dashboard} alt="Dashboard Icon" style={optionImgStyle} />
                    <span>Dashboard</span>
                </div>

                <div style={optionStyle}>
                    <img src={imageUrls.support} alt="Support Icon" style={optionImgStyle} />
                    <span>Support</span>
                </div>

                <div style={optionStyle}>
                    <img src={imageUrls.plugins} alt="Plugins Icon" style={optionImgStyle} />
                    <span>Plugins</span>
                </div>

                <div style={optionStyle}>
                    <img src={imageUrls.help} alt="Help Icon" style={optionImgStyle} />
                    <span>Help</span>
                </div>
            </div>

            <div style={logoutStyle}>
                <span>Logout</span>
                <img src={imageUrls.logout} alt="Logout Icon" style={{ padding: '10px', cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default Sidebar;
