import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MediaRenderer, useSendTransaction } from 'thirdweb/react';
import { approve } from 'thirdweb/extensions/erc721';
import { getContract, prepareContractCall } from 'thirdweb';
import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NFT } from 'thirdweb';
import { restrictionContract } from '@/utils/contracts';
import { config } from '@/strings/config';
import { PreparedTransaction } from 'thirdweb';
import { ThemedView } from '../ThemedView';
import { ThemedButton } from '../ThemedButton';
import { ThemedText } from '../ThemedText';
import { chain, client } from '@/constants/thirdweb';
import { readContract } from 'thirdweb';
import { useActiveAccount } from 'thirdweb/react';
import { useCollection } from '@/contexts/CollectionProvider';
import { NINJAABI } from '@/utils/NINJAABI';
import { WEAPONABI } from '@/utils/WEAPONABI';
type NFTCardProps = {
  nft: NFT;
  refetch: () => void;
  refetchStakedInfo?: () => void;
};

const NFTCard: React.FC<NFTCardProps> = ({ nft, refetch, refetchStakedInfo }) => {
  const { collectionAddress} = useCollection()
  const hasRemoteImage = nft.metadata.image !== undefined && nft.metadata.image !== null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isStaked, setIsStaked] = useState(false);
  const iconColor = useThemeColor({}, 'text');
  const { mutate: sendTx } = useSendTransaction();

  const ABI = NINJAABI
  const account = useActiveAccount();
  const address = account? account.address:"";

  const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: collectionAddress,
    abi:ABI
  });

  const handleStakePress = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const checkStaked = async() =>{
    const staked = await readContract({
      contract:restrictionContract,
      method: "isStaked",
      params:[address as `0x${string}`,collectionAddress as `0x${string}`,BigInt(nft.id)]
    });
    setIsStaked(staked);
  }

  useEffect(() => {
    if (account?.address) {
      checkStaked ();
    }
  }, [account]);
 

  const handleApproveTransaction = async () => {
    try {
      const transaction = prepareContractCall({
      contract: NFT_CONTRACT,
       method:"approve",
        params:[config.RestrictionContract as `0x${string}`, BigInt(nft.id)]
      }) as PreparedTransaction;

      await sendTx(transaction);
      if(transaction){
        setIsApproved(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnstake = async () => {
    const transaction = prepareContractCall({
      contract: restrictionContract,
      method: 'unstakeNFT',
      params: [collectionAddress as `0x${string}`, BigInt(nft.id)],
      
    }) as PreparedTransaction;

    await sendTx(transaction);
    if (refetch) refetch();
    if (refetchStakedInfo) refetchStakedInfo();
    setIsModalOpen(false);
  };

  const handleStakeTransaction = async () => {
    const transaction = prepareContractCall({
      contract: restrictionContract,
      method: 'stakeNFT',
      params: [collectionAddress as `0x${string}`, BigInt(nft.id)],
      
    }) as PreparedTransaction;

    await sendTx(transaction);
    if (refetch) refetch();
    if (refetchStakedInfo) refetchStakedInfo();
    setIsModalOpen(false);
  };

  return (
   <>
      {isModalOpen ? (
        <ThemedView className="bg-slate-500 border border-violet-950 w-[250px]  flex flex-col gap-1 justify-between p-5 rounded-lg items-center mb-5">
          <TouchableOpacity onPress={handleModalClose} style={styles.closeButton}>
            <Ionicons name="close-circle" size={24} color={iconColor} />
          </TouchableOpacity>
          <ThemedText className="text-lg font-bold mb-2 text-white">You are about to stake:</ThemedText>
         <ThemedView className='bg-transparent'>
            <Image
            source={{ uri: nft.metadata.external_url }}
            style={styles.nftImage} 
             />
         </ThemedView>
         

          {!isApproved ? (
            <ThemedButton  onPress={handleApproveTransaction} className="text-black w-48 h-10 justify-center items-center bg-fuchsia-950 rounded-lg ">
              <ThemedText className="text-white">Approve</ThemedText>
            </ThemedButton>
          ) : (
            <ThemedButton onPress={handleStakeTransaction} className="w-48 h-10 justify-center items-center bg-blue-800 rounded-lg mt-5">
              <ThemedText className="text-white">Stake</ThemedText>
            </ThemedButton>
          )}
        </ThemedView>
      ) : (
        
          <ThemedView className="bg-gray-900 border border-violet-950 w-[250px] h-[300px] flex flex-col gap-1 justify-between p-5 rounded-lg items-center ">
            <ThemedView className='bg-transparent'>
            <Image
        source={ { uri: nft.metadata.external_url}}
        style={styles.nftImage}
       resizeMode='cover'
      />
{/* 
              <MediaRenderer
                client={client} 
                src={nft.metadata.image}
                className='bg-red-900'
             /> */}
            </ThemedView>
          
              <ThemedText className="text-lg font-bold">{nft.metadata.name} </ThemedText>            
            {
              isStaked? (<ThemedButton  onPress={handleUnstake} className=" w-40 h-10 justify-center items-center bg-blue-600 rounded-lg ">
                <ThemedText className="text-white text-[18px] ">UnStake</ThemedText>
              </ThemedButton>):(<ThemedButton  onPress={handleStakePress} className=" w-40 h-10 justify-center items-center bg-blue-600 rounded-lg ">
              <ThemedText className="text-white text-[18px] ">Stake</ThemedText>
            </ThemedButton>)
            }
          </ThemedView>
       
      )}
    </>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalNftImage: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  nftImage: {
    height: 180,
    width: 180,
    backgroundColor: "#016FB9",
    position: "relative",
    borderRadius:20
  },
});

export default NFTCard;
