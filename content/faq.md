---
title: "Frequently Asked Questions"
date: 2020-12-07T17:09:20Z
draft: false
section: single
type: page
---

### Seems like Rekor is centralised?
* Yes, and why not? There is no need for a distributed source of transparency. There can be multiple points of
   transparency and this only adds more sources of security guarantees, not less. An entity can
   post to as many logs as they want and inform users of where they post. However, we plan to look to produce a gossip protocol, for those that want a more decentralised model.

### Why not use a blockchain?
* We far from anti-blockchain, but feel its not the most best fit for Rekors needs..
* Most public blockchains end up using a centralized gateway for canonicalisation, auth etc.
* Consensus alg’s can be susceptible to 51% attack (Crash / Byzantine Fault Tolerant)

### Why use a Merkle Tree / Transparency log?
* Trillian is the back end technology used for  certificate transparency
* Open source community with active development
* Deployed by Google, CloudFlare (nimbus), Let's Encrypt
* Performance (Handles thousands of requests per second)

### Can I get Rekor to work with my X format , framework standard?
* Yes, using pluggable types you can create your own manifest layout and send it to rekor. Head over to plugable types

