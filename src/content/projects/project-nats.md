---
title: 'Knative eventing-nats'
description: k8s native eventing channel/broker implementation based on Nats/Jetstream
publishDate: 'Oct 31 2024'
# seo:
#   image:
#     src: '/home.png'
#     alt: Project preview
---

<!-- ![Project preview](/home.png) -->

Cloud computing is popular nowadays and k8s is custom cloud solution for those who has one million dollar of money to spend on it.
I mean it is not easy to use, a lot of concepts and nuances you need to know to run it in production. There is an extension to k8s to make it
simpler to use: [knative](https://knative.dev). It has two main projects:  
- serving: serverless for k8s
- eventing: event mesh

Knative eventing is a broker/trigger based event driven applications support. It can run based on different messaging/streaming solutions like
kafka, rabbitmq, nats, etc.

I support oss [eventing-nats](https://github.com/knative-extensions/eventing-natss) extension of knative-eventing. 

