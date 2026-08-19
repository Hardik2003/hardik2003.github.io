/**
 * The free audit offered as a lead magnet.
 *
 * ONE audit, not two. The app at audit.sciontech.co runs a single scan that
 * returns a security score and priced waste together, from one CloudFormation
 * deploy. The site used to sell a "security audit" and a "cost audit" as
 * separate products, which meant a visitor asking for the cost one landed on
 * a page headed "Free AWS Security Audit" - and, worse, each product promised
 * its own three fixes, so the pair advertised six when the scan delivers
 * three.
 *
 * The two halves survive as `lenses`: sections of one report rather than
 * products, keeping the #security and #cost anchors alive for the inbound
 * links and rankings already pointing at them.
 *
 * Sample figures below are the anonymised aggregates from real executive
 * reports. Account numbers, instance IDs, IP addresses, security group names
 * and IAM usernames from those reports are deliberately NOT reproduced here -
 * they identify a live customer environment.
 */

export type AuditLens = {
  /** Doubles as the on-page anchor. Both are load-bearing for old links. */
  slug: 'security' | 'cost';
  eyebrow: string;
  title: string;
  shortTitle: string;
  icon: string;
  summary: string;
  sampleFindings: { severity: 'Critical' | 'High' | 'Medium'; text: string }[];
  deliverable: string;
};

export type Audit = {
  title: string;
  summary: string;
  /** Describes the scan itself, so it is one row rather than one per lens. */
  scope: { value: string; label: string }[];
  /**
   * What lands the moment the scan finishes. Free, unconditional, and
   * actionable without ever speaking to us.
   *
   * Stated once for the whole audit. Splitting this per lens is what
   * produced the six-fixes claim - keep it singular.
   */
  free: string[];
  /**
   * What comes in the 30-minute walkthrough with the engineer who ran the
   * scan. Gated on purpose rather than withheld as a sales lever: the full
   * register needs context to be useful, and a list of 153 high-severity
   * findings with no view of which four matter is noise.
   *
   * Keep this split honest. Promising the whole report up front and then
   * handing over three fixes is the one thing that would make the offer
   * feel like a bait.
   */
  walkthrough: string[];
  lenses: AuditLens[];
};

export const AUDIT: Audit = {
  title: 'Free AWS audit',
  summary:
    'One read-only scan, 637 checks across every region with active resources. It tells you where you are exposed and what the account is wasting, in the same report - because they are usually the same resources.',
  scope: [
    { value: '637', label: 'Automated checks' },
    { value: '418', label: 'Resources audited' },
    { value: '4', label: 'AWS regions covered' },
    { value: '7', label: 'Compliance frameworks mapped' },
  ],
  free: [
    'A risk score from 0 to 100, with every point traceable to a specific finding',
    'Critical, high and medium findings broken out by severity and region',
    'What the account is wasting, each item priced from AWS published rates so you can check it against your own bill',
    'Your three highest-impact fixes, fully worked - the console click-path, the CLI command, and how long each takes',
  ],
  walkthrough: [
    'The complete findings register, exposure and waste alike, each item tied to the exact resource identifier',
    'Compliance mapping to SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, CIS and NIST',
    'Issue distribution by category, so you can see where exposure and waste concentrate',
    'A 90-day roadmap sequenced across four phases, covering remediation and optimisation together',
    'Success metrics - current state against a 90-day target for each KPI',
  ],
  lenses: [
    {
      slug: 'security',
      eyebrow: 'What it finds',
      title: 'Where you are exposed',
      shortTitle: 'Exposure',
      icon: 'shield-search',
      summary:
        'IAM, network exposure, encryption, logging, threat detection and workload configuration - every finding mapped to the SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, CIS and NIST controls it breaches.',
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
          severity: 'High',
          text: 'A dormant administrator account holding an access key unrotated for 819 days.',
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
        'A recent audit returned 34 critical, 153 high and 226 medium findings across 418 resources, against a 76/100 risk score. The three fixes we led with were resolvable in under ten minutes each.',
    },
    {
      slug: 'cost',
      eyebrow: 'What it finds',
      title: 'Where the money goes',
      shortTitle: 'Waste',
      icon: 'gauge',
      summary:
        'The same scan sweeps for the spend that buys you nothing - gateways carrying no traffic, ancient snapshots, addresses attached to no machine - and prices each one against AWS published rates rather than estimating it.',
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
        'A recent audit identified 157 cost issues, 58 of them high-severity, and confirmed recoverable waste worth roughly $1,385 a year - every dollar of it removable in week 1 without a single code change or minute of downtime.',
    },
  ],
};

export const AUDIT_PRINCIPLES = [
  {
    icon: 'lock',
    title: 'Read-only, always',
    body: 'Two AWS-managed policies and zero write permissions. The role cannot create, modify or delete a single resource in your account - AWS enforces that, not our promise. Revoke it by deleting the stack.',
  },
  {
    icon: 'target',
    title: 'Confirmed, not estimated',
    body: 'We report what we can demonstrate against live usage. Anything we could not confirm is listed separately as an observation.',
  },
  {
    icon: 'layers',
    title: 'One scan, both lenses',
    body: 'Exposure and waste overlap more than people expect. An idle NAT gateway is money burning and a network exposure at once - one fix, paid for twice.',
  },
  {
    icon: 'users',
    title: 'Yours to action',
    body: 'The score and your three worked fixes arrive the moment the scan finishes, with no obligation and nothing to sign. They are written so your own team can action them without us.',
  },
];
