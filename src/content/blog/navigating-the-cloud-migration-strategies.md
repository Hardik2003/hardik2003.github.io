---
title: "Cloud migration: the strategy matters less than the order"
description: Why lift-and-shift is usually the right first move, how data gravity decides your sequence, and the two things that actually derail migrations.
pubDate: 2025-04-11
category: Technology
author: Hardik Kamdar
image: ../../assets/blog/cloud-migration.png
imageAlt: Abstract illustration of workloads moving from on-premise infrastructure into cloud environments
readingTime: 6
---

Every migration plan we are shown opens with a strategy. Rehost, replatform, refactor, the six Rs, a matrix scoring each application against each approach. It is a reasonable way to think and a poor way to start, because the strategy is rarely what goes wrong. The order is.

## Lift-and-shift is not the lazy option

Refactoring during a migration is the advice everyone gives and almost nobody should take on the first workload.

The problem is that it merges two projects with different failure modes. A migration fails visibly, at a known time, with a rollback you rehearsed. A refactor fails as a slow accumulation of behaviour nobody specified, discovered weeks later by a customer. Doing both at once means every incident starts with an argument about which change caused it.

Move it as it is, prove the network path and the runbooks work, then refactor from a position where you can roll back to something running in the same account. The instance will be oversized and the architecture will be unfashionable. Both are fixable later, cheaply, by people who now have production experience of the platform.

The exception is anything you were going to rewrite anyway. If a service is already being replaced, migrate the replacement and retire the original.

## Data gravity decides the sequence

Applications are easy to move. Data is not, and everything that touches the data has to move with it or pay to reach across.

This is the constraint that determines your order, and it is usually discovered late. A team migrates a stateless front end, declares success, and then finds the next service cannot follow because it makes forty thousand queries an hour against a database still sitting in the old data centre. Each query now crosses a VPN. Latency triples, the bill acquires a data transfer line nobody modelled, and the migration stalls at the point where it stops being reversible.

Group workloads by the data they share rather than by team, criticality or ease. Move a whole cluster of things that talk to one database together, or move none of them. A migration that is half done across a data boundary is worse than one that has not started, because you are paying for both environments and the network between them.

## What actually derails projects

Two things, in our experience, and neither is technical.

**Nobody owns the decision to stop.** Every migration hits a workload that resists: an appliance with a hardware dongle, a licence tied to a physical host, a service whose vendor folded in 2014. The project needs one person with the authority to say this one stays where it is. Without that, a plan for ninety workloads gets held hostage by three, and the eighty-seven that were ready sit in a half-migrated state for another quarter.

**The old environment never gets switched off.** The business case assumed you would stop paying for the data centre. Six months after cutover the racks are still running because one team has not moved and nobody will make the call. You are now funding two platforms and the saving that justified the project has evaporated. Put the decommission date in the plan, with a name against it, before the first workload moves.

## The parts worth automating early

Infrastructure as code from the first environment, not retrofitted after. Not because it is best practice, but because you are about to build the same VPC, the same security groups and the same IAM roles several times, and the second build is where hand-crafted infrastructure starts to drift.

Tagging enforced in the pipeline rather than requested in a document. During a migration you will be asked which costs belong to the migration and which are business as usual. Without tags applied at creation, that question has no answer and the finance conversation goes badly.

Everything else can wait. Service meshes, multi-cloud abstraction layers and cost dashboards are all easier to add to a stable platform than to a moving one.

## What we would ask first

Not which strategy, but: which workload can you move that, if it goes badly on a Saturday, costs you an apology rather than a customer? Start there, learn the platform on something forgiving, and let the order follow the data.

[Talk to us](/contact) about sequencing a migration around your data rather than your org chart.
