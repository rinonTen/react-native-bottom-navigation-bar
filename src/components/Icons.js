import {Image } from 'react-native';

export const HomeIcon = ({isActive}) => {
    let homeIcon;
    if (isActive) {
      homeIcon = Platform.select({
        ios: require('../assets/icons/home_focused.png'),
        android: require('../assets/icons/home_focused.png'),
      });
    } else {
      homeIcon = Platform.select({
        ios: require('../assets/icons/home.png'),
        android: require('../assets/icons/home.png'),
      });
    }
    return <Image source={homeIcon} resizeMode="contain" />;
  };
  
  export const FavoriteScreenIcon = ({isActive}) => {
    let favoriteIcon;
    if (isActive) {
      favoriteIcon = Platform.select({
        ios: require('../assets/icons/favorite_focused.png'),
        android: require('../assets/icons/favorite_focused.png'),
      });
    } else {
      favoriteIcon = Platform.select({
        ios: require('../assets/icons/favorite.png'),
        android: require('../assets/icons/favorite.png'),
      });
    }
    return <Image source={favoriteIcon} resizeMode="contain" />;
  };
  
  export const DetailsScreenIcon = ({isActive}) => {
    let detailsIcon;
    if (isActive) {
      detailsIcon = Platform.select({
        ios: require('../assets/icons/details_focused.png'),
        android: require('../assets/icons/details_focused.png'),
      });
    } else {
      detailsIcon = Platform.select({
        ios: require('../assets/icons/details.png'),
        android: require('../assets/icons/details.png'),
      });
    }
    return <Image source={detailsIcon} resizeMode="contain" />;
  };
  
  export const MenuScreenIcon = ({isActive}) => {
    let menuIcon;
    if (isActive) {
      menuIcon = Platform.select({
        ios: require('../assets/icons/icon_focused.png'),
        android: require('../assets/icons/icon_focused.png'),
      });
    } else {
      menuIcon = Platform.select({
        ios: require('../assets/icons/icon.png'),
        android: require('../assets/icons/icon.png'),
      });
    }
    return <Image source={menuIcon} resizeMode="contain" />;
  };
  
  export const ProfileScreenIcon = ({isActive}) => {
    let profileIcon;
    if (isActive) {
      profileIcon = Platform.select({
        ios: require('../assets/icons/profile_focused.png'),
        android: require('../assets/icons/profile_focused.png'),
      });
    } else {
      profileIcon = Platform.select({
        ios: require('../assets/icons/profile.png'),
        android: require('../assets/icons/profile.png'),
      });
    }
    return <Image source={profileIcon} resizeMode="contain" />;
  };
  