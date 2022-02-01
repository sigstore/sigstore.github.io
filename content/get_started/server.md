---
title: "Run a Rekor Server"
date: 2021-05-21T13:00:00Z
draft: false
section: single
type: page
---
There are a few ways to deploy a Rekor Server:

 1. We have a [docker-compose](https://github.com/sigstore/rekor/blob/main/docker-compose.yml) file available
 2. A [kubernetes operator](https://github.com/sigstore/rekor-operator)
 3. Or you could do this manually and build Rekor yourself.

# Manual Installation

## Prerequisites

You will of course also need golang, version 1.15 or greater, and a `$GOPATH` set.

You also need a MySQL compatible database and, if you want to perform fast queries, you will need to have an instance of redis running.
Otherwise, you must pass the `--enable_retrieve_api=false` flag when running `rekor-server` in the later steps of this page.

## Get Rekor source code

Grab the Rekor source:

`go get -u -t -v github.com/sigstore/rekor/cmd/server`

This will also download the Trillian source code, on which Rekor depends.

> Note: you can also `git clone` should you prefer.

## Create Database and populate tables

Trillian requires a database, we use MariaDB for now (others to be explored later). Once this
is installed on your machine, edit the `scripts/createdb.sh` file with your database root account credentials and run the
script.

```
cd $GOPATH/pkg/mod/github.com/sigstore/rekor@v0.1.1/scripts/
sh createdeb.sh
```

If you're just trying out Rekor, keep the DB user name and password the same as in the script (test/zaphod). If
you change these, you will need to also make the changes on the Trillian side (visit the [Trillian repo](https://github.com/google/trillian) for details).

## Build Trillian

To run Rekor you need to build Trillian:

```
cd $GOPATH/pkg/mod/github.com/google/trillian@v1.3.13/cmd/trillian_log_server
go build
cp trillian_log_server /usr/local/bin/
cd $GOPATH/pkg/mod/github.com/google/trillian@v1.3.13/cmd/trillian_log_signer
go build
cp trillian_log_signer /usr/local/bin/
```

### Start the tlog server

```
trillian_log_server --logtostderr ...
```

### Start the tlog signer

```
trillian_log_signer --logtostderr --force_master --rpc_endpoint=localhost:8190 --http_endpoint=localhost:8191 --batch_size=1000 --sequencer_guard_window=0 --sequencer_interval=200ms
```

> Note: you can also log both to files and to stderr using `--alsologtostderr`

## Build Rekor Server

```
cd $GOPATH/pkg/mod/github.com/sigstore/rekor@v0.1.1/cmd/server
go build -v -o rekor-server
cp rekor-server /usr/local/bin/
```

## Start the Rekor server

```
rekor-server serve --trillian_log_server.port=8090
2021-05-01T09:30:00.224Z        INFO    app/root.go:101 Using config file: /Users/lukehinds/go/pkg/mod/github.com/sigstore@v0.1.1/rekor-server/rekor-server.yaml
2021-05-01T09:30:00.225Z        INFO    app/serve.go:58 starting rekor-server
2021-05-01T09:30:00.248Z        INFO    app/serve.go:79 Loading support for pluggable type 'jar'
2021-05-01T09:30:00.249Z        INFO    app/serve.go:80 Loading version '0.0.1' for pluggable type 'jar'
2021-05-01T09:30:00.250Z        INFO    app/serve.go:79 Loading support for pluggable type 'rekord'
2021-05-01T09:30:00.251Z        INFO    app/serve.go:80 Loading version '0.0.1' for pluggable type 'rekord'
2021-05-01T09:30:00.252Z        INFO    app/serve.go:79 Loading support for pluggable type 'rpm'
2021-05-01T09:30:00.253Z        INFO    app/serve.go:80 Loading version '0.0.1' for pluggable type 'rpm'
2021-05-01T09:30:00.288Z        INFO    restapi/server.go:230   Serving rekor server at http://127.0.0.1:3000
```

# Nex steps

Congratulations, you now have a Rekor server running. To interact with the Rekor
server, see the [client](../client) page.
