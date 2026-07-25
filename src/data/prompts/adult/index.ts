import type { Prompt } from '../../types';

import mmHomoerotic from './mm-homoerotic';
import mmClosetedStraight from './mm-closeted-straight';
import ffSapphic from './ff-sapphic';
import mfContemporary from './mf-contemporary';
import threesomes from './threesomes';
import groupOrgy from './group-orgy';
import slowBurnTension from './slow-burn-tension';
import enemiesToLovers from './enemies-to-lovers';
import friendsToLovers from './friends-to-lovers';
import domSubPower from './dom-sub-power';
import bdsmKink from './bdsm-kink';
import praiseDegradation from './praise-degradation';
import firstTimeDiscovery from './first-time-discovery';
import ageGap from './age-gap';
import forbiddenAffair from './forbidden-affair';
import workplaceAuthority from './workplace-authority';
import fantasyParanormal from './fantasy-paranormal';
import sciFiAlien from './sci-fi-alien';
import historicalPeriod from './historical-period';
import polyDynamics from './poly-dynamics';
import voyeurExhibition from './voyeur-exhibition';
import publicRisk from './public-risk';
import reunionSecondChance from './reunion-second-chance';
import epistolarySexting from './epistolary-sexting';
import povSecondPerson from './pov-second-person';
import sceneContinuation from './scene-continuation';
import dialogueHeavy from './dialogue-heavy';
import sensoryCraft from './sensory-craft';
import pacingEditing from './pacing-editing';
import characterSheets from './character-sheets';

export const ADULT_PROMPTS: Prompt[] = [
  ...mmHomoerotic,
  ...mmClosetedStraight,
  ...ffSapphic,
  ...mfContemporary,
  ...threesomes,
  ...groupOrgy,
  ...slowBurnTension,
  ...enemiesToLovers,
  ...friendsToLovers,
  ...domSubPower,
  ...bdsmKink,
  ...praiseDegradation,
  ...firstTimeDiscovery,
  ...ageGap,
  ...forbiddenAffair,
  ...workplaceAuthority,
  ...fantasyParanormal,
  ...sciFiAlien,
  ...historicalPeriod,
  ...polyDynamics,
  ...voyeurExhibition,
  ...publicRisk,
  ...reunionSecondChance,
  ...epistolarySexting,
  ...povSecondPerson,
  ...sceneContinuation,
  ...dialogueHeavy,
  ...sensoryCraft,
  ...pacingEditing,
  ...characterSheets,
].map((p) => ({ ...p, adult: true as const, category: 'adult-fiction' }));

export default ADULT_PROMPTS;
