---
title: "AWS cost optimisation: where the money actually goes"
description: The five line items that dominate most AWS bills, why rightsizing is usually the smallest win available, and how to build cost visibility your team will actually act on.
pubDate: 2025-06-18
category: Cloud cost
author: Hardik Kamdar
image: ../../assets/blog/cloud-cost-optimisation.png
imageAlt: A chart showing monthly cloud spend declining against a target threshold
readingTime: 8
---

Most teams approach a cloud bill the same way: open Cost Explorer, sort descending, look at the biggest number, and start resizing instances. It feels productive. It is usually the least valuable thing you could be doing.

Compute is the largest line item on almost every AWS bill, which is exactly why it gets attention. But compute is also the line item your engineers understand best and have already thought about. The waste tends to be elsewhere, in the places nobody owns.

## The five things that actually dominate

Across the accounts we assess, the recoverable spend concentrates in the same handful of places.

**Idle resources nobody remembers creating.** NAT gateways provisioned for a subnet that no longer routes traffic. Elastic IPs allocated to instances that were terminated months ago. Load balancers in front of nothing. Each one is small, none of them appear as an anomaly, and collectively they are usually the single largest recoverable number in the account.

**Storage that only ever grows.** EBS snapshots without a lifecycle policy accumulate silently. We routinely find snapshots over two years old, retained because deleting them was never anyone's job. Unattached volumes from instances that were replaced rather than migrated. S3 buckets holding logs that no query has touched since the day they were written.

**Data transfer.** The line item nobody models in advance. Cross-availability-zone traffic between services that could have been co-located. Traffic routing through a NAT gateway because there is no VPC endpoint for S3, so every object read leaves the VPC and comes back. This one is invisible in an architecture diagram and obvious in a bill.

**Environments that run when nobody is working.** Development and staging environments sized like production, running twenty-four hours a day for a team that works eight. A schedule that stops non-production compute outside working hours typically removes two thirds of that spend and nobody notices.

**Commitment left on the table.** Steady-state production workloads on on-demand pricing, because evaluating Savings Plans requires someone to own the decision and no one does.

## Why rightsizing is usually last

Rightsizing gets the attention because it sounds like engineering. In practice it is the hardest win to bank and the easiest to get wrong.

An instance running at eight percent CPU looks obviously oversized until you find it is memory-bound, or that it handles a quarterly batch job that needs the headroom, or that the eight percent average conceals a spike that saturates a smaller instance type. Every rightsizing decision needs a human who understands the workload, and it carries a change window and a rollback plan.

Deleting an idle NAT gateway needs none of that. It carries no traffic, so removing it cannot break anything.

So we sequence the work by risk rather than by size: idle resources first, because they are safe and immediate. Storage lifecycle second. Scheduling and networking third. Commitments once the baseline is stable, because buying a one-year Savings Plan against a workload you are about to rightsize locks in the wrong number. Rightsizing last, deliberately, when the easy money is already banked.

## Visibility has to survive the project

The uncomfortable truth about cost optimisation is that a one-off exercise decays. You clean the account, everyone is pleased, and eighteen months later the same categories of waste have accumulated again, because nothing changed about how resources get created.

What makes it stick is boring:

**Tagging that is enforced, not requested.** A tagging policy nobody validates produces a cost report that cannot answer "which team spends this". Tag enforcement belongs in the pipeline, refusing to apply resources without an owner, not in a wiki page.

**Anomaly detection, which is free.** AWS Cost Anomaly Detection costs nothing and will email you when spend deviates from its learned pattern. Most accounts we look at have never enabled it. A misconfigured job that quadruples your NAT charges is caught in a day rather than at month end.

**Lifecycle policies rather than cleanup tasks.** Any snapshot or log bucket without a retention rule is a future cleanup ticket. Set the rule once instead of scheduling the cleanup forever.

**A number someone owns.** Cost per team, or per service, or per customer, reported somewhere people look. Aggregate spend is nobody's responsibility. Spend attributed to a team becomes something that team manages.

## What this looks like in practice

A recent assessment found roughly $115 a month in confirmed waste on a modest account: an idle NAT gateway, snapshots over 700 days old, three unattached Elastic IPs, and a stopped instance still billing for its storage. About $1,385 a year, all of it removable in the first week, none of it requiring a code change or a maintenance window.

That is not a dramatic number in isolation. What matters is that it was accumulating, and that the same account had no lifecycle policies, no anomaly detection and no tagging enforcement, meaning it would have kept accumulating.

The engineering value is not the $1,385. It is that after the work, the account stops generating new waste on its own.

If you want to know where your own spend is going, [our AWS audit is free](https://audit.sciontech.co/) and read-only. One scan prices what the account is wasting and hands you your three highest-impact fixes, whether or not you engage us.
