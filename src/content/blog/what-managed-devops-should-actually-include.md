---
title: What managed DevOps should actually include
description: What separates a genuine engineering partnership from a ticket queue, how to structure a retainer that does not decay into firefighting, and the questions to ask before signing one.
pubDate: 2025-09-16
category: Engagement
author: Hardik Kamdar
image: ../../assets/blog/managed-devops-model.png
imageAlt: Layered engagement coverage across platform, delivery, on-call and advisory work
readingTime: 8
---

"Managed DevOps" covers an uncomfortably wide range of arrangements. At one end it is a genuine extension of your engineering team. At the other it is a ticket queue with a response-time commitment and no interest in why the tickets keep arriving.

Both are sold with similar language. The difference shows up around month four.

## The failure mode is drifting into firefighting

The pattern is consistent. An engagement starts with improvement work: pipeline hardening, cost cleanup, monitoring gaps. Then an incident happens, then another, and the improvement work slips. Six months in, the entire retainer is consumed by reactive tickets, the underlying problems that generate those tickets are untouched, and everyone is busy.

This is not usually anyone acting in bad faith. Reactive work is urgent and improvement work is merely important, so reactive work wins every week unless the engagement is structured to prevent it.

The structural fix is to protect improvement capacity explicitly. A retainer that reserves a defined share of time for proactive work, tracked separately from incident response, and reported on separately. If the reactive load is consistently eating that share, the reserved allocation being visibly missed is the signal that something needs fixing at the root.

## Four things a real engagement covers

**Platform ownership.** Someone is responsible for the infrastructure being coherent: the account structure, the network, the identity model, the guardrails. Not "we will action requests against it", but "we are accountable for it making sense as a whole and for telling you when it does not".

**Delivery.** The pipelines, the release process, the environments. This is where most of the day-to-day value sits, because it affects every engineer on your team every day.

**On-call and incident response.** Defined escalation, real coverage windows, and a commitment to blameless review with follow-ups tracked to completion. Be specific here: "24/7 support" means very different things depending on whether an engineer is awake or a phone is ringing in an empty room.

**Advisory.** Time to be asked questions. Architecture review before a decision is made rather than after. This is the part clients undervalue in the contract and use most in practice.

## Knowledge transfer is not optional

An engagement that leaves you unable to operate your own platform has failed, even if everything works.

We take the view that documentation, runbooks and pairing are deliverables rather than courtesies. If we disappeared, your team should be able to run what we built. That means runbooks written for someone who was not in the room, infrastructure described in code in your repository rather than ours, and no undocumented manual steps.

The honest test is whether the provider is comfortable with you becoming less dependent on them. A provider whose commercial model relies on you not understanding your own infrastructure has an incentive that works against you.

## Questions worth asking before you sign

**Who specifically will do the work?** Named senior engineers, or a pool where whoever is free picks up the ticket? Continuity matters enormously for infrastructure work, because context is most of the value.

**What happens to unused hours?** Do they roll over, expire, or get quietly billed anyway?

**How is proactive work protected?** If the answer is vague, assume it will not be.

**What is the escalation path at three in the morning?** Get the actual mechanism, not the marketing claim.

**What do we own?** All code in your repositories, all documentation, all access. If any of it lives with the provider, you have a dependency you did not intend.

**How does this end?** A provider confident in their work will have a clear offboarding process. Reluctance to discuss it is informative.

## Where it genuinely makes sense

Not every team needs this. If you have platform engineers with capacity, you probably do not.

It fits when the skills are needed intermittently. Most teams do not need a cloud architect, an SRE, a FinOps analyst and a security engineer on payroll. They need those skills available when the work calls for them, which is occasionally and unpredictably. Hiring four specialists for that is not sensible, and hiring one generalist means three of the four areas get neglected.

It also fits when you have engineers who could do the work but should be doing something else. An engineer maintaining pipelines is an engineer not building product. That trade is sometimes right and often not, and it is worth costing honestly.

If you want to talk about what this would look like for your team, [start there](/contact).
