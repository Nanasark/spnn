import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SpaceLogin from '@/components/ninja/Login';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useActiveAccount } from 'thirdweb/react';
import { getContract, NFT } from 'thirdweb';
import { getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFT_CONTRACT } from '@/utils/contracts';
import NFTCard from '@/components/cards/NFTCard';
import { PlainParallaxScrollView } from '@/components/PlainParallaxScrollView';
import { useCollection } from '@/contexts/CollectionProvider';
import { chain, client } from '@/constants/thirdweb';
import { NINJAABI } from '@/utils/NINJAABI';
import { WEAPONABI } from '@/utils/WEAPONABI';

export default function HomeScreen() {
  const { collectionAddress } = useCollection();
  const account = useActiveAccount();
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
  const [stakedNFTs, setStakedNFTs] = useState<NFT[]>([]);
  const address = account ? account.address : "";

  const ABI = NINJAABI
  const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: collectionAddress,
    abi: ABI,
  });

  const getOwnedNFTs = async () => {
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
    <PlainParallaxScrollView
      className="bg-gray-900"
      headerClassName="bg-[#F2FBE0]"
      header={
        <ThemedView className=" bg-transparent flex justify-center items-center p-4">
          <ThemedView className='bg-transparent'>
            <ThemedText className="bg-transparent text-black" type="title">NFT Staking</ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      <ThemedView className="bg-[#274156] flex-1 items-center justify-center px-4">
        <ThemedView className="bg-transparent items-center justify-center flex flex-col gap-10">
          <ThemedText className="pt-10 font-extrabold text-[36px] text-white">Owned NFTs</ThemedText>
          <ThemedView className="flex flex-col space-y-5 bg-transparent w-full items-center">
            {ownedNFTs && ownedNFTs.length > 0 ? (
              ownedNFTs.map((nft) => (
                <ThemedView key={nft.id} className="w-full bg-transparent pb-10">
                  <NFTCard
                    key={nft.id}
                    nft={nft}
                    refetch={getOwnedNFTs}
                  />
                </ThemedView>
              ))
            ) : (
              <ThemedText className="text-white">You own 0 NFTs</ThemedText>
            )}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </PlainParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    marginHorizontal: 16,
  },
});
