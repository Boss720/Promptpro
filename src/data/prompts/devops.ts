import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'devops-ci-cd-generator',
    title: 'CI/CD Pipeline Generator',
    category: 'devops',
    tags: ['ci/cd', 'automation', 'generator'],
    description: 'Generates a complete CI/CD pipeline configuration for a specified tech stack and deployment target.',
    body: `You are a DevOps engineer designing a CI/CD pipeline.

Context:
- Language/framework: {{language}}
- Deployment target: {{target}}
- Desired tool: {{tool}}

Your task: Generate a complete, production-ready {{tool}} configuration that:
1. Builds and tests the application.
2. Runs security scanning (SAST, dependency checks).
3. Deploys to {{target}} on successful tests.
4. Includes rollback triggers for deployment failures.

Format: Output the complete pipeline configuration in a code block, then provide a brief matrix table showing each stage, its trigger, and timeout. List 3 common failure scenarios and how the pipeline recovers from each.`,
    variables: [
      { name: 'language', label: 'Language/framework', placeholder: 'Python/Django, Node.js/Next.js, Go, Rust' },
      { name: 'target', label: 'Deployment target', placeholder: 'Kubernetes, AWS Lambda, Docker Swarm, Heroku' },
      { name: 'tool', label: 'CI/CD tool', default: 'GitHub Actions', placeholder: 'GitHub Actions, GitLab CI, CircleCI, Jenkins' },
    ],
  },
  {
    id: 'devops-incident-coach',
    title: 'Incident Response Coach',
    category: 'devops',
    tags: ['incident-response', 'postmortem', 'runbook'],
    description: 'Guides you step-by-step through incident response and postmortem-writing, asking clarifying questions.',
    body: `You are an incident response coach. Your job is to help the user work through an ongoing or recent incident methodically.

Incident summary: {{incident_summary}}

First, ask the user 3–4 clarifying questions about the incident in this order:
1. Timeline: When did it start and when was it resolved? How did detection happen?
2. Impact: What services were affected? How many users? Any data loss or security exposure?
3. Root cause: Is the root cause known yet? If not, what data are you examining?
4. Mitigation: What short-term fixes are in place? What long-term changes are planned?

After they respond, provide a structured postmortem outline (context, timeline, impact, root cause, action items) with 3–5 specific questions for each section to guide their writing. Include a blameless-culture reminder.`,
    variables: [
      { name: 'incident_summary', label: 'Brief incident summary', placeholder: 'Database connection pool exhaustion in production, API latency spike at 3 AM UTC' },
    ],
  },
  {
    id: 'devops-log-analyzer',
    title: 'Log Analysis & Extraction',
    category: 'devops',
    tags: ['logs', 'analysis', 'debugging'],
    description: 'Extracts structured insights from unstructured logs, identifying patterns, errors, and anomalies.',
    body: `You are a log analysis expert. You will parse logs and extract structured findings.

Logs to analyze:
{{logs}}

Your task: Extract and return as JSON:
{
  "error_summary": { "type": "...", "count": ..., "first_occurrence": "...", "last_occurrence": "..." },
  "error_patterns": [{ "pattern": "...", "frequency": "...", "likely_cause": "..." }],
  "performance_issues": [{ "metric": "...", "anomaly": "...", "affected_component": "..." }],
  "warnings": [{ "message": "...", "severity": "low|medium|high", "actionable_fix": "..." }],
  "service_health": { "up_percent": ..., "error_rate": "...", "p95_latency_ms": ... },
  "next_investigation_steps": [...]
}

Do not speculate beyond what the logs show. Flag data gaps.`,
    variables: [
      { name: 'logs', label: 'Logs to analyze', placeholder: 'Paste multi-line application or infrastructure logs' },
    ],
  },
  {
    id: 'devops-dockerfile-reviewer',
    title: 'Dockerfile & Image Reviewer',
    category: 'devops',
    tags: ['docker', 'security', 'review'],
    description: 'Reviews Dockerfile for security, performance, and best-practice issues with specific remediation steps.',
    body: `You are a container security and performance expert reviewing a Dockerfile.

Dockerfile:
{{dockerfile}}

Review and return findings in this format:
1. Security issues:
   - [HIGH/MED/LOW] {issue} → {fix}
   - Include checks for: unprivileged user, secrets in layers, base image tag pinning, layer caching.

2. Performance issues:
   - {issue} → {fix}
   - Suggest layer order, caching, multi-stage builds.

3. Best practices:
   - {issue} → {fix}
   - Suggest: .dockerignore, HEALTHCHECK, minimal base images.

4. Rewritten excerpt:
   - Show the 3 most impactful improvements with context.

Be specific: if you recommend pinning base image tags, provide the correct syntax. If layer order matters, show why.`,
    variables: [
      { name: 'dockerfile', label: 'Dockerfile contents', placeholder: 'Paste your Dockerfile' },
    ],
  },
  {
    id: 'devops-shell-script-auditor',
    title: 'Shell Script Security Auditor',
    category: 'devops',
    tags: ['shell', 'security', 'audit'],
    description: 'Audits shell scripts for security vulnerabilities, error handling, and portability issues.',
    body: `You are a shell scripting security expert auditing a production script.

Script:
{{script}}

Target shell: {{shell_type}}

Audit and report:
1. Security vulnerabilities (command injection, quoting issues, unchecked inputs):
   - {issue} at line {n} → {fix}

2. Error handling gaps (unchecked commands, trap handlers, exit codes):
   - {issue} → {fix}

3. Portability issues (bashisms vs POSIX, tool availability):
   - {issue} → {fix}

4. Performance (unnecessary subshells, globbing inefficiency):
   - {issue} → {fix}

5. Severity summary: Is this script safe for production? What must be fixed before use?

Provide corrected code snippets for top 3 issues.`,
    variables: [
      { name: 'script', label: 'Script contents', placeholder: 'Paste your shell script' },
      { name: 'shell_type', label: 'Target shell', default: 'bash', placeholder: 'bash, sh, zsh, dash' },
    ],
  },
  {
    id: 'devops-kubernetes-generator',
    title: 'Kubernetes Manifest Generator',
    category: 'devops',
    tags: ['kubernetes', 'generator', 'deployment'],
    description: 'Generates production-ready Kubernetes manifests with resource limits, probes, and best practices.',
    body: `You are a Kubernetes architect generating manifests for a workload.

Workload details:
- Application: {{app_name}}
- Image: {{image}}
- Replicas: {{replicas}}
- Resource requests: {{requests}}
- Special requirements: {{requirements}}

Generate:
1. Deployment manifest with:
   - Resource requests and limits (CPU, memory).
   - Liveness, readiness, and startup probes.
   - Security context (non-root user, read-only filesystem).
   - Environment variables and ConfigMap references.

2. Service manifest (ClusterIP or LoadBalancer).

3. A brief YAML comment explaining probe timing and resource allocation rationale.

4. List 3 production-readiness checklist items specific to this deployment.

Provide complete, copy-paste-ready YAML.`,
    variables: [
      { name: 'app_name', label: 'Application name', placeholder: 'my-api, data-processor, web-worker' },
      { name: 'image', label: 'Docker image', placeholder: 'ghcr.io/org/app:v1.2.3' },
      { name: 'replicas', label: 'Desired replicas', default: '3', placeholder: '1, 3, 5' },
      { name: 'requests', label: 'Resource requests', default: '256Mi RAM, 100m CPU', placeholder: '256Mi RAM, 100m CPU' },
      { name: 'requirements', label: 'Special requirements', placeholder: 'Persistent volume, GPU access, database credentials' },
    ],
  },
  {
    id: 'devops-deployment-checklist',
    title: 'Deployment Readiness Checklist',
    category: 'devops',
    tags: ['deployment', 'checklist', 'guide'],
    description: 'Creates a tailored, step-by-step deployment checklist for your specific release.',
    body: `You are creating a deployment checklist for a release.

Release: {{release_name}}
Environment: {{environment}}
Changes: {{changes}}
Risk level: {{risk_level}}

Generate a prioritized, step-by-step checklist (not just a bullet list) that:
1. Pre-deployment (3–5 steps): backups, dependency checks, config validation.
2. Deployment (5–8 steps): actual rollout, health checks, traffic shifts.
3. Post-deployment (3–5 steps): monitoring, metrics verification, rollback plan.

For each step, include:
- Action (specific command or manual task).
- Success criteria (how to verify it worked).
- Rollback action (if this step fails).

At the bottom, add "Abort criteria" — conditions that should trigger a rollback immediately.

Tailor specificity to the risk level: high-risk releases need finer detail.`,
    variables: [
      { name: 'release_name', label: 'Release identifier', placeholder: 'v2.5.0, backend-migration-2024-06' },
      { name: 'environment', label: 'Target environment', default: 'production', placeholder: 'staging, production, canary' },
      { name: 'changes', label: 'Summary of changes', placeholder: 'Database schema migration, API endpoint refactor, dependency upgrades' },
      { name: 'risk_level', label: 'Risk assessment', default: 'medium', placeholder: 'low, medium, high' },
    ],
  },
  {
    id: 'devops-monitoring-alert-reviewer',
    title: 'Monitoring Alert Configuration Reviewer',
    category: 'devops',
    tags: ['monitoring', 'alerts', 'review'],
    description: 'Reviews alerting rules for clarity, appropriate thresholds, and operational impact.',
    body: `You are a monitoring expert reviewing alert configurations.

Alert rules to review:
{{alert_rules}}

Evaluate each alert on:
1. Clarity: Is the alert name and description actionable and clear?
2. Thresholds: Are values based on SLO/SLA or historical baselines? Are they too tight (alert fatigue) or too loose (missed issues)?
3. Duration: Is the duration window appropriate (avoid flapping; catch real issues)?
4. Routing: Does the alert route to the right on-call team? Is escalation defined?
5. Runbook link: Is there a documented response procedure?

Format output as a table with columns: Alert Name | Issue | Severity | Recommended Fix

Add a summary: How many alerts are ready for production? How many need tuning? Recommend 2–3 priority fixes.`,
    variables: [
      { name: 'alert_rules', label: 'Alert configuration (YAML or JSON)', placeholder: 'Paste your alerting rules (Prometheus, DataDog, etc.)' },
    ],
  },
  {
    id: 'devops-database-migration-reviewer',
    title: 'Database Migration Reviewer',
    category: 'devops',
    tags: ['database', 'migration', 'review'],
    description: 'Reviews database migrations for safety, performance impact, and rollback readiness.',
    body: `You are a database specialist reviewing a migration script.

Migration:
{{migration_script}}

Database: {{db_type}}
Table size: {{table_size}}
Downtime tolerance: {{downtime_tolerance}}

Review and report:
1. Safety concerns:
   - Locking duration (will it block writers?).
   - Data loss risks (dropped columns without backup).
   - Constraint violations (foreign keys, unique indexes).

2. Performance impact:
   - Index rebuild cost.
   - Full-table scan risk.
   - Replication lag prediction (if applicable).

3. Rollback readiness:
   - Can this be rolled back? How?
   - Is there a before/after state to verify?

4. Recommended approach for zero-downtime or minimal-downtime execution (if needed).

5. Pre-flight checklist: What must be done before running this migration?

Provide a rewritten or alternative migration if the current one is unsafe.`,
    variables: [
      { name: 'migration_script', label: 'Migration script', placeholder: 'SQL ALTER TABLE, CREATE INDEX, etc.' },
      { name: 'db_type', label: 'Database type', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, MongoDB' },
      { name: 'table_size', label: 'Estimated affected data size', placeholder: '50M rows, 500GB table' },
      { name: 'downtime_tolerance', label: 'Downtime tolerance', default: '0 (zero-downtime required)', placeholder: '0, <5min, <1hr' },
    ],
  },
  {
    id: 'devops-infra-code-auditor',
    title: 'Infrastructure-as-Code Security Auditor',
    category: 'devops',
    tags: ['iac', 'security', 'terraform'],
    description: 'Audits Terraform, CloudFormation, or other IaC for security misconfigurations and best practices.',
    body: `You are an IaC security auditor reviewing infrastructure code.

IaC code:
{{iac_code}}

Tool: {{tool}}

Audit and report findings as a structured list:

1. Security misconfigurations:
   - [CRITICAL/HIGH/MEDIUM/LOW] {resource} {issue} → {fix}
   - Examples: exposed S3 buckets, overly permissive security groups, unencrypted volumes.

2. Compliance & cost concerns:
   - Untagged resources (cost allocation).
   - Missing backup or retention policies.
   - Logging not enabled.

3. Code quality:
   - Hard-coded values (should use variables).
   - Missing variable validation.
   - Unused resources.

4. Recommended refactors:
   - Suggest modules, data sources, or outputs to add.

Return as JSON with fields: severity, resource_type, finding, remediation.

At the bottom: Is this safe to apply? What must be fixed before deployment?`,
    variables: [
      { name: 'iac_code', label: 'IaC code', placeholder: 'Paste your Terraform, CloudFormation, or Pulumi code' },
      { name: 'tool', label: 'IaC tool', default: 'Terraform', placeholder: 'Terraform, CloudFormation, Pulumi, Ansible' },
    ],
  },
  {
    id: 'devops-load-test-consultant',
    title: 'Load Testing Strategy Consultant',
    category: 'devops',
    tags: ['testing', 'performance', 'consultant'],
    description: 'Helps design a load test plan by asking questions about targets, goals, and constraints.',
    body: `You are a load-testing consultant helping design a test plan.

Your task: Ask the user 5 clarifying questions to understand their load-testing goals, then provide a customized load-test plan.

Ask in this order:
1. What is the target system and endpoint? (e.g., API route, web page, database query)
2. What is the success metric? (throughput, latency p95, error rate threshold)
3. What is the expected production load? (requests/sec, concurrent users, growth rate)
4. What is the test environment? (staging, production replica, isolated test cluster)
5. What constraints exist? (budget, time, infrastructure limits)

After they respond, provide:
- Load profile (ramp-up, sustained, spike, soak test recommendations).
- Recommended tool (k6, JMeter, Locust, etc.).
- Test scenarios (happy path, edge cases, failure scenarios).
- Success criteria and abort conditions.
- Monitoring requirements during the test.

Tailor to their specific constraints and goals.`,
    variables: [],
  },
  {
    id: 'devops-backup-strategy-designer',
    title: 'Backup & Recovery Strategy Designer',
    category: 'devops',
    tags: ['backup', 'disaster-recovery', 'strategy'],
    description: 'Designs a backup and recovery strategy with retention, verification, and RTO/RPO targets.',
    body: `You are designing a backup and recovery strategy.

System: {{system}}
Data size: {{data_size}}
RTO requirement: {{rto}}
RPO requirement: {{rpo}}
Compliance needs: {{compliance}}

Design a strategy that includes:

1. Backup approach:
   - Full vs. incremental schedule.
   - Frequency and retention policy (daily, weekly, monthly, yearly).
   - Storage locations (on-site, cloud, geo-redundant).

2. Verification & testing:
   - Recovery testing schedule.
   - Backup integrity checks.
   - How to verify restoration success.

3. Disaster recovery plan:
   - RTO-aligned steps (how to restore within {{rto}}).
   - RPO-aligned guarantee (no more than {{rpo}} data loss).
   - Failover procedure.

4. Automation:
   - Which backup tasks should be automated?
   - Alert conditions (backup failure, storage full).

5. Compliance & audit:
   - How does this meet {{compliance}} requirements?
   - Audit trail and documentation.

Provide a weekly/monthly/yearly schedule table and a recovery runbook outline.`,
    variables: [
      { name: 'system', label: 'System/data type', placeholder: 'PostgreSQL database, S3 bucket, Kubernetes etcd, file server' },
      { name: 'data_size', label: 'Data size', placeholder: '100GB, 1TB, 10TB' },
      { name: 'rto', label: 'Recovery Time Objective (RTO)', default: '4 hours', placeholder: '1 hour, 4 hours, 24 hours' },
      { name: 'rpo', label: 'Recovery Point Objective (RPO)', default: '1 hour', placeholder: '15 minutes, 1 hour, 24 hours' },
      { name: 'compliance', label: 'Compliance requirements', placeholder: 'GDPR, HIPAA, SOC2, none' },
    ],
  },
  {
    id: 'devops-config-drift-detector',
    title: 'Configuration Drift Detection & Remediation',
    category: 'devops',
    tags: ['configuration', 'drift', 'audit'],
    description: 'Analyzes actual vs. expected configuration states and recommends drift remediation steps.',
    body: `You are analyzing configuration drift in a system.

Expected state (IaC/config management):
{{expected_config}}

Actual state (current running config):
{{actual_config}}

System type: {{system_type}}

Compare and report:

1. Drift summary:
   - Items that match expected state.
   - Items that differ (unexpected changes).
   - Items in actual but not in expected (manual additions).

2. Severity assessment:
   - [CRITICAL/HIGH/MEDIUM/LOW] {drift item} → {impact}
   - Examples: security group rules modified, certificates expired, version pinning broken.

3. Root cause analysis:
   - Was this a failed automation run? Manual change? Env-specific override?

4. Remediation plan:
   - Restore from IaC? Update IaC to match actual? Investigate and fix manually?
   - For each drift: recommended action and risk.

5. Prevention:
   - Enable drift detection monitoring.
   - Add guardrails to prevent manual changes.

Return as JSON with drift_id, expected, actual, severity, remediation.`,
    variables: [
      { name: 'expected_config', label: 'Expected configuration (from IaC)', placeholder: 'Terraform state, Ansible playbook, CloudFormation template' },
      { name: 'actual_config', label: 'Actual running configuration', placeholder: 'AWS CLI describe output, ansible -i inventory -m setup, kubectl get' },
      { name: 'system_type', label: 'System type', placeholder: 'AWS infrastructure, Kubernetes cluster, server fleet' },
    ],
  },
  {
    id: 'devops-container-registry-cleaner',
    title: 'Container Registry Cleanup & Optimization',
    category: 'devops',
    tags: ['registry', 'optimization', 'cleanup'],
    description: 'Analyzes container registry usage and provides a cleanup and retention policy.',
    body: `You are optimizing a container registry.

Registry metadata:
{{registry_metadata}}

Registry: {{registry_type}}
Storage limit: {{storage_limit}}
Monthly cost: {{monthly_cost}}

Analyze and report:

1. Current usage:
   - Total images and tags.
   - Largest images and bloated candidates.
   - Unused or stale images (no pulls in {{days}} days).
   - Duplicate layers across images.

2. Cleanup opportunities:
   - Images to delete (unused, redundant).
   - Storage savings estimate.
   - Cost savings estimate.

3. Recommended retention policy:
   - Keep recent N tags per image.
   - Delete images older than {{days}} days (unless pinned).
   - Keep specific release tags (e.g., v*.*, main, stable).

4. Automation:
   - Cleanup job schedule.
   - Dry-run before deletion.
   - Audit log requirements.

5. Preventive measures:
   - Image size reduction tips (multi-stage builds, minimal base images).
   - Tagging strategy to prevent orphaned images.

Provide a shell script or tool configuration for automated cleanup.`,
    variables: [
      { name: 'registry_metadata', label: 'Registry statistics', placeholder: 'Total size, number of images, storage report' },
      { name: 'registry_type', label: 'Registry type', default: 'Docker Hub', placeholder: 'Docker Hub, ECR, GCR, Harbor, ACR' },
      { name: 'storage_limit', label: 'Storage limit or budget', placeholder: '500GB, 1TB, $500/month' },
      { name: 'monthly_cost', label: 'Current storage cost', placeholder: '$50, $200, $500/month' },
      { name: 'days', label: 'Staleness threshold (days)', default: '30', placeholder: '7, 30, 90' },
    ],
  },
  {
    id: 'devops-api-rate-limiting-designer',
    title: 'API Rate Limiting & Throttling Designer',
    category: 'devops',
    tags: ['api', 'rate-limiting', 'design'],
    description: 'Designs rate-limiting and throttling strategies for APIs with fairness and business goals in mind.',
    body: `You are designing rate-limiting for an API.

API: {{api_name}}
Typical load: {{load}}
Cost per request: {{cost}}
Key consumers: {{consumers}}

Design a rate-limiting strategy that includes:

1. Tier structure:
   - Free tier: requests/min, burst allowance.
   - Paid tier(s): scaled limits with pricing.
   - Internal/partner tier: higher limits or custom.

2. Rate-limiting algorithm:
   - Token bucket, sliding window, or leaky bucket.
   - Justification for choice.

3. Fairness & abuse prevention:
   - Per-IP, per-user, or per-API-key limits.
   - Burst handling (allow spikes up to X, then throttle).
   - DDoS mitigation rules (block if X requests/sec per source).

4. Response behavior:
   - HTTP status codes (429 Too Many Requests).
   - Retry-After header values.
   - Client-side guidance (back-off strategy).

5. Monitoring & alerting:
   - Track rate-limit hit rate per consumer.
   - Alert if legitimate users are hitting limits.
   - Adjust thresholds quarterly based on usage patterns.

6. Business impact:
   - Expected revenue from paid tiers.
   - Cost savings from abuse prevention.

Provide example rate-limit headers and a consumer onboarding guide.`,
    variables: [
      { name: 'api_name', label: 'API name', placeholder: 'my-data-api, ml-inference-service' },
      { name: 'load', label: 'Typical load', placeholder: '1000 req/sec, 50M requests/day' },
      { name: 'cost', label: 'Cost per request', placeholder: '$0.01, $0.001, variable' },
      { name: 'consumers', label: 'Key consumer types', placeholder: 'mobile app, web frontend, data partners, internal services' },
    ],
  },
  {
    id: 'devops-security-scanning-setup',
    title: 'Security Scanning Pipeline Setup Guide',
    category: 'devops',
    tags: ['security', 'scanning', 'guide'],
    description: 'Guides setup of SAST, DAST, and dependency scanning in CI/CD with tuning for false positives.',
    body: `You are setting up security scanning in a CI/CD pipeline.

Tech stack: {{stack}}
Pipeline tool: {{pipeline_tool}}
Risk tolerance: {{risk_tolerance}}

Provide step-by-step guidance:

1. SAST (static code analysis):
   - Recommended tool (Semgrep, SonarQube, Checkmarx, etc.).
   - Setup in {{pipeline_tool}} with example config.
   - Rules to enable/disable for your {{stack}}.
   - How to suppress false positives (annotations, rules).

2. Dependency scanning:
   - Tool (Dependabot, Snyk, WhiteSource, etc.).
   - Integration steps.
   - Policy (block on critical/high, warn on medium).

3. Container/image scanning:
   - Registry scanning (if using Docker).
   - Base image validation.
   - Malware and vulnerability scanning.

4. Secret scanning:
   - Pre-commit hooks (detect credentials before commit).
   - CI scanning (in case pre-commit is bypassed).

5. Tuning & false-positive reduction:
   - Common false positives in {{stack}} and how to suppress.
   - Baseline establishment (first scan may find many; triage and baseline).
   - Review frequency (daily, per PR, weekly).

6. Enforcement:
   - Should SAST failures block merge? (recommendation for {{risk_tolerance}}).
   - Escalation for high-severity findings.

Provide a sample GitHub Actions / GitLab CI config with 2–3 scanners integrated.`,
    variables: [
      { name: 'stack', label: 'Tech stack', placeholder: 'Python/Django, Node.js/React, Java/Spring' },
      { name: 'pipeline_tool', label: 'CI/CD tool', default: 'GitHub Actions', placeholder: 'GitHub Actions, GitLab CI, Jenkins, CircleCI' },
      { name: 'risk_tolerance', label: 'Risk tolerance', default: 'medium', placeholder: 'low (strict), medium (balanced), high (permissive)' },
    ],
  },
  {
    id: 'devops-traffic-splitting-strategist',
    title: 'Traffic Splitting & Canary Strategy',
    category: 'devops',
    tags: ['deployment', 'canary', 'strategy'],
    description: 'Designs a traffic-splitting strategy for canary deployments with metrics and rollback triggers.',
    body: `You are designing a canary deployment strategy.

Service: {{service}}
Deployment frequency: {{frequency}}
Traffic volume: {{traffic_volume}}
Acceptable error budget: {{error_budget}}

Design a traffic-splitting strategy with:

1. Canary progression:
   - Phase 1: {{phase_1_percent}}% traffic for {{phase_1_duration}}.
   - Phase 2: {{phase_2_percent}}% traffic for {{phase_2_duration}}.
   - Phase 3: 100% traffic.
   - Justification for each phase duration and percentage.

2. Health checks & metrics:
   - Metrics to monitor (error rate, latency p95, custom business metrics).
   - Thresholds for each metric (when to trigger rollback).
   - Dashboard configuration.

3. Rollback triggers:
   - [CRITICAL] {metric} > {threshold} → immediate rollback.
   - [HIGH] {metric} > {threshold} → escalate to on-call.
   - Manual override option.

4. Infrastructure requirements:
   - Load balancer/mesh configuration (canary weight adjustment).
   - DNS/routing strategy.
   - Session affinity (if needed).

5. Automation:
   - Auto-scaling during canary.
   - Gradual rollout automation (vs. manual progression).

6. Post-deployment:
   - Success criteria (green light to complete rollout).
   - Cleanup (remove canary infrastructure).

Provide a deployment workflow diagram or pseudocode.`,
    variables: [
      { name: 'service', label: 'Service name', placeholder: 'api-gateway, payment-processor, recommendation-engine' },
      { name: 'frequency', label: 'Deployment frequency', default: 'weekly', placeholder: 'daily, weekly, on-demand' },
      { name: 'traffic_volume', label: 'Traffic volume', placeholder: '1000 req/sec, 10M requests/day' },
      { name: 'error_budget', label: 'Acceptable error budget', default: '0.01%', placeholder: '0.01%, 0.1%, 1%' },
      { name: 'phase_1_percent', label: 'Phase 1 traffic %', default: '5', placeholder: '1, 5, 10' },
      { name: 'phase_1_duration', label: 'Phase 1 duration', default: '10 minutes', placeholder: '5 minutes, 10 minutes, 1 hour' },
      { name: 'phase_2_percent', label: 'Phase 2 traffic %', default: '25', placeholder: '25, 50' },
      { name: 'phase_2_duration', label: 'Phase 2 duration', default: '30 minutes', placeholder: '30 minutes, 1 hour' },
    ],
  },
  {
    id: 'devops-runbook-generator',
    title: 'Incident Runbook Generator',
    category: 'devops',
    tags: ['runbook', 'incident-response', 'generator'],
    description: 'Generates a structured, step-by-step runbook for a specific incident or operational task.',
    body: `You are creating a runbook for operational tasks or incident response.

Incident/task: {{incident_type}}
Common symptoms: {{symptoms}}
Typical duration: {{duration}}
On-call skill level: {{skill_level}}

Generate a runbook with:

1. Overview:
   - 1-line summary.
   - Why this matters (user impact).
   - Typical duration.

2. Pre-incident checklist:
   - What should be in place before an incident (monitoring, alerting, access).

3. Detection & triage:
   - Symptoms to watch for (map to monitoring alerts).
   - Initial diagnostics (commands to run, logs to check).
   - Severity assessment (P1/P2/P3 based on symptoms).

4. Resolution steps (for each severity level):
   - Step 1: {action} → {expected outcome} → {verify with command}.
   - Include conditional branching ("if X, do Y; else, do Z").
   - Commands with exact syntax (not pseudocode).

5. Escalation:
   - When to involve another team.
   - Escalation contacts and pages.

6. Post-incident:
   - Cleanup (restore systems to baseline).
   - Metrics to check (verify full recovery).
   - Postmortem trigger (if needed).

7. Reference:
   - Dashboard links.
   - Relevant docs and contact info.

Use a clear, scannable format (bold headers, code blocks for commands, tables for decision trees).`,
    variables: [
      { name: 'incident_type', label: 'Incident/task type', placeholder: 'High API latency, database replication lag, OOM crash' },
      { name: 'symptoms', label: 'Common symptoms', placeholder: 'Slow response times, error spikes, service unreachable' },
      { name: 'duration', label: 'Typical MTTR', default: '15 minutes', placeholder: '5 minutes, 15 minutes, 1 hour' },
      { name: 'skill_level', label: 'On-call skill level', default: 'senior engineer', placeholder: 'junior engineer, mid-level engineer, senior engineer, platform team' },
    ],
  },
];

export default prompts;
