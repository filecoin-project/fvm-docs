---
title: "Basics"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documentation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) enables programmers to create and deploy smart contracts on the Filecoin blockchain. With smart contracts, programmers can create new features, opening up a wide range of storage and data possibilities, which are provable and traceable."
menu:
    concepts:
        parent: "concepts-basics"
        identifier: "developers-networks-overview"
url: "/"
weight: 0
---

## Why the FVM is useful

There has been a huge demand from the developer community for Filecoin compatibility with [Ethereum](https://ethereum.org/en/what-is-ethereum/) and [Solidity](https://en.wikipedia.org/wiki/Solidity) out of the box. With the FVM, developers can access the massive corpus of audited and battle-tested smart contracts written in Solidity for the Ethereum Virtual Machine (EVM).

The FVM also supports other foreign runtimes and virtual machines, anything that compiles to [WebAssembly (WASM)](https://developer.mozilla.org/en-US/docs/WebAssembly). WASM provides the flexibility we need to meet a variety of needs, because it was built for modern web browsers and supports multiple languages, including Rust and Go.

Developers can adapt to the FVM in other contexts, such as the [Interplanetary File System (IPFS)](https://docs.ipfs.io/) and [Interplanetary Linked Data (IPLD)](https://ipld.io/docs/), because it's not tightly-coupled to Filecoin.

## Vision and goals

To mitigate the [well-known risks of compiling Solidity](https://101blockchains.com/solidity-issues/) used by the EVM, we're not working directly in Solidity. Instead, we're building the reference SDK in Rust, which produces very succinct WebAssembly (WASM) code that keeps runtime costs down.

To support computation on IPLD inputs, we're making it a core priority to build libraries and primitives to interact with IPLD data.

Smart contracts use virtual entities, called _Actors_, to perform transactions. Actors are assigned various capabilities, carry a FIL currency balance, and can interact with other actors. Because user-defined actors will exponentially increase demand for space on the blockchain, we're looking into solutions that support speedier processing, such as:

- [Hierarchical consensus](https://research.protocol.ai/blog/2022/scaling-blockchains-with-hierarchical-consensus/#:~:text=Hierarchical%20consensus%20is%20a%20framework,other%20subnet%20in%20the%20hierarchy) with parallel execution: Enables more processes to be done at the same time.
- [Sharding](https://www.sofi.com/learn/content/what-is-sharding/#:~:text=Sharding%20involves%20splitting%20a%20blockchain,a%20larger%20volume%20of%20transactions.): A kind of partitioning that separates data into smaller, faster, more easily managed chunks.

## Use cases

Here are some use cases that are possible with the FVM. With centralized data, a lot of these use cases are incredibly hard, if not impossible. Decentralization and programmability open up a lot of possibilities.

### Layer 2: data layer commitments

Layers or Layer Protocols specify the set of communication protocols used on the blockchain and other traditional computer networks. Protocols are the technology that facilitates information sharing. (See [What Are Application Layer Protocols?](https://coinmarketcap.com/alexandria/article/what-are-application-layer-protocols).)

As a technology gets built out, it adds layers of capabilities, including the new Filecoin layer that supports smart contracts:

- Layer 0: Our storage and retrieval layer
- Layer 1: Our on-chain, state layer
- Layer 2: Our off-chain, data layer

#### Layer 0: storage and retrieval layer

This is the earliest version of Filecoin blockchain that could store and retrieve data.

#### Layer 1: the state layer

When transactions occur on the Filecoin blockchain, they result in changes of state. Content of a dataset at one instant in time is added or removed to result in a new state.

#### Layer 2: the data layer

The introduction of the FVM with smart contracts enables access to Layer 2 off-chain data to fuel state changes that are provable and traceable end-to-end. You can provide consensus-backed commitments to make solutions such as:

- Cross-chain bridges: Enabling an exchange of information from one blockchain network to another.
- Oracles: Connecting blockchains to off-chain systems so they can execute based on inputs and outputs from the real world.
- Rollups: Rolling up multiple transactions into a single piece of data before submitting it to the blockchain.
- Payment networks

### Dataverse and Data DAOs

You can use the FVM to tokenize datasets to represent their value to humanity and kickstart the dataset economy. You can then use them to incentivize further value creation through data processing.

With the FVM, it will be possible to write smart contracts to harvest and exchange tokens between peers for storage activities such as:

- Computation requests: Such as requests for unsealing data before retrieval or other state changes.
- Validation: Verifying that transactions are legal, not double-spends or malicious.
- Transformations: What submitted data goes through before the storage provider stores them. See [Data Representation](https://spec.filecoin.io/#section-systems.filecoin_files.piece.data-representatio).
- Feature detection: Whether a browser supports a certain block of code and runs different code depending on whether it does or doesn't.
- Extraction: Of data from a source system for further use.
- Machine learning: Using data to predict outcomes...and more.

You will be able to apply a computation on data, incentivizing its execution all the way to the end, and certifying that the resulting storage state and the computation output are verifiably correct.

If you chain these processes together, you can compound the value of the datasets iteratively. You can deploy self-learning entities on-chain, like the [The Dataverse](https://dataverse.org/), to steward, maintain, and curate those datasets.

Using these datasets, you could automatically fund [Decentralized Autonomous Organizations (DAOs)](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization), member-owned communities, constructed by rules encoded in a computer program.

### Smart storage markets

Smart contracts on the FVM can bring richer deal-making functionality by introducing more automation.

Some possibilities are:

- Auto-renewing deals: Without repeating data transfers when deals expire or get slashed.
- Self-repairing deals: If a provider has failed sectors and wants to recover the data, instead of having clients resend the data, replication workers can resend it automatically.
- Retrying deals: Where a client dispatches their deal data to a depot and, for a small fee, has the deal data transmitted and satisfactorily delivered to the provider.

### Replication workers

If clients today want to replicate a piece of data with N providers, they have to perform the data transfer to each provider.

With smart contracts on the FVM, you can automatically replicate data across providers in the Filecoin network to incentivized replication actors without client involvement. The smart contracts would obey a user-defined policy with specifications like region, latency, price, or other characteristics.

### Time-locked retrieval

The FVM enables storage deals with data that cannot be retrieved by anyone until a specific window of time elapses.

### Trustless reputation systems

Trustless means that you don't need to trust an entity, because software programs are ensuring that they follow the rules set up by the community.

However, many providers will go beyond the minimal requirements, so they may have better quality of service, guarantees, or performance. Others may just work better for a particular client, because of their proximity and resulting reduced latency. A reputation system could help clients pick providers that work best for them.

With the FVM, you can build an overlay network that patrols the network, observes how service providers are doing, and records the observations on the blockchain so that reputation scores can be calculated in a trustless manner. They can also be traceable and disputable if there is any disagreement.
