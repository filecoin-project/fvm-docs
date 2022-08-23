---
title: "Decentralized compute"
description: "Filecoin and IPFS distribute content-addressed datasets across storage providers around the world to increase data redundancy and resiliency."
lead: "Filecoin and IPFS distribute content-addressed datasets across storage providers around the world to increase data redundancy and resiliency."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  concepts:
    parent: "use-cases"
    identifier: "concepts-use-cases-decentralized-compute"
toc: true
---

Such globally distributed data brings significant cost, availability, and reliability advantages, but can also mean that parts of a single dataset may end up stored geographically far away from one another. Executing computation jobs or data pipelines on globally distributed data is challenging.

Regrouping highly distributed data into a central location to compute over it is expensive, underperformant, and, wasteful. Instead, pushing compute to the edges and coordinating its execution is a brand new possibility with FVM actors.

FVM actors can broker computational resources, incentivize compute execution, distribute workloads across available storage providers, and prove the validity of the computation's result in order to claim rewards. Storage providers could enroll in compute networks through an FVM actor. Compute clients would post jobs to the actor. A mechanism would assign jobs to providers, and once executed, the provider would post a proof to claim rewards.
