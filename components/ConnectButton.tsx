import { createWallet, injectedProvider } from "thirdweb/wallets";
import { client } from "@/constants/thirdweb";
import { ThemedView } from "./ThemedView";
import { ThemedButton } from "./ThemedButton";
 
const metamask = createWallet("io.metamask"); 
 
export default function ConnectButton(){
    async function handleConnect() {
        if (injectedProvider("io.metamask")) {
            await metamask.connect({ client });
          }
           
          
          else {
            await metamask.connect({
              client,
              walletConnect: { showQrModal: true },
            });
          }
    }

    return(
        <ThemedView>
            <ThemedButton title="Sign In" onPress={() => handleConnect()}>

            </ThemedButton>
        </ThemedView>
    )
}

