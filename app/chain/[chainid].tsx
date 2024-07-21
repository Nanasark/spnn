import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ConnectButton from "@/components/ninja/ConnectButton";
import { useLocalSearchParams } from 'expo-router';

export default function ChooseChain(){
    const {chainid} = useLocalSearchParams()
    const defaultChain = 80002; // Example default chain ID
    let selectedChain: number;

    if (chainid !== undefined) {
        const chainString = Array.isArray(chainid) ? chainid[0] : chainid;
        selectedChain = parseInt(chainString, 10);
        if (isNaN(selectedChain)) {
            selectedChain = defaultChain;
        }
    } else {
        selectedChain = defaultChain;
    }

    return (
        <ThemedView className="w-screen h-screen flex items-center justify-center">
            <ThemedText>Hello {chainid}</ThemedText>
            {/* <ConnectButton chain={selectedChain} /> */}
        </ThemedView>
    );
}