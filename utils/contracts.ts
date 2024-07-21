import { chain } from "@/constants/thirdweb";
import { client } from "@/constants/thirdweb";
import { getContract } from "thirdweb";
import { WrappedStakeABI } from "./WrappedStakeABI";
import { config } from "@/strings/config";
import { NFTABI } from "./NINJAABI";
import { ResABI } from "./ResABI";

const nftContractAddress = "<contract_address>";
const rewardTokenContractAddress = "<contract_address>";
const WrappedContractAddress = config.WrappedContract ;

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: config.nftContract,
    abi:NFTABI

});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const WRAPPED_STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address:WrappedContractAddress,
    abi: WrappedStakeABI
});

export const restrictionContract = getContract({
	client:client,
	address: config.RestrictionContract,
	chain:chain,
    abi:ResABI
})