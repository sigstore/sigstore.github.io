---
title: "Rekor API Client Example"
date: 2020-12-11T10:09:51Z
draft: false
section: single
type: page
---

We also use [OpenAPI specification](https://swagger.io/docs/specification/about/) in rekor making it easy to bootstrap your own RestFul API client.

If you're interested in developing an application that can store or retrive entries into a Rekor transparency log, we recommend you take a look at the [examples repository](https://github.com/projectrekor/examples). In here you will find an example that downloads and stores the entire node.js signed release archive. It then monitors for new releases and automatically sends the signing artifacts to a rekor server.
