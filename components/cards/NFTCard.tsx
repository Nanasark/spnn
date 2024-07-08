import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MediaRenderer, TransactionButton } from 'thirdweb/react';
import { approve } from 'thirdweb/extensions/erc721';
import { prepareContractCall } from 'thirdweb';
import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NFT } from 'thirdweb';
import { WRAPPED_STAKING_CONTRACT, NFT_CONTRACT } from '@/utils/contracts';
import { config } from '@/strings/config';
import { PreparedTransaction } from 'thirdweb';
import { ThemedView } from '../ThemedView';
import { client } from '@/constants/thirdweb';

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
  const handleStakePress = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleApproveTransaction = async (): Promise<PreparedTransaction<any>> => {
    return approve({
      contract: NFT_CONTRACT,
      to: config.WrappedContract as `0x${string}`,
      tokenId: nft.id,
    });
  };

  const handleStakeTransaction = async (): Promise<PreparedTransaction<any>> => {
    return prepareContractCall({
      contract: WRAPPED_STAKING_CONTRACT,
      method: 'stakeNFT',
      params: [config.nftContract as `0x${string}`, nft.id],
    });
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles. nftContainer}>
      <Image
          source={hasRemoteImage ? { uri:nft.metadata.image } : require('@/assets/images/react-logo.png')}
          style={styles.nftImage}
          resizeMode="contain"
        />
      
        <View style={styles.cardContent}>
          <Text style={styles.nftName}>{nft.metadata.name}</Text>
          <Text style={styles.nftDescription}>{nft.metadata.description}</Text>
        </View>
     
      </ThemedView>
      

      {isModalOpen && (
        <ThemedView style={styles.modalContainer}>
          <TouchableOpacity onPress={handleModalClose} style={styles.closeButton}>
            <Ionicons name="close-circle" size={24} color={iconColor} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>You are about to stake:</Text>
          <Image
            source={{ uri: nft.metadata.image }}
            style={styles.modalNftImage}
            resizeMode="cover"
          />
          {!isApproved ? (
            <TransactionButton
              transaction={handleApproveTransaction}
              style={styles.transactionButton}
              onTransactionConfirmed={() => setIsApproved(true)}
            >
              Approve
            </TransactionButton>
          ) : (
            <TransactionButton
              transaction={handleStakeTransaction}
              style={styles.transactionButton}
              onTransactionConfirmed={() => {
                alert('Staked!');
                setIsModalOpen(false);
                refetch();
              }}
            >
              Stake
            </TransactionButton>
          )}
        </ThemedView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#466060",
    elevation: 4, // For Android shadow
    shadowColor: '#000000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  nftContainer:{
    backgroundColor:"#FF9505"
  },
  nftImage: {
    position:"relative",
    left:15,
    top:5,
    height: 150,
    width: 150,
    backgroundColor:"#016FB9"
  },
  cardContent: {
    padding: 10,
  },
  nftName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  nftDescription: {
    fontSize: 14,
    color: '#666666',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  modalNftImage: {
    borderRadius: 10,
    marginBottom: 10,
    height: 200,
    width: 200,
  },

  transactionButton: {
    width: 200,
    marginTop: 20,
  },
});

export default NFTCard;
