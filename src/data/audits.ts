/**
 * The two free audits offered as a lead magnet.
 *
 * Sample figures below are the anonymised aggregates from real executive
 * reports. Account numbers, instance IDs, IP addresses, security group
 * names and IAM usernames from those reports are deliberately NOT
 * reproduced here - they identify a live customer environment.
 */

export type Audit = {
  slug: 'security' | 'cost';
  eyebrow: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  headline: { value: string; label: string };
  scope: { value: string; label: string }[];
  includes: string[];
  sampleFindings: { severity: 'Critical' | 'High' | 'Medium'; text: string }[];
  deliverable: string;
};

export const AUDITS: Audit[] = [
  {
    slug: 'security',
    eyebrow: 'Free assessment',
    title: 'AWS security audit',
    shortTitle: 'Security audit',
    icon: 'shield-search',
    summary:
      '637 automated checks across every region with active resources, mapped to SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, CIS and NIST - with a risk score, a prioritised fix list, and a 90-day roadmap.',
    headline: { value: '637', label: 'Checks executed per account' },
    scope: [
      { value: '637', label: 'Automated checks' },
      { value: '418', label: 'Resources audited' },
      { value: '4', label: 'AWS regions covered' },
      { value: '7', label: 'Compliance frameworks mapped' },
    ],
    includes: [
      'A quantified risk score with critical, high and medium findings broken out',
      'Quick wins your own team can complete in under 30 minutes',
      'Top findings written up with the business risk, not just the CVE',
      'Compliance mapping to SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, CIS and NIST',
      'A 90-day remediation roadmap split into week 1, weeks 2-4, month 2 and month 3',
      'Success metrics - current state against a 90-day target for each KPI',
    ],
    sampleFindings: [
      {
        severity: 'Critical',
        text: 'A security group exposing all 65,535 ports to the public internet, with a directly reachable instance behind it.',
      },
      {
        severity: 'Critical',
        text: 'CloudTrail disabled across every region - meaning a breach would leave no forensic evidence at all.',
      },
      {
        severity: 'Critical',
        text: 'A dormant administrator account holding an access key unrotated for over 800 days.',
      },
      {
        severity: 'High',
        text: 'GuardDuty and Security Hub disabled everywhere, so cryptomining or data exfiltration would go unnoticed.',
      },
      {
        severity: 'High',
        text: 'EBS encryption off by default and S3 Block Public Access not set at the account level.',
      },
    ],
    deliverable:
      'A recent audit returned 34 critical and 153 high findings against a 76/100 risk score. The critical items were resolvable in under four hours of engineering effort.',
  },
  {
    slug: 'cost',
    eyebrow: 'Free assessment',
    title: 'AWS cost optimisation audit',
    shortTitle: 'Cost audit',
    icon: 'gauge',
    summary:
      'We find the spend that buys you nothing - idle gateways, ancient snapshots, addresses attached to no machine - and confirm each one against live usage rather than estimating.',
    headline: { value: 'Week 1', label: 'Typical payback period' },
    scope: [
      { value: '157', label: 'Cost issues identified' },
      { value: '58', label: 'High-severity findings' },
      { value: '5', label: 'Confirmed quick wins' },
      { value: 'Week 1', label: 'Typical payback period' },
    ],
    includes: [
      'Confirmed monthly and annual waste - measured against live usage, not estimated',
      'Quick wins you can delete in week 1 with zero application disruption',
      'In-depth findings across compute, IAM, S3, networking and cost governance',
      'Issue distribution by category so you can see where waste concentrates',
      'A 90-day optimisation roadmap with the sequencing worked out',
      'Success metrics - current state against a 90-day target for each KPI',
    ],
    sampleFindings: [
      {
        severity: 'High',
        text: 'An idle NAT gateway provisioned but carrying no traffic, billed every month for serving nothing.',
      },
      {
        severity: 'High',
        text: 'Snapshots over 700 days old with no lifecycle policy, accumulating silently month over month.',
      },
      {
        severity: 'High',
        text: 'Elastic IPs allocated but attached to no running instance, plus stopped instances still billing for storage.',
      },
      {
        severity: 'High',
        text: 'Instances running consistently below 5% CPU - over-provisioned for the workload they actually carry.',
      },
      {
        severity: 'Medium',
        text: 'No VPC endpoints for S3 or DynamoDB, routing internal traffic through a paid NAT gateway unnecessarily.',
      },
    ],
    deliverable:
      'A recent audit confirmed recoverable waste worth roughly $1,385 a year, every dollar of it removable in week 1 without a single code change or minute of downtime.',
  },
];

export const AUDIT_PRINCIPLES = [
  {
    icon: 'lock',
    title: 'Read-only, always',
    body: 'Every finding is confirmed from read-only credentials. We never modify your environment during an assessment - not one setting.',
  },
  {
    icon: 'target',
    title: 'Confirmed, not estimated',
    body: 'We report what we can demonstrate against live usage. Anything we could not confirm is listed separately as an observation.',
  },
  {
    icon: 'layers',
    title: 'Security and cost together',
    body: 'The two overlap more than people expect. An idle NAT gateway is wasted spend and a network exposure - one fix, double the value.',
  },
  {
    icon: 'users',
    title: 'Yours to keep',
    body: 'The report is yours whether or not you hire us. Quick wins are written so your own team can action them without our help.',
  },
];
