#!/bin/bash
if [ -f preamble.toc ] 
    then
        echo "removing preamble files"
        rm preamble.toc preamble.aux preamble.out preamble.pdf

        echo "done..."
    else
        echo "file does not exist."
fi
