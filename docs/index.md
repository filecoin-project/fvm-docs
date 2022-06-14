---
title: "Filecoin Virtual Machine"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documetation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) is an interface that developers can use to deploy smart-contracts on the Filecoin network. FVM contracts will introduce the ability to perfom on-chain computation, or the computation of a state. This is the perfect pairing of blockchain storage and computation that Web3 has been waiting for."
---

# The Filecoin Virtual Machine

The Filecoin Virtual Machine (FVM) is an interface that enables developers to deploy smart contracts on the Filecoin blockchain. FVM support for smart contracts provides the ability to perform on-chain state computations that guide storage deals from pre-commit through committed states. This is the perfect pairing of blockchain storage and computation that Web3 has been waiting for.

## Why the FVM is useful

There has been a huge demand from the developer community for compatibility with Ethereum and Solidity out of the box. With FVM developers can access EVM's massive corpus of audited and battle-tested smart contracts written in Solidity. FVM also supports other foreign runtimes and virtual machines, such as JS/SES, LLVm, IR, and BPF.

The FVM is flexible. Because it's not tightly-coupled to Filecoin, developers can adapt to it in other contexts, such as the Interplanetary File System (IPFS) and Interplanetary Linked Data (IPLD).

The FVM is easy for developers who know IPLD to adapt to. The state tree and actor states that the FVM uses to guide storage deals from pre-commit through committed states are IPLD objects.

## Vision and goals

To mitigate the well-known risks of compiling Solidity to the WASM (WebAssembly) programming language, we're not working directly in Solidity. Instead, we are adapting a WASM (WebAssembly programming language) and bytecode approach. We're building the reference SDK in Rust, because it produces very succinct WASM code and keeps runtime costs down.

Because the FVM essentially executes computation on IPLD inputs to produce outputs, building libraries and primitives to interact with IPLD data is a core priority.

Because user-defined actors will exponentially increase demand for space on the blockchain, we're looking into solutions, such as sharding (a kind of partitioning) and hierarchical consensus with parallel execution, both of which support speedier processing.

## Use-cases

Here are some use cases that are possible with the FVM. With centralized data centers, a lot of these use cases were incredibly hard, if not impossible. With decentralization and Layer 1 programmability, we are unleashing boundless opportunities.

### Decentralized, verifiable computation

The FVM enables both computation and storage under a single roof. Imagine being able to apply a computation on data, incentivizing its execution all the way to the end, and certifying that the result AND the output are verifiably correct. Imagine being able to link all of that to the Dataverse and tokenization of datasets.

### Dataverse and Data DAOs

The Dataverse is an open source software project for sharing, preserving, citing, exploring, and analyzing research data. See [The Dataverse Project](https://dataverse.org/).

DAOs are Data Access Objects, patterns that provide an abstract interface to a database or other persistence mechanism. They provide specific data operations without exposing details of the database. See [Data access object](https://en.wikipedia.org/wiki/Data_access_object).

We can use the FVM to tokenize data sets to represent their value to humanity and kickstart the data set economy. We can then use it to incentivize further value creation through data processing.

With the FVM, it will be possible to write smart contracts to harvest and exchange tokens between peers to request computation, validation, transformations, feature detection, extraction, machine learning, and more. If you chain these processes together, you can compound the value of the datasets iteratively. Imagine deploying self-learning entities on-chain to steward, maintain, and curate those datasets. Data DAOs could be automatically funded by using these datasets.

### Replication workers

We can write smart contracts for the FVM to automatically replicate data across providers in the Filecoin network without client involvement, all while obeying a user-defined policy with specifications like region, latency, price, or other characteristics.

If clients today want to replicate a piece of data with N providers, they have to perform the data transfer of that data to each provider. With smart contracts on the FVM, incentivized replication actors would offload this data transfer to clients in a trustless way.

### L2 commitments

In the Filecoin network:

- Layer 0 is our storage and retrieval layer
- Layer 1 is our on-chain, computation over state layer
- Layer 2 is our off-chain, computation over data layer

Currently, solutions like Textile's Filecoin bridges to NEAR, Polygon, and Ethereum are operating without a Layer 1 commitment on the Filecoin network.

With smart contracts on FVM, you can harvest Layer 2 systems to commit onto Layer 1 of the Filecoin blockchain. You can provide consensus-backed commitments to make solutions, like bridges, oracles, payment networks, rollups, and more, provable and traceable end-to-end.

## Smart storage markets

Smart contracts on FVM can bring richer deal-making functionality by introducing more automation at the actor layer and alleviating infrastructure overhead.

Some possibilities are:

- Auto-renewing deals without repeating data transfers, when deals expire or get slashed.
- Self-repairing deals: If a provider has failed sectors and wants to recover the data, instead of having clients resend the data, replication workers can resend it automatically.
- Retrying deals: where a client dispatches their deal data to a depot and, for a small fee, has the deal data transmitted and satisfactorily delivered to the provider.

### Time-locked retrieval

FVM enables storage deals with data that cannot be retrieved by anyone until a specific window of time elapses.

### Trustless reputation systems

There are so many providers in the Filecoin network, how do you pick the ones that you want to deal with based on the quality of service, guarantees, performance, latency, or region.

Imagine being able to build an overlay network that patrols the network, observes how service providers are doing, and records the observations on the blockchain so that reputation scores can be calculated in a trustless manner. They can also be traceable and disputable if there is any disagreement.
