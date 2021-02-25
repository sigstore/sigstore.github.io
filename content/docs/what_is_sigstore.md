---
title: "SigStore introduction"
date: 2021-02-25T11:03:20Z
draft: false
section: single
type: page
---

## What is SigStore?

Put simply, SigStore is a provenance store that is immutable and read-only. SigStore's immutability provides guarantees that any data entered into SigStore cannot be tampered or amended after entry.

This makes SigStore particularly conducive for the transparency of software supply chains. Actors (developers, software maintainers, build / packaging systems) can make entries into SigStore which can then be queried by auditors, packaging systems, researchers for ‘inclusion’ and tamper free state.

Software supply chains are exposed to multiple risks. They are exposed to replay or forwarded attacks as well as account and cryptographic key compromise.

![Example image](/images/ssc.png)

SigStore seeks to combine **provenance**, **integrity**, and **discoverability** to create a transparent and auditable software supply chain:

**Provenance** deals with systematically capturing data describing the relationships among elements such as source code, build tools / compiler, processing steps, contextual information and dependencies. Software provenance can be used for many purposes, such as understanding how an artifact was collected, determining ownership etc.

**Integrity** is a control mechanism that examines objects and checks if their integrity is intact and of a non-tampered state. This is typically achieved using a cryptographically signed digest of the object (for example: code file, binary, configuration file).

**{Discoverability, Transparency}** ensures that all parties see the same set of objects. It allows:
* Consumers of objects with insufficient resources to deeply inspect and examine those objects for correctness to be sure that those same objects are discoverable by other entities who do have the resources to perform such checks.
* Publishers of objects to detect if their identity is compromised and used to sign unauthorised or malicious objects.

## Transparency logs and Merkle Trees

SigStore leverages immutability using Merkle Trees. A Merkle tree is a hash-based data structure implemented as a binary tree. A tree-like structure of hash digests is constructed to an eventual root hash. They are quick to build, but computationally expensive to attempt to unravel and rebuild without breach of the mathematical structure.

![Example image](/images/merkle.png)

Merkle trees are implemented in technologies such as BitTorrent, Blockchain (transactions) and git. The immutable nature of merkle trees allows nonrepudiation.

SigStore uses the [Trillian](https://opensource.google/projects/trillian) project for its merkle tree implementation. Trillian is used in production for the [certificate transparency project](https://www.certificate-transparency.org/).


## Who can benefit from SigStore?

SigStore can be leveraged by the following actors:

![Example image](/images/arch.png)

### Software Maintainers
A software maintainer can use SigStore to store the signed digest of an artifact. This would in turn help prevent an attack replacing a digest with the digest of a tampered release.

An example of this sort of attack occured to Linux Mint [when their website was hacked](https://blog.linuxmint.com/?p=2994). We have seen a lot of projects storing hashes as a means of provenance for their users on insecure mutable platforms such as README.md files on a git hosted repository. All that is needed is someone's account to be compromised, and an attacker can then amend the README.md and self merge and the damage is done.

### Software distributors
Software distributors can query SigStore to gain cryptographically-backed digests to protect their own packaging systems from risks such as metadata replay attacks.

### Software packaging systems
Software packaging systems can harness SigStore to ensure users are not
undergoing a targeted attack. SigStore can provide context to the effect of
"What I am seeing? Is it  what everyone else is seeing?".

### Attestation solutions
Attestation solutions can attest / measure deployed artefacts and utilise SigStore as a means of measurement store.

###  Security Researchers
SigStore's provenance can be queried to discover behavior patterns, for example namespaces being signed by certain keys that do not typically sign a certain project's release.

### Security Analytics Site

SigStore data can be gathered, indexed and stored allowing the render of data into meaningful graphs.

### \<Insert your use case here\>

SigStore is very flexible and allows you to create your own manifest layout. So you can use SigStore to capture your own data sets in a tamper resistant environment.

These are all just a few examples of who can use and benefit from SigStore. We are always curious to hear new ideas and help shape those into an implementation.

## How do I get started?

#### Use SigStore as a store

If you're someone who wants to sign and store your own releases into SigStore, head over to the [SigStore Users section](/get_started/client/)

#### Deploy your own SigStore Server

If you want to host your own SigStore transparency service, head over to the [SigStore Server section](/get_started/server/)

#### Integrate with SigStore

If you want to develop your own application that makes use of SigStore's APIs, head over to the [SigStore API Client Example](/get_started/api_client/)

## Need help?

Come on over to our Slack channel! https://sigstore.slack.com
