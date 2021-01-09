
// https://docs.aave.com/developers/deployed-contracts
// https://medium.com/better-programming/how-to-supply-assets-to-the-aave-protocol-programmatically-acfb0875a2f0

require("dotenv").config(); // this ensures process.env. ... contains your .env file configuration values

import { AaveUser } from "./aave-user";

export const getUserAccountData = async (aaveUser: AaveUser) => {
    const userAccountData = await aaveUser.getUserAccountData()
    // console.log(userAccountData)
}

const aaveUser = new AaveUser(process.env.ACCOUNT)
getUserAccountData(aaveUser)
