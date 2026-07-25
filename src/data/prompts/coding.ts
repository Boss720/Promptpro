import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'coding-review-comprehensive',
    title: 'Comprehensive Code Review',
    category: 'coding',
    tags: ['review', 'quality', 'feedback'],
    description: 'Performs a thorough code review examining logic, efficiency, style, and potential bugs.',
    body: `You are a meticulous code reviewer for {{language}}.

Code to review:
{{code_snippet}}

Context: {{purpose_and_scope}}

Conduct a multi-level review:

**1. Logic & correctness**
- Does the code do what it claims?
- Are there edge cases that will break it?
- Are all error conditions handled?
- Are there off-by-one errors, null pointer risks, or logic flaws?

**2. Performance & efficiency**
- Any N² loops that could be optimized?
- Unnecessary data structure conversions?
- Missing indexes or query optimizations?
- Memory leaks or resource leaks?

**3. Readability & maintainability**
- Variable and function names clarity?
- Code structure and nesting depth?
- Comments—too many, too few, or unclear?
- Opportunities to simplify or extract functions?

**4. Testing**
- Is the code testable? (High coupling, hidden dependencies?)
- Are error paths tested?
- What test cases would catch typical failures?

**5. Security** (if applicable)
- Input validation present?
- SQL injection, XSS, or injection risks?
- Authentication/authorization checks?
- Sensitive data handling?

Return:
- Critical issues (must fix before merge)
- Major issues (should fix)
- Minor suggestions (nice to have)
- One praise—what's done well
- Overall recommendation: approve, request changes, or comment`,
    variables: [
      { name: 'language', label: 'Programming language', placeholder: 'Python, JavaScript, Go, Rust, Java' },
      { name: 'code_snippet', label: 'Code to review', placeholder: 'Paste the function or code block (50-300 lines)' },
      { name: 'purpose_and_scope', label: 'What this code does', placeholder: 'e.g., "Fetches user data from API and caches it"' },
    ],
  },
  {
    id: 'coding-refactor-safe-path',
    title: 'Safe Refactoring Strategy',
    category: 'coding',
    tags: ['refactoring', 'testing', 'risk'],
    description: 'Maps a low-risk refactoring plan with testing checkpoints to improve code without breaking it.',
    body: `You are a refactoring strategist.

Current code:
{{current_code}}

Desired outcome: {{refactoring_goal}}

Create a minimal, testable refactoring path:

**1. Baseline & testing**
- What tests exist? Are they sufficient to catch regressions?
- If tests are missing, write 2-3 critical test cases first.
- Establish a green-light state (all tests pass).

**2. Refactoring steps** (small, reversible increments)
- Break refactoring into 3–5 tiny steps, each taking 10–30 minutes.
- Each step should leave tests green.
- Avoid multiple changes per commit.

Example progression:
- Step 1: Extract function X (tests still pass)
- Step 2: Rename variables (tests still pass)
- Step 3: Replace logic with library call (tests still pass)

**3. Rollback strategy**
- If any step breaks tests, you can revert that step only.
- Keep commits small so rollback is surgical.

**4. Risk assessment**
- What's the highest-risk part of this refactoring?
- How will you validate it? (Additional tests, manual testing, staged rollout?)

**5. Validation checklist**
- All tests passing? ✓
- No regressions in similar code paths? ✓
- Code simpler and easier to maintain? ✓
- Performance unchanged or improved? ✓

Return:
- Step-by-step refactoring plan
- Test strategy for each step
- Rollback procedure
- Estimated time per step
- Success criteria`,
    variables: [
      { name: 'current_code', label: 'Code to refactor', placeholder: 'Paste function or class (100-300 lines)' },
      { name: 'refactoring_goal', label: 'Goal of refactoring', placeholder: 'extract into library, improve readability, reduce cyclomatic complexity' },
    ],
  },
  {
    id: 'coding-bug-investigation',
    title: 'Bug Investigation & Diagnosis Framework',
    category: 'coding',
    tags: ['debugging', 'bugs', 'problem-solving'],
    description: 'Systematically investigates a reported bug and narrows down root cause.',
    body: `You are a debugging specialist.

Bug description: {{bug_report}}
Affected code/system: {{affected_area}}
Reproducibility: {{reproduce_steps}}

**Investigation framework:**

**1. Confirm reproducibility**
- Can you reliably trigger this bug?
- In what environment(s)? (Dev, staging, production)
- With what data or conditions?
- Is it 100% reproducible or intermittent?

**2. Narrow the scope**
- Does it affect one function, module, or system-wide?
- Can you isolate a minimal reproducer (simplest case that triggers it)?
- When did it start? (Recent code change? New data? New user behavior?)

**3. Gather evidence**
- Check logs (timestamps, error messages, stack traces).
- Check recent commits (what changed near the affected code?).
- Check database state (corrupted data? Unexpected values?).
- Check dependencies (version mismatches? External service down?).

**4. Form hypotheses**
- List 3–5 possible root causes (most likely first).
- For each: what would prove or disprove it?

**5. Test hypotheses** (binary search)
- Add logging or temporary instrumentation.
- Step through the code mentally or with a debugger.
- Test a hypothesis; eliminate it or confirm it.
- Move to the next hypothesis.

**6. Identify root cause**
- Once found: Is it a one-off bug or a pattern?
- Will the same bug occur elsewhere in the codebase?

**Output:**
- Bug diagnosis (root cause + explanation)
- Why this bug existed (design flaw, missing validation, assumption that failed)
- Fix strategy (quick patch vs. proper solution)
- Minimal reproducible test case
- Prevention: what should have caught this? (test, validation, review process)`,
    variables: [
      { name: 'bug_report', label: 'Bug description', placeholder: 'e.g., "Users report 404 errors when searching"' },
      { name: 'affected_area', label: 'Code area', placeholder: 'e.g., "search endpoint, user authentication, database query"' },
      { name: 'reproduce_steps', label: 'How to reproduce', placeholder: 'e.g., "1. Log in as user. 2. Search for term."' },
    ],
  },
  {
    id: 'coding-test-case-generator',
    title: 'Test Case & Coverage Generator',
    category: 'coding',
    tags: ['testing', 'unit-tests', 'coverage'],
    description: 'Generates comprehensive test cases for a function, covering happy paths and edge cases.',
    body: `You are a testing specialist for {{language}}.

Function to test:
{{function_code}}

Context: {{function_purpose}}

Generate test cases across these categories:

**1. Happy path** (normal, expected use)
- Typical input → expected output
- Example: valid user ID → user data returned

**2. Edge cases** (boundaries and limits)
- Empty input (empty string, empty list, null)
- Minimum/maximum values (smallest int, largest list)
- Boundary values (off-by-one)
- Example: search term is 1 character, 255 characters

**3. Error cases** (invalid input or bad state)
- Invalid type (string when int expected)
- Out-of-range values (negative when positive required)
- Missing dependencies or resources
- Example: database connection down, file not found

**4. State-dependent cases**
- Behavior changes based on prior state
- Example: user authenticated vs. not authenticated

**5. Performance cases** (for performance-critical functions)
- Large datasets
- Timeout scenarios
- Memory pressure

**Output:**
- Test function names and descriptions
- Input → expected output for each test
- Assertion strategy
- Minimal test code (pseudocode or actual code in {{language}})
- Estimated coverage % this test suite achieves
- Any untestable scenarios and why`,
    variables: [
      { name: 'language', label: 'Language/framework', default: 'Python/pytest', placeholder: 'Python/pytest, JavaScript/Jest, Go/testing' },
      { name: 'function_code', label: 'Function to test', placeholder: 'Paste function signature and body (20-100 lines)' },
      { name: 'function_purpose', label: 'What it does', placeholder: 'e.g., "validates email address and returns boolean"' },
    ],
  },
  {
    id: 'coding-architecture-design',
    title: 'System Architecture & Design Consultation',
    category: 'coding',
    tags: ['architecture', 'design', 'system-design'],
    description: 'Designs a system architecture to meet {{requirements}} with scalability and reliability.',
    body: `You are a systems architect.

**System requirements:**
{{requirements}}

**Constraints:**
- Scale: {{scale}} users/requests
- Performance: {{performance_target}}
- Reliability: {{uptime_requirement}}

**Design process:**

**1. Identify components** (logical pieces of the system)
- API layer, business logic, data storage, caching, etc.
- What does each component do?

**2. Design data flow**
- How does data move through the system?
- What information does each component need?
- Where do you store state?

**3. Scalability considerations**
- As load increases 10x, what breaks?
- Horizontal scaling (add more servers) or vertical (bigger servers)?
- Database sharding strategy?
- Caching layers needed?

**4. Reliability & fault tolerance**
- What happens if a component fails?
- Do you need redundancy, failover, or replication?
- How do you handle partial failures?

**5. Technology choices** (and trade-offs)
- Language/framework: {{language_constraints}}
- Database: SQL or NoSQL? Relational or document?
- Message queue, cache, search, CDN?
- Each choice: what does it solve? What's the cost?

**6. Risks & mitigations**
- Single points of failure?
- Bottlenecks (CPU, memory, I/O)?
- Security vulnerabilities?
- Deployment complexity?

**Output:**
- System diagram (components, connections, data flow)
- Technology stack with justification
- Scaling strategy (how does it handle 10x load?)
- Reliability strategy (fault tolerance, monitoring, alerting)
- Trade-offs (what are we optimizing for? What are we accepting as slower?)
- Migration plan (if replacing existing system)`,
    variables: [
      { name: 'requirements', label: 'Core requirements', placeholder: 'e.g., "social feed with real-time updates, 1M users"' },
      { name: 'scale', label: 'Expected scale', placeholder: '10K, 1M, 100M users' },
      { name: 'performance_target', label: 'Performance SLA', placeholder: 'p99 latency < 200ms, 99.9% uptime' },
      { name: 'uptime_requirement', label: 'Uptime requirement', placeholder: '99%, 99.9%, 99.99%' },
      { name: 'language_constraints', label: 'Tech constraints', placeholder: 'must use Python, Node-compatible, language-agnostic' },
    ],
  },
  {
    id: 'coding-performance-optimization',
    title: 'Performance Profiling & Optimization Guide',
    category: 'coding',
    tags: ['performance', 'optimization', 'profiling'],
    description: 'Identifies performance bottlenecks and proposes optimization strategies.',
    body: `You are a performance engineer.

**Current performance baseline:**
- Operation: {{operation_description}}
- Current latency/throughput: {{current_metric}}
- Target latency/throughput: {{target_metric}}
- Bottleneck (if known): {{known_bottleneck}}

**Performance investigation:**

**1. Profile the code**
- Where is time spent? (CPU, I/O, memory allocation, GC?)
- Which functions consume the most resources?
- Is it a hot loop, slow query, blocking I/O, or memory churn?

**2. Identify low-hanging fruit**
- Unnecessary function calls in hot path?
- Loop that could be vectorized or parallelized?
- Repeated expensive operations (query loops, regex compilation)?
- Inefficient algorithm (O(n²) instead of O(n log n))?

**3. Optimization strategies**
- **Algorithmic**: Better algorithm (sorting, searching, graph algorithms)?
- **Caching**: Memoization, in-process cache, distributed cache?
- **Parallelization**: Multi-threading, async/await, map-reduce?
- **Infrastructure**: Database indexing, query optimization, CDN for assets?
- **Code**: Reduce allocations, use faster APIs, reduce copying?

**4. Trade-offs**
- Speed vs. readability (optimize only if worth it)
- Speed vs. memory (some optimizations use more memory)
- Complexity vs. performance (simple code often faster due to compiler optimizations)

**5. Measurement & validation**
- Benchmark before and after (real data, not synthetic)
- Is the improvement measurable and worth the code complexity?
- Will optimization help in all scenarios or just best-case?

**Output:**
- Performance root cause analysis
- 3 optimization proposals (cost-benefit for each)
- Recommended optimization with before/after benchmark
- Code changes needed
- Risks and edge cases to watch for`,
    variables: [
      { name: 'operation_description', label: 'What operation is slow', placeholder: 'searching 1M records, generating reports, API response time' },
      { name: 'current_metric', label: 'Current performance', placeholder: '5 seconds, 100 requests/sec' },
      { name: 'target_metric', label: 'Target performance', placeholder: '500ms, 1000 requests/sec' },
      { name: 'known_bottleneck', label: 'Suspected bottleneck (optional)', placeholder: 'database query, memory allocation' },
    ],
  },
  {
    id: 'coding-error-handling-strategy',
    title: 'Error Handling & Resilience Strategy',
    category: 'coding',
    tags: ['error-handling', 'resilience', 'reliability'],
    description: 'Designs robust error handling for {{context}} including retry logic and failure modes.',
    body: `You are a reliability engineer.

**Context:**
{{context_description}}

**Known failure points:**
{{failure_scenarios}}

**Design error handling strategy:**

**1. Identify failure modes**
- What can go wrong? (network, timeout, permission denied, etc.)
- What's the impact of each failure? (user-facing vs. internal)
- How likely is each failure?

**2. Error detection**
- Which errors are detectable? (exceptions, return codes, side effects?)
- Should you log, alert, or silently retry?

**3. Retry strategy**
- Should this operation be retried? (idempotent operations only)
- Retry count and backoff strategy (exponential, jitter to avoid thundering herd?)
- When to stop retrying? (max retries, time limit, circuit breaker?)

**4. Fallback & graceful degradation**
- If retry fails, what's the fallback? (cache, default value, user message?)
- Can you serve stale data, or must you fail?
- What does the user experience?

**5. Circuit breaker**
- If a downstream service keeps failing, stop hammering it.
- Switch to open state (fail fast), then half-open state (test if recovered).
- Implement exponential backoff to recovery attempts.

**6. Monitoring & alerting**
- What errors should trigger alerts?
- How quickly should humans be notified?
- What information is needed to debug?

**7. Testing failure paths**
- How will you test error handling? (chaos engineering, simulated failures?)
- Are all error paths exercised by tests?

**Output:**
- Error matrix (failure mode → detection → handling → user experience)
- Retry configuration (max retries, backoff strategy)
- Circuit breaker settings
- Logging strategy (what to log at what level)
- Monitoring dashboard (key metrics to track)
- Test plan for failure paths`,
    variables: [
      { name: 'context_description', label: 'System context', placeholder: 'API calling external service, database operation, background job' },
      { name: 'failure_scenarios', label: 'Known failures', placeholder: 'network timeout, permission denied, resource exhausted' },
    ],
  },
  {
    id: 'coding-type-safety-audit',
    title: 'Type Safety & Type System Audit',
    category: 'coding',
    tags: ['types', 'type-safety', 'typescript'],
    description: 'Audits {{language}} code for type-related bugs and tightens type annotations.',
    body: `You are a type-safety specialist for {{language}}.

Code to audit:
{{code_snippet}}

**Type safety audit:**

**1. Missing type annotations**
- Functions without return types?
- Parameters without types?
- Variables with inferred types that could be wrong?
- Are "any" types used? (Usually a red flag)

**2. Type mismatches**
- Are nullable values handled? (null checks, optional chaining?)
- Are union types properly narrowed?
- Are casting operations necessary or signs of a type flaw?

**3. Generic usage**
- Are generics used correctly? (Constraints properly defined?)
- Any loss of type information through generic bounds?

**4. Error-prone patterns**
- Implicit boolean conversions (truthy/falsy)?
- Number coercions (are types consistent?)
- String vs. enum confusion?

**5. Improvement opportunities**
- Use literal types instead of strings?
- Use discriminated unions instead of polymorphism?
- Make illegal states unrepresentable (TypeScript)?

**6. Type coverage**
- % of code with explicit types?
- Are public APIs typed? (Private code can be loose)
- Are tests typed?

**Output:**
- Type safety scorecard (0-100)
- Critical type issues (potential runtime bugs)
- Type improvements (readability, expressiveness)
- Refactored code snippet showing better type usage
- Recommendation: strict mode / type flags to enable
- Migration strategy (if retrofitting types)`,
    variables: [
      { name: 'language', label: 'Language', default: 'TypeScript', placeholder: 'TypeScript, Go, Rust, Python (with type hints)' },
      { name: 'code_snippet', label: 'Code to audit', placeholder: 'Paste function or module (50-200 lines)' },
    ],
  },
  {
    id: 'coding-database-schema-design',
    title: 'Database Schema & Data Model Design',
    category: 'coding',
    tags: ['database', 'schema', 'data-modeling'],
    description: 'Designs a normalized, efficient database schema for {{use_case}}.',
    body: `You are a database architect.

**Requirements:**
{{data_requirements}}

**Query patterns:**
{{query_patterns}}

**Design database schema:**

**1. Identify entities** (things to store)
- What are the main objects? (users, posts, comments, products?)
- What attributes does each have?

**2. Relationships**
- How do entities relate? (1-to-many, many-to-many?)
- Should relationships be stored as foreign keys or denormalized?

**3. Normalization** (reduce redundancy, prevent anomalies)
- Apply normal forms (1NF, 2NF, 3NF) to prevent data inconsistency.
- Are there functional dependencies that require normalization?

**4. Denormalization** (optimize for query performance)
- Are there queries that would benefit from denormalized columns?
- What's the read:write ratio? (Denormalization costs on writes)
- Use materialized views or caching instead of denormalizing when possible.

**5. Indexing strategy**
- Which columns are filtered on? (Create indexes)
- Which columns are joined on? (Create indexes)
- Which columns are in ORDER BY? (Consider indexes)
- Composite indexes for multi-column queries?

**6. Partitioning & sharding** (if scale is large)
- How to partition data? (By user, by date, by region?)
- Sharding key (ensure even distribution)?

**7. Constraints & validation**
- Primary keys (unique, not null)
- Foreign key constraints (referential integrity)
- Check constraints (valid values)
- Unique constraints (prevent duplicates)

**Output:**
- Entity-relationship diagram (ERD)
- Schema definition (table names, columns, types, constraints)
- Indexing strategy
- Denormalization justification (if any)
- Query examples showing efficiency
- Migration strategy (if new schema)`,
    variables: [
      { name: 'data_requirements', label: 'What data to store', placeholder: 'user profiles, social network graph, e-commerce orders' },
      { name: 'query_patterns', label: 'Common queries', placeholder: 'find user by email, list user\'s posts, count followers' },
    ],
  },
  {
    id: 'coding-api-design-review',
    title: 'API Design & Contract Review',
    category: 'coding',
    tags: ['api', 'design', 'contracts'],
    description: 'Reviews API endpoints for clarity, consistency, and correctness.',
    body: `You are an API design reviewer.

**API specification:**
{{api_endpoints}}

**Context:**
{{api_purpose}}

**API design audit:**

**1. RESTful principles** (if REST API)
- Resources vs. actions (are endpoints modeled as resources?)
- HTTP methods (GET, POST, PUT, DELETE used correctly?)
- Status codes (right codes for success and errors?)
- Idempotency (can safe operations be retried?)

**2. Consistency**
- Naming conventions (camelCase, snake_case, consistent?)
- Request/response format (always JSON? Consistent envelope?)
- Error format (standardized error responses?)
- Pagination (limit, offset, cursor consistency?)

**3. Versioning**
- Is versioning needed? (URL path, header, query param?)
- How will breaking changes be handled?
- Deprecation strategy?

**4. Authentication & authorization**
- How are credentials passed? (Bearer token, API key, OAuth?)
- Are endpoints protected appropriately?
- Are rate limits enforced?

**5. Documentation**
- Is every endpoint documented?
- Are parameters documented? (Required, types, constraints)
- Are error codes documented?
- Are examples provided?

**6. Client experience**
- Easy to understand and use?
- Minimal requests needed (over-fetching, under-fetching)?
- Sorting, filtering, searching options?

**7. Performance**
- Caching headers (ETag, Last-Modified, Cache-Control)?
- Compression (gzip)?
- Connection pooling support?

**Output:**
- Design scorecard (0-100)
- Breaking issues (security, usability)
- Consistency issues
- Improvement suggestions (with examples)
- Recommended API contract (if redesigning)`,
    variables: [
      { name: 'api_endpoints', label: 'API endpoints', placeholder: 'List endpoints: GET /users, POST /users, etc.' },
      { name: 'api_purpose', label: 'What the API does', placeholder: 'e.g., "REST API for user management"' },
    ],
  },
  {
    id: 'coding-documentation-generator',
    title: 'Code Documentation & API Doc Generator',
    category: 'coding',
    tags: ['documentation', 'comments', 'api-docs'],
    description: 'Generates clear, maintainable documentation for {{code_type}}.',
    body: `You are a technical writer specializing in code documentation.

**Code to document:**
{{code_snippet}}

**Documentation context:**
{{intended_audience}}

**Generate documentation:**

**1. Module/file-level docs**
- Purpose (what does this module do?)
- Key concepts (what should readers understand?)
- Usage examples (typical usage patterns)
- Dependencies (what does this require?)

**2. Function/method documentation**
- Purpose (one line: what does it do?)
- Parameters (name, type, description, default if any)
- Return value (type, description, special values)
- Exceptions/errors (what can go wrong?)
- Example usage (shows how to call it)
- Edge cases (gotchas, constraints)

**3. Class/type documentation**
- Purpose (what does this represent?)
- Public interface (accessible methods/properties)
- Lifecycle (construction, initialization, cleanup)
- Thread safety (if relevant)
- Example instantiation and usage

**4. Inline comments**
- Why, not what (code shows what; comments explain why)
- Complex algorithms (step-by-step explanation)
- Non-obvious decisions (why this approach?)
- Gotchas (watch out for...)

**5. README** (for modules/packages)
- Problem it solves
- Installation/setup
- Quick start example
- Common use cases (5-10 examples)
- Troubleshooting
- Contributing guidelines

**6. Changelog**
- Breaking changes (how to migrate)
- New features
- Bug fixes
- Deprecations

**Output:**
- Formatted documentation (JSDoc, docstring, Markdown)
- Example usage code
- Common mistake to avoid
- Full README for the module
- Checklist: is documentation clear enough for a new contributor?`,
    variables: [
      { name: 'code_snippet', label: 'Code to document', placeholder: 'Paste function, class, or module (50-200 lines)' },
      { name: 'intended_audience', label: 'Who reads this', placeholder: 'other developers, API consumers, framework users' },
    ],
  },
  {
    id: 'coding-legacy-modernization',
    title: 'Legacy Code Modernization Strategy',
    category: 'coding',
    tags: ['legacy', 'modernization', 'refactoring'],
    description: 'Creates a phased plan to modernize {{legacy_system}} without breaking it.',
    body: `You are a legacy system expert.

**Legacy system:**
{{system_description}}

**Modernization goals:**
{{modernization_goals}}

**Constraints:**
- Must keep system running (no complete rewrites)
- Production dependencies exist
- Limited testing coverage

**Modernization strategy:**

**1. Audit current state**
- What does it do? (Core business logic)
- What's outdated? (Language, framework, dependencies)
- What works well? (Keep this)
- What's broken or unmaintainable? (Fix this)

**2. Identify critical paths**
- What parts are used most? (Optimize these first)
- What parts cause the most bugs? (Refactor these)
- What parts are hardest to test? (Add tests, then refactor)

**3. Strangler pattern** (incrementally replace legacy with new)
- Build new system alongside old
- Redirect traffic to new for one feature at a time
- Keep old system as fallback
- Once a feature is stable in new system, remove from old

**4. Add tests before refactoring**
- Legacy code often has no tests
- Add characterization tests (test current behavior, right or wrong)
- Once tests pass, you can safely refactor

**5. Prioritized refactoring**
- Phase 1 (Quick wins): Extract utilities, remove duplication, upgrade dependencies
- Phase 2 (Medium effort): Extract service layer, improve error handling
- Phase 3 (Large effort): Rewrite core business logic piece by piece

**6. De-risking techniques**
- Feature flags (new logic behind flags, can toggle)
- Shadow mode (new system runs in parallel, logs differences)
- Canary deploys (new code to 5% of users first)

**7. Knowledge transfer**
- Document what you learn as you modernize
- Pair programming with team unfamiliar with legacy code
- Create runbooks for common operations

**Output:**
- Current-state audit (what's legacy, what's maintainable)
- Modernization roadmap (phases, features, timeline)
- Strangler pattern migration plan
- Testing strategy
- Risk mitigation plan`,
    variables: [
      { name: 'system_description', label: 'Legacy system description', placeholder: 'e.g., "Java monolith built in 2005, 500K LOC"' },
      { name: 'modernization_goals', label: 'Modernization goals', placeholder: 'migrate to microservices, improve test coverage, reduce maintenance burden' },
    ],
  },
  {
    id: 'coding-algorithm-explainer',
    title: 'Algorithm Explanation & Complexity Analysis',
    category: 'coding',
    tags: ['algorithms', 'complexity', 'analysis'],
    description: 'Explains an algorithm\'s logic, time/space complexity, and implementation trade-offs.',
    body: `You are an algorithms expert.

**Algorithm to explain:**
{{algorithm_name}}

**Context:**
{{problem_it_solves}}

**Explain the algorithm:**

**1. High-level intuition**
- What's the basic idea? (In plain English, no jargon)
- Why does it work?
- When should you use it?

**2. Step-by-step walkthrough**
- Pseudocode or code-like explanation
- Example trace with sample input
- Show state at each step

**3. Time complexity**
- Best case, average case, worst case
- What causes worst case? (Which input characteristics?)
- Big-O notation with explanation

**4. Space complexity**
- How much extra memory does it need?
- Is it in-place, or does it allocate new structures?
- Trade-offs: faster with more memory?

**5. Implementation details**
- Key decisions (data structures, optimizations)
- Common mistakes (off-by-one errors, edge cases)
- How to optimize further?

**6. Comparison with alternatives**
- Other algorithms that solve the same problem
- Pros and cons of each
- When to choose this algorithm vs. others

**7. Real-world examples**
- Where is this used in practice?
- Example libraries/frameworks that implement it

**Output:**
- Plain-English explanation (understandable to non-experts)
- Detailed walkthrough with examples
- Complexity analysis (time + space)
- Implementation pseudocode
- Comparison table with alternatives
- When to use this algorithm (decision flowchart)`,
    variables: [
      { name: 'algorithm_name', label: 'Algorithm name', placeholder: 'binary search, quicksort, Dijkstra\'s shortest path' },
      { name: 'problem_it_solves', label: 'Problem solved', placeholder: 'finding a target in a sorted array' },
    ],
  },
  {
    id: 'coding-security-audit',
    title: 'Security Code Review & Threat Analysis',
    category: 'coding',
    tags: ['security', 'vulnerability', 'review'],
    description: 'Audits code for common security vulnerabilities and design flaws.',
    body: `You are a security engineer.

**Code/system to audit:**
{{code_or_system}}

**Context:**
{{security_context}}

**Security audit:**

**1. Input validation**
- Are user inputs validated? (Type, length, format, whitelist)
- Are there injection vulnerabilities? (SQL, command, script)
- Is there path traversal risk? (../../../etc/passwd)

**2. Authentication & authorization**
- How are users identified? (Session, token, API key?)
- Is authentication check on every protected endpoint?
- Can a user access other users' data? (Broken access control)
- Are permissions enforced? (Role-based, attribute-based?)

**3. Cryptography**
- Sensitive data encrypted in transit? (HTTPS, TLS)
- Sensitive data encrypted at rest? (Database, files)
- Are cryptographic libraries used correctly? (Strong algorithms, key management)
- Are passwords hashed? (With salt and strong hash function?)

**4. Output encoding**
- Is output properly encoded? (HTML entities to prevent XSS)
- Are error messages safe? (Don't leak stack traces or database structure)

**5. Configuration & secrets**
- Are secrets (API keys, passwords) hardcoded? (They shouldn't be)
- Is sensitive config exposed? (Debug info, stack traces in production)

**6. Dependency security**
- Are dependencies up-to-date?
- Any known vulnerabilities in dependencies?
- Are dependency versions pinned? (Prevent surprising updates)

**7. Error handling & logging**
- Are errors logged without leaking sensitive data?
- Is logging verbose enough for security investigation?

**8. Access control**
- Is there rate limiting? (Prevent brute force, DoS)
- Are file permissions correct? (World-readable secrets?)
- Is there CORS misconfiguration?

**Output:**
- Security scorecard (0-100)
- Critical vulnerabilities (fix immediately)
- High-risk issues (fix soon)
- Medium-risk issues (plan to fix)
- Security best practices implemented well
- Remediation plan (priority, effort, timeline)`,
    variables: [
      { name: 'code_or_system', label: 'Code/system to audit', placeholder: 'authentication code, API endpoint, database access layer' },
      { name: 'security_context', label: 'Security context', placeholder: 'public-facing API, internal tool, handles financial data' },
    ],
  },
  {
    id: 'coding-naming-conventions',
    title: 'Variable & Function Naming Improvement',
    category: 'coding',
    tags: ['naming', 'readability', 'style'],
    description: 'Audits and improves naming conventions for clarity and consistency.',
    body: `You are a code clarity specialist.

**Code sample:**
{{code_sample}}

**Language:** {{language}}

**Naming audit:**

**1. Clarity assessment**
- Variable names: do they clearly indicate purpose?
- Function names: do they clearly indicate what they do?
- Are there single-letter variables (acceptable only in loops, math)?
- Are abbreviations used? (Are they clear or cryptic?)

**2. Consistency**
- Naming convention (camelCase, snake_case, PascalCase)?
- Are all names following the same pattern?
- Are similar concepts named similarly?

**3. Domain language**
- Do names use business domain terminology?
- Or are they generic (data, value, result)?
- Would a new team member understand what "x" means?

**4. Common anti-patterns**
- Names that don't match actual use (misleading)
- Names that are too generic (data, obj, thing)
- Names that are too specific (tied to one implementation detail)
- Hungarian notation (indicating type in name; redundant with types)

**5. Boolean naming**
- Do booleans start with is_, has_, can_, should_?
- Does "isOpen" indicate state clearly? (vs. just "open")

**6. Function naming**
- Verbs for actions (getData, saveUser, validateEmail)
- Nouns for data accessors (getUser, setName)
- Clear side effects (fetchDataAsync, mutateGlobals)

**7. Improvement suggestions**
- Rename confusing variables
- Extract magic numbers into named constants
- Use enums for related string/number values

**Output:**
- Naming audit scorecard
- List of unclear names + suggestions
- Refactored code with better names
- Style guide for this codebase (naming conventions)`,
    variables: [
      { name: 'code_sample', label: 'Code to audit', placeholder: 'Paste 30-100 lines of code' },
      { name: 'language', label: 'Language', placeholder: 'Python, JavaScript, Java, Go' },
    ],
  },
  {
    id: 'coding-dependency-analysis',
    title: 'Dependency & Import Analysis',
    category: 'coding',
    tags: ['dependencies', 'coupling', 'architecture'],
    description: 'Analyzes code dependencies to reduce coupling and improve modularity.',
    body: `You are a software architect analyzing code dependencies.

**System/module to analyze:**
{{system_description}}

**Dependency analysis:**

**1. Map dependencies**
- What imports does each module have?
- Are there circular dependencies? (A → B → A? That's bad)
- Are dependencies explicit or implicit (tight coupling)?
- Can you draw a dependency graph?

**2. Coupling assessment**
- Tight coupling (high interdependence)? Risks: changes ripple everywhere
- Loose coupling (isolated modules)? Benefit: changes stay local
- Is there a clear layering? (UI → Logic → Data)

**3. High-risk patterns**
- Circular dependencies (refactor to break cycle)
- Imports from many modules (sign of missing abstraction)
- Low-level modules importing high-level (inverted dependencies)
- Global state / singletons (hard to test, refactor to dependency injection)

**4. Modularity opportunities**
- Can functionality be extracted into a separate module?
- Can coupling be reduced with interfaces/abstractions?
- Should there be a facade to simplify imports?

**5. Testing implications**
- Hard-to-test modules usually have coupling issues
- Tight coupling makes mocking difficult
- Dependency injection enables testing

**6. Refactoring strategy**
- Break circular dependencies
- Extract shared code into utility module
- Use interfaces to invert dependencies
- Implement dependency injection
- Gradually decouple tightly-coupled modules

**Output:**
- Dependency map (visual or text)
- Coupling scorecard (low/medium/high)
- High-risk dependencies (circular, inverted, implicit)
- Refactoring roadmap (which dependencies to break first)
- Before/after code examples showing improved isolation`,
    variables: [
      { name: 'system_description', label: 'System to analyze', placeholder: 'e.g., "web server with auth, database, and caching modules"' },
    ],
  },
  {
    id: 'coding-complexity-reduction',
    title: 'Cyclomatic Complexity & Simplification',
    category: 'coding',
    tags: ['complexity', 'simplification', 'refactoring'],
    description: 'Measures cyclomatic complexity and proposes simplification strategies.',
    body: `You are a code complexity specialist.

**Code to analyze:**
{{code_snippet}}

**Complexity analysis:**

**1. Measure cyclomatic complexity**
- Count decision points (if, else, while, for, catch, etc.)
- Cyclomatic complexity = decisions + 1
- What's the complexity score?

**Interpretation:**
- 1–5: Simple, easy to test and maintain ✓
- 6–10: Moderate, getting complex
- 11–20: High, should simplify
- 20+: Very high, refactor urgently

**2. Identify complexity sources**
- Nested conditionals (if inside if inside if?)
- Long conditionals (A && B || C && D || E?)
- Many cases in switch/if-else chain?
- Multiple loop levels?

**3. Root causes**
- Doing too many things in one function (violates SRP)
- Handling too many edge cases in one place
- Poor error handling (complex control flow)
- Unclear logic (algorithm not obvious)

**4. Simplification strategies**

**a) Extract functions**
- Pull out conditional blocks into separate functions
- Name the functions after what they check (isEligible, shouldRetry)
- Each function now has lower complexity

**b) Replace conditionals with polymorphism**
- Instead of switch/if-else on type, use inheritance or pattern matching
- Cleaner, more extensible

**c) Use guard clauses**
- Early return for invalid cases (reduces nesting)
- Instead of: if (valid) { ... } else { error }
- Use: if (!valid) { throw error; } ... (rest of code)

**d) Simplify conditionals**
- Break long conditions into named booleans
- Instead of: if (a && b || c && !d) { }
- Use: bool isReady = a && b; bool isBroken = c && !d; if (isReady || isBroken) { }

**5. Testing complexity**
- High complexity = more test cases needed
- How many test cases would cover all paths? (2^complexity)

**Output:**
- Complexity scorecard (current and target)
- Identified complex sections + complexity score for each
- Refactored code with simplified complexity
- Testing strategy (path coverage for both versions)
- Complexity reduction checklist`,
    variables: [
      { name: 'code_snippet', label: 'Code to analyze', placeholder: 'Paste function (50-150 lines)' },
    ],
  },
  {
    id: 'coding-logging-observability',
    title: 'Logging & Observability Strategy',
    category: 'coding',
    tags: ['logging', 'observability', 'monitoring'],
    description: 'Designs a logging and observability strategy for {{system}} to enable debugging and monitoring.',
    body: `You are an observability engineer.

**System:**
{{system_description}}

**Current state:**
{{current_logging_state}}

**Design logging strategy:**

**1. Logging levels** (and when to use each)
- **DEBUG**: Detailed info for developers (variable values, function entry/exit)
- **INFO**: Notable events (user login, request received, job started)
- **WARN**: Potentially bad situations (retrying, degraded performance)
- **ERROR**: Error conditions that need attention (failed request, missing data)
- **FATAL**: System can't continue (database unreachable, out of memory)

**2. What to log**
- User actions (login, purchase, logout)
- System events (startup, shutdown, configuration changes)
- Errors (with stack trace, not just "error")
- Performance (slow queries, high latency endpoints)
- Security events (failed auth, permission denied, suspicious activity)

**3. What NOT to log**
- Passwords, API keys, tokens (security risk)
- Full credit card numbers (compliance risk)
- Unnecessary debug logs in production (performance, noise)
- Personally identifiable info unless necessary (privacy)

**4. Structured logging**
- Log as JSON (not unstructured text strings)
- Include timestamp, level, logger name, message
- Include correlation ID (trace request across services)
- Include context (user ID, request ID, service name)

**5. Log aggregation**
- Centralized logging (all services log to one place)
- Searchable (can query by user, timestamp, error type)
- Retention policy (how long to keep logs)
- Alerting (alert on error rate > threshold)

**6. Metrics & monitoring**
- What to measure? (Request latency, error rate, CPU, memory)
- How to expose metrics? (Prometheus, CloudWatch, etc.)
- Dashboards (visualize key metrics)
- Alerting (notify when metrics spike)

**7. Tracing**
- Distributed tracing (follow request through multiple services)
- Trace IDs (correlate logs and metrics)
- Span information (where time is spent)

**Output:**
- Logging strategy (what, when, how to log)
- Structured logging template
- Log levels guide
- Metrics to track
- Alerting thresholds
- Sample implementation (how to add logging to code)
- Observability dashboard design`,
    variables: [
      { name: 'system_description', label: 'System type', placeholder: 'web API, microservices, batch job, CLI tool' },
      { name: 'current_logging_state', label: 'Current logging', placeholder: 'none, unstructured text logs, some metrics' },
    ],
  },
];

export default prompts;
