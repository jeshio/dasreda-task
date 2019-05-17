import mediaSizes from './mediaSizes';

const mediaDevices = {
	mobileS: `(min-width: ${mediaSizes.mobileS})`,
	mobileM: `(min-width: ${mediaSizes.mobileM})`,
	mobileL: `(min-width: ${mediaSizes.mobileL})`,
	tablet: `(min-width: ${mediaSizes.tablet})`,
	laptop: `(min-width: ${mediaSizes.laptop})`,
	laptopL: `(min-width: ${mediaSizes.laptopL})`,
	desktop: `(min-width: ${mediaSizes.desktop})`,
	desktopL: `(min-width: ${mediaSizes.desktop})`,
};

export { mediaDevices };

export default mediaDevices;
