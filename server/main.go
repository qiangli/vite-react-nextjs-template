package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
    address := flag.String("address", ":18080", "HTTP network address")

    mux := http.NewServeMux()

    fileServer := http.FileServer(http.Dir("dist/"))
    mux.Handle("/", fileServer)

    log.Printf("Starting on %s...", *address)
    if err := http.ListenAndServe(*address, mux); err != nil {
        log.Fatal(err)
    }
}
