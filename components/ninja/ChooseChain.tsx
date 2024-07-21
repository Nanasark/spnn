import { Link } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { defineChain, polygonAmoy } from "thirdweb/chains";

export default function ChooseChain() {
    const polygonTest = defineChain(80002);
    const chainId = polygonAmoy || polygonTest; // Ensure chainId is a valid value

    return (
        <ThemedView className="flex flex-col items-center justify-center gap-5 h-screen w-screen bg-[#D1D1D1]">
            <ThemedView className="w-[100px] h-[50px] bg-orange-400 border-[2px] rounded-sm border-blue-900">
                <Link href={`/chain/${chainId}`}> {/* Use backticks for template literals */}
                    <ThemedText className="text-black font-semibold">polygon</ThemedText>
                </Link>
            </ThemedView>
            
            <ThemedView className="w-[50px] h-[50px] bg-orange-400 border-[2px] rounded-sm border-blue-900">
                <Link href={`/chain/${chainId}`}>
                    <ThemedText className="text-black font-semibold">test</ThemedText>
                </Link>
            </ThemedView>
            
            <ThemedView className="w-[50px] h-[50px] bg-orange-400 border-[2px] rounded-sm border-blue-900">
                <Link href={`/chain/${chainId}`}>
                    <ThemedText className="text-black font-semibold">other</ThemedText>
                </Link>
            </ThemedView>
        </ThemedView>
    );
}
