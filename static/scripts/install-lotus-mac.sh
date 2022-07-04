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
