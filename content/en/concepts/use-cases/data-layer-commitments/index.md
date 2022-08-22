---
title: "Enabling L2 networks"
description: "L2s are independent networks —with dedicated incentive constructions— that conduct specialized tasks on top of the Filecoin network. Layer 2 solutions commit their state onto the Filecoin network (Layer 1), thus inheriting its security properties."
lead: "L2s are independent networks —with dedicated incentive constructions— that conduct specialized tasks on top of the Filecoin network. Layer 2 solutions commit their state onto the Filecoin network (Layer 1), thus inheriting its security properties."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  concepts:
    parent: "use-cases"
    identifier: "concepts-use-cases-data-layer-commitments"
toc: true
---

Examples include:

- Trustless reputation systems: measure and report the Quality of Service of storage providers, as perceived from different geographical locations around the globe.
- Data availability sampling networks: challenge storage providers by retrieving random data, verifying correct delivery within a specific time window, and awarding incentives depending on outcome.
- Content Delivery Networks that cache data stored in Filecoin deals by replicating it across a number of geographies, and making it accessible through a number of transports, to ensure quick and seamless retrieval around the globe. Participants get rewarded for caching and delivering content.

By deployin commitment or docking actors on the FVM, the Layer 2 solutions can (a) commit their state on chain through verifiable proofs, (b) dispense participant rewards, (c) verify fraud proofs, amongst other tasks.g
