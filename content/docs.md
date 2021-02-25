---
title: "SigStore introduction"
date: 2020-12-07T17:09:20Z
draft: false
section: single
type: page
---

## What is rekor

Put simply, rekor is a provenance store that is immutable and read-only. SigStore's  immutability provides guarantees that any data entered into rekor cannot be tampered or amended after entry.

This makes rekor particularly conducive for the transparency for software supply chains. Actors (developers, software maintainers, build / packaging systems) can make entries into SigStore which can then be queried by others for ‘inclusion’ and tamper free state.

SigStore seeks to combine provenance, integrity, and discoverability to create a transparent and auditable software supply chain.

Software supply chains are exposed to multiple risks. They are exposed to replay or forwarded attacks as well as account and cryptographic key compromise.

![Example image](/images/ssc.png)

SigStore can help determine:

**Provenance** deals with systematically capturing data describing the relationships among elements such as source code, build tools / compiler, processing steps, contextual information and dependencies. Software provenance can be used for many purposes, such as understanding how an artifact was collected, determining ownership etc.

**Integrity** is a control mechanism that examines objects and checks if their integrity is intact and of a non-tampered state. This is typically achieved using a cryptographically signed digest of the object (for example: code file, binary, configuration file).

**{Discoverability, Transparency}** ensures that all parties see the same set of objects. It allows:
* Consumers of objects with insufficient resources to deeply inspect and examine those objects for correctness to be sure that those same objects are discoverable by other entities who do have the resources to perform such checks.
* Publishers of objects to detect if their identity is compromised and used to sign unauthorised or malicious objects.

## Transparency logs and Merkle Trees

SigStore leverages immutability using an  called a Merkle Tree. A Merkle tree is a hash-based data structure implemented as a binary tree. A tree-like structure of hash digests is constructed. They are quick to build, but computationally expensive to attempt to unravel and rebuild without breach of mathematical structure.

![Example image](/images/merkle.png)

Merkle trees are implemented in technologies such as BitTorrent, Blockchain (transactions) and git. The immutable nature of merkle trees allows nonrepudiation.

SigStore uses the [Trillian](https://opensource.google/projects/trillian) project for its backend. Trillian is also used for certificate transparency.


## Who can benefit from SigStore?

SigStore can be leveraged by the following actors:

![Example image](/images/arch.png)

### Software Maintainers
A software maintainer can use SigStore to store the signed digest of an artifact. This would in turn help prevent an attack replacing a digest with the digest of a tampered release. This occured to [Linux Mint when there website was hacked](https://blog.linuxmint.com/?p=2994). We have seen a lot of projects storing hashes as a means of provenance for their users on insecure mutable platforms such as README.md files on a git hosted repository.

### Software distributors
Software distributors can query SigStore to gain cryptographically-backed digests to protect their own packaging systems from risks such as metadata replay attacks.

### Software packaging systems
Software packaging systems can harness SigStore to ensure users are not undergoing a targeted attack. SigStore can provide context to the effect of "What I am seeing, it what everyone else is seeing".

### Attestation solutions
Attestation solutions can attest / measure deployed artefacts and utilise SigStore as a means of measurements store.

###  Security Researchers
SigStores provenance can be quiered to discover behaivor patterns, for example namespaces being signed by certain keys that do not typically sign a certain projects release.

### \<Insert your use case here\>

SigStore is very flexible and allow you to create your own manifest layout. So you can use SigStore to capture your own data sets in a tamper resistant enviroment.

## Great, how do I get started?

#### Use SigStore as a store

If you're someone who wants to sign and store your own releases into SigStore, head over to the [SigStore Users section](http://localhost:1313/get_started/client/)

#### Deploy your own SigStore Server

If you want to host your own SigStore transparency service, head over to the [SigStore Server section](http://localhost:1313/get_started/server/)

#### Integrate with SigStore

If you want to develop your own application that makes use of SigStores APIs, head over to the [SigStore API Client Example](http://localhost:1313/get_started/api_client/)

## Need help?

Come on over to our slack channel! 
