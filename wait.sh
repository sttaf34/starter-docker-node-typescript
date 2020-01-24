#!/bin/bash

for i in {1..10}; do
  nc -w 1 -v db 3306 &> /dev/null && break
  sleep 2
done

cmd="$@"
exec $cmd
