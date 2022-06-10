---
title: "Filecoin Virtual Machine"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documetation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) is an interface that developers can use to deploy smart-contracts on the Filecoin network. FVM contracts will introduce the ability to perfom on-chain computation, or the computation of a state. This is the perfect pairing of blockchain storage and computation that Web3 has been waiting for."
---

# The Filecoin Virtual Machine

The Filecoin Virtual Machine (FVM) is an interface that enables developers to deploy smart contracts on the Filecoin blockchain. FVM support for smart contracts introduces the ability to perform on-chain state computations that can guide storage deals from pre-commit through committed states. This is the perfect pairing of blockchain storage and computation that Web3 has been waiting for.

## Why Filecoin is useful

FVM is meant for developers and especially to provide them with easy onboarding. To that end, it is compatible with foreign virtual machines, such as the Ethereum Virtual Machine (EVM), enabling developers to access EVM's massive corpus of audited and battle-tested smart contracts written in Solidity.

Developers familiar with Interplanetary Linked Data (IPLD) will already be familiar with the Filecoin state tree and actor states, which are IPLD objects. The FVM is a computation engine for IPLD data, executing computations on IPLD inputs to produce outputs.

The FVM is flexible. Because it is not tightly-coupled to Filecoin, it can be adapted to other contexts, such as IPFS and IPLD.

## Visions and goals

To mitigate the well-known risks due to the Solidity-to-WASM compilation path, we are adopting a WASM and bytecode approach instead of working directly in Solidity.

Building libraries and primitives to interact with IPLD data will also be a core priority.

Because user-defined actors will exponentially increase demand for space on the blockchain, we are looking into shading (a kind of partitioning for speedier processing) and hierarchical consensus with parallel execution.

## Use-cases

Here are some early use cases that are possible with the FVM. With centralized data centers, a lot of these use cases were incredibly hard, if not impossible. With decentralization, we're now making them possible.

### Dataverse and Data DAOs

The Dataverse is an open source software project for sharing, preserving, citing, and exploring research data. See [Wikipedia](https://en.wikipedia.org/wiki/Dataverse) and [The Dataverse Project](https://dataverse.org/).

DAOs are Data Access Objects, patterns that provide an abstract interface to a database or other persistence mechanism. They provide specific data operations without exposing details of the database. See [Wikipedia](https://en.wikipedia.org/wiki/Data_access_object).

We can use the FVM to tokenize data sets to represent their value to humanity and kickstart the data set economy. We can then use it to incentivize further value creation through data processing.

Imagine if we wrote smart contracts to harvest and exchange those tokens between peers to request computation, validation, transformations, feature detection, extraction, machine learning, and more. If you chain these processes together, you can compound the value of the datasets iteratively. Imagine deploying self-learning entities on chain to steward, maintain, and curate those datasets. Data DAOs could be automatically funded by using these datasets.

### Replication workers

Write smart contracts for the FVM to automatically replicate data across providers in the Filecoin network without client involvement, all while obeying a user-defined policy with specifications like region, latency, price, or other characteristics.

If clients, today, want to replicate a piece of data with N providers, they have to perform the data transfer of that data to each provider. With smart contracts on the FVM, incentivized replication actors would offload this data transfer to clients in a trustless way.

### L2 commitments

In the Filecoin network:

- Layer 0 is our storage and retrieval layer
- Layer 1 is our on-chain, computation over state layer
- Layer 2 is our off-chain, computation over data layer

Currently, solutions like Textile's Filecoin bridges to NEAR, Polygon, and Ethereum are operating without a Layer 1 commitment on the Filecoin network. 

With smart contracts on FVM, you can harvest Layer 2 systems to commit onto Layer 1 of the Filecoin blockchain. You can provide consensus-backed commitments to make solutions like bridges, oracles, payment networks, rollups, and more end-to-end provable and traceable.

## Smart storage markets

Bringing richer deal-making functionality to introduce more automation at the actor layer, and alleviate infrastructure overhead.

- Auto-renewing deals without repeating data tranfers
- Self-repairing deals: say a provider has sectors that fail and they want to recover that data; instead of having clients send the data over to them again, they can hardness the replication workers to have the data resent to them and have the data restored.

### Time-locked retrieval

Make storage deals with data that cannot be retrieved by anyone until a specific window of time elapses.

### Trustless reputation systems

There are so many providers in the Filecoin network, how do you pick the ones that you want to deal with based on the quality of service, guarantees, performance, latency, or region. There are already a bunch of solutions available in the ecosystem; but imagine being able to build a overlay network that are patrolling the network and observing how SPs are doing and recording them on the blockchain so that reputational scores can be calculated in a trustless manner. They can also be traced, and disputable if there is any disagreement.

### Decentralized, verifiable computation

We have have both computation and storage under a single roof. Imagine being able to apply a computation to be applied on data incentivizing it's execution all the way to the end, and being able to certify that the result AND the output are verifiably correct.

## Technical side of FVM

The FVM is fundamentally based on WASM. WASM is a portable execution format that initially was build for the web in theory was meant to replace JS, but has trancended to other runtimes. It's seen a massive uptake in blockchain ecosystems. One key aspect of the FVM is that it should interact with IPLD state tree data efficiently.

Native actors can be written in languages that compile to WASM. This doesn't mean that you'll want to use ANY language that compiles to WASM - devs wanna be aware of the runtime costs and overheads of certain languages. One language that produces very succinct WASM code is Rust - which is why we're building the reference SDK in rust.

Another key aspect of the FVM is that it has support for foreign runtimes and VMs, such as the EVM, JS/SES, LLVm, IR, BPF, and other models.

### EVM compatibility

There's been incredibly strong requests from the Filecoin dev community for the FVM to support EVM and Solidity compatibility out of the box - so this is a priority. With the FVM developers will be able to deploy EVM contracts directly to the Filecoin blockchain directly. This means all the things that have been audited and battle tested in Ethereum land are available on the FVM (things like ERC-20 tokens, NFTs, flash loans, etc).

WE can also leverage all the build tools from the EVM ecosystem: things like truffle, hardhat, remix, along with all the IDE and VSCode plugins.

The plan to make the compatibility possible is to adopt an EVM Bitcode and WASM approach instead of working off Solidity directly. This choice guarantees almost perfect execution, fidelity, and parity, along with mitigating risks otherwise present in the Solidity to WASM cpomliation path. We're looking at adopting the Sputnik VM project which has emerged as the de factor WASM compatible EVM implementation in the industry.

### The data layer

We can consider the FVM as a computation engine for IPLD data. The file coin state tree and the actor states are IPLD objects. And the FVM essentially executes computation on those inputs to produce outputs.

### Scaling consensus

User-defined actors will exponentially increase the demand for space on the blockchain. There's research going into fixing this using things like sharing and hierarchical consensus with parallel execution. This has implications for the FVM, mainly that infra-shard calls can be synced, and cross-shard calls MUST be synced.
