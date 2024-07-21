import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { Stack } from "expo-router";
import SpaceLogin from "@/components/ninja/Login";
import SelectCollection from "@/components/ninja/SellectCollection";
import { CollectionProvider, useCollection } from "@/contexts/CollectionProvider";

function MainContent() {
  const { collectionAddress, setCollectionAddress } = useCollection();

  return (
    <>
      {collectionAddress ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <SelectCollection  onSelect={setCollectionAddress} />
      )}
    </>
  );
}

export function MainNav() {
  const account = useActiveAccount();

  return (
    <CollectionProvider>
      {account ? <MainContent /> : <SpaceLogin />}
    </CollectionProvider>
  );
}
