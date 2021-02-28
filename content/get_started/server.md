---
title: "Run a Rekor Server"
date: 2020-12-08T08:12:58Z
draft: false
section: single
type: page
---
There are a few ways to deploy a Rekor Server.

We have a [docker-compose](https://github.com/projectrekor/rekor/blob/main/docker-compose.yml) file available

A [kubernetes operator](https://github.com/projectrekor/rekor-operator)

Or you could do this manually and build rekor yourself.

# Manual Installation

## Create Database and populate tables

Trillian requires a database, we use MariaDB for now (others to be explored later). Once this
is installed on your machine edit the `scripts/createdb.sh` with your database root account credentials and run the script.

## Build Trillian

To run rekor you need to build trillian

```
go get github.com/google/trillian.git
go build ./cmd/trillian_log_server
go build ./cmd/trillian_log_signer

```

### Start the tlog server

```
trillian_log_server -http_endpoint=localhost:8090 -rpc_endpoint=localhost:8091 --logtostderr ...
```

### Start the tlog signer

```
trillian_log_signer --logtostderr --force_master --http_endpoint=localhost:8190 -rpc_endpoint=localhost:8191  --batch_size=1000 --sequencer_guard_window=0 --sequencer_interval=200ms
```

## Build Rekor Server

From `rekor/cmd/server`

`go build -o rekor-server`

## Start the rekor server

```
./rekor-server serve
2020-09-12T16:32:22.705+0100	INFO	cmd/root.go:87	Using config file: /Users/lukehinds/go/src/github.com/projectrekor/rekor-server/rekor-server.yaml
2020-09-12T16:32:22.705+0100	INFO	app/server.go:55	Starting server...
2020-09-12T16:32:22.705+0100	INFO	app/server.go:61	Listening on 127.0.0.1:3000
```