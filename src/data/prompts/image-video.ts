import type { Prompt } from '../types';

const prompts: Prompt[] = [
  {
    id: 'image-video-cinematic-descriptor',
    title: 'Cinematic Scene Description Generator',
    category: 'image-video',
    tags: ['cinematography', 'scene-setting', 'visual-composition', 'mood', 'prompt-engineering'],
    description: 'Creates rich, detailed descriptions optimized for image generation models from simple premises.',
    body: `You are a cinematographer and visual-design expert writing prompts for {{model}} image generation.

Premise: {{premise}}

Generate a detailed, vivid scene description (150–200 words) covering:
1. Camera angle and framing (wide, close-up, overhead, dynamic angle)
2. Lighting mood and color palette (golden hour, cool shadows, dramatic backlighting, neon)
3. Composition and spatial arrangement (depth layers, focal points, leading lines)
4. Textures, materials, and surface details (reflective, weathered, soft, crystalline)
5. Atmosphere and emotional tone (tension, serenity, chaos, wonder)
6. Artistic style or reference (cinematic, hyperrealistic, painted, illustrated)

Format: A flowing paragraph written as scene description, not instructions. Avoid "image of" phrasing.
Include specific lighting quality terms and material descriptors that maximize model interpretation.`,
    variables: [
      { name: 'model', label: 'Target model', default: 'DALL-E 3', placeholder: 'DALL-E 3, Midjourney, Stable Diffusion' },
      { name: 'premise', label: 'Scene premise', placeholder: 'An abandoned cyberpunk market at midnight, or a sunlit library in an ancient castle' },
    ],
  },
  {
    id: 'image-video-character-visual-builder',
    title: 'Character Visual Design Brief',
    category: 'image-video',
    tags: ['character-design', 'costume', 'appearance', 'visual-consistency', 'reference'],
    description: 'Builds detailed visual character descriptions for consistent generation across multiple images.',
    body: `You are a character designer creating a visual reference for {{model}}.

Character concept: {{character_concept}}

Build a comprehensive character description (180–250 words) including:
1. Overall silhouette and body type (athletic, angular, rounded, delicate, imposing)
2. Face: shape, distinctive features, expression tendency, eye/hair/skin tone
3. Clothing and accessories: detailed items, style era, colors, wear and condition
4. Stance, posture, and body language tendencies
5. Any props, symbols, or signature visual elements that define them
6. Mood and presence (intimidating, welcoming, mysterious, energetic, calm)
7. Specific art style or visual reference (anime, photorealistic, comic, watercolor)

Include explicit color hex codes for the main palette. Emphasize what makes this character visually distinct from others in their category.`,
    variables: [
      { name: 'model', label: 'Target model', default: 'Midjourney', placeholder: 'Midjourney, DALL-E, Stable Diffusion' },
      { name: 'character_concept', label: 'Character role or concept', placeholder: 'A desert nomad trader, a Victorian scholar, a futuristic resistance fighter' },
    ],
  },
  {
    id: 'image-video-color-palette-composer',
    title: 'Color Palette Designer & Mood Guide',
    category: 'image-video',
    tags: ['color-theory', 'palette-design', 'mood', 'harmony', 'accessibility'],
    description: 'Suggests harmonious color palettes with mood guidance and accessibility notes for visual projects.',
    body: `You are a color theorist and visual designer. Create a color palette for {{project_type}}.

Context: {{design_context}}

Deliver:

**Palette:**
- Primary color: [Name] (#HexCode) — [Purpose and mood]
- Secondary colors (3–4): [Name] (#HexCode) — [Purpose]
- Neutral/Background: [Name] (#HexCode) — [Purpose]
- Accent/Highlight: [Name] (#HexCode) — [Purpose]

**Rationale paragraph:**
Explain the mood this palette evokes (120–150 words). Note color harmony principles used, cultural associations, and accessibility considerations (contrast ratios for readability, color-blind safety). Avoid popular clichés; suggest unexpected but harmonious combinations.

**Application guide:**
Suggest which colors dominate, which accent, and where to use them in composition.`,
    variables: [
      { name: 'project_type', label: 'Project type', default: 'mobile app interface', placeholder: 'book cover, mobile app, website, film still, brand identity' },
      { name: 'design_context', label: 'Context & mood', placeholder: 'minimalist productivity tool for creatives, moody cyberpunk noir aesthetic, warm gaming community hub' },
    ],
  },
  {
    id: 'image-video-prompt-optimizer',
    title: 'Image Prompt Optimizer & Refiner',
    category: 'image-video',
    tags: ['prompt-engineering', 'iteration', 'specificity', 'quality-improvement', 'models'],
    description: 'Analyzes and refines raw image-generation prompts to maximize model output quality.',
    body: `You are an expert in {{model}} prompt engineering optimizing for visual quality.

Raw prompt: "{{raw_prompt}}"

Analyze and improve. Output two versions:

**Version 1: Specificity Focus**
Rewrite adding:
- Precise descriptors (materials, textures, lighting techniques, photographic terms)
- Explicit camera angle and frame composition
- Style/aesthetic references (if applicable)
- Emotional or atmospheric tone
- Technical quality hints (bokeh, depth of field, dynamic pose, film stock, resolution terms)

**Version 2: Economy Focus**
Condense to 50–80 words capturing critical details without redundancy.

For each version:
- List 2–3 key changes and their reasoning
- Explain any technical terms the model may interpret
- Flag ambiguities in the original that could cause unwanted variations
- Suggest negative prompt considerations (what NOT to generate)`,
    variables: [
      { name: 'model', label: 'Target model', default: 'DALL-E 3', placeholder: 'Midjourney, DALL-E 3, Stable Diffusion' },
      { name: 'raw_prompt', label: 'Original prompt to refine', placeholder: 'A person in a forest at sunset' },
    ],
  },
  {
    id: 'image-video-mood-board-architect',
    title: 'Visual Mood Board Brief Generator',
    category: 'image-video',
    tags: ['mood-board', 'visual-direction', 'style-guide', 'reference', 'inspiration'],
    description: 'Creates structured visual direction briefs for consistent imagery across projects.',
    body: `You are a creative director building a visual direction document for {{project_name}}.

Intended mood/genre: {{mood_genre}}
Target audience: {{audience}}

Create a detailed mood-board brief (300–350 words) covering:

1. **Visual Aesthetic** — Primary style, art-movement references, signature techniques.
2. **Color Direction** — Dominant palette, colors to avoid, seasonal or thematic shifts.
3. **Lighting Language** — Hard vs. soft, warm vs. cool, time-of-day tendencies, shadow depth.
4. **Composition Rules** — Rule of thirds, leading lines, depth use, horizon placement.
5. **Texture & Material Feel** — What surfaces/fabrics appear, rough vs. smooth tendencies.
6. **Reference Examples** — Name 3–5 existing films, games, books, or artists whose visual work aligns.
7. **Emotional Signature** — How should viewers feel when seeing images in this style?

Conclude with guidance on consistency across {{medium}} (whether print, screen, or interactive).`,
    variables: [
      { name: 'project_name', label: 'Project name', placeholder: 'Sci-fi graphic novel, indie game, brand campaign' },
      { name: 'mood_genre', label: 'Intended mood or genre', placeholder: 'cyberpunk dystopia, pastoral fantasy, noir detective, cozy indie-folk' },
      { name: 'audience', label: 'Target audience', default: 'general adult audience', placeholder: 'teens, gamers, luxury brand buyers, children' },
      { name: 'medium', label: 'Medium (print/screen/etc.)', default: 'digital', placeholder: 'print, screen, interactive, mixed media' },
    ],
  },
  {
    id: 'image-video-product-photography-composer',
    title: 'Product Photography Shot List & Guide',
    category: 'image-video',
    tags: ['product-photography', 'composition', 'lighting', 'ecommerce', 'shot-list'],
    description: 'Outlines essential photography shots for products with composition and lighting specifications.',
    body: `You are a product photographer planning shots for {{product_type}}.

Product details: {{product_description}}

Generate a shot list with 6–8 key angles. For each, specify:

**Shot [N]: [Shot Name]**
- Angle: [e.g., 45° front-right, top-down, extreme close-up, lifestyle]
- Lighting: [key light direction, fill, backlighting, shadow control, mood]
- Background: [clean white, lifestyle scene, transparent, branded environment]
- Styling: [props, surface, hand placement, scale cues]
- Focus & Depth: [what's sharp, bokeh, depth-of-field treatment]
- Post-processing note: [color correction, reflection removal, shadow lift]

End with a paragraph on visual consistency: color temperature matching, lighting ratio uniformity, and cohesive styling across shots.`,
    variables: [
      { name: 'product_type', label: 'Product category', placeholder: 'luxury watch, athletic shoe, home appliance, beauty product' },
      { name: 'product_description', label: 'Product details', placeholder: 'Stainless steel chronograph with leather strap, minimalist design' },
    ],
  },
  {
    id: 'image-video-storyboard-scene-describer',
    title: 'Video Storyboard Scene Describer',
    category: 'image-video',
    tags: ['storyboarding', 'video-production', 'shot-description', 'narrative-flow', 'visual-continuity'],
    description: 'Writes detailed visual descriptions for each storyboard scene of a video sequence.',
    body: `You are a storyboard artist writing visual directions for {{project_title}}.

Scene: {{scene_description}}
Duration: {{duration}} seconds
Tone/style: {{visual_style}}

For each key moment in this sequence, write a scene description (50–80 words per scene):
- Camera move (static, pan, zoom, tracking shot, crane, handheld)
- Subject position and action
- Lighting and color mood (time of day, quality, direction)
- Foreground, subject, background layers
- Any on-screen text, graphics, or elements
- Audio cue, dialogue timing, or sound effect

Number each scene. After all scenes, write a 200-word continuity note on visual transitions between scenes (cut, dissolve, fade, match-cut, J-cut, L-cut) for pacing and visual flow.`,
    variables: [
      { name: 'project_title', label: 'Video title/project', placeholder: 'Brand explainer, music video, short film, advertisement' },
      { name: 'scene_description', label: 'Sequence premise', placeholder: 'Hero discovers the product, uses it, experiences joy and transformation' },
      { name: 'duration', label: 'Sequence length (seconds)', default: '30', placeholder: '15, 30, 60, 90' },
      { name: 'visual_style', label: 'Visual style/tone', default: 'modern, clean', placeholder: 'cinematic, playful, documentary, abstract, surreal' },
    ],
  },
  {
    id: 'image-video-artistic-style-guide',
    title: 'Artistic Style & Direction Reference Guide',
    category: 'image-video',
    tags: ['style-transfer', 'aesthetic', 'artistic-direction', 'cohesion', 'reference'],
    description: 'Defines artistic style for consistent aesthetic across multiple generated or photographed images.',
    body: `You are a visual art director defining a cohesive style for {{project_type}}.

Project context: {{context}}
Desired outcome: {{outcome_type}}

Write a comprehensive style guide (280–300 words) covering:

1. **Core Aesthetic** — Overarching visual style (Art Deco, lo-fi, hyperreal, anime). Include 2–3 art movements or artists it echoes.
2. **Line & Shape Language** — Sharp/soft edges, geometric/organic forms, level of abstraction.
3. **Color Harmony** — Saturation level, warm/cool bias, color relationships, gradients.
4. **Texture Treatment** — Hand-painted, digital-smooth, gritty, glossy, photographic.
5. **Composition Signature** — Framing habits, balance/asymmetry, negative space use, depth layers.
6. **Visual Metaphors** — Recurring symbols, themes, or stylistic flourishes.

End with 3–4 reference images or artists exemplifying this style, specifying what elements from each apply to your project.`,
    variables: [
      { name: 'project_type', label: 'Project type', placeholder: 'animation series, book illustration, website design, game art' },
      { name: 'context', label: 'Project context', placeholder: 'A children\'s adventure tale with whimsical, accessible tone' },
      { name: 'outcome_type', label: 'Output type', default: 'digital images', placeholder: 'printed book, animated video, interactive interface, fine art' },
    ],
  },
  {
    id: 'image-video-environment-designer',
    title: 'Environment & Background Description Creator',
    category: 'image-video',
    tags: ['environment-design', 'background', 'worldbuilding', 'atmosphere', 'setting'],
    description: 'Generates detailed environment descriptions for consistent background generation and world cohesion.',
    body: `You are an environment designer describing {{location_concept}}.

Time period/era: {{time_era}}
Mood: {{atmosphere}}

Write a comprehensive environment description (300–320 words) that includes:

1. **Overall Geography & Scale** — Urban, natural, hybrid? Indoor, outdoor, claustrophobic, vast?
2. **Architecture & Structures** — Building styles, materials, wear/age, landmarks, functional purpose.
3. **Vegetation & Natural Elements** — Flora density, seasons, weather signs, sky/water state.
4. **Lighting & Time** — Current time, lighting quality, shadows, artificial light sources.
5. **Color & Palette** — Dominant colors and saturation, environmental color shifts.
6. **Details & Props** — Scattered objects, signage, wear patterns, clutter level.
7. **Atmosphere & Sensory** — What sounds would be present? Eerie or welcoming? Busy or silent?
8. **Style Reference** — Specific art-style guidance for rendering this environment.

Ground your description in specific, visual details rather than abstract concepts.`,
    variables: [
      { name: 'location_concept', label: 'Location concept', placeholder: 'An abandoned subway station, a treehouse village, a futuristic marketplace' },
      { name: 'time_era', label: 'Time period', default: 'present day', placeholder: 'Victorian era, far future, alternate history, timeless' },
      { name: 'atmosphere', label: 'Mood/atmosphere', placeholder: 'melancholic, vibrant, ominous, peaceful, chaotic, nostalgic' },
    ],
  },
  {
    id: 'image-video-camera-strategy-guide',
    title: 'Camera Angle & Framing Strategy Guide',
    category: 'image-video',
    tags: ['cinematography', 'framing', 'camera-work', 'composition', 'visual-storytelling'],
    description: 'Recommends optimal camera angles and framing strategies to convey narrative or emotion.',
    body: `You are a cinematography director planning camera choices for {{content_type}}.

Scene: {{scene_subject}}
Emotional goal: {{emotional_intent}}
Subject type: {{subject_category}}

Recommend 4–5 camera angles with full justifications:

For each angle, specify:
- Angle description (overhead, eye-level, low, extreme close-up, wide, two-shot)
- Why this angle serves the emotional goal (psychological effect, narrative implication)
- Suggested lens/focal length if applicable
- Movement (static, pan, tracking, crane, handheld) and narrative reasoning
- Depth of field treatment (shallow, deep, selective focus on what element)
- Composition principle (rule of thirds, leading lines, symmetry, framing within frame)

Add a summary paragraph explaining why these angles work together as a sequence. Note transitions (cut, dissolve, match-cut) that reinforce narrative flow. Every angle choice must have storytelling logic, not just aesthetic appeal.`,
    variables: [
      { name: 'content_type', label: 'Content type', placeholder: 'commercial, music video, documentary, narrative film, social media clip' },
      { name: 'scene_subject', label: 'What is being filmed', placeholder: 'A character discovering a secret, a product being used, a landscape reveal' },
      { name: 'emotional_intent', label: 'Emotional goal', placeholder: 'build tension, convey wonder, establish power dynamic, create intimacy' },
      { name: 'subject_category', label: 'Subject type', default: 'human subject', placeholder: 'human, product, landscape, action, object' },
    ],
  },
  {
    id: 'image-video-lighting-design-brief',
    title: 'Lighting Design & Mood Direction Brief',
    category: 'image-video',
    tags: ['lighting-design', 'mood', 'color-temperature', 'shadows', 'dramatic-effect'],
    description: 'Specifies lighting setup and mood for consistent visual storytelling across scenes.',
    body: `You are a lighting designer creating a lighting design document for {{project_type}}.

Scene: {{scene_description}}
Time of day: {{time_of_day}}
Desired mood: {{mood_target}}

Create a detailed lighting brief (280–300 words) covering:

1. **Key Light** — Direction, intensity, color temperature (kelvin), hard vs. soft quality.
2. **Fill Light** — Position, ratio to key (shadow depth), purpose and effect.
3. **Backlighting** — Used for rim/separation? Intensity and color to create depth or halo effects.
4. **Ambient/Base Lighting** — Overall room brightness, color cast, practical light sources.
5. **Shadow Characteristics** — Hard-edged or soft, coverage area, mood implications.
6. **Color Temperature Strategy** — Any warm/cool shifts, gels, contrast between lit areas.
7. **Dynamic Elements** — Flicker, movement, time-of-day simulation, narrative light changes.
8. **Visual Reference** — Name a painting, film still, or photograph exemplifying your approach.

End with a text-based lighting diagram showing placement and intensity of light sources.`,
    variables: [
      { name: 'project_type', label: 'Project type', placeholder: 'film scene, product shoot, portrait, architectural render, music video' },
      { name: 'scene_description', label: 'Scene subject', placeholder: 'A tense confrontation, a peaceful morning, a dramatic celebration' },
      { name: 'time_of_day', label: 'Time of day', default: 'evening', placeholder: 'golden hour, midnight, overcast midday, dawn, dusk' },
      { name: 'mood_target', label: 'Mood target', placeholder: 'dramatic, intimate, energetic, mysterious, serene, menacing' },
    ],
  },
  {
    id: 'image-video-animation-motion-guide',
    title: 'Animation Motion & Timing Direction',
    category: 'image-video',
    tags: ['animation', 'motion-design', 'timing', 'movement', 'keyframes'],
    description: 'Defines movement timing, pacing, and motion style for consistent animation across scenes.',
    body: `You are an animation director planning motion and timing for {{animation_type}}.

Subject: {{subject_description}}
Movement context: {{movement_context}}
Animation style: {{animation_style}}

Write an animation motion guide (300–320 words) specifying:

1. **Movement Personality** — Stiff/fluid, quick/slow, mechanical/organic, bouncy/heavy. How does motion reflect character/intent?
2. **Timing Principles** — Anticipation, follow-through, arcs (straight vs. curved), overlapping action. Use frame counts if applicable.
3. **Key Motion Types**:
   - Idle/rest state motion (breathing, micro-movements, fidgeting)
   - Primary action (the main movement, frame range)
   - Transition & settle (how motion ends, ease-out curve)
4. **Speed Variations** — Fast accents, slow sections, acceleration/deceleration pattern, holds or pauses.
5. **Secondary Motion** — Hair, cloth, loose elements; do they follow primary or lead?
6. **Easing Curves** — Linear, ease-in, ease-out, ease-in-out, or custom curve?
7. **Reference Footage** — Name an animal, person, or existing animation whose movement informs this.

Include a paragraph on how this motion style differentiates {{subject_description}} from others in the project.`,
    variables: [
      { name: 'animation_type', label: 'Animation type', placeholder: 'character walk, UI transition, particle effect, mechanical motion, creature behavior' },
      { name: 'subject_description', label: 'What is moving', placeholder: 'A cybernetic robot, a graceful dancer, a bouncy creature, a falling leaf' },
      { name: 'movement_context', label: 'Movement context', placeholder: 'Neutral walk cycle, tense approach, joyful celebration, injured shuffle' },
      { name: 'animation_style', label: 'Animation style', default: 'realistic', placeholder: 'realistic, stylized, cartoonish, stop-motion, rotoscope' },
    ],
  },
  {
    id: 'image-video-texture-detail-specifier',
    title: 'Material & Texture Detail Specification',
    category: 'image-video',
    tags: ['texture', 'materials', 'detail', 'surface', 'physical-properties'],
    description: 'Specifies textures, materials, and surface details for photorealistic or stylized rendering.',
    body: `You are a materials specialist defining surfaces for {{project_type}}.

Subject: {{subject_name}}
Rendering approach: {{rendering_approach}}
Context: {{usage_context}}

Create a detailed texture specification (270–300 words) for each visible surface:

**For each material:**
- Material type (metal, fabric, wood, skin, ceramic, plastic, liquid, composite)
- Finish (matte, glossy, weathered, polished, rough, smooth, worn)
- Color: primary and secondary tones, variation or pattern
- Reflectivity: how it catches light (matte, satin, metallic, glossy)
- Surface detail: scratches, wear, dirt, imperfections, texture scale
- Aging/condition: pristine, vintage, distressed, stained, oxidized, weathered
- Interaction with surroundings: how it reflects light, absorbs color, gathers dust

Include photos or material swatches as references. End with a material hierarchy: which surfaces are hero (close focus, high detail) versus background support.`,
    variables: [
      { name: 'project_type', label: 'Project type', placeholder: 'product photography, character design, environment, game asset' },
      { name: 'subject_name', label: 'Subject/object', placeholder: 'A leather jacket, a stone temple, a robot hand, weathered wood door' },
      { name: 'rendering_approach', label: 'Rendering style', default: 'photorealistic', placeholder: 'photorealistic, stylized, painterly, low-poly, sketch' },
      { name: 'usage_context', label: 'Story/usage context', placeholder: 'Battle-worn explorer gear, futuristic tech, abandoned ruins, cozy cottage' },
    ],
  },
  {
    id: 'image-video-depth-layer-architect',
    title: 'Depth & Layering Composition Planner',
    category: 'image-video',
    tags: ['composition', 'depth', 'layering', 'focus', 'visual-hierarchy'],
    description: 'Plans foreground, subject, and background layers to create visual depth and focus hierarchy.',
    body: `You are a composition specialist planning depth structure for {{composition_context}}.

Primary subject: {{primary_subject}}
Setting: {{environment_setting}}
Depth technique: {{depth_preference}}

Design a three-layer composition (280–300 words):

**Foreground Layer:**
- Elements, closer than subject, partially obscuring or framing
- Purpose: depth cue, narrative support, atmospheric effect
- Detail level and focus: sharp, soft-blurred, semi-transparent
- Color and tone relation to subject

**Subject/Mid-Ground Layer:**
- Hero element placement and size on canvas
- Why this position serves the composition
- Focus sharpness treatment and emphasis
- Lighting and tonal separation from background

**Background Layer:**
- Depth and distance (very far, middle-distance, or immediate behind)
- Detail and sharpness (sharp detail, soft bokeh, blur, abstraction)
- Atmospheric effect (haze, color shift, light diffusion)
- How it frames or enhances the subject

Add a paragraph on depth-of-field strategy (what's in focus, bokeh pattern) and how layers create visual narrative flow.`,
    variables: [
      { name: 'composition_context', label: 'Context', placeholder: 'portrait photograph, landscape painting, game screenshot, film frame' },
      { name: 'primary_subject', label: 'Main subject', placeholder: 'A character, a product, a dramatic landscape feature' },
      { name: 'environment_setting', label: 'Environment', placeholder: 'Urban alley, natural forest, minimalist studio, alien planet' },
      { name: 'depth_preference', label: 'Preferred depth method', default: 'atmospheric perspective', placeholder: 'atmospheric perspective, focus blur, linear perspective, layering, size variation' },
    ],
  },
  {
    id: 'image-video-brand-visual-system',
    title: 'Brand Visual Identity System Guide',
    category: 'image-video',
    tags: ['brand', 'visual-identity', 'consistency', 'guidelines', 'design-system'],
    description: 'Develops a cohesive visual identity system for consistent brand imagery.',
    body: `You are a brand identity designer creating a visual system for {{brand_name}}.

Brand context: {{brand_context}}
Primary audience: {{audience_description}}
Core values: {{core_values}}

Write a visual identity system guide (320–350 words) specifying:

1. **Color Palette** — Primary, secondary, accent colors with hex codes. Emotional associations and use rules.
2. **Typography & Text Treatment** — Font family, hierarchy, stylistic flourishes (all-caps, serif, handwriting).
3. **Photography/Illustration Style** — Realism or abstraction? Saturation? People, objects, or landscapes? Emotional tone.
4. **Composition Language** — Symmetry tendency, rule of thirds, depth use, negative space treatment.
5. **Iconography & Visual Elements** — Repeating symbols, patterns, brand marks integration.
6. **Tone in Light & Mood** — Lighting consistency, time-of-day tendencies, seasonal shifts.
7. **Production Quality Standard** — Professional photography, illustration, or approachable/authentic feel?

Conclude with 3–4 reference images exemplifying this identity, noting specific elements in each that support the system.`,
    variables: [
      { name: 'brand_name', label: 'Brand name', placeholder: 'A sustainable fashion label, a tech startup, a luxury hotel chain' },
      { name: 'brand_context', label: 'Brand positioning', placeholder: 'Modern, eco-conscious, innovative, heritage-focused, accessible luxury' },
      { name: 'audience_description', label: 'Target audience', placeholder: 'Young professionals, eco-conscious consumers, luxury seekers' },
      { name: 'core_values', label: 'Core brand values', placeholder: 'Sustainability, innovation, trustworthiness, beauty, community' },
    ],
  },
  {
    id: 'image-video-animation-sequence-scripter',
    title: 'Animated Sequence Script & Storyboard Notes',
    category: 'image-video',
    tags: ['animation-script', 'storyboarding', 'sequence-planning', 'timing', 'visual-narrative'],
    description: 'Writes detailed animation sequence scripts with visual and timing notes for each shot.',
    body: `You are an animation director writing visual sequence notes for {{animation_length}}.

Sequence concept: {{sequence_premise}}
Animation style: {{animation_technique}}
Target audience: {{viewer_profile}}

Write a shot-by-shot animation sequence guide (320–350 words) structured as:

**Shot [N]: [Shot Name]**
- Duration: [seconds or frame range]
- Action: [What moves or happens]
- Composition: [Camera angle, subject placement, depth]
- Animation Style: [Walk cycle, lip-sync, motion capture style]
- Audio/Sync: [Dialogue, music, sound effect timing]
- Transition: [To next shot: cut, dissolve, wipe, match-cut]

Include 3–5 shots total. After shot descriptions, write a 120-word paragraph on visual consistency: animation style uniformity, motion quality, aesthetic cohesion across shots.

Specify any motion-capture or live-action reference used for authenticity.`,
    variables: [
      { name: 'animation_length', label: 'Clip length', default: '30 seconds', placeholder: '10 seconds, 30 seconds, 1 minute, 3 minutes' },
      { name: 'sequence_premise', label: 'Sequence concept', placeholder: 'A character discovering their power, a product unboxing, a comedic interaction' },
      { name: 'animation_technique', label: 'Animation style', default: 'digital 2D', placeholder: '3D CGI, 2D animation, stop-motion, motion graphics, hybrid' },
      { name: 'viewer_profile', label: 'Target viewers', placeholder: 'Children, tech enthusiasts, general audience, gamers' },
    ],
  },
  {
    id: 'image-video-visual-metaphor-builder',
    title: 'Visual Metaphor & Symbolic Imagery Designer',
    category: 'image-video',
    tags: ['symbolism', 'metaphor', 'visual-storytelling', 'conceptual-imagery', 'meaning'],
    description: 'Creates symbolic visual metaphors to convey abstract concepts or narrative themes.',
    body: `You are a visual metaphor specialist designing imagery for {{abstract_concept}}.

Narrative context: {{story_context}}
Viewer interpretation goal: {{desired_interpretation}}

Generate 4–5 distinct visual metaphors (60–80 words each):

**Metaphor [N]: [Name]**
- Visual elements: [What objects, colors, actions, or scenes represent the concept]
- How it works: [Why this imagery effectively embodies the idea]
- Emotional resonance: [What feeling it evokes]
- Cultural/symbolic associations: [References or depth]
- Medium: [Photographic, illustrated, animated, sculptural]

After the metaphors, write a paragraph analyzing which metaphor best fits the narrative goal and why. Note visual clichés to avoid for this concept.

Include at least one surprising or unconventional metaphor alongside more obvious choices. Prioritize originality.`,
    variables: [
      { name: 'abstract_concept', label: 'Abstract concept to visualize', placeholder: 'growth, loss, transformation, interconnection, resilience, hope, change' },
      { name: 'story_context', label: 'Narrative or brand context', placeholder: 'Coming-of-age story, environmental campaign, tech innovation message, healing journey' },
      { name: 'desired_interpretation', label: 'Desired viewer takeaway', placeholder: 'Feel inspired, understand the connection, empathize with character journey' },
    ],
  },
  {
    id: 'image-video-visual-effects-briefing',
    title: 'Visual Effects & Post-Production Brief',
    category: 'image-video',
    tags: ['vfx', 'post-production', 'effects', 'compositing', 'edit'],
    description: 'Creates comprehensive visual effects and post-production briefs for film and video.',
    body: `You are a VFX supervisor creating a post-production brief for {{project_type}}.

Project: {{project_description}}
Shot list: {{shot_list}}
Style: {{vfx_style}}

Create a VFX brief (280–320 words) covering:

1. **Overall VFX strategy** — What effects are needed? Why? What's the narrative purpose?
2. **Shot-by-shot breakdown** — For each visual effect shot: name, location, effect type, complexity.
3. **Style reference** — Visual references showing desired look and complexity level.
4. **Color grading notes** — Tone, color palette, specific scenes with color shifts.
5. **Compositing requirements** — Green screen, rotoscoping, layering, color correction needs.
6. **Animation/motion** — Any animated elements? Keyframe-based or procedural?
7. **Particle effects** — Smoke, fire, water, dust, or other particle systems needed?
8. **3D elements** — Camera tracking, 3D object integration, match-moving requirements.
9. **Sound design note** — How do sound effects complement visual effects?
10. **Timeline & delivery** — Expected turnaround, file formats, resolution specs.

Include technical specs (resolution, frame rate, color space). List any plates or reference material provided.`,
    variables: [
      { name: 'project_type', label: 'Project type', placeholder: 'film, commercial, music video, short film, visual effects showcase' },
      { name: 'project_description', label: 'Project description', placeholder: 'A sci-fi action sequence with space battles and environmental destruction' },
      { name: 'shot_list', label: 'Brief shot list or key scenes', placeholder: 'Shot 1: Spaceship explosion; Shot 2: City destruction; Shot 3: Portal opening' },
      { name: 'vfx_style', label: 'Visual effects style', default: 'photorealistic', placeholder: 'photorealistic, stylized, abstract, surreal, retro' },
    ],
  },
];

export default prompts;
