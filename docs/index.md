---
title: "Filecoin Virtual Machine"
description: "The Filecoin Virtual Machine (FVM) allows users to write their own smart-contracts and run them against the Filecoin network. This website contains all the documetation for the FVM project, including examples and reference material to help developers build on the FVM."
lead: "The Filecoin Virtual Machine (FVM) is an interface that developers can use to deploy smart-contracts on the Filecoin network. FVM contracts will introduce the ability to perfom on-chain computation, or the computation of a state. This is the perfect pairing of blockchain storage and computation that Web3 has been waiting for."
---

## Why it's useful

Lorem ipsum.

## Who is it for

Lorem ipsum.

## Use-cases

Here are some early use-cases that are possible with the FVM. A lot of these use-cases are incredibly hard, if not impossible, with centralized data-centers.

### Dataverse and Data DAOs

Represent the value of data sets through tokens, and incentives value creation through data processing. Kickstarting the data set economy by tokeninzing data sets to capture the represented value of those data sets to society.

Imagine deploying self governing entities on chain to steward, maintain, and curate those datasets that are valuable to humanity. Data DAOs could be funded by the use of these datasets automatically.

### Replication workers

Replicating data in the Filecoin network automatically across providers, without client involvement.

Being able to write smart contracts that take one piece of data and make sure it's replicated N times across the network, all while obeying a user-defined policy that specifies things like the region selection, latency, price, or other characteristics.

This would solve a pain-point present today in the network. If clients, today, want to replicate a piece of data with N providers, they have to perform the data transfer of that data to each provider. Replication workers would offload this data transfer to them in a trustless way.

### L2 commitments

Provide consensus-backed commitments and provability facilities for L2 solutions like bridges, oracles, payment networks, rollups, etc.

## Smarter storage markets

Bringing richer deal-making functionality to introduce more automation at the actor layer, and alleviate infrastructure overhead.

- Auto-renewing deals without repeating data tranfers
- Self-repairing deals: say a provider has sectors that fail and they want to recover that data; instead of having clients send the data over to them again, they can hardness the replication workers to have the data resent to them and have the data restored.

### Time-locked retrieval

Make storage deals with data that cannot be retrieved by anyone until a specific window of time elapses.

### Trustless reputation systems

There are so many providers in the Filecoin network, how do you pick the ones that you want to deal with based on the quality of service, guarantees, performance, latency, or region. There are already a bunch of solutions available in the ecosystem; but imagine being able to build a overlay network that are patrolling the network and observing how SPs are doing and recording them on the blockchain so that reputational scores can be calculated in a trustless manner. They can also be traced, and disputable if there is any disagreement.

### Decentralized, verifiable computation

We have have both computation and storage under a single roof. Imagine being able to apply a computation to be applied on data incentivizing it's execution all the way to the end, and being able to certify that the result AND the output are verifiably correct.
