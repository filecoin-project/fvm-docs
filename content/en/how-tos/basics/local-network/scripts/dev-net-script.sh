tmux new-session -d -s lotus-dev-net ./hello-world.sh

tmux split-window -h

tmux send-keys -t lotus-dev-net "echo 'DEVNET'" C-m

tmux a -t lotus-dev-net
