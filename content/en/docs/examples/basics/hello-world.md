---
title: "Hello world"
description: "Learn how to install Lotus, set up a local Filecoin network, compile and install an actor on the network, and interact with the actor through your Lotus node."
lead: "Use this guide to install Lotus, set up a local Filecoin network, compile a simple hello-world actor to WASM, and install that actor onto your local Filecoin network."
menu:
    examples:
        parent: "examples-basics"
---

1. [Install Lotus]({{< relref "install-lotus" >}}).
1. Spin up a [local Filecoin network]({{< relref "local-network" >}}).
1. Clone the [FVM Actor Examples](https://github.com/filecoin-project/fvm-actor-examples) repo:

    ```shell
    git clone https://github.com/filecoin-project/fvm-actor-examples
    ```

1. Move into the `hello-world` directory:

    ```shell
    cd hello-world
    ```

1. Compile the actor to wasm.

    ```shell
    cargo build
    ```

1. Install the actor:

    ```shell
    lotus chain install-actor ./target/debug/wbuild/fil_hello_world_actor/fil_hello_world_actor.compact.wasm
    ```

1. Instantiate the actor:

    ```shell
    lotus chain create-actor <code-cid> <encoded-params>
    ```

1. Invoke the actor:

    ```shell
    lotus chain invoke <address> <method_num>
    ```

1. Decode the output using `base64`:

    ```shell
    echo "<output>" | base64 -d
    ```

1. Done!
