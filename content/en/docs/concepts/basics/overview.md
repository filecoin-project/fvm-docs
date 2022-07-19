---
title: "Basics"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documentation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) enables programmers to create and deploy smart contracts on the Filecoin blockchain. With smart contracts, programmers can create new features, opening up a wide range of provable and traceable storage and data possibilities."
menu:
    concepts:
        parent: "concepts-basics"
        identifier: "developers-networks-overview"
url: "/"
weight: 0
---

## Why the FVM is useful

### Makes data usable

Filecoin provides verifiable data storage. But what's the point of storing data, unless you can use it? The beauty of blockchain technology is that it stores data in a tamper-resistant way. So we have reliability covered. Now, with the FVM and its access to storage and computation under the same roof, stored data is also usable.

### Provides opportunity for developers

There has been a huge demand from the developer community for Filecoin compatibility with [Ethereum](https://ethereum.org/en/what-is-ethereum/) and [Solidity](https://en.wikipedia.org/wiki/Solidity) out of the box. With the FVM, developers can access the massive corpus of audited and battle-tested smart contracts written in Solidity for the Ethereum Virtual Machine (EVM) to create new features that use data.

But we're not limited to Ethereum. We meet a variety of other needs as well by supporting foreign runtimes and virtual machines that compile to [WebAssembly (WASM)](https://developer.mozilla.org/en-US/docs/WebAssembly), a low-level programming language built for modern web browsers. Low-level programming languages like WASM can support multiple languages, including Rust and Go, which are very popular among blockchain developers.

Because the FVM is not tightly-coupled to Filecoin, developers with experience on the [Interplanetary File System (IPFS)](https://docs.ipfs.io/) and [Interplanetary Linked Data (IPLD)](https://ipld.io/docs/) can easily adapt to the FVM on Filecoin and Filecoin developers can easily branch out to IPLD. As you'll see when we get to explaining use cases, IPLD plays a very important role in the opportunities that the FVM creates for data.

## Vision and goals

### Proximity to data for computation

Our primary goal with the FVM is to expand the possibilities for working with data. We've made an important first step by enabling programming under the same roof as file storage.

### Building on our strengths

To support computation on IPLD inputs, we're making it a core priority to build libraries and primitives to interact with IPLD data.

### Avoiding known risks

To mitigate the [well-known risks of compiling Solidity](https://101blockchains.com/solidity-issues/) used by the EVM, we're not working directly in Solidity. Instead, we're building the reference SDK in Rust, which produces very succinct WebAssembly (WASM) code that keeps runtime costs down.

Smart contracts use virtual entities, called _Actors_, to perform transactions. Actors are assigned various capabilities, carry a FIL currency balance, and can interact with other actors. Because user-defined actors will exponentially increase demand for space on the blockchain, we're looking into solutions that support speedier processing, such as:

- [Hierarchical consensus](https://research.protocol.ai/blog/2022/scaling-blockchains-with-hierarchical-consensus/#:~:text=Hierarchical%20consensus%20is%20a%20framework,other%20subnet%20in%20the%20hierarchy) with parallel execution: Enabling more processes to be done at the same time.
- [Sharding](https://www.sofi.com/learn/content/what-is-sharding/#:~:text=Sharding%20involves%20splitting%20a%20blockchain,a%20larger%20volume%20of%20transactions.): A kind of partitioning that separates data into smaller, faster, more easily managed chunks.

## Use cases

Here are some use cases that are possible with the FVM. With centralized data, a lot of these use cases are incredibly hard, if not impossible. Decentralization and programmability open up a lot of possibilities.

### Dataverse and DATA DAOs

The Dataverse and DAOs are each, in their own right, an amazing use case. However, together they present even more opportunities. Together they represent the value of datasets in a dataverse, and then they incentivize more value creation by enabling developers to process that data as Data DAOs.

Let's explain each first.

#### Dataverse

A dataverse is a self-learning on-chain entity, that enables you to share, preserve, cite, explore and analyze research data. Researchers, data authors, publishers, data distributors, and affiliated institutions all get a persistent identifier to receive appropriate credit. (from [Wikipedia](https://en.wikipedia.org/wiki/Dataverse))

A dataverse repository can host multiple dataverses. Each dataverse contains dataset(s) or other dataverses, and each dataset contains descriptive metadata and data files (including documentation and code that accompany the data).

You can use the FVM to tokenize datasets to represent their value to humanity and kickstart the dataset economy. Then those tokens could be harvested and exchanged between peers.

#### Decentralized Autonomous Organizations (DAOs)

With smart contracts possible on the FVM, you can create [Decentralized Autonomous Organizations (DAOs)](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization), which are member-owned communities, constructed by rules encoded in a smart contract.

You can use the FVM to program a DAO with the terms agreed upon by the people who started the DAO. Having the terms built into a smart contract makes the entire organization self-sustainable, in other words, _autonomous_. For example, a program can hire people, onboard them, order equipment, pay employees, many of the things that people would normally do to keep a company running.

When agreements and changes are made, you can encode them into a smart contract and implement them immediately. You won't need to enforce them through a traditional top-down hierarchy, like a CEO or a board of directors.

Some links of interest for DAO builders include:

- [MakerDAO](https://makerdao.com/en/whitepaper#abstract)
- [Aragon](https://aragon.org/)
- [MetaCartel](https://www.metacartel.org/)
- [GitcoinDAO](https://gitcoin.notion.site/gitcoin/GitcoinDAO-22431fe7c9794d99986a028c23ce56b5)
- [Dash DAO](https://www.dash.org/forum/threads/how-does-the-dash-dao-work.9560/)

#### Combining datasets and DAOs to make a DataDAO

Building a DataDAO is now possible with the FVM. If you have datasets through a Dataverse, you can build on their value by fueling the DAO's need for data. You can then use a dataverse to incentivize further value creation through data processing.

With the FVM, you can write smart contracts to request computation services such as:

- Validation: Verifying that transactions are legal, not double-spends or malicious.
- Transformations: Processing data goes before the storage provider stores them. See [Data Representation](https://spec.filecoin.io/#section-systems.filecoin_files.piece.data-representation).
- Extraction: Getting the data from a source system for further use.
- Joining different datasets
- Machine learning: Using data to predict outcomes

...and more.

When you chain these processes together, you augment the value of the datasets iteratively and bring business intelligence and value to them.

You'll be able to incentivize the execution all the way to the end and certify that the resulting storage state and the computation output are verifiably correct.

For an example of DataDAO that won First Prize before they even had the elegance of the FVM, see [Data DAO: enable a collective-owned dataset economy: Merging decentralised governance and incentive mechanism into a permissionless data marketplace!](https://devpost.com/software/data-dao), First Prize winner of the Ocean Protocol Data Economy Challenge - Datatokens.

"...the ability ... to pool together and unlock a tremendous amount of value in the form of large token exchange liquidity pools. Same applies for DataDAO, instead of Capital → Data. - the pooling of fragmented data together can create a valuable dataset."

### Replication workers

If clients today want to replicate a piece of data with N number of providers, they have to perform the data transfer to each node, n number of times.

With the FVM, you can write Actors (Filecoin's version of smart contracts) that ensure replication of data across the network to N number of providers. You can automatically replicate data across providers without client involvement.

The smart contracts would obey a user-defined policy with specifications like region, latency, price, or other characteristics.

### Layer 2: data layer commitments

Layers or Layer Protocols specify the set of communication protocols used on the blockchain and other traditional computer networks. Protocols are the technology that facilitates information sharing. The article titled [What Are Application Layer Protocols?](https://coinmarketcap.com/alexandria/article/what-are-application-layer-protocols)) on Coinmarketcap.com is a great resource.

As a technology gets built out, it adds layers of capabilities, including the new Filecoin layer that supports smart contracts:

- Layer 0: Storage and retrieval
- Layer 1: On-chain, state changes
- Layer 2: Off-chain, data access

#### Layer 0: storage and retrieval layer

This is the earliest version of Filecoin blockchain, which could store and retrieve data.

#### Layer 1: the state layer

When transactions occur on the Filecoin blockchain, they result in changes of state. Content of a dataset at one instant in time is added or removed to result in a new state.

#### Layer 2: the data layer

The introduction of the FVM with smart contracts enables access to Layer 2 off-chain data to fuel on-chain state changes that are provable and traceable end-to-end. You can provide consensus-backed commitments to make solutions such as:

- Cross-chain bridges: Enabling an exchange of information from one blockchain network to another.
- Oracles: Connecting blockchains to off-chain systems so they can execute based on inputs and outputs from the real world.
- Rollups: Combining multiple transactions into a single piece of data before submitting it to the blockchain.
- Payment networks

### Smart storage markets

Smart contracts on the FVM can bring richer deal-making functionality and introduce more automation at the actor layer and alleviate infrastructure overhead.

Some possibilities are:

- Auto-renewing deals: Without repeating data transfers when deals expire or get slashed.
- Self-repairing deals: If a provider has failed sectors and wants to recover the data, instead of having clients resend the data, replication workers can resend it automatically.
- Retrying deals: A client can dispatch their deal data to a depot and, for a small fee, has the deal data transmitted and satisfactorily delivered to the provider.

### Time-locked retrieval

The FVM enables storage deals with data that cannot be retrieved by anyone until a specific window of time elapses, or, potentially, a specific event has been triggered on-chain.

### Trustless reputation systems

Trustless means that you don't need to trust an entity, because software programs are ensuring that they follow the rules set up by the community.

However, many providers will go beyond the minimal requirements, so they may have better quality of service, guarantees, or performance. Others may just work better for a particular client, because of their proximity and resulting reduced latency. A reputation system could help clients pick providers that work best for them.

With the FVM, you can build an overlay network that patrols the network, observes how service providers are doing, and records the observations on the blockchain so that reputation scores can be calculated in a trustless manner. They can also be traceable and disputable if there is any disagreement.
