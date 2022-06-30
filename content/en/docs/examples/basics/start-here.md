---
title: "Start here"
description: "Lorem ipsum."
lead: "Lorem ipsum."
menu:
    examples:
        parent: "examples-basics"
---

<!-- TODO: create this repo -->
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
    dev-net one-liner
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
