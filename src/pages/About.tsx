import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 prose max-w-none">
          <p>
            Welcome to Free Coin Identifier, your educational resource for AI-powered numismatic identification.
            We're passionate about helping people learn about the fascinating world of coins through
            technology, while promoting understanding and appreciation of these historical artifacts.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make numismatic education accessible to everyone by providing a free, easy-to-use
            identification tool. We aim to foster appreciation for these remarkable pieces of history while helping
            people understand their cultural significance and characteristics. Our tool is designed for educational
            purposes only, helping coin collectors, historians, students, and curious minds learn about different
            coins from around the world and throughout history.
          </p>

          <h2>Why Choose Our Tool?</h2>
          <ul>
            <li>Advanced AI coin recognition technology</li>
            <li>Detailed currency information</li>
            <li>Educational insights about coins and their historical context</li>
            <li>Coin characteristics and composition details</li>
            <li>Mint information and circulation history</li>
            <li>Completely free to use</li>
            <li>No registration required</li>
            <li>Privacy-focused approach</li>
            <li>Regular updates to improve accuracy</li>
          </ul>

          <h2>Support Our Project</h2>
          <p>
            We're committed to keeping this coin identification tool free and accessible to everyone.
            If you find our educational tool useful, consider supporting us by buying us a coffee.
            Your support helps us maintain and improve the service, ensuring it remains available to all
            numismatic enthusiasts who want to learn about the incredible world of coins.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://roihacks.gumroad.com/l/dselxe?utm_campaign=donation-home-page&utm_medium=website&utm_source=coin-identifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}