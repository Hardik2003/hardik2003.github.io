---
title: "Landing zones: getting the foundation right before you scale"
description: What a landing zone actually is, why account separation beats a single account with careful IAM, and the decisions that are expensive to reverse once workloads depend on them.
pubDate: 2025-07-24
category: Architecture
author: Hardik Kamdar
image: ../../assets/blog/landing-zone-design.png
imageAlt: An organisation boundary containing three separate cloud accounts
readingTime: 8
---

Most cloud estates were not designed. They started as one account created by one engineer to try something, and they grew from there. Production and development share a network. Permissions were granted when someone needed them and never revoked. There is one bill and no way to attribute it.

None of that is a crisis at ten resources. All of it is expensive to unpick at a thousand.

A landing zone is the foundation you wish you had built first: account structure, network layout, identity, logging and guardrails, decided deliberately and described in code before workloads arrive.

## Why separate accounts beat careful permissions

The instinct is to run one account and control access with IAM policies. It is simpler to set up and it feels sufficient.

The problem is that IAM is a policy boundary, not a blast radius boundary. A misconfigured policy, a compromised credential, or a script run against the wrong profile can reach anything in the account. Separate accounts give you a hard boundary that a mistake cannot cross, because the credential simply does not exist on the other side.

Account separation also solves problems that are painful to solve any other way. Service quotas are per-account, so a runaway development workload cannot exhaust production's capacity. Billing is per-account, so cost attribution stops requiring a tagging archaeology project. Blast radius during an incident is bounded by construction.

A reasonable starting structure separates production, non-production, and shared services, with dedicated accounts for logging and security tooling so that audit data lives somewhere a compromised workload account cannot alter it. Teams that need isolation get their own accounts rather than their own namespace.

## Networking is the decision you cannot easily undo

Almost everything in a cloud estate can be changed later. Network addressing is the exception.

Overlapping CIDR ranges between accounts, or between cloud and on-premise, will block peering and VPN connectivity at exactly the moment you need it, and fixing it means re-addressing running workloads. Allocate ranges from a plan that accounts for growth, environments and regions before the first VPC exists, even if most of it stays unused for two years.

Beyond addressing, the design decisions that matter are the ones that determine what can reach what. Private subnets for anything that does not need to be internet-reachable, which is most things. VPC endpoints for the services your workloads call constantly, both to keep that traffic off the public internet and to keep it off your NAT gateway bill. Segmentation that reflects trust boundaries rather than convenience.

## Identity, before it becomes load-bearing

Access patterns calcify. Once forty people and a dozen pipelines depend on a permissions model, changing it becomes a project with a risk register.

The things worth getting right at the start are unglamorous. Federated identity from a single directory rather than local users per account, so that offboarding one person actually removes their access everywhere. Short-lived credentials assumed through roles rather than long-lived access keys that sit in configuration files and never rotate. Permissions scoped to what a role does, granted from a small set of reviewed policies rather than accumulated ad hoc.

The pattern we see most often is a handful of accounts where a broad administrator policy was attached years ago to get something working, and never narrowed. Every one of those is an outsized blast radius waiting for a leaked credential.

## Guardrails make the safe path the easy path

Documentation asking people not to do something is not a control. A guardrail that prevents it is.

Service control policies at the organisation level can deny whole categories of action regardless of what an account's own IAM permits: no disabling audit logging, no use of unapproved regions, no deleting security tooling. These are cheap to apply and they hold even against an account administrator.

Below that, policy-as-code in the pipeline catches the class of mistake that guardrails are too blunt for: resources without encryption, storage without versioning, security groups open to the world. Encoded as testable rules, version-controlled and reviewed like any other code.

The goal is that the insecure option requires deliberate effort while the secure one is the default.

## Logging you cannot quietly turn off

Centralised audit logging into an account that workload credentials cannot write to is the difference between investigating an incident and guessing about one.

We regularly assess accounts where audit logging is disabled entirely, across every region. That means a breach leaves no forensic trail at all, and it fails the logging control in essentially every compliance framework. Enabling it is a ten-minute task, and it is the single highest-value change available in most estates.

## Retrofitting is possible, just sequenced differently

Most of the teams we work with already have workloads running, so building a greenfield landing zone is not on the table. That is fine. The work becomes incremental: establish the organisation and guardrails around what exists, stand up centralised logging, create the account structure, then migrate workloads into it as their own natural change windows come around.

What you do not do is try to move everything at once. The foundation can be laid underneath a running estate, one workload at a time.

If you are at the point where the single-account approach is starting to hurt, [we can help you plan the structure](/services/cloud-architecture-and-landing-zones).
