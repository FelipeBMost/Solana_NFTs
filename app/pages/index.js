import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from 'next/dynamic';
import CandyMachine from "../components/CandyMachine";
// Constantes
const GITHUB_HANDLE = "FelipeBMost";
const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;

const Home = () => {
    const WalletMultiButtonDynamic = dynamic(
        async () => 
        (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
        {ssr: false}
    );
        const wallet = useWallet();
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji"/>

            <div className="button.container">
                <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
            </div>
        </div>
    )
    return (
        <div className="App">
            <section className="container">
                <div className="header-container">
                    <h1 className="header">Solana NFT Drop</h1>
                    <p className="sub-text">NFT Machine with fair minting</p>
                </div>

                {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                <div className="footer-container">
                    <img alt="Github Logo" className="github-logo" src="github-logo.svg" />
                    <a className="footer-text" href={GITHUB_LINK} target="_blank" rel="noreferrer">{`feito por @${GITHUB_HANDLE}`}</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
