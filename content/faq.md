---
title: "Frequently Asked Questions"
date: 2020-12-07T17:09:20Z
draft: false
section: single
type: page
---

### Seems like SigStore is centralised?
* Yes, why not? There is no need for a distributed source of transparency. There can be multiple points of transparency which only adds more sources of security guarantee, not less. An entity can post to as many SigStore’s as they want and inform users of where they post. We do encourage folks to use common public instances, but we don't seek to enforce this. We do plan to look to produce a gossip protocol, for those that desire a more decentralised model (if the demand is shown).

### Why not use a blockchain?
* Public blockchains all too often end up using a centralized entry point for canonicalisation, auth, etc.
* Consensus algorothims can be susceptible to 51% attack (Crash / Byzantine Fault Tolerant).
* We are far from anti-blockchain, but feel its not the most best fit for SigStore's needs at present.

### Why use a Merkle Tree / Transparency log?
* Merkle Trees are a great solution for building tamper-evident logs.
* SigStore's back end is [Trillian](https://github.com/google/trillian):
  * Trillian is an open source community under active development.
  * Trillian is deployed by organisations such as Google, CloudFlare (nimbus) or  Let's Encrypt for cerficate transparency, so it already is considered production grade..

### Can I get SigStore to work with my X format, framework standard?
* Yes! Using pluggable types you can create your own manifest layout and send it
  to SigStore. Head over to [pluggable types](/docs/pluggable_types/).
