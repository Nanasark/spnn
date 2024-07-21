import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import SpaceLogin from '@/components/ninja/Login';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useActiveAccount } from 'thirdweb/react';
import { getContract, NFT } from 'thirdweb';
import { getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { PlainParallaxScrollView } from '@/components/PlainParallaxScrollView';
import { readContract } from "thirdweb";
import { WEAPONABI } from '@/utils/WEAPONABI';
import { NINJAABI } from '@/utils/NINJAABI';
import { chain, client } from '@/constants/thirdweb';
import { useCollection } from '@/contexts/CollectionProvider';
import { restrictionContract } from '@/utils/contracts';
import { config } from '@/strings/config';
import NFTCard from '@/components/cards/NFTCard';


export default function Unstake() {
  const account = useActiveAccount();
  const address = account ? account.address : "";
  const [stakedNFTs, setStakedNFTs] = useState<NFT[]>([]);
  const { collectionAddress } = useCollection();

  const ABI =NINJAABI

  const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: collectionAddress,
    abi: ABI
  });

  const getStakedNFTs = async () => {
    console.log('Account Address:', account?.address);

    let stakedNFTs: NFT[] = [];

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
        const staked = await readContract({
          contract: restrictionContract,
          method: "isStaked",
          params: [address as `0x${string}`, collectionAddress as `0x${string}`, BigInt(nft.id)]
        });
        console.log('NFT ID:', nft.id, 'Owner:', staked);

        if (staked === true) {
          stakedNFTs.push(nft);
        }
      }

      console.log('Staked NFTs:', stakedNFTs);
      setStakedNFTs(stakedNFTs);
    } catch (error) {
      console.error('Error fetching staked NFTs:', error);
    }
  };

  useEffect(() => {
    if (account?.address) {
      getStakedNFTs();
    }
  }, [account]);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const iconColor = useThemeColor({}, 'text');

  return (
    <PlainParallaxScrollView className="bg-gray-900"
      headerClassName="bg-[#F2FBE0]"
      header={
        <ThemedView className="flex justify-center items-center p-4 bg-transparent">
          <ThemedView className='bg-transparent'>
            <ThemedText className="bg-transparent text-black" type="title">NFT Staking</ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ThemedView className="bg-[#274156] flex-1 items-center h-screen pt-10 px-4">

        <ThemedView className="bg-transparent relative bottom-[40px] items-center justify-center flex flex-col gap-10">
          <ThemedText className="pt-10 font-extrabold text-[36px] text-white">Staked NFTs</ThemedText>
          <ThemedView className="flex flex-col space-y-5 bg-transparent w-full items-center">
            {stakedNFTs && stakedNFTs.length > 0 ? (
              stakedNFTs.map((nft) => (
                <ThemedView key={nft.id} className="w-full bg-transparent">
                  <NFTCard
                    key={nft.id}
                    nft={nft}
                    refetch={getStakedNFTs}
                  />
                </ThemedView>
              ))
            ) : (
              <ThemedText className="text-white">You haven't staked NFTs</ThemedText>
            )}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </PlainParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  userIconContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    marginHorizontal: 16,
  },
});
