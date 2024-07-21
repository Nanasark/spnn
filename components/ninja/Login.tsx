import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
} from "react-native";


import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
    useActiveAccount,
    useConnect,
    useDisconnect,
    useActiveWallet,
    useAutoConnect,
    useWalletBalance,
    useConnectedWallets,
    useSetActiveWallet,
} from "thirdweb/react";
import { chain, client } from "@/constants/thirdweb";
import { shortenAddress } from "thirdweb/utils";
import { ThemedButton } from "@/components/ThemedButton";
import { useEffect, useState } from "react";
import { createWallet, getWalletInfo, Wallet } from "thirdweb/wallets";

const metamaskWallet = createWallet("io.metamask");


const wallets = [
    metamaskWallet,
];
const externalWallets = [metamaskWallet];

export default function HomeScreen() {
    return (
      <ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Connecting Wallets</ThemedText>
            </ThemedView>
            <ConnectSection />
			</ThemedView>
    );
}

function ConnectSection() {
    const wallet = useActiveWallet();
    const autoConnect = useAutoConnect({
        client,
        wallets,
    });
    const autoConnecting = autoConnect.isLoading;

    if (autoConnecting) {
        return (
            <ThemedView style={styles.loadingContainer}>
                <ActivityIndicator />
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.stepContainer}>
            {wallet ? (
                <ConnectedSection />
            ) : (
                <ThemedView style={styles.externalWalletContainer}>
                    <ThemedText type="defaultSemiBold">External Wallet</ThemedText>
                    <ThemedView style={styles.rowContainer}>
                        <ConnectExternalWallet key={metamaskWallet.id} {...metamaskWallet} />
                    </ThemedView>
                </ThemedView>
            )}
        </ThemedView>
    );
}

function ConnectExternalWallet(wallet: Wallet) {
    const { connect, isConnecting, error } = useConnect();
    const [walletName, setWalletName] = useState<string | null>(null);
    const [walletImage, setWalletImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchWalletName = async () => {
            const [name, image] = await Promise.all([
                getWalletInfo(wallet.id).then((info) => info.name),
                getWalletInfo(wallet.id, true),
            ]);
            setWalletName(name);
            setWalletImage(image);
        };
        fetchWalletName();
    }, [wallet]);

    const connectExternalWallet = async () => {
        await connect(async () => {
            await wallet.connect({
                client,
            });
            return wallet;
        });
    };

    return (
        walletImage &&
        walletName && (
            <ThemedView style={styles.walletContainer}>
                {isConnecting && !error ? (
                    <ActivityIndicator style={styles.walletLoading} />
                ) : (
                    <>
                        <Pressable onPress={connectExternalWallet} disabled={isConnecting}>
                            <Image
                                source={{ uri: walletImage ?? "" }}
                                style={styles.walletImage}
                            />
                        </Pressable>
                        <ThemedText style={styles.walletName} type="defaultSemiBold">
                            {walletName.split(" ")[0]}
                        </ThemedText>
                    </>
                )}
            </ThemedView>
        )
    );
}

function ConnectedSection() {
    const { disconnect } = useDisconnect();
    const account = useActiveAccount();
    const activeWallet = useActiveWallet();
    const setActive = useSetActiveWallet();
    const connectedWallets = useConnectedWallets();
    const balanceQuery = useWalletBalance({
        address: account?.address,
        chain: activeWallet?.getChain(),
        client,
    });

    const switchWallet = async () => {
        const activeIndex = connectedWallets.findIndex(
            (w) => w.id === activeWallet?.id,
        );
        const nextWallet =
            connectedWallets[(activeIndex + 1) % connectedWallets.length];
        if (nextWallet) {
            await setActive(nextWallet);
        }
    };

    return (
        <>
            {account ? (
                <>
                    <ThemedText>Connected Wallets:</ThemedText>
                    <ThemedView style={styles.connectedWalletsContainer}>
                        {connectedWallets.map((w, i) => (
                            <ThemedText key={w.id + i} type="defaultSemiBold">
                                - {w.id} {w.id === activeWallet?.id ? "✅" : ""}
                            </ThemedText>
                        ))}
                    </ThemedView>
                    <ThemedView style={styles.spacing} />
                    <ThemedText>
                        Address:{" "}
                        <ThemedText type="defaultSemiBold">
                            {shortenAddress(account.address)}
                        </ThemedText>
                    </ThemedText>
                    <ThemedText>
                        Chain:{" "}
                        <ThemedText type="defaultSemiBold">
                            {activeWallet?.getChain()?.name || "Unknown"}
                        </ThemedText>
                    </ThemedText>
                    <ThemedText>
                        Balance:{" "}
                        {balanceQuery.data && (
                            <ThemedText type="defaultSemiBold">
                                {`${balanceQuery.data?.displayValue.slice(0, 8)} ${
                                    balanceQuery.data?.symbol
                                }`}
                            </ThemedText>
                        )}
                    </ThemedText>
                    <ThemedView style={styles.spacing} />
                    {connectedWallets.length > 1 && (
                        <ThemedButton
                            variant="secondary"
                            title="Switch Wallet"
                            onPress={switchWallet}
                            style={styles.button}
                        />
                    )}
                    <ThemedButton
                        title="Sign Message"
                        variant="secondary"
                        onPress={async () => {
                            if (account) {
                                account.signMessage({ message: "hello world" });
                            }
                        }}
                        style={styles.button}
                    />
                    <ThemedButton
                        title="Disconnect"
                        variant="secondary"
                        onPress={async () => {
                            if (activeWallet) {
                                disconnect(activeWallet);
                            }
                        }}
                        style={styles.button}
                    />
                </>
            ) : (
                <ThemedText>Connect to mint an NFT.</ThemedText>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 16,
    },
    stepContainer: {
        gap: 16,
        padding: 16,
    },
    reactLogo: {
        height: "100%",
        width: "100%",
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    rowContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "space-evenly",
    },
    loadingContainer: {
        padding: 24,
        alignItems: "center",
    },
    externalWalletContainer: {
        gap: 16,
        paddingHorizontal: 16,
    },
    walletContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    walletLoading: {
        width: 60,
        height: 60,
    },
    walletImage: {
        width: 60,
        height: 60,
        borderRadius: 6,
    },
    walletName: {
        fontSize: 11,
        marginTop: 8,
    },
    connectedWalletsContainer: {
        gap: 8,
        marginVertical: 8,
    },
    spacing: {
        height: 16,
    },
    button: {
        marginVertical: 8,
    },
});

