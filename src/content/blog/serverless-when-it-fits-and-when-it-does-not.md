---
title: "Serverless: when it fits, and when it quietly costs you more"
description: The workloads where serverless is genuinely the right answer, the ones where it becomes expensive and hard to debug, and the operational realities that rarely appear in the tutorials.
pubDate: 2025-08-12
category: Architecture
author: Hardik Kamdar
image: ../../assets/blog/serverless-patterns.png
imageAlt: A single event fanning out to parallel function invocations
readingTime: 9
---

Serverless is unusually good at the problems it suits and unusually awkward at the problems it does not. The difficulty is that the two look similar in a design document, and the difference only becomes obvious once you are running it.

We have built both. Here is how we decide.

## Where it genuinely wins

**Spiky and unpredictable load.** This is the strongest case. A workload that sits idle most of the day and then handles a burst is exactly what per-invocation billing is for. Provisioning instances for peak means paying for peak permanently. A queue consumer, a webhook handler, an image processor triggered by uploads: these are near-ideal.

**Event-driven glue.** Reacting to an object landing in storage, a message arriving on a topic, a scheduled job. The work is short, stateless, and naturally parallel. Writing this as a long-running service means building the scheduling and scaling machinery yourself.

**Genuinely low volume.** A service handling a few thousand requests a day costs close to nothing serverless, and costs the price of a running instance otherwise. Internal tools and admin functions often fall here and stay there forever.

**Small teams with no platform capacity.** If you have four engineers and no one whose job is infrastructure, not operating a cluster is a real advantage, even if the unit economics are slightly worse. The cost of a platform nobody has time to maintain is higher than the cost of the functions.

## Where it turns against you

**Sustained high throughput.** Per-invocation pricing stops being a bargain when the invocations never stop. A service handling steady traffic all day is usually cheaper on reserved compute, sometimes substantially. The crossover point arrives earlier than most teams expect, and the bill grows smoothly enough that nobody notices when it is passed.

**Anything latency-sensitive with cold starts in the path.** Cold starts have improved and there are mitigations, but a user-facing request that occasionally waits for a runtime to initialise is a real experience problem. Provisioned concurrency fixes it and removes much of the cost advantage in the process, which is worth being honest about upfront.

**Long-running or stateful work.** Execution time limits, no local state between invocations, and no long-lived connections. Working around these is possible and usually means you have rebuilt a worse version of a service that would have been simpler as a container.

**Chatty distributed logic.** A request that fans through eight functions, each adding invocation overhead and a network hop, is slower and harder to reason about than the same logic in one process. Function-per-operation is a decomposition strategy, not automatically a good one.

## The operational parts nobody mentions

The tutorials end at a deployed function. Production begins there.

**Debugging is genuinely harder.** There is no process to attach to and no host to inspect. A request crossing several functions and a queue produces a trace that only exists if you instrumented it deliberately. Distributed tracing is not optional here in the way it arguably is for a monolith; without it you are reading disconnected log lines and inferring causality.

**Local development is an approximation.** Emulators exist and they are imperfect. Teams end up testing against real cloud resources, which means per-developer environments, which means the infrastructure-as-code and teardown discipline has to be good or the account fills with orphaned resources.

**Cost becomes hard to predict.** Compute you can capacity-plan. Per-invocation billing scales with usage, which means a retry storm or an accidental recursive trigger produces a bill rather than a saturated instance. We have seen a misconfigured trigger that wrote to the bucket that invoked it. The failure mode of serverless is often financial rather than operational, and it needs anomaly alerting rather than CPU alarms.

**IAM proliferates.** Every function needs a role. Done properly that is dozens of narrowly-scoped roles, which is good security and real management overhead. Done carelessly it is one broad shared role, which defeats the isolation you chose serverless partly to get.

## What we usually end up recommending

Most systems we work on are not entirely serverless or entirely not. The useful question is per-workload rather than per-architecture.

Steady, latency-sensitive, request-response traffic tends to sit on containers where the cost is predictable and the debugging is familiar. Bursty, event-driven, asynchronous work tends to sit on functions where the scaling is free and the idle cost is zero. Scheduled and glue work goes serverless almost always, because standing up a service to run a nightly job is disproportionate.

The failure we see most often is not choosing wrong at the start. It is choosing once, for the whole system, and then never revisiting it as workloads change shape. A function that was bursty at launch and is now saturated all day should probably move. Nobody checks, because the architecture decision feels settled.

If you want help working out which of your workloads belong where, [that is a conversation worth having](/services/serverless-architecture).
