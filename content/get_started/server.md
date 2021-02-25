---
title: "Run a SigStore Server"
date: 2020-12-08T08:12:58Z
draft: false
section: single
type: page
---

**NOTE:** SigStore was know as Rekor until recently. Some of the tools have not
yet been renamed, as such you will see references to 'Rekor' in this page.

# Run a SigStore server

There are a few ways to deploy a SigStore Server.

We have a [docker-compose](https://github.com/projectrekor/rekor/blob/main/docker-compose.yml) file available

A [kubernetes operator](https://github.com/projectrekor/rekor-operator)

Or you could do this manually and build SigStore yourself. Follow the
instructions below to do so.

# Manual Installation

## Prerequisites

You will need a functional [installation](https://golang.org/doc/install) of the
Go programming language.

## Create Database and populate tables

Trillian requires a database, we use [MariaDB](https://mariadb.com/) for now
(others to be explored later). Once this is installed on your machine edit the
[`scripts/createdb.sh`](https://github.com/SigStore/rekor/blob/main/scripts/createdb.sh)
with your database root account credentials and run the script.

## Build Trillian

To run SigStore you need to build Trillian

```
go get github.com/google/trillian
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

## Build SigStore Server

From `rekor/cmd/server`

`go build -o rekor-server`

## Start the rekor server

```
./rekor-server serve
2020-09-12T16:32:22.705+0100	INFO	cmd/root.go:87	Using config file: /Users/lukehinds/go/src/github.com/projectrekor/rekor-server/rekor-server.yaml
2020-09-12T16:32:22.705+0100	INFO	app/server.go:55	Starting server...
2020-09-12T16:32:22.705+0100	INFO	app/server.go:61	Listening on 127.0.0.1:3000
```
