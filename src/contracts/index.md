---
title: Contracting Engine
description: The Contracting engine enables contracts to be written in a subset of Python designed for writing, testing, and deploying smart contracts with ease and efficiency. It makes blockchain development as intuitive and accessible as possible, leveraging the simplicity of Python to offer a seamless smart contract development experience.
---

# Contracting Engine
The Contracting engine enables contracts to be written in a subset of Python designed for writing, testing, and deploying smart contracts with ease and efficiency. It makes blockchain development as intuitive and accessible as possible, leveraging the simplicity of Python to offer a seamless smart contract development experience. <br/><br/>

## Contract Naming Rules
Unlike other blockchains where contracts have addresses, Xian contracts are identified by their name. Contract names must:
- Start with 'con_' prefix (except system contracts like 'currency')
- Be lowercase 
- Only contain letters, numbers and underscores after prefix
- Be max 64 characters
- Match pattern: `^con_[a-z][a-z0-9_]*$`

## Features

- **Pure Python**: Write smart contracts with the simplicity and elegance of Python.
- **Integrated Testing Tools**: Test your contracts with built-in frameworks that simulate blockchain environments.
- **Easy Deployment**: Deploy your contracts to the blockchain with the wallet, or by dropping the contract file in a message to our Telegram bot.
- **Modular Design**: Each smart contract is a separate file, or module that can be imported and used by other contracts. This makes it easy to reuse and share contracts as modules to build complex decentralized applications.

## Getting Started

### New to Coding ?
If you're new to writing code with Python, and you want to learn the basics before going further, here are some great guides to get you started : 

1. [Official documentation](https://docs.python.org/3.11/)
2. [Python Cheat Sheet](https://www.pythoncheatsheet.org)
3. [Sentdex YouTube videos](https://www.youtube.com/user/sentdex)
