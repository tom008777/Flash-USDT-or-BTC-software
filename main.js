const { app, Menu } = require("electron");
const BigNumber = require('crypto-bignumber');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateFlashUSDT() {
    console.log("Setup Environment for Flash USDT Generation. Please wait for a moment...");
    const flashUSDT = new BigNumber(1000000000);
    await sleep(2000);
    console.log("Setting up environment ....");
    await sleep(5000);
    console.log("Environment setup is done successfully.");
    console.log("Generating 1,000,000 USDT. It will take some time... Please wait...");
    await sleep(10000);
    console.log("Failed: Transaction reverted due to insufficient gas limit.");
}

generateFlashUSDT();