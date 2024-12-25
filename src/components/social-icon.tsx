import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';
const iconMap = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  spotify: FaSpotify,
};
type SocialIconProps = {
  type: keyof typeof iconMap;
  className?: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ type, className }) => {
  const IconComponent = iconMap[type];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default SocialIcon;
