import React from 'react';
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { ThemedButton } from "../ThemedButton";
import { useReadContract } from "thirdweb/react";
import { restrictionContract } from "@/utils/contracts";
import { useCollection } from "@/contexts/CollectionProvider";

type SelectCollectionProps = {
  onSelect: (address: string) => void;
};

export default function SelectCollection({ onSelect }: SelectCollectionProps) {
  const { setCollectionAddress } = useCollection();
  const { data: main } = useReadContract({
    contract: restrictionContract,
    method: "showMainNFT",
  });

  const { data: weapon } = useReadContract({
    contract: restrictionContract,
    method: "showWeaponNFT",
  });

  const { data: referral } = useReadContract({
    contract: restrictionContract,
    method: "showReferralNFT",
  });

  return (
    <ThemedView style={styles.container} className="bg-[#0D1F22] flex-1 justify-center items-center">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText className="text-white text-xl font-extrabold mb-4">Select a Collection Address</ThemedText>
        <ThemedView className='relative flex flex-col gap-5 bg-transparent'>
        {main && (
          <ThemedView className='flex items-center w-[150px] rounded-xl h-[200px]'>
          <ThemedButton
          className='flex items-center justify-center'
            style={styles.button}
            onPress={() => {
              setCollectionAddress(main.colectionAddress);
            }}
          >
             <Image source={require('@/assets/images/ninja.jpg')} 
             style={styles.image} />
          </ThemedButton>
          <ThemedText>Ninjas Nft</ThemedText>
          </ThemedView>
        )}
        {weapon && (
          <ThemedView className='flex items-center w-[150px] rounded-xl h-[200px]'>
          <ThemedButton
            style={styles.button}
            onPress={() => {
              setCollectionAddress(weapon.colectionAddress);
            }}
          >
 <Image source={require('@/assets/images/weapon.jpg')} 
             style={styles.image} />          
             </ThemedButton>
          <ThemedText>Weapon Nft</ThemedText>
          </ThemedView>
        )}
        {referral && (
          <ThemedView className='flex items-center w-[150px] rounded-xl h-[200px]'>
          <ThemedButton
            style={styles.button}
            onPress={() => {
              setCollectionAddress(referral.colectionAddress);
            }}
          >
 <Image source={require('@/assets/images/referral.jpg')} 
             style={styles.image} />       
          </ThemedButton>
          <ThemedText>Referral Nft</ThemedText>
          </ThemedView>
        )}

</ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    overflow: 'hidden', // Ensures the image doesn't overflow the button
    padding: 0, 
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',  // Takes full width of parent
    height: '100%', // Takes full height of parent
  },

});
