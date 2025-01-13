import { defineConfig } from 'vitepress'
export default defineConfig({
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }],
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }],
        ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&display=swap" }],
        ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&family=Roboto:wght@100&display=swap" }],
    ],
    title: "Xian Network",
    description: "The documentation for the Xian Blockchain",
    themeConfig: {
        logo: '/xian-black.svg',
        nav: [
            { text: 'Home', link: '/' },
        ],

        sidebar: [{
                text: 'Introduction to Xian',
                link: '/introduction/',

            },
            {
                text: "Development",
                collapsed: false,
                items: [

                    {
                        text: 'Smart Contracts',
                        collapsed: true,
                        items: [
                            { text: 'Contracting Engine', link: '/smart-contracts/' },
                            { text: 'Cheat Sheet', link: '/smart-contracts/contract-cheat-sheet' },
                            { text: 'Context', link: '/smart-contracts/context' },
                            { text: 'Functions', link: '/smart-contracts/functions' },
                            { text: 'Events', link: '/smart-contracts/events' },
                            { text: 'Modules', collapsed: true, items: [
                                    { text: 'Imports', link: '/smart-contracts/modules/imports' },
                                    { text: 'Crypto', link: '/smart-contracts/modules/crypto-stdlib' },
                                    { text: 'Hashlib', link: '/smart-contracts/modules/hashlib-stdlib' },
                                    { text: 'Random', link: '/smart-contracts/modules/random-stdlib' },
                                    { text: 'Storage', link: '/smart-contracts/modules/storage' },
                                    { text: 'Datetime', link: '/smart-contracts/modules/datetime-stdlib' },
                                ]
                            },
                            {
                                text: 'Concepts',
                                collapsed: true,
                                items: [
                                    { text: 'Stamps', link: '/smart-contracts/concepts/stamps' },
                                    { text: 'Valid Code', link: '/smart-contracts/concepts/valid-code' },
                                    { text: 'Contract Submission', link: '/smart-contracts/concepts/contract-submission' },
                                    { text: 'Model', link: '/smart-contracts/concepts/model' },
                                ]
                            },
                            { text: 'Testing', link: '/smart-contracts/testing' },
                            {
                                text: 'Examples',
                                collapsed: true,
                                items: [
                                    { text: 'Overview', link: '/examples/' },
                                    { text: 'Uber Dice', link: '/examples/uber-dice-example' },
                                    { text: 'Token XSC003', link: '/examples/currency' },
                                ]
                            },
                            { text: "Submitting a Contract", link: "/smart-contracts/submitting-a-contract" }
                        ]
                    },
                    {
                        text: 'dApp Starters',
                        link: '/dapp-starters/'
                    },
                    {
                        text: 'Tools',
                        collapsed: true,
                        items: [
                            { text: 'xian-js', link: '/tools/xian-js' },
                            { text: 'xian-py', link: '/tools/xian-py' },
                            { text: 'Browser Wallet', link: '/tools/browser-wallet' },
                            { text: 'dApp Wallet Utils', link: '/tools/xian-wallet-utils' },
                            { text: 'Contract Dev Environment', link: '/tools/contract-dev-environment' },
                        ]
                    },
                ]
            },
            {
                text: 'Node',
                collapsed: false,
                items: [
                    { text: 'Technology Stack', link: '/node/technology-stack' },
                    { text: 'Architecture', link: '/node/architecture' },
                    { text: 'Governance Model', link: '/node/governance-model' },
                    {
                        text: 'Interfaces',
                        collapsed: true,
                        items: [
                            { text: 'REST', link: '/node/interfaces/rest' },
                            { text: 'Websockets', link: '/node/interfaces/websockets' },
                            { text: 'GraphQL', link: '/node/interfaces/graphql' },
                        ]
                    },
                    {
                      text: "Running a Node", link: "/node/running-a-node"
                    }
                ]
            },
            {
                text: 'Coin',
                collapsed: false,
                items: [
                    { text: 'Economics', link: '/coin/economics' },
                    { text: 'Stamps', link: '/coin/stamps' },
                    { text: 'Acquiring and Storing', link: '/coin/acquiring-and-storing' },
                ]
            },
            {
                text: 'Staking & Governance',
                collapsed: false,
                link: '/governance/staking-governance.md'
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/xian-network' }
        ],
        search: {
            provider: 'local'
        }
    },
    cleanUrls: true,
    srcDir: './src',
    base: '/',
})
