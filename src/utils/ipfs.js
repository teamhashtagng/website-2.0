//Declare IPFS
import { create } from 'ipfs-http-client';

const ipfsClient = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const uploadToIPFS = async (data) => {
    const ipfsFile = await ipfsClient.add(data)
    return 'https://ipfs.io/ipfs/' + ipfsFile.hash
}