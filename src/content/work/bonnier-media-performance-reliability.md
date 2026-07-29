---
title: Sub-second load times for Saveur and PopSci
client: Bonnier Media
sector: Digital media
summary: Delivering sub-second load times and 99.9% uptime across two flagship publications, cutting latency 40% and directly boosting ad revenue.
image: ../../assets/work/digital-media-bonnier.png
date: 2025-06-02
order: 5
tags: [Security firewall, Varnish]
stack: [Varnish, EC2 Autoscaling, NFS, Terraform, CloudWatch]
results:
  - value: "40%"
    label: Latency reduction
  - value: "99.9%"
    label: Uptime achieved
  - value: "20%+"
    label: Availability improvement
seoDescription: How ScionTech delivered sub-second load times and 99.9% uptime for Bonnier Media's Saveur and PopSci with Varnish caching and Terraform-managed infrastructure.
---

We partnered with Bonnier Media to deliver sub-second load times and 99.9% uptime for Saveur and PopSci, directly boosting their ad revenue.

By deploying Varnish caching at the frontend, we slashed latency by 40% and improved availability by over 20%. When an autoscaling EC2 fleet failed to mount NFS after a security group change, we rapidly identified the misconfiguration, reverted it, and stabilised CPU utilisation across nodes.

To prevent future incidents, we built a centralised Terraform repository for all security-group settings. This milestone not only fortified system reliability but also established an audit-ready change process, positioning the platform for seamless growth.
