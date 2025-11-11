const ImageKit = require("imagekit");

const imageKit = new ImageKit({
    publicKey: process.env.IMAGE_PUBLIC_KEY,
    privateKey: process.env.IMAGE_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file,fileName){ 
    const result= await imageKit.upload({
        file:file,
        fileName:fileName,
    });

    return result;
}

module.exports={
    uploadFile
}