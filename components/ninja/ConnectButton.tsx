import React, { useEffect, useState } from 'react';
import { client } from '@/constants/thirdweb';
import { defineChain } from 'thirdweb/chains';
import {
    ConnectButton,

} from "thirdweb/react";
import {
    walletConnect,
    inAppWallet,
} from "thirdweb/wallets";
import { ThemedView } from '../ThemedView';



const wallets = [
    walletConnect(),
    inAppWallet({
        auth: {
            options: ["email", "phone"],
        },
    }),
];

type props ={
    onConnect?:any,
    chain:number
}

export default function ConnectSection({ onConnect, chain }:props) {
    const chainy = defineChain(chain)
    
    return (<ThemedView>
          <ConnectButton
            client={client}
            chain={chainy}
            theme={"dark"}
            connectModal={{
                size: "compact",
                titleIcon: "",
                showThirdwebBranding: false,
            }}
            wallets={wallets}
            connectButton={{
                label: "Connect",
                style: {
                    backgroundColor: "#ABEF09",
                    width: "90%",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    fontSize: "1.125rem",
                }
            }}
            autoConnect={true}
            onConnect={onConnect}
        />
    </ThemedView>
      
    );
}