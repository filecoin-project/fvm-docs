---
title: "Repair workers"
description: "Many clients who store data on Filecoin want both the guarantee of a storage network that provably stores their data over time, and the ease of use of a fire-and-forget storage system they can trust to automatically repair itself over time."
lead: "Many clients who store data on Filecoin want both the guarantee of a storage network that provably stores their data over time, and the ease of use of a fire-and-forget storage system they can trust to automatically repair itself over time."
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  concepts:
    parent: "use-cases"
    identifier: "concepts-use-cases-repair-workers"
toc: true
---

Repair workrs solve this problem by automating the process of renewing expired or terminated deals - saving the client the time and overhead of manually refreshing deals 2, 5, or 10+ years in the future.e

Instead, the repair worker can monitor the chain on the clients behalf for any faults or expirations, and proactively replicate deal data to more storage providers in accordance with a user-defined policy.
