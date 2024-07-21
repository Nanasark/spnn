// import React, { useState, useEffect } from "react";
// import { MediaRenderer } from "thirdweb/react";
// import { createThirdwebClient, getContract, defineChain } from "thirdweb";
// import { getNFT } from "thirdweb/extensions/erc721";
// import { client } from "../../constants/thirdweb";
// import { NFT as NFTType } from "thirdweb";
// import { Image } from "react-native";
// import { ThemedText } from "../ThemedText";
// import { ThemedView } from "../ThemedView";

// function Tester() {
//   const [nft, setNftT] = useState<NFTType | null>(null);

//   useEffect(() => {
//     async function fetchNFT() {
//       const contract = getContract({
//         client,
//         chain: defineChain(80002),
//         address: "0x7E728534baDA44AD13FD69Cb1F4a630705792F4D",
//       });

//       const fetchedNft = await getNFT({
//         contract,
//         tokenId: 3n,
//       });

//       setNftT(fetchedNft);
//     }

//     fetchNFT();

//     // Optionally return a cleanup function if needed
//     // return () => {
//     //   // Cleanup logic
//     // };
//   }, [nft]); // Empty dependency array means this effect runs once on mount

//   return (
//     <>
//       {nft && (
//        <ThemedView>
//         <Image 
//         source={{uri:nft.metadata.image}}
//         />
//          <ThemedText >Helooo</ThemedText>
//        </ThemedView>
        
//       )}
//     </>
//   );
// }

// export default Tester;
