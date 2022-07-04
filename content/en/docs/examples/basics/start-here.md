---
title: "Hello world"
description: "Learn how to install Lotus, set up a local Filecoin network, compile and install an actor on the network, and interact with the actor through your Lotus node."
lead: "Use this guide to install Lotus, set up a local Filecoin network, compile a simple hello-world actor to WASM, and install that actor onto your local Filecoin network."
menu:
    examples:
        parent: "examples-basics"
---

## Set up

Before we can create an actor, we need to install Lotus and spin-up a local Filecoin network. We'll be using the `install-lotus` and `start-local-network` scripts. More information on how to [install Lotus]({{< relref "install-lotus" >}}) or [spin up a local Filecoin network]({{< relref "local-network" >}}) can be found on their respective pages.

1. Install Lotus using the command for your operating system:

    ```sh
    # Debian/Ubuntu
    bash <(curl -s https://fvm.filecoin.io/docs/scripts/install-lotus-debian-ubuntu.sh)
    ```

    ---

    ```sh
    # MacOS
    bash <(curl -s https://fvm.filecoin.io/docs/scripts/install-lotus-macos.sh)
    ```

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

1. Set up a Lotus devnet:

    ```shell
    bash <(curl -s https://fvm.filecoin.io/docs/scripts/start-local-filecoin-network.sh)
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
