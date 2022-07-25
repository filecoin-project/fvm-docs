---
title: "Replication workers"
description: "Instead of storage users having to manually repeat the process of creating storage deals and transferring the data to a storage provider, these tasks can be handed off to automatic replication workers. These specialized nodes can leverage the FVM to automatically handle all the busy work of keeping data safe and secure."
lead: "Instead of storage users having to manually repeat the process of creating storage deals and transferring the data to a storage provider, these tasks can be handed off to automatic replication workers. These specialized nodes can leverage the FVM to automatically handle all the busy work of keeping data safe and secure."
lead: "Lorem"
menu:
    concepts:
        parent: "concepts-use-cases"
---

If clients today want to replicate a piece of data with N providers, they have to perform the data transfer to each provider.

With smart contracts on the FVM, you can automatically replicate data across providers in the Filecoin network to incentivized replication actors without client involvement. The smart contracts would obey a user-defined policy with specifications like region, latency, price, or other characteristics.

### Trustless reputation systems

Trustless means that you don't need to trust an entity, because software programs are ensuring that they follow the rules set up by the community.

However, many providers will go beyond the minimal requirements, so they may have better quality of service, guarantees, or performance. Others may just work better for a particular client, because of their proximity and resulting reduced latency. A reputation system could help clients pick providers that work best for them.

With the FVM, you can build an overlay network that patrols the network, observes how service providers are doing, and records the observations on the blockchain so that reputation scores can be calculated in a trustless manner. They can also be traceable and disputable if there is any disagreement.
