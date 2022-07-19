---
title: "Install Lotus"
description: "Quickly install Lotus on your local computer using pre-built scripts."
lead: "To interact with the Filecoin Virtual Machine (FVM) you will need to have access to a Lotus node. An easy way to gain access to a Lotus node is to set one up on your local computer and start a local developer network. This page summarizes how to install Lotus using premade installation scripts."
menu:
    howto:
        parent: "how-to-basics"
draft: false
weight: 1
---

## Debian and Ubuntu

The following script has been written for Debian and Ubuntu distributions. Windows users _may_ be able to install Lotus using this method combined with [WSL](https://docs.microsoft.com/en-us/windows/wsl/install).

1. Make sure you have the following programs installed:

    - [Go](https://go.dev/dl/)
    - [Rust](https://rustup.rs/#)

1. Download and run the following script. You may need to enter your login password towards the end of the script:

    ```sh
    #!/bin/bash

    # Update apt listings and install dependencies.
    sudo apt update -y
    sudo apt install mesa-opencl-icd ocl-icd-opencl-dev gcc git bzr jq pkg-config curl clang build-essential hwloc libhwloc-dev wget -y && sudo apt upgrade -y

    # Clone the repo and checkout to the releases branch.
    git clone https://github.com/filecoin-project/lotus.git
    cd lotus/
    git checkout releases

    # Make the binaries and move them to /usr/bin/
    make clean all
    sudo make install
    ```

1. Once the script has finished, run `lotus --version` to see if it completed properly:

    ```sh
    lotus --version
    ```

    ```plaintext
    lotus version 1.16.0+2k+git.01254ab32
    ```

1. Done!

## MacOS

1. Make sure you have the following programs installed:

    - [Go](https://go.dev/dl/)
    - [Homebrew](https://brew.sh/)
    - [Rust](https://rustup.rs/#)
    - [XCode](https://developer.apple.com/xcode/)

1. Download and run the following script. You may need to enter your login password towards the end of the script:

    ```sh
    #!/bin/bash

    # Check is system is Apple Silicon or Intel.
    if [[ $(uname -m) == 'arm64' ]]; then
        # Apple Silicon
        export LIBRARY_PATH=/opt/homebrew/lib
        export FFI_BUILD_FROM_SOURCE=1
    else
        # Intel
        export CGO_CFLAGS_ALLOW="-D__BLST_PORTABLE__"
        export CGO_CFLAGS="-D__BLST_PORTABLE__"
    fi

    # Add the Homebrew coreutils lib location to $PATH.
    export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"

    # Install dependencies with Homebrew.
    brew install go bzr jq pkg-config hwloc coreutils

    # Clone the repo and checkout to the releases branch.
    git clone https://github.com/filecoin-project/lotus.git
    cd lotus/
    git checkout releases

    # Make the binaries and move them to /usr/bin/
    make clean all
    sudo make install
    ```

1. Once the script has finished, run `lotus --version` to see if it completed properly:

    ```shell
    lotus --version
    ```

    ```plaintext
    lotus version 1.16.0+2k+git.01254ab32
    ```

1. Done!

## Further details

For more details on how to install Lotus, including steps for operating systems not listed here, [check out the official Lotus docs](https://lotus.filecoin.io/lotus/install/prerequisites/).
