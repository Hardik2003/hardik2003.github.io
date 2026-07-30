---
title: Containerising CMSWire and Reworked on AWS Fargate
client: SimplerMedia Group
sector: Digital media
summary: Re-engineering a legacy EC2 setup into containers on Fargate, cutting operational costs by 20% and halving deployment times.
image: ../../assets/work/digital-media-simplermedia.png
date: 2025-06-02
order: 4
tags: [SecurityHub, Containerization]
stack: [Docker, AWS Fargate, CloudWatch, Jenkins, Terraform]
results:
  - value: "20%"
    label: Lower operational cost
  - value: "50%"
    label: Faster deployments
  - value: "30%"
    label: NAT-gateway cost spike resolved
seoDescription: Re-engineering SimplerMedia's legacy EC2 infrastructure into Docker containers on AWS Fargate, cutting operational costs 20% and halving deployment time.
---

For SimplerMedia's CMSWire and Reworked sites, we re-engineered their legacy EC2 setup into Docker containers on AWS Fargate, cutting operational costs by 20%.

We introduced automated budget alerts and drilled into CloudWatch metrics to catch a 30% NAT-gateway cost spike caused by a failing ECS task. After tracing excessive API calls via CloudWatch Logs, we collaborated with AWS support to resolve the root cause.

Our team then codified the entire pipeline with Jenkins and Terraform modules, reducing deployment times by half. This project cemented a low-touch, cost-controlled architecture that scales on demand.
