import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSendTransaction } from 'thirdweb/react';
import { approve } from 'thirdweb/extensions/erc721';
import { prepareContractCall } from 'thirdweb';
import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NFT } from 'thirdweb';
import { WRAPPED_STAKING_CONTRACT, NFT_CONTRACT } from '@/utils/contracts';
import { config } from '@/strings/config';
import { PreparedTransaction } from 'thirdweb';
import { ThemedView } from '../ThemedView';
import { ThemedButton } from '../ThemedButton';
import { ThemedText } from '../ThemedText';

type NFTCardProps = {
  nft: NFT;
  refetch: () => void;
  refetchStakedInfo?: () => void;
};

const NFTCard: React.FC<NFTCardProps> = ({ nft, refetch, refetchStakedInfo }) => {
  const hasRemoteImage = nft.metadata.image !== undefined && nft.metadata.image !== null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const iconColor = useThemeColor({}, 'text');
  const { mutate: sendTx } = useSendTransaction();

  const handleStakePress = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleApproveTransaction = async () => {
    try {
      const transaction = approve({
        contract: NFT_CONTRACT,
        to: config.WrappedContract as `0x${string}`,
        tokenId: nft.id,
      }) as PreparedTransaction;

      await sendTx(transaction);

      setIsApproved(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStakeTransaction = async () => {
    const transaction = prepareContractCall({
      contract: WRAPPED_STAKING_CONTRACT,
      method: 'stakeNFT',
      params: [config.nftContract as `0x${string}`, nft.id],
    }) as PreparedTransaction;

    await sendTx(transaction);
    if (refetch) refetch();
    if (refetchStakedInfo) refetchStakedInfo();
    setIsModalOpen(false);
  };

  return (
   <>
      {isModalOpen ? (
        <ThemedView className="bg-gray-900 border border-violet-950 w-[250px]  flex flex-col gap-1 justify-between p-5 rounded-lg items-center mb-5">
          <TouchableOpacity onPress={handleModalClose} style={styles.closeButton}>
            <Ionicons name="close-circle" size={24} color={iconColor} />
          </TouchableOpacity>
          <ThemedText className="text-lg font-bold mb-2 text-white">You are about to stake:</ThemedText>
          <Image
            source={{ uri: nft.metadata.image }}
            style={styles.modalNftImage}
            resizeMode="cover"
          />
          {!isApproved ? (
            <ThemedButton onPress={handleApproveTransaction} className="w-48 h-10 justify-center items-center bg-blue-600 rounded-lg mt-5">
              <ThemedText className="text-white">Approve</ThemedText>
            </ThemedButton>
          ) : (
            <ThemedButton onPress={handleStakeTransaction} className="w-48 h-10 justify-center items-center bg-blue-600 rounded-lg mt-5">
              <ThemedText className="text-white">Stake</ThemedText>
            </ThemedButton>
          )}
        </ThemedView>
      ) : (
        
          <ThemedView className="bg-gray-900 border border-violet-950 w-[250px]  flex flex-col gap-1 justify-between p-5 rounded-lg items-center mb-5">
            <Image
              source={hasRemoteImage ? { uri: nft.metadata.image } : require('@/assets/images/react-logo.png')}
              style={styles.nftImage}
              resizeMode="contain"
            />
          
              <ThemedText className="text-lg font-bold">{nft.metadata.name}</ThemedText>            
            <ThemedButton onPress={handleStakePress} className="w-40 h-10 justify-center items-center bg-blue-600 rounded-lg ">
              <ThemedText className="text-white">Stake</ThemedText>
            </ThemedButton>
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
