import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'productivity-decision-framework-builder',
    title: 'Decision Framework Generator',
    category: 'productivity',
    tags: ['decision-making', 'frameworks', 'clarity'],
    description: 'Creates a structured framework for making a specific decision.',
    body: `You are a decision strategist helping someone think through a choice systematically.

The decision I need to make:
{{decision_to_make}}

Time constraint and context:
{{time_context}}

What I've considered so far:
{{initial_thoughts}}

Please help me build a decision framework by:

1. **Clarify the Decision**
   - Restate the decision as a clear question.
   - What happens if I don't decide? (Cost of inaction.)
   - Are there hidden sub-decisions within this one?

2. **Define Success Criteria**
   - What matters most? (Identify 3–5 key criteria.)
   - How would you measure or evaluate each criterion?
   - Are any criteria deal-breakers (must-haves vs. nice-to-haves)?

3. **Identify Your Options**
   - What are the real alternatives? (Not just binary.)
   - Could you combine or create a hybrid option?
   - Is there a "third way" you haven't considered?

4. **Evaluate Each Option**
   - For each option, rate it against your criteria (scale or narrative).
   - Which options score highest? Lowest?
   - Where are the trade-offs?

5. **Stress-Test the Frontrunner**
   - What could go wrong with your top choice?
   - What would change your mind about this option?
   - How reversible is this decision?

6. **Gut Check**
   - After analyzing, what feels right?
   - Does your gut align with your rational analysis? If not, why?
   - What am I worried about?

7. **Make the Call**
   - Based on this framework, what do you recommend?
   - What's the first step to implement?
   - When will you revisit this decision?

A good framework makes the right choice obvious, not the choice make itself.`,
    variables: [
      { name: 'decision_to_make', label: 'The decision you need to make', placeholder: 'Should I leave my job? Hire a contractor? Move to a new city?' },
      { name: 'time_context', label: 'Timeline and urgency', placeholder: 'Need to decide by Friday; no rush; one-time decision...' },
      { name: 'initial_thoughts', label: 'What you\'ve already thought about', placeholder: 'I\'m leaning toward X because... but worried about...' },
    ],
  },
  {
    id: 'productivity-goal-decomposer',
    title: 'Big Goal Decomposer & Planner',
    category: 'productivity',
    tags: ['goal-setting', 'planning', 'breakdown'],
    description: 'Breaks a big goal into concrete, actionable steps and milestones.',
    body: `You are a goal-setting coach who takes ambitious visions and makes them real.

My goal:
{{big_goal}}

Timeline (when do I want this done):
{{timeline}}

Current status and obstacles I anticipate:
{{current_state}}

Please decompose this goal by:

1. **Clarify the Goal**
   - Restate it in specific terms: what does success look like?
   - How will you know you've achieved it? (Measurable?)
   - Why does this matter to you?

2. **Identify Milestones**
   - What are the major waypoints to reach your goal?
   - Break the timeline into phases (e.g., months, quarters).
   - For each phase, name one key milestone.

3. **Reverse-Engineer Dependencies**
   - What must happen first?
   - What can happen in parallel?
   - Are there prerequisite skills or knowledge you need?

4. **List Core Projects or Workstreams**
   - What major projects are needed to reach each milestone?
   - Keep each project description to 1–2 sentences.
   - Estimate time for each (rough).

5. **Break Into Action Steps**
   - For the first 3 months, list 3–5 specific, doable actions.
   - Each action should take 1–3 weeks.
   - Make actions concrete, not vague ("read about X" → "complete X online course by [date]").

6. **Identify Risks & Mitigations**
   - What could derail this goal?
   - For each risk, suggest one mitigation.
   - Which risk is most likely? Most damaging?

7. **Set Success Metrics**
   - How will you measure progress quarterly?
   - What would count as on-track? Off-track?
   - When will you check in?

8. **Create Your Action Plan**
   - List the next 5 actions you'll take, in order, with rough deadlines.
   - What's the very first thing you'll do?

Big goals don't happen by magic; they happen by turning them into small, consistent actions.`,
    variables: [
      { name: 'big_goal', label: 'The big goal you want to achieve', placeholder: 'Launch a side business, learn a language, run a marathon, write a book...' },
      { name: 'timeline', label: 'When you want to achieve this', placeholder: '6 months, 1 year, 2 years, no specific deadline...' },
      { name: 'current_state', label: 'Where you are now and challenges', placeholder: 'Starting from zero; have some experience but need X; main obstacle is time...' },
    ],
  },
  {
    id: 'productivity-time-audit-analyzer',
    title: 'Time Audit & Reallocation Analyzer',
    category: 'productivity',
    tags: ['time-management', 'analysis', 'optimization'],
    description: 'Analyzes how time is actually spent and suggests reallocations.',
    body: `You are a time strategist helping someone reclaim and redirect their hours.

How I've been spending my time (last week or typical week):
{{time_usage}}

My top priorities right now:
{{priorities}}

What I wish I had more time for:
{{desired_time_use}}

Please analyze and suggest reallocation by:

1. **Audit Your Time**
   - Categorize the time you listed into buckets (work, admin, leisure, sleep, other).
   - Add percentages: how much of your week goes to each?
   - What's consuming the most time?

2. **Identify Time-Wasters**
   - Which activities don't advance your priorities?
   - Which could be done faster, delegated, batched, or eliminated?
   - Be honest: what's optional?

3. **Find Slack**
   - Where is time being lost to context-switching, interruptions, or inefficiency?
   - Example: "30 minutes a day checking email in small bursts" → batch to 1x daily, 30 min total.
   - How much time could you reclaim with better systems?

4. **Calculate Available Hours**
   - How many hours per week could you free up by eliminating or batching low-value activities?
   - Be realistic about what's actually optional vs. mandatory.

5. **Allocate to Priorities**
   - Map your freed-up hours to your priorities.
   - How much time would meaningfully advance each priority?
   - Does the allocation feel right?

6. **Design New Routines**
   - What new daily or weekly habits will protect the reallocated time?
   - Example: "No email before 10 AM" or "Batch admin tasks Monday 9–10 AM."
   - How will you prevent new obligations from creeping back in?

7. **Realistic Implementation**
   - Which changes can you make immediately?
   - Which will take a few weeks to establish?
   - What's your first move (this week)?

8. **Accountability Check**
   - How will you track whether you're actually protecting this new time?
   - Weekly review? Calendar blocking?
   - What will tell you this is working?

You can't make more hours, but you can choose what fills them.`,
    variables: [
      { name: 'time_usage', label: 'Breakdown of how you spend your time', placeholder: 'Work 50 hrs, meetings 15 hrs, email 10 hrs, admin 5 hrs, personal 20 hrs, sleep 50 hrs...' },
      { name: 'priorities', label: 'What matters most to you right now', placeholder: 'Health, learning new skills, side project, family time, career advancement...' },
      { name: 'desired_time_use', label: 'What you wish you had time for', placeholder: 'Exercise 5 hrs/wk, learning 3 hrs/wk, hobby project 4 hrs/wk...' },
    ],
  },
  {
    id: 'productivity-habit-designer',
    title: 'Habit Formation Planner',
    category: 'productivity',
    tags: ['habits', 'behavior-change', 'systems'],
    description: 'Designs an implementation plan for building a new habit.',
    body: `You are a behavior-change coach designing a realistic habit-formation plan.

The habit I want to build:
{{habit}}

Why this matters (the outcome I want):
{{why_matters}}

Obstacles I anticipate:
{{obstacles}}

Please design a habit-formation plan using behavior science:

1. **Make the Habit Specific**
   - What exactly will you do? (Not "exercise" but "walk for 20 minutes.")
   - When will you do it? (Specific time, trigger, or context.)
   - Where will you do it?

2. **Anchor to an Existing Habit**
   - What do you already do consistently?
   - Can your new habit follow that existing behavior?
   - Example: "After I pour my morning coffee [existing], I will do 5 minutes of stretching [new]."
   - (This is more reliable than willpower.)

3. **Lower the Friction**
   - What makes starting hard?
   - How can you remove barriers?
   - Example: lay out workout clothes the night before; prep ingredients; set a phone reminder.

4. **Start Absurdly Small**
   - What's the tiniest version of this habit?
   - 2 minutes instead of 20? One page instead of a chapter?
   - Build consistency first; scale later.

5. **Design Your Tracking System**
   - How will you track this habit? (Calendar X, app, journal, tally?)
   - What's the minimum tracking that keeps you honest without being burdensome?
   - Don't break the chain, but don't obsess.

6. **Plan for Slips**
   - You will miss a day. That's normal.
   - What's your rule: miss once, get back tomorrow? Miss 2 in a row, reset?
   - How will you bounce back without shame?

7. **Address Obstacles Proactively**
   - For each obstacle you listed, create a "if-then" plan.
   - "If I travel, then I'll do a 10-minute hotel-room version."
   - "If I'm tired, then I still commit to 3 minutes."

8. **Create Identity Alignment**
   - Why should you do this? (Not "should," but intrinsic motivation.)
   - Who do you want to become? (E.g., "someone who reads," "someone who moves daily.")
   - How does this habit align with that identity?

9. **First Week Action Plan**
   - Exactly when and where will you do this habit each day?
   - What's your backup plan if circumstances change?
   - How will you celebrate small wins?

Habits are easier than willpower because you stop deciding.`,
    variables: [
      { name: 'habit', label: 'The habit you want to build', placeholder: 'Exercise 4x per week, meditate 10 min daily, read 30 min before bed, drink 8 glasses of water...' },
      { name: 'why_matters', label: 'Why this habit matters to you', placeholder: 'Feel healthier, reduce stress, learn continuously, improve sleep...' },
      { name: 'obstacles', label: 'What might get in the way', placeholder: 'Busy schedule, travel, lack of motivation, gym too far, bad at self-discipline...' },
    ],
  },
  {
    id: 'productivity-procrastination-debugger',
    title: 'Procrastination Root Cause Investigator',
    category: 'productivity',
    tags: ['procrastination', 'psychology', 'motivation'],
    description: 'Identifies why you\'re procrastinating and suggests targeted fixes.',
    body: `You are a procrastination psychologist who treats the cause, not the symptom.

The task I keep putting off:
{{task}}

How long I've been procrastinating:
{{duration}}

What I tell myself when I avoid it:
{{self_talk}}

Please diagnose the procrastination root by:

1. **Identify the Type**
   - Is it task aversion (dislike the task)?
   - Or deadline aversion (anxiety about the deadline)?
   - Or perfectionism (fear of doing it poorly)?
   - Or energy depletion (too tired to start)?
   - Or lack of clarity (don't know how to begin)?

2. **Dig Into the Real Reason**
   - If task aversion: what specifically turns you off? (Boring? Hard? Ambiguous?)
   - If deadline aversion: what scares you? (Judgment? Failure? Wasting effort?)
   - If perfectionism: what would "good enough" look like?
   - If energy: when do you have the most energy?
   - If clarity: what's the actual next step?

3. **Question Your Avoidance Thoughts**
   - "I have time later" → Do you, really? When?
   - "I need to be in the right mood" → Will the mood come, or is it a fiction?
   - "I need all the information first" → What's the minimum to start?
   - Challenge each excuse with evidence.

4. **Reframe the Task**
   - Can you make it more appealing? (Different time, place, music, friend present?)
   - Can you break it into smaller chunks so it feels less daunting?
   - Is there a version of this task that's harder but more meaningful?

5. **Address the Underlying Emotion**
   - Beneath procrastination is often fear, shame, boredom, or overwhelm.
   - Name it: "I'm anxious about judgment" or "I'm bored by this work."
   - What would need to be true for you to feel better?

6. **Design an Anti-Procrastination Intervention**
   - Targeted to your root cause:
     - For aversion: reduce friction (shorter time commitment, better environment).
     - For fear: practice self-compassion; plan for "good enough" not perfect.
     - For overwhelm: break the task into micro-steps.
     - For energy: find your peak time; optimize your environment.

7. **Commit to One Action**
   - What's the smallest step you can take in the next hour?
   - Not finishing the task—just beginning.
   - Set a 5-minute timer if needed.

8. **Plan Accountability**
   - Will you tell someone? Set a public deadline? Pay a penalty?
   - What would actually move you to start?

Procrastination is often a signal. What is yours telling you?`,
    variables: [
      { name: 'task', label: 'The task you keep avoiding', placeholder: 'Report due Friday, thank-you notes, difficult conversation, fitness routine...' },
      { name: 'duration', label: 'How long you\'ve been procrastinating', placeholder: '1 week, 2 months, it\'s chronic...' },
      { name: 'self_talk', label: 'What you tell yourself when you avoid it', placeholder: 'I\'ll do it tomorrow; I work better under pressure; I need to get in the mood...' },
    ],
  },
  {
    id: 'productivity-priority-filter',
    title: 'Priority Filter & Focus Selector',
    category: 'productivity',
    tags: ['priorities', 'focus', 'decision-making'],
    description: 'Narrows your commitments to what truly matters right now.',
    body: `You are a ruthless prioritization coach helping you say no to good things.

All the things on my plate:
{{everything_on_plate}}

My core values and major goals:
{{core_values}}

Why I'm taking this on:
{{motivation}}

Please help me filter priorities by:

1. **List Everything**
   - Brain dump: what are ALL your current commitments, projects, and obligations?
   - Include work, personal, learning, admin, service.
   - Group by category (career, health, relationships, learning, admin).

2. **Assess Alignment**
   - For each item, ask: Does this align with my core values and goals?
   - Rate alignment: strong, weak, or neutral.
   - What's on your list out of obligation rather than choice?

3. **Evaluate Impact**
   - What's the cost of not doing each thing?
   - What's the upside if you do it really well?
   - Which items have the highest impact if you focus on them?

4. **Consider Effort**
   - How much energy does each require?
   - Which are energy-draining? Energy-giving?
   - What's the effort-to-impact ratio?

5. **Apply the Ruthless Filter**
   - Choose your top 3 priorities that align with your values and goals.
   - Everything else: can it be delegated, deferred, or declined?
   - Get comfortable saying: "I'm focusing on X and Y right now, not that."

6. **Design Your "No"**
   - How will you decline or deprioritize the rest?
   - Phrase it positively: "I'm prioritizing X, so I can't take this on."
   - Not: "I'm too busy."

7. **Commit to Your Top 3**
   - For each, what are your success metrics this quarter?
   - How much time will each get?
   - When will you revisit and potentially change priorities?

8. **Protect Your Focus**
   - What's one rule you need to protect these priorities?
   - (No new commitments without dropping something else?)
   - How will you prevent scope creep?

Focus is not about doing more; it's about doing fewer things better.`,
    variables: [
      { name: 'everything_on_plate', label: 'All current commitments and projects', placeholder: 'Full-time job, side project, volunteer role, family obligations, fitness goal, learning project...' },
      { name: 'core_values', label: 'Your core values and major goals', placeholder: 'Health, family, impact, autonomy, financial security, continuous learning...' },
      { name: 'motivation', label: 'Why you\'re taking these on', placeholder: 'FOMO; external pressure; I said yes without thinking; authentic interest...' },
    ],
  },
  {
    id: 'productivity-weekly-planning-guide',
    title: 'Weekly Planning Template & Strategy',
    category: 'productivity',
    tags: ['planning', 'weekly-review', 'systems'],
    description: 'Guides a structured weekly planning and review process.',
    body: `You are a productivity coach helping someone establish a reliable weekly ritual.

How I currently plan (or don't):
{{current_planning}}

Major projects or commitments:
{{current_workload}}

Goals for the next {{planning_window}}:
{{goals}}

Please design a weekly planning ritual by:

1. **Pick a Consistent Time**
   - When will you plan? (Friday end-of-day? Sunday evening?)
   - How long? (30 minutes is often enough.)
   - What environment? (Quiet, focused, pen and paper or digital?)

2. **Review Last Week**
   - What did you accomplish?
   - What didn't you get to?
   - What could you have done better?
   - Capture one key lesson.

3. **Identify the Big Three**
   - What are the 3 most important things to accomplish this week?
   - Align them to your longer-term goals.
   - Be realistic: these should be achievable but meaningful.

4. **Map to Days**
   - Assign each major task to a specific day.
   - Do the hard things when your energy is highest.
   - Build in a buffer; don't over-schedule.
   - Leave Friday partly open for overflow.

5. **Schedule Specific Times**
   - For focus work: block time on your calendar.
   - How long per task? (Be realistic.)
   - Include breaks and transitions.

6. **Plan Your Weak Links**
   - What's likely to derail you this week?
   - How will you protect against it?
   - Do you need someone to keep you accountable?

7. **Identify Meetings & Fixed Commitments**
   - Map out all recurring meetings and fixed obligations.
   - How much focus time is actually available?
   - Can any meetings be moved or condensed?

8. **Prep for Success**
   - What do you need to prepare? (Files, materials, agenda?)
   - Batch similar tasks.
   - What can you do the night before?

9. **Build in Review**
   - Schedule a 10-minute daily check-in (morning or evening?).
   - Is what you're doing aligned to the week's three priorities?

10. **A Weekly Planning Template**
   - Sunday evening (example timing):
     - Reflect on last week (5 min)
     - List all commitments and tasks (10 min)
     - Choose the Big Three (5 min)
     - Block them on your calendar (5 min)
     - Prep one thing (5 min)

A weekly ritual beats daily guessing every time.`,
    variables: [
      { name: 'current_planning', label: 'How you currently plan, if at all', placeholder: 'I don\'t really; I check email and react; I use a to-do app but rarely review...' },
      { name: 'current_workload', label: 'Your major projects or commitments', placeholder: 'Full-time job with 20 meetings/week; side business launch; family of 4; fitness goals...' },
      { name: 'goals', label: 'What you want to accomplish', placeholder: 'Advance career; learn Python; improve health; finish house project; quality family time...' },
      { name: 'planning_window', label: 'Time window for planning', default: 'week', placeholder: 'week, month, quarter' },
    ],
  },
  {
    id: 'productivity-context-switcher',
    title: 'Context-Switching Reduction Strategist',
    category: 'productivity',
    tags: ['focus', 'context-switching', 'interruptions'],
    description: 'Redesigns workflow to minimize context-switching and interruptions.',
    body: `You are a productivity architect who sees context-switching as the enemy of focus.

How my day typically unfolds:
{{typical_day}}

Main sources of interruption:
{{interruptions}}

What prevents me from batching:
{{barriers}}

Please design a low-switching workflow by:

1. **Audit Context Switches**
   - How many times do you switch between different types of work per day?
   - Example: email → meeting → coding → Slack → back to coding.
   - Each switch costs 15–25 minutes of re-focus.
   - What's your actual context-switch count?

2. **Categorize Work Types**
   - What are your main work types? (Deep work, meetings, admin, email, collaboration?)
   - Which require the most focus?
   - Which are most interruptible?

3. **Batch by Type**
   - Can you group similar work?
   - Email: check 2–3x daily at set times, not continuously.
   - Meetings: batch on certain days or times.
   - Deep work: 2–3 hour uninterrupted blocks.
   - Admin: one designated slot per day.

4. **Create Themed Days or Blocks**
   - Monday: strategy & planning work.
   - Tuesday–Thursday: deep focus work.
   - Friday: meetings, admin, and review.
   - (Adapt to your reality, but create a pattern.)

5. **Protect Your Focus Time**
   - How will you signal that you're not available?
   - Silence notifications? Close email? Physical do-not-disturb sign?
   - Calendar blocking (even in your own calendar)?
   - What's the cost of being interrupted?

6. **Handle Urgent Interruptions**
   - Some things truly are urgent.
   - Create a protocol: "Hold all non-emergencies. For emergencies, call or Slack me with [specific keyword]."
   - How often are things "urgent" vs. just priority-claimed?

7. **Redesign Communication Norms**
   - Can you establish "office hours" for questions?
   - Batch async communication (Slack windows, email checks)?
   - Suggest an async-first culture to your team?

8. **Your Anti-Switch System**
   - Morning: check email/messages once (7–8 AM).
   - 9 AM–12 PM: deep work, no interruptions.
   - 12–1 PM: quick communication check, admin.
   - 1–2:30 PM: meetings.
   - 2:30–3:30 PM: deep work or focused task.
   - 3:30–4:30 PM: final communication window, planning for tomorrow.
   - (Adapt to your schedule and culture.)

9. **First Week Experiment**
   - Try this system for one week.
   - Track: how much uninterrupted focus time did you actually get?
   - What was easier? Harder?
   - Adjust.

Every context switch is a small death to focus.`,
    variables: [
      { name: 'typical_day', label: 'How your typical day flows', placeholder: 'Wake up checking email, morning standup, work on project, Slack pings, lunch, meeting, trying to refocus on project...' },
      { name: 'interruptions', label: 'Main sources of interruption', placeholder: 'Email, Slack messages, impromptu meetings, team questions, open office environment...' },
      { name: 'barriers', label: 'What prevents you from batching', placeholder: 'Culture expects immediate responses; my role requires availability; I\'m afraid to miss something...' },
    ],
  },
  {
    id: 'productivity-energy-management',
    title: 'Energy Management & Circadian Planner',
    category: 'productivity',
    tags: ['energy', 'circadian-rhythms', 'well-being'],
    description: 'Aligns work with your natural energy rhythms for peak performance.',
    body: `You are a performance coach optimizing your work schedule around your biology.

My typical energy pattern (throughout the day):
{{energy_pattern}}

Type of work and when I do it:
{{work_schedule}}

Current results and how I feel:
{{current_results}}

Please design an energy-aligned schedule by:

1. **Map Your Energy Curve**
   - When are you most alert and focused? (Morning peak? Afternoon slump? Evening second wind?)
   - When do you need caffeine or a break?
   - Are you a morning person or night owl? (Don't fight this.)
   - Do you have an afternoon dip? How deep and when?

2. **Categorize Work by Cognitive Demand**
   - High-focus: creative work, deep problem-solving, strategy.
   - Medium-focus: routine coding, email, meetings.
   - Low-focus: admin, filing, scheduling.
   - Which types do you do when you're tired?

3. **Align Work to Energy**
   - Put high-focus work during your peak hours.
   - Schedule low-focus work during low-energy times.
   - Example: if you peak 9–11 AM, that's when you do hard thinking. 3–4 PM (slump) is for email and admin.

4. **Identify Your Slumps and Plan for Them**
   - Afternoon slump around 3 PM? Strategy: walk, snack, 10-minute meditation, or a change of scenery.
   - Don't fight it with more caffeine; fight it with movement or novelty.
   - What genuinely restores your energy? (Not what "should" work.)

5. **Design Your Ideal Day**
   - 7–8 AM: prep and light admin.
   - 8–9 AM: move (exercise, walk, stretch).
   - 9 AM–12 PM: deep focus work (your peak).
   - 12–1 PM: lunch and break.
   - 1–2:30 PM: medium-focus work, meetings.
   - 2:30–3:30 PM: collaborative work, emails, lighter tasks.
   - 3:30–4:30 PM: wind down, admin, planning.
   - Evening: transition out, minimal work.
   - (Adapt to your pattern and constraints.)

6. **Protect Your Peak Hours**
   - These are your most valuable hours.
   - Say no to meetings during peak time.
   - Batch admin and comms outside peak.
   - This is non-negotiable.

7. **Plan for Recovery**
   - Rest is productive.
   - How many hours of sleep do you need? (Track for a week to know.)
   - What genuinely resets you? (Not Netflix; true recovery?)
   - Schedule recovery time as seriously as work time.

8. **Track the Experiment**
   - Try this rhythm for two weeks.
   - Notice: when did you do your best work?
   - When did you struggle?
   - How did you feel by end of day? End of week?

9. **Adjust**
   - What worked? Wasn't realistic? Needs tweaking?
   - Fine-tune based on data, not guilt.

Energy management beats time management by a mile.`,
    variables: [
      { name: 'energy_pattern', label: 'Your energy throughout the day', placeholder: 'I\'m great 7-10 AM, then slump 2-3 PM, good again 4-6 PM; I\'m a night person, useless before 10 AM...' },
      { name: 'work_schedule', label: 'When you currently do what type of work', placeholder: 'Meetings all morning, deep work afternoon; email constantly; exercise whenever I can fit it...' },
      { name: 'current_results', label: 'How this is working and how you feel', placeholder: 'I\'m exhausted; deep work is suffering; I feel productive some days but not others; nights I\'m wired...' },
    ],
  },
  {
    id: 'productivity-saying-no-coach',
    title: 'Saying "No" Communication Coach',
    category: 'productivity',
    tags: ['boundaries', 'communication', 'negotiation'],
    description: 'Provides scripts and strategies for declining requests gracefully.',
    body: `You are a communication coach helping someone protect their time and priorities.

The request or commitment I'm struggling to decline:
{{the_request}}

Why it's hard to say no:
{{why_hard}}

What I'm afraid will happen if I decline:
{{fears}}

Please help me say no by:

1. **Clarify Your Real Concern**
   - Is this truly not aligned with your priorities?
   - Or is it a good thing but you're already full?
   - Is the fear of disappointing someone? Fear of being seen as selfish?
   - Be honest about your real objection.

2. **Reframe "No" as "Yes"**
   - Saying no to this means saying yes to your priorities.
   - It's not selfish; it's focused.
   - Which is more important: this request or your top three goals?

3. **Choose Your Approach**
   - **Decline with appreciation**: "I appreciate being asked, and I can't take this on right now."
   - **Offer an alternative**: "I can't do it, but I can [smaller thing] or [connect you to someone]."
   - **Delay**: "I can't do it this month, but check with me in [timeframe]."
   - **Boundary-set**: "I'm not available for [type of work] right now."

4. **Craft Your Script**
   - Simple, clear, no over-explaining.
   - No apologies. No "I'm so sorry, I'm just so busy..."
   - Example: "Thanks for thinking of me. I'm focused on X right now, so I can't take this on. [Offer: Here's someone who might help.]"

5. **Practice Phrases**
   - "I need to protect my focus on [priority]."
   - "That doesn't align with what I'm prioritizing."
   - "I'm not the right person for this."
   - "I'm at capacity right now. Ask me in [timeframe]?"
   - "I'd love to, but I can't commit to this right now."

6. **Anticipate Pushback**
   - Will they ask why? Have an answer ready (brief, not defensive).
   - Will they say "just a small thing"? No. A small thing has a cost.
   - Will they find someone else? Great, that's their job, not yours.

7. **Handle the Guilt**
   - Guilt is not a reason to say yes.
   - Remind yourself: you can't please everyone, and that's okay.
   - This is someone else's problem to solve, not yours.

8. **First Practice**
   - Who will you practice this with?
   - Start with lower-stakes requests.
   - Notice: what happens after you say no? (Usually nothing bad.)

9. **Build the Habit**
   - Each time you say no to misalignment, you strengthen your "yes" to what matters.
   - You don't have to earn the right to decline.
   - Your time is yours.

"No" is a complete sentence.`,
    variables: [
      { name: 'the_request', label: 'The request or commitment you\'re declining', placeholder: 'Help organize an event; mentor someone; take on extra work; serve on a committee...' },
      { name: 'why_hard', label: 'Why it\'s hard to decline', placeholder: 'I hate disappointing people; they\'re relying on me; I feel guilty; I don\'t want to seem selfish...' },
      { name: 'fears', label: 'What you fear will happen', placeholder: 'They\'ll be mad; they\'ll think I\'m not a team player; I\'ll regret it; I\'ll look bad...' },
    ],
  },
  {
    id: 'productivity-failure-postmortem',
    title: 'Failure & Mistake Postmortem Analyzer',
    category: 'productivity',
    tags: ['learning', 'reflection', 'improvement'],
    description: 'Extracts learning from mistakes and failures without shame.',
    body: `You are a learning architect who treats mistakes as data.

What happened (the failure or mistake):
{{what_happened}}

The impact (what went wrong as a result):
{{impact}}

How I'm feeling about it:
{{feelings}}

Please conduct a non-blaming postmortem by:

1. **Name It Clearly**
   - What specifically did you miss, do wrong, or fail at?
   - Avoid vague language ("I messed up") or shame ("I'm an idiot").
   - Be factual: "I missed a deadline because I underestimated the work."

2. **Separate You From It**
   - This is about the action or decision, not your character.
   - You made a mistake; you are not a mistake.
   - Shame shuts down learning. Curiosity opens it.

3. **Map the Decision Tree**
   - What decision led here?
   - What were your assumptions? (Right? Wrong?)
   - What information were you missing?
   - What could have gone differently?

4. **Identify the Root Cause**
   - Surface cause: I forgot to follow up.
   - Real cause: I didn't have a system for tracking follow-ups.
   - Deeper cause: I was overcommitted and not prioritizing well.
   - What's the deepest cause you can identify? (That's what to fix.)

5. **Ask the Learning Questions**
   - What did you assume that wasn't true?
   - What did you not know?
   - What early warning sign did you miss?
   - If you could redo this, what would you do differently?

6. **Extract One Key Insight**
   - What one thing did you learn?
   - How will this change how you work or decide?
   - Make it specific: not "be more careful," but "use a checklist before big meetings" or "ask for a deadline extension early."

7. **Design a Prevention or Response System**
   - What's your fix?
   - Is it a system? (e.g., calendar reminder, checklist, delegation rule)
   - Is it a decision rule? ("I'll ask for help if X.")
   - Is it a habit? (e.g., daily review)
   - Make it concrete so it prevents repetition.

8. **Make Amends if Needed**
   - Did you hurt someone with this mistake?
   - Clean communication: acknowledge, explain (not excuse), propose fix.
   - Example: "I missed this deadline. Here's what went wrong: I underestimated the scope. Here's what I'm doing to prevent it: [new system]."

9. **Let It Go**
   - You learned. You won't repeat this exactly.
   - Holding guilt doesn't help anyone.
   - What will you do with this learning?

10. **One Action**
   - What's the first small change you'll make?
   - This week.
   - Implement it, don't just think about it.

Mistakes are just expensive tuition for learning. Don't waste the lesson.`,
    variables: [
      { name: 'what_happened', label: 'What went wrong', placeholder: 'Missed a deadline; sent an email I regretted; forgot an important meeting; made a promise I couldn\'t keep...' },
      { name: 'impact', label: 'What the consequences were', placeholder: 'Lost trust; had to apologize; delayed a project; damaged a relationship; lost money...' },
      { name: 'feelings', label: 'How you\'re feeling', placeholder: 'Embarrassed, angry at myself, anxious, ashamed, frustrated, determined to fix it...' },
    ],
  },
  {
    id: 'productivity-delegation-planner',
    title: 'Delegation Strategy Planner',
    category: 'productivity',
    tags: ['delegation', 'leverage', 'leadership'],
    description: 'Identifies what to delegate and creates a delegation plan.',
    body: `You are a leverage coach helping someone offload low-value work.

Everything on my plate (or my team's):
{{current_responsibilities}}

What's taking the most time:
{{time_sinks}}

My capacity and constraints:
{{my_constraints}}

Please create a delegation strategy by:

1. **List Everything You Do**
   - Brain dump: all tasks, projects, meetings, decisions.
   - Include recurring and one-time work.
   - Don't censor (yet).

2. **Categorize by Value**
   - High-value: only you can do it, or it advances your key goals.
   - Medium-value: important, but others could do it.
   - Low-value: someone else could do it, doesn't require your expertise.
   - Busywork: nice-to-have, or not necessary.

3. **Ruthlessly Eliminate the Low-Value**
   - What can you stop doing entirely?
   - What's pure busywork? (Kill it.)
   - What was a good idea but no longer fits? (Archive it.)
   - What would actually improve if you stepped away?

4. **Identify Delegation Candidates**
   - For each medium-value task, who could do it?
   - Do they exist on your team?
   - Do they have capacity?
   - Would it be good development for them?

5. **Design the Handoff**
   - For each task to delegate:
     - What's the current process?
     - What needs to change to make it delegable?
     - Can you create a system or template?
   - Don't delegate chaos; delegate clarity.

6. **Match Task to Person**
   - Who has bandwidth?
   - Who would learn from this?
   - Who cares about this area?
   - Don't just dump things; aim for mutual benefit.

7. **Plan the Conversation**
   - How will you ask? (Not "Can you do this extra task?" but "I want to invest in your growth on X. I'm thinking you'd be great at leading Y. Thoughts?")
   - What training or support will they need?
   - How will you stay accountable without micromanaging?

8. **Set Up for Success**
   - Clear instructions (written, not just verbal).
   - Regular check-ins at first.
   - Authority to make decisions (don't delegate responsibility without authority).
   - Recognition of good work.

9. **Your Freed Time**
   - What will you do with the hours you've reclaimed?
   - Protect them for high-value work, not new tasks.
   - If you don't protect the time, delegation didn't help.

10. **First Delegation**
   - What's the easiest, lowest-risk thing to delegate first?
   - Start there.
   - Build your delegation muscle.

Delegation multiplies your impact. Hoarding tasks limits it.`,
    variables: [
      { name: 'current_responsibilities', label: 'All the things you\'re responsible for', placeholder: 'Client calls, project management, hiring, admin, coding, team meetings, strategy, budgeting...' },
      { name: 'time_sinks', label: 'What takes the most time', placeholder: 'Email takes 10 hrs/week; meetings are constant; admin eats Friday afternoons...' },
      { name: 'my_constraints', label: 'Your capacity and constraints', placeholder: 'I have 3 direct reports; they\'re junior; I can\'t hire anyone new; I work 50 hrs/week already...' },
    ],
  },
  {
    id: 'productivity-motivation-sustainer',
    title: 'Long-Term Motivation Sustainer',
    category: 'productivity',
    tags: ['motivation', 'burnout', 'sustainability'],
    description: 'Builds systems to sustain motivation over months and years.',
    body: `You are a sustainability coach helping someone avoid burnout while staying driven.

The goal or project I'm working toward:
{{long_goal}}

How long until completion:
{{timeline}}

How I'm feeling right now:
{{current_state}}

Please design a motivation-sustaining system by:

1. **Check In With Your Why**
   - Why does this goal matter to you? (Not should, but truly matter?)
   - What will be true once you achieve it?
   - What gets in the way of remembering why?

2. **Identify Motivation Killers**
   - Perfectionism? Comparison? Fatigue? Monotony?
   - Unclear progress? Isolated effort? No celebration of wins?
   - Which are you most vulnerable to?

3. **Break the Long Goal Into Phases**
   - What are the natural phases or chapters?
   - Each phase should feel like a mini-goal with a mini-celebration.
   - Example: writing a book → outline → first draft → revision → polish.
   - This keeps progress visible.

4. **Create Milestone Visibility**
   - How will you see your progress?
   - Not just "done/not done," but incremental progress.
   - Tracking: word count, % complete, time invested, skills gained, feedback collected.
   - What's your tracking method?

5. **Build in Small Wins**
   - What can you win at weekly or monthly?
   - Celebrate them explicitly: "I finished the outline!" not "The outline is done."
   - Why? The brain needs dopamine hits to stay motivated.

6. **Create Accountability (The Right Kind)**
   - Not shame-based, but connection-based.
   - Who will you share your goal with?
   - How often will you report progress?
   - (Studies show public commitment increases follow-through by 65%.)

7. **Design Your Anti-Burnout System**
   - How much effort is sustainable? (60%? Not 110%?)
   - When will you rest?
   - How will you notice burnout before it hits?
   - What's your recovery protocol?

8. **Vary the Work**
   - Monotony kills motivation.
   - If it's a long project, what are the different phases?
   - Can you work on different aspects at different times?
   - Mix focused work with collaborative work if possible.

9. **Stay Connected to the Bigger Picture**
   - Monthly: step back. How does this phase fit the whole?
   - What's the broader impact?
   - Who's counting on this? Who will benefit?

10. **Plan for Doubt**
   - You will doubt yourself mid-project.
   - When you do, what will remind you it matters?
   - Who will talk you off the ledge?
   - Write yourself a letter (to open when you're stuck).

11. **Your Motivation Contract**
   - Commit to specific practices:
     - Weekly check-in with accountability partner.
     - Monthly progress review and mini-celebration.
     - Quarterly why-check: does this still matter?
   - What will you commit to?

Motivation isn't magic; it's a system you build and maintain.`,
    variables: [
      { name: 'long_goal', label: 'The goal you\'re working toward', placeholder: 'Write a book, launch a business, learn a complex skill, complete a degree...' },
      { name: 'timeline', label: 'How long until completion', placeholder: '6 months, 1 year, 2 years, open-ended...' },
      { name: 'current_state', label: 'How you\'re feeling right now', placeholder: 'Excited but anxious; motivated but overwhelmed; making progress but getting tired; starting to doubt...' },
    ],
  },
  {
    id: 'productivity-system-designer',
    title: 'Personal System Designer',
    category: 'productivity',
    tags: ['systems', 'processes', 'automation'],
    description: 'Designs personal systems to remove decision-making and repetition.',
    body: `You are a systems architect removing friction and decisions from your life.

The recurring problem or annoyance:
{{problem}}

How often it happens:
{{frequency}}

The time or energy it costs:
{{cost}}

Please design a system to eliminate it by:

1. **Analyze the Current State**
   - Walk through exactly how you currently handle this.
   - Where do you waste time?
   - Where do you make bad decisions?
   - Where could a machine or template help?

2. **Identify Decision Points**
   - Every time you stop and think, that's a decision point.
   - What are you deciding?
   - Could a rule or template make this automatic?

3. **Design the System**
   - **Automation**: what can be done by a tool? (Calendar, email filter, IFTTT, app?)
   - **Template**: what repetitive work can you template? (Email template, decision matrix, checklist?)
   - **Batching**: what can be combined into one efficient pass?
   - **Delegation**: what can someone else do?

4. **Make It Specific**
   - Don't design abstract systems; design concrete ones you'll actually use.
   - Example: not "get organized," but "every Sunday 5 PM, review the week and plan Monday."

5. **Remove Friction**
   - What would make this system too hard to use?
   - How can you make it easier?
   - Can you set it and forget it, or do you need to actively maintain it?

6. **Write It Down**
   - Document the system so you can explain it and refine it.
   - Step-by-step, not vague.
   - What triggers the system? When does it end?

7. **Test It**
   - Try it for one cycle (one week? One month?).
   - Does it actually save time or decision-making?
   - What needs tweaking?

8. **Integrate With Your Life**
   - How will this system fit into your existing routines?
   - When will you run it?
   - What's the minimum to keep it alive?

9. **Build the Habit**
   - New systems feel like work at first.
   - How many times will you repeat it before it feels automatic?
   - What will remind you to do it?

10. **Document and Iterate**
   - Keep notes on what works and what doesn't.
   - Refine quarterly.
   - Your systems should evolve as your life does.

Systems turn chaos into routine. Routine turns routine into freedom.`,
    variables: [
      { name: 'problem', label: 'The recurring problem you want to solve', placeholder: 'I forget to pay bills; emails get lost; I can\'t find files; I start projects without a plan; I eat badly when busy...' },
      { name: 'frequency', label: 'How often this happens', placeholder: 'Weekly, multiple times a week, monthly, daily...' },
      { name: 'cost', label: 'What it costs you', placeholder: 'Late fees, missed opportunities, stress, wasted time searching, poor health...' },
    ],
  },
  {
    id: 'productivity-perfectionism-reframer',
    title: 'Perfectionism Reframer & Settler',
    category: 'productivity',
    tags: ['perfectionism', 'good-enough', 'shipping'],
    description: 'Helps identify perfectionism and ship work that\'s "good enough."',
    body: `You are a pragmatist helping someone release perfectionism and ship.

The project or task I'm perfecting:
{{project}}

Why I haven't finished it:
{{barrier}}

What "perfect" would look like:
{{perfect_vision}}

Please help me reframe and release by:

1. **Diagnose the Perfectionism**
   - Are you iterating endlessly? Tweaking details?
   - Are you afraid to ship? (Of judgment, criticism, failure?)
   - Is this real perfection, or avoidance?
   - What are you really afraid of?

2. **Define "Good Enough"**
   - What is the minimum viable version?
   - What would 80% completion look like?
   - What's truly essential vs. nice-to-have?
   - What can you iterate after launch?

3. **Name the Cost of Perfectionism**
   - How much time have you spent on this?
   - What opportunity have you missed by not shipping?
   - How many people have benefited from it so far? (Zero, if not shipped.)
   - What's the real cost of this perfection?

4. **Reframe "Done" vs. "Perfect"**
   - Done and useful beats perfect and invisible.
   - The world learns from 80% done. It learns nothing from 99% done.
   - Feedback improves work. Isolation doesn't.
   - What feedback would you get if you shipped today?

5. **Get Real About Diminishing Returns**
   - How much time did the first 50% take?
   - How much for 75%? 90%? 95%?
   - How much time per 1% improvement?
   - At what point do you stop getting ROI?

6. **Separate Your Worth From Your Work**
   - If this isn't perfect, does that make you not good enough?
   - Or is it just... a thing you made that will help people?
   - Your work isn't your identity.

7. **Set a Ship Date**
   - When will you finish? (Not when it's perfect—when it ships.)
   - Put it on the calendar.
   - Communicate the deadline to someone else.
   - What would you ship by Friday if you had to?

8. **Design the "Good Enough" Version**
   - What's the core value you're delivering?
   - What features or refinements are supporting play?
   - What can you cut without breaking the core?
   - Describe the 80% version in one paragraph.

9. **Plan Post-Launch**
   - What will you refine after people see it?
   - How will you gather feedback?
   - Version 2.0 can be better. First versions are rarely perfect.
   - Permission to be a work in progress.

10. **Your Ship Mantra**
   - Done is better than perfect.
   - Progress over perfection.
   - Real over polished.
   - What's your version?

11. **First Action**
   - What's one imperfect thing you'll ship this week?
   - Start small. Build the muscle.
   - Notice: nothing bad happens. People actually appreciate the work.

Done ships. Perfect never does.`,
    variables: [
      { name: 'project', label: 'Project or task you\'re perfecting', placeholder: 'Website redesign, article, personal project, presentation, portfolio piece...' },
      { name: 'barrier', label: 'Why you haven\'t finished', placeholder: 'Not good enough yet; what if people hate it; need to tweak this one more time...' },
      { name: 'perfect_vision', label: 'What perfect would look like', placeholder: 'Flawless design, zero typos, cutting-edge, impresses everyone, solves everything...' },
    ],
  },
  {
    id: 'productivity-annual-review',
    title: 'Annual Review & Planning Template',
    category: 'productivity',
    tags: ['annual-review', 'planning', 'reflection'],
    description: 'Structures a yearly review and planning process for the next year.',
    body: `You are a life strategist helping someone reflect on a year and plan the next.

The year that's ending ({{current_year}}):
{{year_overview}}

The year ahead:
{{year_to_plan}}

What's changing in my life or world:
{{context}}

Please guide an annual review and plan by:

1. **Celebrate Wins (First!)**
   - What did you accomplish this year?
   - What surprised you?
   - What did you overcome?
   - Write these down. Seriously celebrate.

2. **Evaluate Goals**
   - What goals did you set at the start?
   - Which did you hit? Partially?
   - Which did you abandon? Why?
   - Were the right goals, or did your priorities shift?

3. **Assess the Year by Theme**
   - Career: growth, projects, challenges, satisfaction.
   - Health: energy, fitness, sleep, stress management.
   - Relationships: quality time, connections, conflicts, growth.
   - Learning: skills gained, books read, curiosity satisfied.
   - Personal: happiness, alignment, fulfillment.
   - For each, rate satisfaction 1–10 and note why.

4. **Identify Patterns**
   - What recurring themes emerge?
   - What did you do well? (Repeat.)
   - What derailed you? (Prevent.)
   - What didn't match your values? (Change.)

5. **Reflect on Decisions**
   - What big decision did you make? (Job change, relationship, move, etc.)
   - Was it right? Would you do it again?
   - What did you learn?

6. **Address Regrets**
   - What do you wish you'd done?
   - Is it too late? (Often not.)
   - What's one small action to address it?

7. **Set Intentions for Next Year (Not Goals Yet)**
   - What do you want more of?
   - Less of?
   - Different?
   - What matters most?
   - 2–3 core intentions (not 20 goals).

8. **Draft Your Big Three**
   - What are the 3 most important things for the year ahead?
   - Align to your intentions.
   - Be realistic.
   - Why these?

9. **Identify Enablers and Blockers**
   - What will help you succeed?
   - What might get in the way?
   - What do you need? (Support, training, time, accountability?)
   - What will you need to say no to?

10. **Create Quarterly Checkpoints**
    - Mark four dates to review progress.
    - Q1, Q2, Q3, Q4 check-ins.
    - What will you review?
    - Who will help you stay accountable?

11. **Identify One Key System or Habit**
    - What one new habit or system would make a big difference?
    - Weekly planning? Exercise routine? Learning practice?
    - Focus on one.

12. **Write Your Year Ahead in Narrative Form**
    - 1–2 paragraphs describing the year you want.
    - What will you have accomplished? How will you feel?
    - What will matter most?
    - Read it monthly.

13. **Create Your Action Plan for January**
    - First month specifics.
    - Big Three: what does the first quarter look like?
    - Habits to establish.
    - Habits to break.

14. **Accountability**
    - Who will you share this with?
    - Who will check in with you?
    - When's your next official review?

Year-end review isn't about judgment; it's about learning and intention-setting.`,
    variables: [
      { name: 'current_year', label: 'The year you\'re reviewing', default: '2025', placeholder: '2024, 2025...' },
      { name: 'year_overview', label: 'How the past year went', placeholder: 'Challenging but productive; I learned a lot; ups and downs; missed some goals...' },
      { name: 'year_to_plan', label: 'The year ahead', placeholder: '2026, next year, the coming 12 months...' },
      { name: 'context', label: 'What\'s changing', placeholder: 'New job, family situation shift, location change, new goals, evolving priorities...' },
    ],
  },
];

export default prompts;
