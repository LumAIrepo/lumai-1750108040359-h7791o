import { WalletButton } from "@/components/wallet-button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="absolute top-8 right-8">
                <WalletButton />
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">TensorFlow</h1>
                <p className="mt-4 text-xl text-gray-300">A comprehensive NFT marketplace platform featuring advanced trading analytics, professional tools, and real-time market insights for digital asset collectors and traders.</p>
            </div>
        </main>
    );
}