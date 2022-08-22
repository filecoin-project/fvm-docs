---
title: "Overview"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documentation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) enables programmers to create and deploy smart contracts on the Filecoin blockchain. With smart contracts, programmers can create new features, opening up a wide range of storage and data possibilities, which are provable and traceable."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  concepts:
    parent: "basics"
    identifier: "concepts-basics-overview"
weight: 100
toc: true
---

There has been a huge demand from the developer community for Filecoin compatibility with [Ethereum](https://ethereum.org/en/what-is-ethereum/) and [Solidity](https://en.wikipedia.org/wiki/Solidity) out of the box. With the FVM, developers can access the massive corpus of audited and battle-tested smart contracts written in Solidity for the Ethereum Virtual Machine (EVM).

The FVM also supports other foreign runtimes and virtual machines, anything that compiles to [WebAssembly (WASM)](https://developer.mozilla.org/en-US/docs/WebAssembly). WASM provides the flexibility we need to meet various needs because it was built for modern web browsers and supports multiple languages, including Rust and Go.

Developers can adapt to the FVM in other contexts, such as the [Interplanetary File System (IPFS)](https://docs.ipfs.io/) and [Interplanetary Linked Data (IPLD)](https://ipld.io/docs/), because the FVM is not tightly-coupled to Filecoin.

## Vision and goals

To mitigate the [well-known risks of compiling Solidity](https://101blockchains.com/solidity-issues/) used by the EVM, we're not working directly in Solidity. Instead, we're building the reference SDK in Rust, which produces very succinct WebAssembly (WASM) code that keeps runtime costs down.

To support computation on IPLD inputs, we're making it a core priority to build libraries and primitives to interact with IPLD data.

Smart contracts use virtual entities, called _Actors_, to perform transactions. Actors are assigned various capabilities, carry a FIL currency balance, and can interact with other actors. Because user-defined actors will exponentially increase demand for space on the blockchain, we're looking into solutions that support speedier processing, such as:

- [Hierarchical consensus](https://research.protocol.ai/blog/2022/scaling-blockchains-with-hierarchical-consensus/#:~:text=Hierarchical%20consensus%20is%20a%20framework,other%20subnet%20in%20the%20hierarchy) with parallel execution: Enabling more processes to be done at the same time.
- [Sharding](https://www.sofi.com/learn/content/what-is-sharding/#:~:text=Sharding%20involves%20splitting%20a%20blockchain,a%20larger%20volume%20of%20transactions.): A kind of partitioning that separates data into smaller, faster, more easily managed chunks.
