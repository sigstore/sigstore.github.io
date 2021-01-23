---
title: "Rekor introduction"
date: 2020-12-07T17:09:20Z
draft: false
section: single
type: page
---

## What is rekor

Put simply, rekor is a provenance store that is immutable and read-only. Rekors immutability provides guarantees that any data entered into rekor cannot be tampered or amended after entry.

This makes rekor particularly conducive for the transparency for software supply chains. Actors (developers, software maintainers, build / packaging systems) can make entries into Rekor which can then be queried by others for ‘inclusion’ and tamper free state.

Rekor seeks to combine provenance, integrity, and discoverability to create a transparent and auditable software supply chain.

Software supply chains are exposed to multiple risks. They are exposed to replay or forwarded attacks as well as account and cryptographic key compromise.

![Example image](/images/ssc.png)

Rekor can help determine:

**Provenance** deals with systematically capturing data describing the relationships among elements such as source code, build tools / compiler, processing steps, contextual information and dependencies. Software provenance can be used for many purposes, such as understanding how an artifact was collected, determining ownership etc.

**Integrity** is a control mechanism that examines objects and checks if their integrity is intact and of a non-tampered state. This is typically achieved using a cryptographically signed digest of the object (for example: code file, binary, configuration file).

**{Discoverability, Transparency}** ensures that all parties see the same set of objects. It allows:
* Consumers of objects with insufficient resources to deeply inspect and examine those objects for correctness to be sure that those same objects are discoverable by other entities who do have the resources to perform such checks.
* Publishers of objects to detect if their identity is compromised and used to sign unauthorised or malicious objects.

## Transparency logs and Merkle Trees

Rekor leverages immutability using an  called a Merkle Tree. A Merkle tree is a hash-based data structure implemented as a binary tree. A tree-like structure of hash digests is constructed. They are quick to build, but computationally expensive to attempt to unravel and rebuild without breach of mathematical structure.

![Example image](/images/merkle.png)

Merkle trees are implemented in technologies such as BitTorrent, Blockchain (transactions) and git. The immutable nature of merkle trees allows nonrepudiation.

Rekor uses the [Trillian](https://opensource.google/projects/trillian) project for its backend. Trillian is also used for certificate transparency.


## Who can benefit from Rekor?

Rekor can be leveraged by the following actors:

![Example image](/images/arch.png)

### Software Maintainers
A software maintainer can use Rekor to store the signed digest of an artifact. This would in turn help prevent an attack replacing a digest with the digest of a tampered release. This occured to [Linux Mint when there website was hacked](https://blog.linuxmint.com/?p=2994). We have seen a lot of projects storing hashes as a means of provenance for their users on insecure mutable platforms such as README.md files on a git hosted repository.

### Software distributors
Software distributors can query Rekor to gain cryptographically-backed digests to protect their own packaging systems from risks such as metadata replay attacks.

### Software packaging systems
Software packaging systems can harness Rekor to ensure users are not undergoing a targeted attack. Rekor can provide context to the effect of "What I am seeing, it what everyone else is seeing".

### Attestation solutions
Attestation solutions can attest / measure deployed artefacts and utilise Rekor as a means of measurements store.

###  Security Researchers
Rekors provenance can be quiered to discover behaivor patterns, for example namespaces being signed by certain keys that do not typically sign a certain projects release.

### \<Insert your use case here\>

Rekor is very flexible and allow you to create your own manifest layout. So you can use Rekor to capture your own data sets in a tamper resistant enviroment.

## Great, how do I get started?

#### Use Rekor as a store

If you're someone who wants to sign and store your own releases into Rekor, head over to the [Rekor Users section](http://localhost:1313/get_started/client/)

#### Deploy your own Rekor Server

If you want to host your own Rekor transparency service, head over to the [Rekor Server section](http://localhost:1313/get_started/server/)

#### Integrate with Rekor

If you want to develop your own application that makes use of Rekors APIs, head over to the [Rekor API Client Example](http://localhost:1313/get_started/api_client/)

## Need help?

Come on over to our slack channel! 