import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  secure: true
});

cloudinary.config({
    cloud_name: 'dq93uuksm', 
    api_key: '451651892188264',       
    api_secret: 'NQsMH230TkacxPAoJZ2U8htkiMc', 
  });
export const getAssetInfo = async (publicId) => {
    const options = {
      colors: true,
    };

    try {
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};