---
title: "Start a local network"
description: "Quickly spin up a local developer network with Lotus and start hacking on your projects."
menu:
    howto:
        parent: "how-to-basics"
draft: true
---

## Debian and Ubuntu

The following script has been written for Debian and Ubuntu distributions. Windows users _may_ be able to use this method combined with [WSL](https://docs.microsoft.com/en-us/windows/wsl/install), with some tweaking.

You must have Lotus installed already. Checkout the [quick install guides]({{< relref "setup-lotus.md" >}}) if you don't have it installed yet.

```shell
#!/bin/bash

tmux new-session -d -s "lotus-local-network"
tmux rename-window -t 0 'lotus-daemon'

tmux send-keys 'export LOTUS_PATH=~/.lotus-local-net' C-m
tmux send-keys 'export LOTUS_MINER_PATH=~/.lotus-miner-local-net' C-m
tmux send-keys 'export LOTUS_SKIP_GENESIS_CHECK=_yes_' C-m
tmux send-keys 'export CGO_CFLAGS_ALLOW="-D__BLST_PORTABLE__"' C-m
tmux send-keys 'export CGO_CFLAGS="-D__BLST_PORTABLE__"' C-m

tmux send-keys 'git clone https://github.com/filecoin-project/lotus lotus-local-net' C-m
tmux send-keys 'cd lotus-local-net' C-m
tmux send-keys 'git checkout experimental/fvm-m2' C-m

tmux send-keys 'rm -rf ~/.genesis-sectors' C-m
tmux send-keys 'make 2k' C-m

tmux send-keys './lotus fetch-params 2048' C-m
tmux send-keys './lotus-seed pre-seal --sector-size 2KiB --num-sectors 2' C-m
tmux send-keys './lotus-seed genesis new localnet.json' C-m
tmux send-keys './lotus-seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json' C-m

tmux send-keys './lotus daemon --lotus-make-genesis=devgen.car --genesis-template=localnet.json --bootstrap=false' C-m

tmux new-window -t "lotus-local-network" -n 'lotus-miner'

tmux send-keys 'export LOTUS_PATH=~/.lotus-local-net' C-m
tmux send-keys 'export LOTUS_MINER_PATH=~/.lotus-miner-local-net' C-m
tmux send-keys 'export LOTUS_SKIP_GENESIS_CHECK=_yes_' C-m
tmux send-keys 'export CGO_CFLAGS_ALLOW="-D__BLST_PORTABLE__"' C-m
tmux send-keys 'export CGO_CFLAGS="-D__BLST_PORTABLE__"' C-m

tmux send-keys './lotus wallet import --as-default ~/.genesis-sectors/pre-seal-t01000.key' C-m
tmux send-keys './lotus-miner init --genesis-miner --actor=t01000 --sector-size=2KiB --pre-sealed-sectors=~/.genesis-sectors --pre-sealed-metadata=~/.genesis-sectors/pre-seal-t01000.json --nosync' C-m
tmux send-keys './lotus-miner run --nosync' C-m
```

Save the above script to you local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it completed:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```

## MacOS

The following scripts have been written for MacOS users.

### Intel-based macs

This script is for Intel-based Macs only, and will not work for M1-based Macs. You must be using MacOS 11.0 _Big Sur_ or higher.

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

Save the above script to you local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it completed:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```

### M1-based macs

This script is for M1-based Macs only and will not work for Intel-based Macs. You must be using MacOS 11.0 _Big Sur_ or higher. This script has not been tested on M2 CPUs, however it may still work.

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

Save the above script to you local computer and run it. You may need to make it executable with `chmod +x lotus-install.sh`, replacing `lotus-install.sh` with the of your script.

Once the script has finished, run `lotus --version` to see if it completed:

```shell
lotus --version
```

```plaintext
lotus version 1.16.0+2k+git.01254ab32
```
