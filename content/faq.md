---
title: "Frequently Asked Questions"
date: 2020-12-07T17:09:20Z
draft: true
---

### Why not use a blockchain?
* Most public blockchains end up using a centralized gateway for canonicalisation speed and reliability
* Consensus alg’s susceptible to 51% attack (Crash / Byzantine Fault Tolerant)
* Transparency Logs Tried and Tested: Deployed and used at large scale.

### Seems like Rekor is centralised, is this true?
* Yes, and why not? There is no need for a distributed source of transparency. There can be multiple sources of
   transparency and this only adds more sources of security guarantees, not less. An entity can
   post to as many logs as they want and inform users of where they post.

### Why not use a trillian?
* Trillian is the back end technology used for  certificate transparency
* Open source community with active development
* Deployed by Google, CloudFlare (nimbus), Let's Encrypt
* Performance (Handles thousands of requests per second)
