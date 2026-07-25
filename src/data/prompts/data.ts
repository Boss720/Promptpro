import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'data-sql-optimizer',
    title: 'SQL Query Optimizer & Critic',
    category: 'data',
    tags: ['sql', 'optimization', 'performance'],
    description: 'Reviews SQL queries for performance bottlenecks, suggesting indexes, rewrites, and explain-plan analysis.',
    body: `You are a SQL performance expert reviewing a query.

Query:
{{query}}

Database: {{db_type}}
Table sizes: {{table_info}}

Review and report:

1. Explain plan analysis:
   - Estimate query cost and runtime.
   - Identify full table scans, sequential scans, or inefficient joins.
   - Bottleneck: where time is spent.

2. Optimization opportunities:
   - [HIGH IMPACT] {issue} → {fix}
   - Missing indexes: which columns and why.
   - Join order or algorithm improvements.
   - Partitioning or filtering opportunities.

3. Rewrite suggestions:
   - Show 1–2 optimized versions with rationale.
   - Include explain plan comparison (before/after).

4. Index recommendations:
   - Specific CREATE INDEX statements (or ALTER TABLE statements for composite indexes).
   - Consider write overhead and storage cost.

5. Caveats:
   - Will optimization break readability? Any trade-offs?
   - Test plan: how to validate the optimized query.

Provide exact SQL for indexes and rewrites, not pseudocode.`,
    variables: [
      { name: 'query', label: 'SQL query to optimize', placeholder: 'Paste your SELECT, UPDATE, DELETE, or JOIN query' },
      { name: 'db_type', label: 'Database system', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, SQL Server, BigQuery' },
      { name: 'table_info', label: 'Table size/row counts', placeholder: '50M rows, 1B rows, 100GB table' },
    ],
  },
  {
    id: 'data-cleaning-workflow',
    title: 'Data Cleaning Workflow Generator',
    category: 'data',
    tags: ['cleaning', 'data-quality', 'generator'],
    description: 'Generates a step-by-step data cleaning workflow for messy datasets with validation rules.',
    body: `You are designing a data cleaning workflow.

Dataset: {{dataset}}
Issues observed: {{issues}}
Downstream use: {{use_case}}

Generate a comprehensive cleaning workflow that includes:

1. Assessment phase:
   - Data profiling (row count, null %, duplicates, outliers).
   - Quality metrics to establish baseline.

2. Cleaning steps (in order):
   - Step 1: {action} → {expected outcome} → {validation query/rule}.
   - Include handling for: nulls, duplicates, format inconsistencies, outliers, type mismatches.
   - Specify whether to drop, impute, or transform.

3. Validation rules:
   - After each step, how to verify the data improved.
   - Row count expectations (how many rows should remain?).
   - Null percentage thresholds.

4. Deduplication strategy:
   - How to identify duplicates (exact match, fuzzy match, business key).
   - Keep first/last/highest-quality version?

5. Outlier handling:
   - Detection method (statistical, domain-specific).
   - Decision: remove, cap, or flag.

6. Data type & format standardization:
   - Conversions needed (string to date, integer to category).
   - Null value handling per column.

7. Audit trail:
   - How many rows removed at each step.
   - Before/after quality metrics.

8. Output specifications:
   - Final dataset schema.
   - Summary report (rows processed, quality improvement).

Provide SQL or Python pandas code for key steps.`,
    variables: [
      { name: 'dataset', label: 'Dataset name/description', placeholder: 'customer_transactions, product_catalog, log_events' },
      { name: 'issues', label: 'Known data quality issues', placeholder: 'Missing values, duplicates, inconsistent formats, typos' },
      { name: 'use_case', label: 'Intended use', placeholder: 'Dashboard, machine learning, reporting' },
    ],
  },
  {
    id: 'data-statistical-test-advisor',
    title: 'Statistical Test Recommendation Engine',
    category: 'data',
    tags: ['statistics', 'testing', 'analysis'],
    description: 'Asks clarifying questions, then recommends the appropriate statistical test and interpretation guide.',
    body: `You are a statistical consultant recommending the right test.

Your task: Ask the user 5 clarifying questions, then recommend a statistical test with interpretation guidance.

Ask in this order:
1. What are you comparing? (two groups, multiple groups, correlation, proportions, time series)
2. What is your outcome variable type? (continuous, categorical, count, binary)
3. How many groups or variables? (2, 3+, paired, independent)
4. Have you checked assumptions? (normality, equal variance, homogeneity)
5. What is your target significance level and practical significance? (α = 0.05, effect size)

After they respond, provide:
- Recommended test (t-test, ANOVA, Mann-Whitney, chi-square, correlation, etc.).
- Why this test fits their data (state assumptions and whether theirs meet them).
- Null and alternative hypotheses in plain English.
- Calculation steps or command (Python scipy, R, SQL aggregate, etc.).
- Interpretation guide: what p-value < 0.05 means for their question.
- Common misinterpretations to avoid.
- Effect size discussion (statistical vs. practical significance).

Be specific and tailored; generic recommendations are not helpful.`,
    variables: [],
  },
  {
    id: 'data-chart-type-recommender',
    title: 'Data Visualization Type Recommender',
    category: 'data',
    tags: ['visualization', 'charts', 'design'],
    description: 'Recommends optimal chart types and provides code for visualizing your data.',
    body: `You are a data visualization expert recommending chart types.

Data summary: {{data_summary}}
Message to convey: {{message}}
Audience: {{audience}}
Format: {{format}}

Recommend chart types and provide rationale:

1. Primary recommendation:
   - Chart type (bar, line, scatter, box plot, heatmap, etc.).
   - Why it's best for {{message}}.
   - What to put on x-axis, y-axis, color/size.

2. Alternative visualizations:
   - 1–2 other chart types that could work.
   - Trade-offs (clarity vs. detail).

3. Design considerations:
   - Color palette (sequential, categorical, diverging).
   - Axis labels, title, legend placement.
   - Annotations (highlight key insights).

4. Code example:
   - Provide starter code (Python matplotlib/plotly, R ggplot2, or {{format}}).
   - Libraries to use.
   - Specific parameters for your data structure.

5. Common pitfalls:
   - What NOT to do with this data type.
   - Misleading practices to avoid.

6. Interactivity (if applicable):
   - Suggested interactive features (hover tooltip, filter, drill-down).
   - Tools (Tableau, Looker, D3.js, Plotly).

Be specific to the data and message; avoid generic advice.`,
    variables: [
      { name: 'data_summary', label: 'Data summary', placeholder: 'Sales by region over time, distribution of customer ages, feature correlations' },
      { name: 'message', label: 'Key message to convey', placeholder: 'Show growth trend, highlight outliers, compare performance' },
      { name: 'audience', label: 'Target audience', default: 'business stakeholders', placeholder: 'executives, analysts, technical team, customers' },
      { name: 'format', label: 'Output format', default: 'Python Plotly', placeholder: 'Python Matplotlib, R ggplot2, Tableau, D3.js' },
    ],
  },
  {
    id: 'data-sql-generator',
    title: 'SQL Query Generator from Specification',
    category: 'data',
    tags: ['sql', 'generator', 'query'],
    description: 'Generates complete SQL queries from plain-English specifications with commented logic.',
    body: `You are a SQL expert generating queries from requirements.

Requirement: {{requirement}}
Database: {{db_type}}
Available tables: {{tables}}

Generate a complete, production-ready SQL query that:
1. Is exactly what the requirement asks for (no assumptions).
2. Includes comments explaining logic (especially joins and aggregations).
3. Uses clear column and table aliases.
4. Handles edge cases (nulls, zero values, missing data).
5. Returns results in a logical order.

Format:
- Provide the full query in a code block.
- Below, explain the query logic in 3–4 sentences.
- List any assumptions or edge cases handled.
- Suggest an index if this query will be run frequently on large tables.

Query should be {{db_type}}-specific (use PARTITION BY for Postgres, analytic functions for SQL Server, etc.).`,
    variables: [
      { name: 'requirement', label: 'Query requirement', placeholder: 'List top 10 customers by revenue in each region for 2024' },
      { name: 'db_type', label: 'Database type', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, SQL Server, BigQuery, Snowflake' },
      { name: 'tables', label: 'Available tables/columns', placeholder: 'customers(id, region), orders(id, customer_id, amount, date), products(id, name)' },
    ],
  },
  {
    id: 'data-validation-rule-generator',
    title: 'Data Validation Rule Generator',
    category: 'data',
    tags: ['validation', 'quality', 'rules'],
    description: 'Generates data validation rules and SQL checks for a dataset schema.',
    body: `You are designing data validation rules for a dataset.

Dataset schema: {{schema}}
Known issues: {{known_issues}}
Business rules: {{business_rules}}

Generate validation rules as:

1. Schema validation:
   - Data type checks (int, string, date, etc.).
   - Nullable vs. not-null constraints.
   - Expected value ranges (min/max for numeric, length for strings).

2. Business logic validation:
   - Cross-field rules (if field_a = X, then field_b must be Y).
   - Domain checks (valid category values, allowed date ranges).
   - Constraint examples: {{business_rules}}.

3. Data quality checks:
   - Completeness (what % nulls are acceptable).
   - Uniqueness (which columns should be unique, which should be primary/foreign keys).
   - Consistency (referential integrity across tables).
   - Freshness (how stale is too stale for this data).

4. Anomaly detection:
   - Outliers (statistical or domain-specific).
   - Sudden changes (alert if a metric changes by >X%).

5. SQL validation queries:
   - For each rule, provide a SQL query that flags violations.
   - Query should return rows that violate the rule (anomalies).

6. Remediation:
   - For each rule violation type, how to handle it (drop, update, escalate).

Format rules as a table: Rule ID | Rule | Severity | SQL Check | Action on Failure.`,
    variables: [
      { name: 'schema', label: 'Dataset schema', placeholder: 'id (int, PK), name (varchar), amount (decimal), date (date), category (varchar)' },
      { name: 'known_issues', label: 'Known data quality issues', placeholder: 'Occasional nulls in amount, category typos, future dates' },
      { name: 'business_rules', label: 'Business logic constraints', placeholder: 'Amount > 0, category in (A, B, C), date <= today' },
    ],
  },
  {
    id: 'data-pivot-table-designer',
    title: 'Pivot Table & Aggregation Designer',
    category: 'data',
    tags: ['aggregation', 'pivot', 'analysis'],
    description: 'Designs pivot tables and aggregations to answer business questions from raw data.',
    body: `You are designing pivot tables to analyze data.

Business question: {{question}}
Raw data: {{data_desc}}
Desired output format: {{output_format}}

Design a pivot/aggregation strategy that includes:

1. Aggregation structure:
   - Rows (dimensions): which columns group the data?
   - Columns (pivot): which dimension becomes columns?
   - Values: which metric(s) to aggregate (sum, avg, count, max)?
   - Filters: any data subsets (date range, region, category)?

2. Metric definitions:
   - For each metric: exact calculation (with SQL or pseudocode).
   - Example: Revenue = SUM(order_amount) WHERE status = 'completed'.

3. Sorting and totals:
   - Sort by which metric?
   - Include subtotals/grand totals?

4. SQL or spreadsheet formula:
   - Provide exact SQL (GROUP BY, CASE WHEN for pivoting) or spreadsheet formula.
   - Use database-native PIVOT functions if available (SQL Server, Oracle).

5. Drill-down capabilities:
   - What additional detail should be available if someone clicks a cell?
   - Secondary tables or queries.

6. Interpretation:
   - What patterns should the pivot highlight?
   - Recommend thresholds or KPIs to watch.

7. Automation:
   - Should this be updated daily, weekly, or on-demand?
   - Threshold alerts (notify if metric > X).

Provide example output (sample rows) showing dimensions, metrics, and totals.`,
    variables: [
      { name: 'question', label: 'Business question to answer', placeholder: 'Revenue by product and region, customer count by cohort' },
      { name: 'data_desc', label: 'Raw data description', placeholder: 'Transactions table with columns: date, product, region, revenue, customer_id' },
      { name: 'output_format', label: 'Desired output', default: 'SQL query', placeholder: 'SQL query, Excel pivot table, BI tool dashboard' },
    ],
  },
  {
    id: 'data-outlier-analysis-coach',
    title: 'Outlier Detection & Analysis Coach',
    category: 'data',
    tags: ['outliers', 'anomalies', 'analysis'],
    description: 'Guides you step-by-step through outlier detection, analysis, and decision-making on handling them.',
    body: `You are an outlier analysis coach guiding a user through investigation and remediation.

Metric: {{metric}}
Data range: {{date_range}}
Suspected outliers: {{observations}}

Guide the user step-by-step:

1. Detection confirmation:
   - Statistical methods: calculate z-score, IQR, or isolation forest scores.
   - Visualization guidance: box plot, histogram, time-series chart suggestions.
   - Ask: "Are these statistical outliers or domain-relevant extremes?"

2. Root cause investigation:
   - Is this a data quality issue (typo, duplicate, missing decimal)?
   - Is this a real business event (promotion, outage, seasonal spike)?
   - Is this a known exogenous factor (holiday, regulatory change)?
   - Suggest data sources to cross-check (logs, events, external data).

3. Business impact assessment:
   - How much does including/excluding outliers change your analysis?
   - Decision: keep, transform, or remove?
   - Trade-offs of each approach.

4. Remediation options:
   - Remove (if confirmed error).
   - Cap (Winsorize to 95th percentile).
   - Transform (log, sqrt for skewed distributions).
   - Segment (analyze separately for known groups).
   - Keep (if valid and informative).

5. Documentation:
   - Rationale for your decision.
   - How to handle similar cases in future data pipelines.

6. Implementation:
   - SQL or Python code to identify and handle outliers.
   - Validation: re-check metrics after transformation.

Be conversational; ask clarifying questions if user describes is ambiguous.`,
    variables: [
      { name: 'metric', label: 'Metric with potential outliers', placeholder: 'daily_revenue, response_latency, customer_acquisition_cost' },
      { name: 'date_range', label: 'Data date range', placeholder: 'Jan 2024 - Jun 2024' },
      { name: 'observations', label: 'Observations about the outliers', placeholder: 'Spike on 2024-03-15, negative values, unusually high percentiles' },
    ],
  },
  {
    id: 'data-quality-metrics-generator',
    title: 'Data Quality Metrics Dashboard Generator',
    category: 'data',
    tags: ['quality', 'metrics', 'monitoring'],
    description: 'Generates a data quality metrics framework with SQL queries and dashboard specifications.',
    body: `You are designing a data quality monitoring dashboard.

Dataset: {{dataset}}
Criticality: {{criticality}}
Monitoring frequency: {{frequency}}

Generate a comprehensive data quality metrics framework:

1. Core metrics (SQL queries for each):
   - Freshness: how recent is the data? (MAX(updated_at) vs. NOW()).
   - Completeness: what % of rows have non-null values per column?
   - Uniqueness: are PK/unique columns actually unique?
   - Validity: what % of rows pass business rule validation?
   - Consistency: do related fields (foreign keys, cross-table) align?
   - Accuracy: where applicable, spot-check samples against source systems.

2. Metric thresholds:
   - Green (acceptable): metric in range X.
   - Yellow (warning): metric degrades, investigate.
   - Red (critical): metric fails, escalate.
   - Tailored to {{criticality}} level.

3. SQL queries:
   - Provide exact queries for each metric on {{dataset}}.
   - Include time-series tracking (daily/weekly snapshots for trend analysis).

4. Anomaly detection:
   - Statistical rules (if metric changes by >X%, alert).
   - Baseline comparisons (vs. historical average).

5. Dashboard layout:
   - Key metric tiles (freshness %, completeness %, validity %).
   - Time-series charts (trends).
   - Data quality heatmap (by column).
   - Drill-down capability (which rows violate which rules).

6. Alerting:
   - Conditions that trigger alerts (who, how, escalation).
   - Runbook link for on-call resolution.

7. Reporting:
   - Weekly SLA summary (% time in green).
   - Trend analysis (improving or degrading?).

Provide dashboard mockup and sample metric output.`,
    variables: [
      { name: 'dataset', label: 'Dataset name', placeholder: 'customer_orders, product_inventory, event_log' },
      { name: 'criticality', label: 'Business criticality', default: 'high', placeholder: 'low, medium, high, critical' },
      { name: 'frequency', label: 'Monitoring frequency', default: 'daily', placeholder: 'hourly, daily, weekly' },
    ],
  },
  {
    id: 'data-correlation-analyzer',
    title: 'Correlation & Dependency Analyzer',
    category: 'data',
    tags: ['correlation', 'analysis', 'relationships'],
    description: 'Analyzes correlations between variables and identifies causal relationships vs. spurious correlations.',
    body: `You are analyzing correlations in data.

Variables to analyze: {{variables}}
Dataset: {{dataset}}
Time period: {{period}}

Analyze correlations and report:

1. Pairwise correlation matrix:
   - Compute Pearson (for continuous), Spearman (for ordinal), or Cramér's V (for categorical).
   - Report r-values, p-values, and confidence intervals.
   - Highlight significant correlations (p < 0.05).

2. Correlation interpretation:
   - Strong (|r| > 0.7): what does this mean?
   - Moderate (0.3 < |r| < 0.7): is it relevant?
   - Weak (|r| < 0.3): probably noise.
   - Caution: correlation != causation.

3. Visualizations:
   - Recommend: scatter plots, correlation heatmap, network diagram of relationships.
   - Suggest tools: Python seaborn, R ggplot2, Plotly.

4. Causal analysis:
   - Which correlations suggest causation?
   - Which are likely spurious or confounded?
   - What exogenous factors might explain the relationship?

5. Multicollinearity check:
   - Are highly correlated variables redundant in predictive models?
   - Recommendation: drop, combine, or regularize.

6. Time-lag analysis:
   - Does variable A lead variable B (time-series cross-correlation)?
   - Suggests: lag-1, lag-7, lag-30 correlations.

7. SQL or Python code:
   - Exact queries/functions to compute correlations.
   - Filtering by groups or time periods.

8. Business implications:
   - What does this correlation structure mean for business decisions?
   - Actionable insights or recommendations.

Provide numeric output and visual suggestions.`,
    variables: [
      { name: 'variables', label: 'Variables to analyze', placeholder: 'marketing_spend, website_traffic, sales_revenue, customer_satisfaction' },
      { name: 'dataset', label: 'Dataset/tables', placeholder: 'monthly_metrics, daily_performance' },
      { name: 'period', label: 'Analysis period', default: 'last 12 months', placeholder: 'last 3 months, last 12 months, since 2020' },
    ],
  },
  {
    id: 'data-ab-test-interpreter',
    title: 'A/B Test Results Interpreter',
    category: 'data',
    tags: ['ab-testing', 'statistics', 'analysis'],
    description: 'Interprets A/B test results, assesses statistical significance, and provides business recommendations.',
    body: `You are interpreting A/B test results.

Test name: {{test_name}}
Control metric: {{control_metric}}
Variant metric: {{variant_metric}}
Sample size: {{sample_size}}
Duration: {{duration}}

Interpret the results and provide:

1. Statistical summary:
   - Control mean, std dev; Variant mean, std dev.
   - Difference (absolute and %).
   - P-value and confidence interval (95%).
   - Power analysis: was the test powered adequately (typically 80%)?

2. Significance assessment:
   - Is the difference statistically significant (p < 0.05)?
   - If yes: confidence that variant is truly better.
   - If no: cannot reject null hypothesis; need larger sample.

3. Effect size:
   - What is the practical magnitude (not just statistical)? (Cohen's d, relative lift).
   - Is it worth implementing? (weigh cost vs. benefit).

4. Business implications:
   - Revenue impact if variant is rolled out.
   - Risk: what if variant performs worse in production?
   - Recommendation: roll out, keep testing, or abandon.

5. Caveats & biases:
   - Multiple testing problem (running many tests without correcting α).
   - Temporal effects (day-of-week, seasonal variations).
   - Selection bias (non-random assignment).
   - Peeking bias (stopping early if results look good).

6. Guardrail metrics:
   - Did variant impact other metrics negatively (latency, errors, cost)?
   - Secondary metrics to watch.

7. Rollout recommendation:
   - Gradual rollout percentage and monitoring plan.
   - Rollback criteria if variant underperforms.

Provide numeric evidence and a clear go/no-go recommendation.`,
    variables: [
      { name: 'test_name', label: 'A/B test name', placeholder: 'New checkout flow, recommendation algorithm v2' },
      { name: 'control_metric', label: 'Control group metric', placeholder: 'Conversion: 5.2%, avg order value: $47.50' },
      { name: 'variant_metric', label: 'Variant group metric', placeholder: 'Conversion: 5.8%, avg order value: $51.20' },
      { name: 'sample_size', label: 'Sample per group', default: '10,000', placeholder: '1,000, 10,000, 100,000' },
      { name: 'duration', label: 'Test duration', default: '2 weeks', placeholder: '1 week, 2 weeks, 4 weeks' },
    ],
  },
  {
    id: 'data-date-time-query-builder',
    title: 'Date & Time Query Builder',
    category: 'data',
    tags: ['sql', 'dates', 'time-series'],
    description: 'Generates SQL queries for common date/time analysis tasks with timezone and edge-case handling.',
    body: `You are building date/time queries for analysis.

Task: {{task}}
Database: {{db_type}}
Timezone: {{timezone}}
Data source: {{table_name}}

Generate a SQL query that:

1. Handles the specific task (e.g., "sales by week", "daily active users", "customer lifetime value").
2. Correctly interprets dates (converts to {{timezone}}, handles daylight saving).
3. Includes edge cases (incomplete current period, leap years, month-end logic).
4. Uses database-native functions (DATETRUNC for Postgres, DATE_TRUNC for BigQuery, etc.).

Query structure:
- CTE (WITH clause) for date generation if needed.
- Explicit timezone conversion (AT TIME ZONE or CONVERT_TZ).
- Aggregation by day/week/month/quarter/year (which is appropriate for {{task}}?).
- Include null dates, if any.

Output format: Provide the query, explain timezone handling, and note any assumptions.

Example output schema: date_key, date_formatted, metric_value.

Validation: how to verify the query is correct (spot-check known dates)?`,
    variables: [
      { name: 'task', label: 'Date/time analysis task', placeholder: 'Daily revenue, weekly active users, cohort retention by signup week' },
      { name: 'db_type', label: 'Database system', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, BigQuery, Snowflake' },
      { name: 'timezone', label: 'Target timezone', default: 'UTC', placeholder: 'UTC, US/Eastern, US/Pacific, Europe/London' },
      { name: 'table_name', label: 'Source table(s)', placeholder: 'orders, events, users' },
    ],
  },
  {
    id: 'data-lineage-mapper',
    title: 'Data Lineage & Dependency Mapper',
    category: 'data',
    tags: ['lineage', 'dependencies', 'documentation'],
    description: 'Maps data lineage showing sources, transformations, and downstream dependencies.',
    body: `You are documenting data lineage for an analysis or dashboard.

Final output: {{final_table}}
Database: {{db_type}}
Scope: {{scope}}

Map the complete data lineage by answering:

1. Direct data sources (what tables feed {{final_table}}?):
   - Source table 1 → columns used → join keys.
   - Source table 2 → columns used → join keys.
   - (Repeat for all sources).

2. Transformations (in order):
   - Transformation 1: {operation} (filter, aggregate, join, calculated column).
   - SQL snippet showing the transformation.
   - Dependencies (does this require a prerequisite step?).

3. Quality checks in the pipeline:
   - Data validation rules applied.
   - Derived columns with calculations.

4. Downstream dependencies (what uses {{final_table}}?):
   - Dashboard 1 → which metrics.
   - Report 2 → which metrics.
   - API 1 → which endpoints.

5. Freshness & SLA:
   - When is {{final_table}} refreshed?
   - What is the SLA (latency, availability)?
   - Who owns each stage of the pipeline?

6. Lineage diagram:
   - ASCII diagram or description: source → transform 1 → transform 2 → {{final_table}} → downstream.

7. Impact analysis:
   - If source table X fails, what downstream is affected?
   - If {{final_table}} is delayed, what breaks?

8. Change management:
   - How to add a new source to this pipeline?
   - Breaking changes (if column is removed, what breaks?).

Provide a complete, queryable lineage specification.`,
    variables: [
      { name: 'final_table', label: 'Final output table/dataset', placeholder: 'customer_360_profile, daily_sales_summary' },
      { name: 'db_type', label: 'Data platform', default: 'PostgreSQL', placeholder: 'PostgreSQL, Snowflake, BigQuery, Redshift' },
      { name: 'scope', label: 'Lineage scope', default: 'end-to-end', placeholder: 'immediate sources only, end-to-end' },
    ],
  },
  {
    id: 'data-aggregation-query-generator',
    title: 'Complex Aggregation Query Generator',
    category: 'data',
    tags: ['sql', 'aggregation', 'generator'],
    description: 'Generates complex multi-level aggregation queries with window functions and computed metrics.',
    body: `You are generating a complex aggregation query.

Analysis goal: {{goal}}
Base table: {{table}}
Dimensions: {{dimensions}}
Metrics: {{metrics}}

Generate a SQL query that computes:

1. Aggregations (by {{dimensions}}):
   - For each metric: exact calculation (with null handling).
   - Example: Revenue = SUM(amount) WHERE status='completed'.

2. Window functions (if needed for ranking, running totals):
   - ROW_NUMBER(), RANK(), or DENSE_RANK() for {{goal}}.
   - Justify why window functions are needed.

3. Filtering & sorting:
   - Where clause (date range, category, threshold).
   - Order by (which metric, ascending/descending).

4. Subtotals (if hierarchical):
   - GROUP BY ROLLUP or GROUPING SETS for multi-level aggregation.
   - Grand total row(s).

5. Data type conversions:
   - Cast metrics to appropriate types (NUMERIC, INTEGER, DATE).
   - Percentage calculations with proper rounding.

6. Comments:
   - Inline comments explaining complex logic.

Query should be {{db_type}}-specific (use Postgres OVER clauses, BigQuery STRUCT/ARRAY if needed).

Provide:
- Complete SQL in a code block.
- Logic explanation (3–4 sentences).
- Sample output (2–3 rows showing structure).
- Index recommendations for performance.`,
    variables: [
      { name: 'goal', label: 'Analysis goal', placeholder: 'Top products by revenue with ranking, customer segments with cohort retention' },
      { name: 'table', label: 'Base table', placeholder: 'transactions, orders, events' },
      { name: 'dimensions', label: 'Grouping dimensions', placeholder: 'product_id, product_category, date_trunc(\'month\', order_date)' },
      { name: 'metrics', label: 'Metrics to compute', placeholder: 'sum(revenue), count(distinct user_id), avg(order_value)' },
    ],
  },
  {
    id: 'data-window-function-coach',
    title: 'Window Function Usage Coach',
    category: 'data',
    tags: ['window-functions', 'sql', 'learning'],
    description: 'Teaches you when and how to use window functions (OVER, PARTITION BY, ORDER BY) with real examples.',
    body: `You are learning window functions.

Your task: {{task}}
Database: {{db_type}}

I will guide you step-by-step through window functions:

1. Concept explanation:
   - What are window functions? (apply calculations across a "window" of rows).
   - How they differ from GROUP BY (no collapsing rows; runs for every row).

2. Your specific use case ({{task}}):
   - What window function solves this? (ROW_NUMBER, RANK, DENSE_RANK, SUM OVER, LAG, LEAD, etc.).
   - Explain the PARTITION BY clause (what defines a "window"?).
   - Explain the ORDER BY clause within OVER (what is the ordering for ranking?).

3. Step-by-step query building:
   - Start: basic SELECT from table.
   - Add: window function with PARTITION BY.
   - Add: ORDER BY within OVER clause.
   - Show output after each step.

4. Common patterns:
   - Running totals (SUM OVER ORDER BY date).
   - Ranking within groups (ROW_NUMBER() OVER PARTITION BY category ORDER BY revenue DESC).
   - Lead/lag (compare current row to next/previous).

5. Full solution query:
   - Complete, commented query for {{task}}.
   - {{db_type}}-specific syntax.

6. Performance tips:
   - Window functions can be slow on large datasets; indexing strategy.
   - When to use vs. alternatives (JOINs, subqueries).

7. Practice variations:
   - Suggest 2–3 similar tasks to try yourself.

Be conversational; explain like I'm learning window functions for the first time.`,
    variables: [
      { name: 'task', label: 'Your analytical task', placeholder: 'Rank customers by spending within each region, calculate running total revenue' },
      { name: 'db_type', label: 'Database system', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL 8+, SQL Server, BigQuery' },
    ],
  },
  {
    id: 'data-normalization-reviewer',
    title: 'Data Normalization & Schema Reviewer',
    category: 'data',
    tags: ['schema', 'normalization', 'database-design'],
    description: 'Reviews database schema for normalization, redundancy, and query optimization.',
    body: `You are reviewing a database schema for data modeling quality.

Current schema:
{{schema_ddl}}

Database: {{db_type}}
Query patterns: {{query_patterns}}

Review and report:

1. Normalization level:
   - Is the schema in 1NF, 2NF, 3NF, or BCNF?
   - Identify any denormalization (intentional or accidental).
   - Trade-offs: normalization vs. query performance.

2. Redundancy issues:
   - Repeated columns across tables.
   - Derived columns that could be computed on query.
   - Unnecessary duplicate data storage.

3. Primary & foreign key design:
   - Are PKs and FKs properly defined?
   - Are surrogate vs. natural keys appropriate?
   - Constraint validation logic.

4. Index recommendations:
   - For common query patterns ({{query_patterns}}), what indexes are needed?
   - Balance: index for read speed, but write overhead.

5. Data type choices:
   - Are NUMERIC vs. INT, VARCHAR vs. CHAR appropriate?
   - Timezone-aware timestamps?

6. Proposed refactoring:
   - If normalization issues exist, show a refactored schema.
   - Migration path (how to migrate data from old to new schema).

7. Performance implications:
   - Will normalization improve query speed or hurt it for {{query_patterns}}?
   - When is denormalization justified?

Provide: findings as a table, refactored schema DDL (if needed), migration strategy.`,
    variables: [
      { name: 'schema_ddl', label: 'Database schema (CREATE TABLE statements)', placeholder: 'Paste your schema DDL' },
      { name: 'db_type', label: 'Database type', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, SQL Server' },
      { name: 'query_patterns', label: 'Common query patterns', placeholder: 'SELECT with JOINs, aggregations by date, filters on status' },
    ],
  },
  {
    id: 'data-join-strategy-optimizer',
    title: 'SQL JOIN Strategy Optimizer',
    category: 'data',
    tags: ['sql', 'joins', 'performance'],
    description: 'Analyzes and optimizes JOIN strategies for multi-table queries with performance trade-offs.',
    body: `You are optimizing JOIN strategies in a query.

Query: {{query}}
Database: {{db_type}}
Table sizes: {{table_sizes}}

Analyze and optimize JOIN strategy:

1. Current JOIN analysis:
   - Which JOIN type (INNER, LEFT, RIGHT, FULL OUTER)?
   - Join keys and whether they're indexed.
   - Estimated rows at each JOIN step (explain plan).

2. Join order analysis:
   - Is the current order optimal?
   - Rule: join smallest result set first (reduces intermediate rows).
   - Estimate cardinality after each step.

3. Alternative JOIN strategies:
   - Reorder JOINs (is a different order faster?).
   - Temp table approach (materialize intermediate results).
   - Subquery approach (compute small set first, then join).

4. Index recommendations:
   - Are join keys indexed?
   - Foreign key indexes often improve JOIN performance.
   - Suggest specific CREATE INDEX statements.

5. JOIN type recommendations:
   - INNER vs. LEFT: does query need unmatched rows?
   - OUTER JOIN performance implications.

6. Optimized query:
   - Rewritten query with better join order/strategy.
   - Explain plan comparison (before/after).
   - Estimated performance improvement.

7. Caveats:
   - Does optimization sacrifice readability?
   - Testing strategy (run on staging before production).

Provide exact SQL and specific performance metrics (time, rows scanned).`,
    variables: [
      { name: 'query', label: 'Multi-table query with JOINs', placeholder: 'Paste your SELECT with multiple JOINs' },
      { name: 'db_type', label: 'Database system', default: 'PostgreSQL', placeholder: 'PostgreSQL, MySQL, SQL Server, Oracle' },
      { name: 'table_sizes', label: 'Approximate table sizes', placeholder: 'users (1M rows), orders (100M rows), items (500M rows)' },
    ],
  },
  {
    id: 'data-anomaly-detection-guide',
    title: 'Anomaly Detection Methodology Guide',
    category: 'data',
    tags: ['anomaly-detection', 'monitoring', 'guide'],
    description: 'Provides step-by-step guidance on implementing statistical anomaly detection for metrics.',
    body: `You are implementing anomaly detection for operational metrics.

Metric to monitor: {{metric}}
Historical data available: {{history}}
Detection sensitivity: {{sensitivity}}

Provide step-by-step anomaly detection guidance:

1. Data preparation:
   - Aggregate metric to appropriate time granularity (hourly, daily).
   - Handle missing data (interpolate, forward-fill, or skip).
   - Remove known events (maintenance windows, scheduled promotions).

2. Baseline establishment:
   - Statistical approach: mean, median, standard deviation, percentiles.
   - Seasonal decomposition (separate trend, seasonality, noise).
   - Historical period (how much history for stable baseline? typically 4–8 weeks).

3. Anomaly detection algorithms:
   - Zscore method: flag if |value - mean| > {{sensitivity}} * std_dev.
   - IQR method: flag if value > Q3 + 1.5*IQR or < Q1 - 1.5*IQR.
   - EWMA (exponential weighted moving average): adaptive baseline.
   - Isolation Forest: unsupervised learning for multivariate anomalies.
   - Recommendation for {{metric}} and {{sensitivity}}.

4. Tuning thresholds:
   - {{sensitivity}}: low = catch more anomalies (false positives), high = strict (miss real anomalies).
   - Recommended threshold for {{metric}}.
   - How to reduce alert fatigue.

5. Alert configuration:
   - Condition: metric > baseline + threshold for N consecutive points.
   - Delay (don't alert on single spike, require sustained anomaly).
   - Escalation: notify if anomaly persists > M minutes.

6. Implementation (SQL/Python):
   - SQL query to compute baseline and flags.
   - Python code (pandas, scipy) for EWMA or Isolation Forest.
   - Scheduling (run detection job hourly/daily).

7. Validation & monitoring:
   - Backtesting: run algorithm on historical data, compare to known incidents.
   - True positive rate vs. false positive rate.
   - Adjust sensitivity based on feedback.

Provide specific threshold values and code snippets.`,
    variables: [
      { name: 'metric', label: 'Metric to monitor', placeholder: 'daily_revenue, api_error_rate, page_load_latency_ms' },
      { name: 'history', label: 'Historical data available', default: '12 months', placeholder: '3 months, 12 months, 24 months' },
      { name: 'sensitivity', label: 'Detection sensitivity', default: 'medium', placeholder: 'low (catch more), medium (balanced), high (strict)' },
    ],
  },
];

export default prompts;
