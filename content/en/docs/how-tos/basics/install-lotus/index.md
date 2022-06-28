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

For more details on how to install Lotus, including steps for operating systems not listed here, [check out the official Lotus docs](https://lotus.filecoin.io/lotus/install/prerequisites/).

## Debian and Ubuntu

The following script has been written for Debian and Ubuntu distributions. Windows users _may_ be able to install Lotus using this method combined with [WSL](https://docs.microsoft.com/en-us/windows/wsl/install).

You must have the following software installed:

- [Go](https://go.dev/dl/)
- [Rust](https://rustup.rs/#)

```shell
#!/bin/bash

sudo apt update -y
sudo apt install mesa-opencl-icd ocl-icd-opencl-dev gcc git bzr jq pkg-config curl clang build-essential hwloc libhwloc-dev wget -y && sudo apt upgrade -y

git clone https://github.com/filecoin-project/lotus.git
cd lotus/
git checkout releases

make clean all
sudo make install
```

Save the above script to your local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it finished properly:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```

## MacOS

The following scripts have been written for MacOS users.

### Intel-based macs

This script is for Intel-based Macs only and will not work for M1-based Macs. You must be using MacOS 11.0 _Big Sur_ or higher.

You must have the following software installed:

- [Go](https://go.dev/dl/)
- [Homebrew](https://brew.sh/)
- [Rust](https://rustup.rs/#)
- [XCode](https://developer.apple.com/xcode/)

```shell
#!/usr/bin/env bash

brew install go bzr jq pkg-config hwloc coreutils

git clone https://github.com/filecoin-project/lotus.git
cd lotus/
git checkout releases

export CGO_CFLAGS_ALLOW="-D__BLST_PORTABLE__"
export CGO_CFLAGS="-D__BLST_PORTABLE__"
export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"

make clean all
sudo make install
```

Save the above script to your local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it completed properly:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```

### M1-based macs

This script is for M1-based Macs only and will not work for Intel-based Macs. You must be using MacOS 11.0 _Big Sur_ or higher. This script has not been tested on M2 CPUs; however it may still work.

You must have the following software installed:

- [XCode](https://developer.apple.com/xcode/)
- [Homebrew](https://brew.sh/)
- [Rust](https://rustup.rs/#)

```shell
#!/usr/bin/env bash

brew install go bzr jq pkg-config hwloc coreutils

git clone https://github.com/filecoin-project/lotus.git
cd lotus/
git checkout releases

export LIBRARY_PATH=/opt/homebrew/lib
export FFI_BUILD_FROM_SOURCE=1
export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"

make clean all
sudo make install
```

Save the above script to your local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it completed properly:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```
