require("dotenv").config(); // this ensures process.env. ... contains your .env file configuration values

import { AaveWeb3Proxy } from './aave-web3-proxy';
import { priceFeedAbi } from './constants/price-feed-abi'

export class AaveUser {

    private walletAddress: string
    private freeValueInETH: number
    private userAccountData: any


    public constructor(walletAddress: string) {

        this.ensureEnvironmentIsReasonablyConfigured()
        this.walletAddress = walletAddress

    }


    public async getUserAccountData(walletAddress: string = this.walletAddress) {

        await AaveWeb3Proxy.initialize(process.env.WEB3_PROVIDER_URL)

        console.log(await AaveWeb3Proxy.aaveLendingPoolContract.methods.getUserAccountData(walletAddress).call())

        return this.userAccountData

    }


    public async depositETHToAave(amoutOfETHToBeDeposited: number) {

        AaveWeb3Proxy.aaveLendingPoolContract.methods.deposit(
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", amoutOfETHToBeDeposited, 0).send({ from: process.env.ACCOUNT, value: amoutOfETHToBeDeposited })
            .once('transactionHash', (hash) => {
                // transaction hash
            })
            .on('confirmation', (number, receipt) => {
                // number of confirmations
            })
            .on('error', (error) => {
                console.log(error);
            });

    }


    public async borrowDAIFromAave(amountOfDAIToBeBorrowed: number) {

        const userAccountData = await AaveWeb3Proxy.aaveLendingPoolContract.methods.getUserAccountData(process.env.ACCOUNT).call()

        AaveWeb3Proxy.aaveLendingPoolContract.methods.borrow(
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", amountOfDAIToBeBorrowed, 2, 0, process.env.ACCOUNT).send({ from: process.env.ACCOUNT, value: amountOfDAIToBeBorrowed })
            .once('transactionHash', (hash) => {
                console.log(hash)
                // transaction hash
            })
            .on('confirmation', (number, receipt) => {
                // number of confirmations
            })
            .on('error', (error) => {
                console.log(error);
            });

    }


    // there might be a more appropriate solution for this soon
    public async getAmountOfDAIWhichCanBeBorrowed(): Promise<number> {

        const priceFeedAddress = '0x922018674c12a7f0d394ebeef9b58f186cde13c1';
        const priceFeed = new AaveWeb3Proxy.web3Connection.eth.Contract(priceFeedAbi, priceFeedAddress);
        let priceInUsd = (await priceFeed.methods.price('ETH').call()) / 1000000;

        console.log(`According to the price feed address: The price for Ether is about ${priceInUsd} USD.`)

        return this.freeValueInETH * priceInUsd * 0.9 // the "* 0.9" just ensures we handle the investment carefully

    }


    private ensureEnvironmentIsReasonablyConfigured(): void {

        if (process.env.ACCOUNT === undefined || process.env.ACCOUNT.length < 10) {
            throw new Error(`Please copy the .env.example file to .env and add your data for the wallet you want to optimize.`);
        }

    }
}
