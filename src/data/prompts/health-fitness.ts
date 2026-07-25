import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'health-fitness-workout-program-designer',
    title: 'Workout Program Designer',
    category: 'health-fitness',
    tags: ['training', 'program-design', 'fitness', 'exercise', 'goals'],
    description: 'Designs personalized workout programs for specific fitness goals.',
    body: `You are a fitness coach designing a {{duration}} workout program.

Fitness goal: {{fitness_goal}}
Current fitness level: {{fitness_level}}
Available equipment: {{equipment}}
Constraints: {{constraints}}

IMPORTANT: This is not medical advice. If you have health concerns, defer to your clinician.

Design:
1. **Program structure** — Weekly schedule (frequency, sessions per week).
2. **Warm-up & cool-down** — Dynamic stretches, mobility work, cooldown protocols.
3. **Exercise selection** — 4–6 primary exercises per session matched to goal.
4. **Sets, reps, intensity** — Specific targets (e.g., 3 sets x 8-12 reps at 70% 1RM).
5. **Progression scheme** — How to increase difficulty week-to-week over {{duration}}.
6. **Recovery guidance** — Rest days, sleep, nutrition considerations.
7. **Form cues** — 1–2 key coaching points per exercise to prevent injury.
8. **Modifications** — Easier and harder variations of each exercise.
9. **Expected outcomes** — What fitness improvements should occur by end of {{duration}}.

Format: A complete, ready-to-use program organized by week. Include exercise photos/descriptions where helpful.`,
    variables: [
      { name: 'duration', label: 'Program duration', default: '12 weeks', placeholder: '4 weeks, 8 weeks, 12 weeks, 16 weeks' },
      { name: 'fitness_goal', label: 'Primary fitness goal', placeholder: 'build muscle, lose fat, increase strength, improve endurance, gain flexibility' },
      { name: 'fitness_level', label: 'Current fitness level', default: 'intermediate', placeholder: 'beginner, intermediate, advanced' },
      { name: 'equipment', label: 'Available equipment', placeholder: 'home gym, barbell and dumbbells, bodyweight only, full gym' },
      { name: 'constraints', label: 'Time or injury constraints', placeholder: '30 min sessions, prior shoulder injury, limited joint stress' },
    ],
  },
  {
    id: 'health-fitness-nutrition-plan-builder',
    title: 'Nutrition Plan Builder',
    category: 'health-fitness',
    tags: ['nutrition', 'diet', 'meal-planning', 'macros', 'health'],
    description: 'Builds personalized nutrition plans aligned with fitness or health goals.',
    body: `You are a nutrition coach designing a {{diet_type}} plan for {{goal}}.

Goal: {{goal}}
Current habits: {{current_habits}}
Dietary preferences: {{dietary_preferences}}
Duration: {{duration}}

IMPORTANT: This is not medical advice or clinical nutrition guidance. Defer to a registered dietitian for medical conditions.

Create:
1. **Calorie target** — Daily calorie needs based on goal (maintenance, surplus, deficit).
2. **Macronutrient split** — Protein (g/day), carbs (g/day), fat (g/day) with rationale.
3. **Meal structure** — Number of meals, timing around workouts, meal frequency.
4. **Sample day** — A complete day of meals with portions, ingredients, macros.
5. **Food list** — Approved proteins, carbs, fats, vegetables, processed foods.
6. **Meal prep strategy** — How to prepare meals efficiently; batch cooking ideas.
7. **Hydration** — Water target, electrolyte considerations if applicable.
8. **Supplementation** — Optional supplements to support goal (not mandatory).
9. **Tracking method** — How to log food and assess compliance.
10. **Adjustments** — How to modify if progress stalls or goals change.

Format: A practical, ready-to-implement nutrition framework organized by day/week.`,
    variables: [
      { name: 'diet_type', label: 'Diet type or approach', default: 'balanced', placeholder: 'low-carb, high-protein, Mediterranean, plant-based, balanced' },
      { name: 'goal', label: 'Nutrition goal', placeholder: 'weight loss, muscle gain, improved energy, athletic performance, general health' },
      { name: 'current_habits', label: 'Current eating patterns', placeholder: 'I usually skip breakfast; I eat lots of processed foods; I eat intuitively' },
      { name: 'dietary_preferences', label: 'Dietary preferences/restrictions', placeholder: 'vegetarian, gluten-free, no dairy, cuisine preferences' },
      { name: 'duration', label: 'Plan duration', default: '12 weeks', placeholder: '4 weeks, 8 weeks, 12 weeks, ongoing' },
    ],
  },
  {
    id: 'health-fitness-recovery-protocol-designer',
    title: 'Recovery & Injury Prevention Protocol',
    category: 'health-fitness',
    tags: ['recovery', 'mobility', 'injury-prevention', 'stretching', 'wellness'],
    description: 'Designs recovery and injury prevention protocols for active individuals.',
    body: `You are a sports medicine coach designing a recovery protocol.

Training type: {{training_type}}
Injury history: {{injury_history}}
Time available: {{time_available}}
Goal: {{recovery_goal}}

IMPORTANT: This is not medical treatment. For pain or injury, consult a clinician.

Design:
1. **Mobility work** — Dynamic and static stretching routines (frequency, duration, focus areas).
2. **Foam rolling** — Specific areas to roll, duration per area, intensity guidance.
3. **Breathing & parasympathetic activation** — Breathing exercises, meditation timing.
4. **Sleep protocol** — Sleep duration target, pre-sleep routine, sleep hygiene.
5. **Nutrition for recovery** — Post-workout meal timing, protein targets, hydration.
6. **Active recovery days** — Low-intensity sessions (walking, yoga, swimming).
7. **Contrast therapy** — Ice baths, heat therapy, or alternating (if applicable).
8. **Massage & soft tissue work** — Self-massage tools (lacrosse ball, massage gun), frequency.
9. **Pain monitoring** — How to distinguish normal soreness from injury risk.
10. **Weekly checklist** — A summary of recovery activities and their timing.

Format: A practical weekly recovery schedule that integrates with training. Include exercise descriptions.`,
    variables: [
      { name: 'training_type', label: 'Type of training', placeholder: 'strength training, endurance sports, CrossFit, gymnastics, ball sports' },
      { name: 'injury_history', label: 'Prior injuries or problem areas', placeholder: 'Previous shoulder injury, chronic lower back pain, tight hips' },
      { name: 'time_available', label: 'Time available for recovery', default: '30 minutes daily', placeholder: '15 min, 30 min, 60 min daily' },
      { name: 'recovery_goal', label: 'Recovery goal', placeholder: 'prevent injury, reduce soreness, improve sleep, enhance performance' },
    ],
  },
  {
    id: 'health-fitness-goal-tracker-builder',
    title: 'Fitness Goal Tracker & Accountability System',
    category: 'health-fitness',
    tags: ['goals', 'tracking', 'accountability', 'progress', 'measurement'],
    description: 'Creates tracking systems and accountability frameworks for fitness goals.',
    body: `You are a goal-setting coach designing a tracking system for {{goal}}.

Primary goal: {{goal}}
Timeline: {{timeline}}
Current status: {{current_status}}
Motivation level: {{motivation}}

IMPORTANT: This is not medical advice. Use health tracking tools under clinician guidance if managing medical conditions.

Create:
1. **SMART goal breakdown** — Specific, measurable, achievable, relevant, time-bound objectives.
2. **Primary metric** — The single most important measure (e.g., body weight, bench press, running time).
3. **Secondary metrics** — 2–3 supporting indicators (e.g., circumference, body composition, strength metrics).
4. **Measurement protocol** — How often to measure? When? Under what conditions?
5. **Tracking template** — A weekly/monthly checklist to log progress.
6. **Progress checkpoints** — Milestones at weeks 4, 8, 12, etc.
7. **Adjustment triggers** — When to modify the program (e.g., if progress stalls 2 weeks).
8. **Accountability structure** — How to stay consistent (accountability partner, app, coach).
9. **Celebration milestones** — Non-scale victories and rewards for hitting milestones.
10. **Post-goal planning** — What comes after achieving this goal?

Format: A ready-to-use tracking system with sample entries and adjustment guidance.`,
    variables: [
      { name: 'goal', label: 'Fitness goal', placeholder: 'lose 20 lbs, run a 5K, do 10 pull-ups, deadlift 300 lbs' },
      { name: 'timeline', label: 'Goal timeline', default: '12 weeks', placeholder: '8 weeks, 12 weeks, 6 months, 1 year' },
      { name: 'current_status', label: 'Current status or starting point', placeholder: 'Currently 200 lbs, can run 2 miles, bench 185 lbs' },
      { name: 'motivation', label: 'Current motivation level', default: 'moderate', placeholder: 'low, moderate, high, very high' },
    ],
  },
  {
    id: 'health-fitness-exercise-form-guide',
    title: 'Exercise Form Guide & Injury Prevention',
    category: 'health-fitness',
    tags: ['exercise-form', 'technique', 'injury-prevention', 'coaching', 'cues'],
    description: 'Creates detailed exercise form guides with coaching cues and safety checks.',
    body: `You are a strength and conditioning coach writing a detailed form guide.

Exercise: {{exercise_name}}
Training level: {{training_level}}
Common errors: {{common_errors}}

IMPORTANT: This is not medical treatment. For existing pain, consult a clinician. Stop any exercise causing sharp pain.

Create:
1. **Starting position** — Detailed description of where to be before the movement (stance, grip, alignment).
2. **Movement phases** — Break down the exercise into 2–4 phases (e.g., descent, bottom, ascent, top).
3. **Key coaching cues** — 3–5 cues that capture the essence (e.g., "chest up," "elbows tracking").
4. **Range of motion** — How deep/far should the movement go? Any limitations?
5. **Breathing pattern** — When to inhale, when to exhale.
6. **Common errors** — The top 3–4 form breakdowns and what they cause (e.g., "knee caving in = quad strain risk").
7. **Regression** — A simpler version for beginners or those building confidence.
8. **Progression** — A harder variation for advanced practitioners.
9. **Troubleshooting** — If a body part hurts during this exercise, here's what might be wrong.
10. **Video description** — Enough detail that someone could film themselves and compare.

Format: A comprehensive form guide suitable for a coach to reference or a person to self-teach.`,
    variables: [
      { name: 'exercise_name', label: 'Exercise name', placeholder: 'Barbell Back Squat, Deadlift, Bench Press, Push-up, Pull-up' },
      { name: 'training_level', label: 'Training level to teach', default: 'intermediate', placeholder: 'beginner, intermediate, advanced' },
      { name: 'common_errors', label: 'Common form errors you see', placeholder: 'Knees caving inward, rounding lower back, elbows flaring excessively' },
    ],
  },
  {
    id: 'health-fitness-sleep-optimization-guide',
    title: 'Sleep Optimization & Sleep Hygiene Guide',
    category: 'health-fitness',
    tags: ['sleep', 'recovery', 'hygiene', 'wellness', 'performance'],
    description: 'Creates personalized sleep optimization strategies for better recovery.',
    body: `You are a sleep coach optimizing sleep for {{sleep_goal}}.

Sleep goal: {{sleep_goal}}
Current sleep pattern: {{current_pattern}}
Challenges: {{challenges}}
Lifestyle factors: {{lifestyle}}

IMPORTANT: This is not medical treatment for sleep disorders. For chronic sleep issues, consult a clinician.

Design:
1. **Sleep schedule** — Target bedtime, wake time, duration (with rationale).
2. **Pre-sleep routine** — Activities 60, 30, and 10 minutes before bed.
3. **Sleep environment** — Temperature, darkness, sound, mattress/pillow quality.
4. **Caffeine & alcohol** — Guidelines on timing and amounts (if consumed).
5. **Evening nutrition** — What to eat/drink in the evening, timing.
6. **Screen time** — Blue light exposure, when to stop screen use.
7. **Wind-down techniques** — Meditation, breathing, journaling, reading.
8. **Napping strategy** — If naps are beneficial, when/how long to nap.
9. **Sleep tracking** — How to monitor sleep quality (via app, journal, or feel).
10. **Adjustment protocol** — How to modify if sleep doesn't improve in 2–3 weeks.

Format: A ready-to-implement sleep protocol with daily checklists and timing guidance.`,
    variables: [
      { name: 'sleep_goal', label: 'Sleep goal', placeholder: 'sleep 7–8 hours consistently, reduce night waking, fall asleep faster, improve sleep quality' },
      { name: 'current_pattern', label: 'Current sleep pattern', placeholder: 'I go to bed at 11 PM, wake at 6 AM, but feel unrefreshed. I wake 2–3 times nightly.' },
      { name: 'challenges', label: 'Sleep challenges', placeholder: 'I take 45 min to fall asleep; I wake from anxiety; I have racing thoughts' },
      { name: 'lifestyle', label: 'Lifestyle factors', placeholder: 'I work from home; I exercise in the evening; I use my phone before bed' },
    ],
  },
  {
    id: 'health-fitness-posture-assessment-guide',
    title: 'Posture Assessment & Correction Guide',
    category: 'health-fitness',
    tags: ['posture', 'alignment', 'mobility', 'correction', 'ergonomics'],
    description: 'Assesses postural issues and creates corrective exercise protocols.',
    body: `You are a postural specialist assessing and correcting posture issues.

Primary issue: {{posture_issue}}
Work/life setup: {{setup}}
Activity level: {{activity}}
Pain or discomfort: {{pain_pattern}}

IMPORTANT: This is not medical treatment for postural deformities. Consult a clinician for pain or structural concerns.

Create:
1. **Postural assessment** — Describe ideal alignment, then identify current deviations.
2. **Root causes** — Why is this posture happening? (Muscle imbalances, habit, workspace setup?)
3. **Corrective exercises** — 4–6 exercises to address the issue (frequency, duration, progression).
4. **Daily habits** — Reminders and postural cues throughout the day (e.g., "shoulders back during lunch").
5. **Workspace setup** — If relevant, ergonomic adjustments for desk, chair, monitor.
6. **Stretching protocol** — Tight muscles to stretch and how often.
7. **Strengthening protocol** — Weak muscles to activate and strengthen.
8. **Breathing** — How breathing patterns support better posture.
9. **Progress tracking** — How to assess improvement (photos, pain level, awareness).
10. **Timeline** — How long to see improvements (typically 2–4 weeks of consistency).

Format: A comprehensive corrective protocol with daily reminders and weekly progression.`,
    variables: [
      { name: 'posture_issue', label: 'Primary postural issue', placeholder: 'forward head posture, rounded shoulders, anterior pelvic tilt, excessive kyphosis' },
      { name: 'setup', label: 'Work/life setup', placeholder: 'I sit at a desk 8 hours daily; I use my phone frequently; I spend time driving' },
      { name: 'activity', label: 'Activity level and type', placeholder: 'Sedentary job; I do weightlifting 3x/week; I do yoga occasionally' },
      { name: 'pain_pattern', label: 'Any pain or discomfort', placeholder: 'Neck pain at end of day; lower back tension; no pain, just awareness' },
    ],
  },
  {
    id: 'health-fitness-cardio-workout-designer',
    title: 'Cardiovascular Training Program Designer',
    category: 'health-fitness',
    tags: ['cardio', 'endurance', 'training', 'intervals', 'aerobic'],
    description: 'Designs cardiovascular training programs for aerobic fitness and endurance.',
    body: `You are a cardio coach designing a {{duration}} cardiovascular training program.

Cardio goal: {{cardio_goal}}
Current fitness level: {{fitness_level}}
Preferred activity: {{preferred_activity}}
Time available: {{time_per_session}}

IMPORTANT: This is not medical clearance. Before starting cardio training, consult your clinician if you have cardiac history or concerns.

Design:
1. **Program structure** — Weekly frequency (3–5 sessions), mix of intensity zones.
2. **Training zones** — Define Zones 1–5 (easy, moderate, threshold, VO2 max, anaerobic).
3. **Weekly breakdown** — How many easy, moderate, hard sessions per week?
4. **Warm-up/cool-down** — 5–10 minute protocols for each session.
5. **Long slow distance (LSD)** — Weekly longer, easier session and its duration.
6. **Interval workouts** — 2–3 interval session formats (durations, rest, intensity).
7. **Intensity metrics** — Heart rate zones or RPE (rate of perceived exertion) targets.
8. **Progression scheme** — How to increase volume or intensity over {{duration}}.
9. **Recovery weeks** — Built-in deload weeks (typically every 4 weeks).
10. **Expected adaptations** — What fitness improvements should occur by end of {{duration}}.

Format: A complete, ready-to-follow cardiovascular program organized by week.`,
    variables: [
      { name: 'duration', label: 'Program duration', default: '12 weeks', placeholder: '6 weeks, 8 weeks, 12 weeks, 16 weeks' },
      { name: 'cardio_goal', label: 'Cardiovascular goal', placeholder: 'build aerobic base, improve 5K time, increase VO2 max, prepare for marathon' },
      { name: 'fitness_level', label: 'Current fitness level', default: 'intermediate', placeholder: 'beginner (can run 20 min), intermediate (can run 30 min), advanced' },
      { name: 'preferred_activity', label: 'Preferred cardio activity', default: 'running', placeholder: 'running, cycling, rowing, swimming, elliptical, stair climbing' },
      { name: 'time_per_session', label: 'Time available per session', placeholder: '20 minutes, 30 minutes, 45 minutes, 60 minutes' },
    ],
  },
  {
    id: 'health-fitness-nutrition-timing-guide',
    title: 'Nutrition Timing & Pre/Post-Workout Guide',
    category: 'health-fitness',
    tags: ['nutrition', 'timing', 'pre-workout', 'post-workout', 'performance'],
    description: 'Creates nutrition timing strategies to optimize performance and recovery.',
    body: `You are a sports nutritionist designing a nutrition timing strategy.

Training type: {{training_type}}
Training frequency: {{frequency}}
Goal: {{nutrition_goal}}
Dietary preferences: {{dietary_preferences}}

IMPORTANT: This is not medical nutrition advice. Defer to a registered dietitian for medical conditions or specialized guidance.

Design:
1. **Pre-workout nutrition** — What to eat 3, 2, 1, and 0.5 hours before training (macros, examples).
2. **Pre-workout timing** — Why the spacing matters; adjustments for digestion speed.
3. **Intra-workout nutrition** — If applicable, what to consume during long sessions (>90 min).
4. **Post-workout window** — Why the first 2 hours matter for recovery.
5. **Post-workout meal** — Protein, carbs, fat targets with food examples.
6. **Protein distribution** — How much protein per meal; total daily targets.
7. **Carb timing** — When to emphasize carbs relative to training intensity.
8. **Hydration strategy** — Water targets during, after, and between sessions.
9. **Supplementation** — Optional supplements to support timing strategy (creatine, beta-alanine, etc.).
10. **Sample day** — A complete day of eating with pre/post-workout meals timed to training.

Format: A practical nutrition timing framework ready to implement around workouts.`,
    variables: [
      { name: 'training_type', label: 'Type of training', placeholder: 'strength training, endurance sports, high-intensity intervals, mixed modalities' },
      { name: 'frequency', label: 'Training frequency', default: '4 sessions/week', placeholder: '3 sessions/week, 5 sessions/week, twice daily' },
      { name: 'nutrition_goal', label: 'Nutrition goal', placeholder: 'optimize performance, maximize recovery, minimize muscle loss during cut, enhance muscle gain' },
      { name: 'dietary_preferences', label: 'Dietary preferences', placeholder: 'vegetarian, gluten-free, dairy-free, no processed foods' },
    ],
  },
  {
    id: 'health-fitness-habit-formation-coach',
    title: 'Habit Formation & Behavior Change Coach',
    category: 'health-fitness',
    tags: ['habits', 'behavior-change', 'motivation', 'coaching', 'psychology'],
    description: 'Coaches habit formation and sustainable behavior change for fitness goals.',
    body: `You are a behavior change coach helping establish {{target_habit}}.

Target habit: {{target_habit}}
Current behavior: {{current_behavior}}
Obstacles: {{obstacles}}
Motivation level: {{motivation}}

IMPORTANT: This is not therapy or medical treatment. For mental health concerns, consult a mental health professional.

Create:
1. **Habit architecture** — The cue, routine, and reward cycle for this habit.
2. **Implementation intention** — Specific "if-then" statements (e.g., "If I finish work, then I go to the gym").
3. **Environmental design** — How to arrange your environment to make the habit easy.
4. **Starting small** — A minimal viable habit to start with (e.g., 10 min vs. 60 min).
5. **Progress stacking** — How to attach this habit to an existing habit.
6. **Obstacle planning** — For each obstacle, a specific contingency (e.g., "If I'm tired, then I do 15 min instead").
7. **Accountability system** — How to track, who to report to, what's the consequence/reward?
8. **Motivation sources** — Why is this habit important? (Connect to larger goals.)
9. **Resistance points** — Where is the most friction? How to reduce it?
10. **Timeline** — How long until this feels automatic? (Usually 4–12 weeks of consistency.)

Format: A personalized habit-formation plan with daily reminders and weekly check-ins.`,
    variables: [
      { name: 'target_habit', label: 'Target habit to establish', placeholder: 'Exercise 4x/week, eat vegetables with every meal, meditate daily, drink 2L water daily' },
      { name: 'current_behavior', label: 'Current behavior or starting point', placeholder: 'I exercise 0 times per week; I rarely eat vegetables; I drink coffee but forget water' },
      { name: 'obstacles', label: 'Key obstacles or barriers', placeholder: 'I\'m too tired after work; I find exercise boring; I forget to plan ahead' },
      { name: 'motivation', label: 'Motivation level', default: 'moderate', placeholder: 'low, moderate, high' },
    ],
  },
  {
    id: 'health-fitness-injury-prevention-assessment',
    title: 'Injury Risk Assessment & Prevention',
    category: 'health-fitness',
    tags: ['injury-prevention', 'risk-assessment', 'screening', 'mobility', 'imbalance'],
    description: 'Assesses injury risk factors and designs prevention strategies.',
    body: `You are a sports medicine coach assessing injury risk.

Sport/activity: {{sport_or_activity}}
Training volume: {{training_volume}}
History: {{injury_history}}
Current concerns: {{current_concerns}}

IMPORTANT: This is not medical screening or diagnosis. For existing pain or injury, consult a clinician immediately.

Create:
1. **Injury risk factors** — Common injuries in this sport; your specific risk factors.
2. **Screening assessment** — Key mobility, strength, and movement quality checkpoints.
3. **Red flags** — Signs of early injury (excessive soreness, movement compensation, mild pain).
4. **Weakness identification** — Which muscles are typically weak in this sport? (Test them.)
5. **Imbalance identification** — Left/right imbalances, anterior/posterior imbalances.
6. **Movement quality** — Assess squat, lunge, hinge patterns for dysfunction.
7. **Prehabilitation exercises** — 4–6 preventative exercises to address identified weaknesses.
8. **Warm-up protocol** — Dynamic warm-up emphasizing injury-prone areas.
9. **Load management** — How to progress training volume safely.
10. **Monitoring checklist** — What to watch for (pain patterns, swelling, mobility loss).

Format: A complete injury risk assessment and prevention protocol organized by week.`,
    variables: [
      { name: 'sport_or_activity', label: 'Sport or activity', placeholder: 'Running, weightlifting, basketball, tennis, CrossFit' },
      { name: 'training_volume', label: 'Current training volume', placeholder: '3 hours per week, 5 sessions per week, 10+ hours per week' },
      { name: 'injury_history', label: 'Prior injuries or problem areas', placeholder: 'Previous knee injury, chronic shoulder pain, recurring ankle sprains' },
      { name: 'current_concerns', label: 'Current concerns or warning signs', placeholder: 'Mild knee pain during sprints, tight hips, shoulder discomfort on overhead press' },
    ],
  },
  {
    id: 'health-fitness-metabolism-optimization-guide',
    title: 'Metabolism & Energy Optimization Guide',
    category: 'health-fitness',
    tags: ['metabolism', 'energy', 'nutrition', 'recovery', 'performance'],
    description: 'Optimizes metabolic and energy systems for sustained performance.',
    body: `You are a performance coach optimizing metabolism and energy systems.

Goal: {{goal}}
Activity type: {{activity_type}}
Current energy pattern: {{energy_pattern}}
Limitations: {{limitations}}

IMPORTANT: This is not medical advice for metabolic disorders. For diagnosed metabolic issues, consult your clinician.

Design:
1. **Metabolic baseline** — Estimate resting metabolic rate and daily energy expenditure.
2. **Energy systems** — Focus on the systems relevant to your activity (aerobic, anaerobic, phosphocreatine).
3. **Fuel substrates** — When to use carbs, fats, and protein for energy.
4. **Carb-loading strategy** — If endurance-relevant, when/how to supercompensate.
5. **Fat-adaptation** — Training in a fasted state or low-carb to enhance fat oxidation.
6. **Training intensity distribution** — What percent easy, moderate, hard per week?
7. **Nutrient timing** — When to fuel, how much, based on training demands.
8. **Hydration & electrolytes** — Sweat rate, salt strategy, hydration targets.
9. **Caffeine strategy** — Timing and dosage for performance enhancement (if applicable).
10. **Monitoring metrics** — How to assess if optimization is working (performance, energy, recovery).

Format: A practical energy optimization protocol integrated with training and nutrition.`,
    variables: [
      { name: 'goal', label: 'Primary performance goal', placeholder: 'improve sprint speed, enhance endurance capacity, sustain power output, reduce fatigue' },
      { name: 'activity_type', label: 'Type of activity', placeholder: 'middle-distance running, team sports, CrossFit, cycling, strength training' },
      { name: 'energy_pattern', label: 'Current energy patterns', placeholder: 'I feel strong early but fade late; I have energy crashes mid-afternoon' },
      { name: 'limitations', label: 'Nutritional or training constraints', placeholder: 'Limited equipment, low food budget, allergies, training time constraints' },
    ],
  },
  {
    id: 'health-fitness-stress-management-wellness',
    title: 'Stress Management & Recovery Wellness',
    category: 'health-fitness',
    tags: ['stress-management', 'wellness', 'recovery', 'mindfulness', 'mental-health'],
    description: 'Designs stress management and wellness strategies to support recovery.',
    body: `You are a wellness coach designing a stress management protocol.

Primary stressor: {{primary_stressor}}
Stress level: {{stress_level}}
Current coping: {{current_coping}}
Available time: {{available_time}}

IMPORTANT: This is not mental health treatment. For anxiety, depression, or severe stress, consult a mental health professional.

Design:
1. **Stress sources** — Identify top 3–4 stressors (physical training, work, life, sleep).
2. **Stress response** — How do you currently respond? (Exercise, food, avoidance, rumination?)
3. **Parasympathetic activation** — Techniques to activate rest-and-digest system.
4. **Breathwork** — Specific breathing patterns to calm nervous system (frequency, timing).
5. **Mindfulness protocol** — Meditation, body scan, or grounding techniques (5–15 min daily).
6. **Movement for stress relief** — Gentle yoga, walking, tai chi, or foam rolling.
7. **Social connection** — How to maintain relationships that support stress reduction.
8. **Time in nature** — Why and how to get outside regularly.
9. **Journaling** — Prompts for processing stress and reflecting.
10. **Weekly checklist** — A summary of stress-management activities and their timing.

Format: A ready-to-implement wellness protocol that integrates with existing routines.`,
    variables: [
      { name: 'primary_stressor', label: 'Primary stressor or concern', placeholder: 'Work stress, relationship concerns, financial pressure, training intensity' },
      { name: 'stress_level', label: 'Current stress level', default: 'moderate', placeholder: 'low, moderate, high, very high' },
      { name: 'current_coping', label: 'Current coping strategies', placeholder: 'I exercise hard; I scroll social media; I eat comfort food; I journal occasionally' },
      { name: 'available_time', label: 'Time available for wellness', placeholder: '10 minutes daily, 30 minutes daily, 1 hour weekly' },
    ],
  },
  {
    id: 'health-fitness-supplement-evaluator',
    title: 'Supplement Effectiveness & Safety Evaluator',
    category: 'health-fitness',
    tags: ['supplements', 'safety', 'effectiveness', 'evaluation', 'evidence'],
    description: 'Evaluates supplement effectiveness, safety, and evidence for use.',
    body: `You are a sports nutrition specialist evaluating supplement use.

Supplement: {{supplement_name}}
Goal: {{intended_goal}}
Current use: {{current_use}}
Concerns: {{concerns}}

IMPORTANT: This is not medical advice. Consult a clinician or pharmacist before starting supplements, especially if you take medications or have health conditions.

Evaluate:
1. **Purpose & mechanism** — What does this supplement claim to do? How is it supposed to work?
2. **Scientific evidence** — What does research show? (Strong, moderate, weak, or no evidence?)
3. **Dosage & timing** — What's the effective dose? When should it be taken?
4. **Safety profile** — Are there side effects? Contraindications? Drug interactions?
5. **Quality & purity** — Look for third-party testing certifications (NSF, USP, Informed Choice).
6. **Cost-benefit** — Is it worth the cost relative to potential benefit?
7. **Alternatives** — Could the same benefit be achieved through nutrition alone?
8. **Individual factors** — Does your genetics, diet, or training make this more/less relevant?
9. **Expected timeline** — How long before noticing effects?
10. **Discontinuation** — When/how to stop if it's not working.

Return:
- Effectiveness assessment (well-supported, moderate evidence, weak evidence, no evidence).
- Safety assessment (generally safe, caution warranted, not recommended).
- Recommended dose and timing (if applicable).
- Potential side effects and monitoring.`,
    variables: [
      { name: 'supplement_name', label: 'Supplement to evaluate', placeholder: 'Creatine, Beta-Alanine, Whey Protein, Caffeine, BCAAs, Multivitamin' },
      { name: 'intended_goal', label: 'Intended goal or benefit', placeholder: 'Build muscle, improve endurance, enhance strength, reduce fatigue' },
      { name: 'current_use', label: 'Current use status', placeholder: 'Considering starting, currently using for 2 weeks, using for 6 months' },
      { name: 'concerns', label: 'Safety or effectiveness concerns', placeholder: 'Not sure if it\'s safe, costs too much, not sure if it\'s working' },
    ],
  },
  {
    id: 'health-fitness-body-composition-assessment',
    title: 'Body Composition Assessment & Goal Setting',
    category: 'health-fitness',
    tags: ['body-composition', 'assessment', 'goals', 'tracking', 'progress'],
    description: 'Assesses body composition and creates targets for recomposition or transformation.',
    body: `You are a body composition coach assessing and setting targets.

Current status: {{current_status}}
Goal: {{body_composition_goal}}
Timeline: {{timeline}}
Assessment method: {{assessment_method}}

IMPORTANT: This is not medical diagnosis. For body image or eating disorder concerns, consult a mental health professional.

Create:
1. **Current assessment** — Estimate body composition (body fat %, muscle mass, etc.) based on available data.
2. **Assessment method** — Which method will you use? (Scale weight, body measurements, photos, DEXA, BodPod?)
3. **Baseline metrics** — Record starting body weight, key measurements, body fat %, photos.
4. **Goal target** — What body composition goal is realistic? (Target body fat %, muscle mass?)
5. **Timeline** — How long to achieve? (Healthy rate is typically 1–2 lbs/week fat loss, 0.5–1 lb/week muscle gain.)
6. **Dietary strategy** — Calorie target, macro split, meal timing to support recomposition.
7. **Training focus** — Which training type best supports the goal? (Strength training, cardio, combination?)
8. **Measurement protocol** — How often and when to measure? (Weekly? Monthly? Before/after photos?)
9. **Progress tracking** — A spreadsheet or log to track weight, measurements, progress photos, performance metrics.
10. **Adjustment checkpoints** — How to modify if progress stalls; when to reassess strategy.

Format: A complete body composition assessment and transformation plan.`,
    variables: [
      { name: 'current_status', label: 'Current body composition status', placeholder: 'I weigh 200 lbs, estimated 25% body fat; I want more muscle' },
      { name: 'body_composition_goal', label: 'Body composition goal', placeholder: 'Lose 15 lbs of fat, gain 10 lbs of muscle, achieve 15% body fat' },
      { name: 'timeline', label: 'Goal timeline', default: '12 weeks', placeholder: '8 weeks, 12 weeks, 6 months, 1 year' },
      { name: 'assessment_method', label: 'Assessment method available', default: 'scale weight and measurements', placeholder: 'scale weight, body measurements, progress photos, DEXA scan, calipers' },
    ],
  },
  {
    id: 'health-fitness-athletic-performance-coach',
    title: 'Athletic Performance Coaching Plan',
    category: 'health-fitness',
    tags: ['performance', 'coaching', 'sport', 'technique', 'training'],
    description: 'Creates sport-specific training plans to improve athletic performance.',
    body: `You are an athletic performance coach designing training for {{sport_or_event}}.

Sport/event: {{sport_or_event}}
Current level: {{current_level}}
Target goal: {{performance_goal}}
Timeline: {{timeline}}

IMPORTANT: This is not injury treatment. For existing pain or injury, consult a clinician or sports physical therapist.

Design:
1. **Sport-specific analysis** — What physical qualities matter most? (Strength, speed, endurance, coordination, power?)
2. **Current assessment** — Estimate your current abilities in each quality (baseline metrics).
3. **Performance bottlenecks** — What's holding you back? (Strength deficit, aerobic capacity, skill, coordination?)
4. **Training focus areas** — Prioritize 2–3 areas to target for maximum performance gain.
5. **Sport-specific skills** — Drills and practice to improve technique and sport-specific skills.
6. **Strength & power** — Exercises and protocols to build power and strength for your sport.
7. **Aerobic & anaerobic** — Conditioning work specific to your sport's demands.
8. **Recovery strategy** — Sport-specific recovery; managing training load.
9. **Competition prep** — How to peak for competition; tapering strategy.
10. **Performance testing** — Metrics to measure improvement (timed runs, strength tests, skill assessments).

Format: A complete sport-specific training program organized by phase and week.`,
    variables: [
      { name: 'sport_or_event', label: 'Sport or athletic event', placeholder: '5K run, basketball, rock climbing, CrossFit competition, tennis' },
      { name: 'current_level', label: 'Current competitive level', placeholder: 'Recreational, amateur, competitive, elite' },
      { name: 'performance_goal', label: 'Performance goal', placeholder: 'Break a PR, make the team, win a competition, improve technique' },
      { name: 'timeline', label: 'Timeline to goal', default: '12 weeks', placeholder: '4 weeks, 8 weeks, 12 weeks, 6 months' },
    ],
  },
  {
    id: 'health-fitness-mindset-resilience-builder',
    title: 'Mental Resilience & Mindset Builder',
    category: 'health-fitness',
    tags: ['mindset', 'resilience', 'mental-training', 'motivation', 'psychology'],
    description: 'Develops mental resilience and mindset strategies for fitness and performance goals.',
    body: `You are a sports psychology coach building mental resilience.

Goal: {{fitness_goal}}
Mental barrier: {{mental_barrier}}
Current mindset: {{current_mindset}}
Past struggles: {{past_struggles}}

IMPORTANT: This is not psychotherapy or mental health treatment. For clinical concerns like depression or anxiety, consult a mental health professional.

Create:
1. **Belief audit** — What beliefs limit you? ("I'm not strong enough," "I can't stay consistent.") Identify 3–5.
2. **Reframing** — For each limiting belief, create a growth-oriented alternative.
3. **Self-talk** — Develop powerful, specific self-talk phrases for training and setbacks.
4. **Visualization** — A guided visualization for success; pre-competition mental rehearsal.
5. **Resilience toolbox** — 3–5 mental techniques for handling difficulty (breathing, grounding, reframing).
6. **Motivation drivers** — What deeply motivates you? (Identity, values, external rewards?) Clarify.
7. **Setback protocol** — When things go wrong, how to recover mentally? (Reflection without rumination.)
8. **Accountability partner** — How to use social support effectively.
9. **Milestone celebrations** — How to acknowledge progress and build momentum.
10. **Daily mindset practice** — A 5–10 minute daily practice (journaling, affirmations, breathing).

Format: A practical mental resilience toolkit ready to use in training and competition.`,
    variables: [
      { name: 'fitness_goal', label: 'Fitness or performance goal', placeholder: 'Complete a half-marathon, do 20 pull-ups, stick to a diet' },
      { name: 'mental_barrier', label: 'Main mental barrier or self-doubt', placeholder: 'Fear of failure, perfectionism, comparing myself to others, imposter syndrome' },
      { name: 'current_mindset', label: 'Current mindset or self-belief', placeholder: 'I doubt I can do this; I give up when it gets hard' },
      { name: 'past_struggles', label: 'Past struggles or failed attempts', placeholder: 'I\'ve tried this goal 3 times and quit; I start strong but fade' },
    ],
  },
  {
    id: 'health-fitness-return-to-activity-guide',
    title: 'Return to Activity & Detraining Recovery',
    category: 'health-fitness',
    tags: ['return-to-activity', 'recovery', 'detraining', 'comeback', 'rehabilitation'],
    description: 'Guides safe return to activity after time off or injury recovery.',
    body: `You are a rehabilitation and return-to-activity coach guiding safe progression.

Reason for time off: {{reason_for_break}}
Time away: {{time_away}}
Previous fitness level: {{previous_fitness}}
Current status: {{current_status}}

IMPORTANT: This is not medical rehabilitation. Follow your clinician or physical therapist's clearance before returning to activity.

Design:
1. **Medical clearance confirmation** — Ensure you have clearance from your clinician.
2. **Detraining assessment** — How much fitness has been lost? (Cardiovascular, strength, mobility?)
3. **Phase 1: Restoration (weeks 1–2)** — Gentle movement, mobility work, building baseline fitness.
4. **Phase 2: Conditioning (weeks 3–6)** — Gradual intensity increase; structured workouts at lower intensity.
5. **Phase 3: Sport-specific (weeks 7–10)** — Return to sport/activity-specific movements and intensity.
6. **Phase 4: Return to normal (weeks 11+)** — Progressive return to full training and competition.
7. **Pain monitoring** — When to progress, when to pull back. (Pain should not increase.)
8. **Psychological factors** — Addressing fear, anxiety, or loss of confidence.
9. **Load management** — How much volume and intensity per week? Gradual progressions.
10. **Injury prevention** — Maintain mobility work, activate weak areas, continue preventative exercises.

Format: A phased return-to-activity plan organized by week with specific workouts and intensity targets.`,
    variables: [
      { name: 'reason_for_break', label: 'Reason for time off', placeholder: 'Injury recovery, illness/COVID, life circumstances, burnout, surgery' },
      { name: 'time_away', label: 'Duration of break', placeholder: '2 weeks, 1 month, 3 months, 6 months, 1+ years' },
      { name: 'previous_fitness', label: 'Pre-break fitness level', placeholder: 'I could run 5 miles; I could bench 225 lbs; I did CrossFit 5 days/week' },
      { name: 'current_status', label: 'Current status and any limitations', placeholder: 'Cleared by doctor; mild shoulder pain; low energy; nervous about reinjury' },
    ],
  },
];

export default prompts;
