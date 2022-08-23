---
title: "Replication workers"
description: "Clients want their data to be replicated across the network to maximize the chances it will survive in the event of storage provider failures. To achieve that today, clients have to execute N deals with storage providers, transferring the data N times. This is a cumbersome and resource-intensive task for a client to perform in order to obtain redundancy."
lead: "Clients want their data to be replicated across the network to maximize the chances it will survive in the event of storage provider failures. To achieve that today, clients have to execute N deals with storage providers, transferring the data N times. This is a cumbersome and resource-intensive task for a client to perform in order to obtain redundancy."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  concepts:
    parent: "use-cases"
    identifier: "concepts-use-cases-replication-workers"
toc: true
---

Replication workers solve this problem by charging a small fee to act as a mediator, by saving the client the time and overhead of negotiating multiple deals. Instead, the replication worker can automaticaly copy the Filecoin deal N times across the network in accordance with the user-defined policy based on number of replicas, region selection, latency, price, etc. (potentially using L2 reputation systems to decide where to place the data!)
