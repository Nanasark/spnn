
import { createThirdwebClient, getContract } from "thirdweb";
import {polygonAmoy } from "thirdweb/chains";

const clientId = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_ID!;

if (!clientId) {
	throw new Error(
		"Missing EXPO_PUBLIC_THIRDWEB_CLIENT_ID - make sure to set it in your .env file",
	);
}

export const client = createThirdwebClient({
	clientId,
});

export const chain = polygonAmoy;

export const contract = getContract({
	client,
	address: "0x82e50a6BF13A70366eDFC871f8FB8a428C43Dc03",
	chain,
});

