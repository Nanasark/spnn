import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import SpaceLogin from '@/components/ninja/Login';
import { ParallaxScrollView } from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useActiveAccount } from 'thirdweb/react';
import { NFT } from 'thirdweb';
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFT_CONTRACT } from '@/utils/contracts';
import NFTCard from '@/components/cards/NFTCard';
import { config } from '@/strings/config';



export default function HomeScreen() {
  const account = useActiveAccount();
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

  const getOwnedNFTs = async () => {
    const ca = config.nftContract as `0x${string}`;
    console.log('Contract Address:', ca);
    console.log('Account Address:', account?.address);

    let ownedNFTs: NFT[] = [];

    try {
      const totalNFTSupply = await totalSupply({
        contract: NFT_CONTRACT,
      });
      console.log('Total NFT Supply:', totalNFTSupply.toString());

      const nfts = await getNFTs({
        contract: NFT_CONTRACT,
        start: 0,
        count: parseInt(totalNFTSupply.toString()),
      });
      console.log('Fetched NFTs:', nfts);

      const normalizedAccountAddress = account?.address.toLowerCase();

      for (let nft of nfts) {
        const owner = await ownerOf({
          contract: NFT_CONTRACT,
          tokenId: nft.id,
        });
        console.log('NFT ID:', nft.id, 'Owner:', owner);

        if (owner.toLowerCase() === normalizedAccountAddress) {
          ownedNFTs.push(nft);
        }
      }

      console.log('Owned NFTs:', ownedNFTs);
      setOwnedNFTs(ownedNFTs);
    } catch (error) {
      console.error('Error fetching owned NFTs:', error);
    }
  };

  useEffect(() => {
    if (account?.address) {
      getOwnedNFTs();
    }
  }, [account]);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const iconColor = useThemeColor({}, 'text');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleCollapse} style={styles.userIconContainer}>
          <Ionicons name="person-circle" size={40} color={iconColor} />
        </TouchableOpacity>
      </View>

      {!isCollapsed && (
        <View style={styles.loginContainer}>
          <SpaceLogin />
        </View>
      )}

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">NFT Staking</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText>Owned NFTs</ThemedText>
        <ThemedView style={styles.nftContainer}>
          {ownedNFTs && ownedNFTs.length > 0 ? (
            ownedNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                refetch={getOwnedNFTs}
              />
            ))
          ) : (
            <ThemedText>You own 0 NFTs</ThemedText>
          )}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container:{
flex:1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  userIconContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    marginHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  sectionContainer: {
    flex: 1,
    flexDirection:"column",
    
    marginVertical: 0,
    padding: 5,
    backgroundColor: '#f0f0f0', // Example background color
    borderRadius: 8,
  },
  nftContainer: {
    height:200,
    width:200,
  },
});
