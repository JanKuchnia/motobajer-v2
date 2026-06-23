# Graph Report - .  (2026-06-22)

## Corpus Check
- Corpus is ~48,114 words - fits in a single context window. You may not need a graph.

## Summary
- 98 nodes · 118 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Design Principles & Skill Registry|Design Principles & Skill Registry]]
- [[_COMMUNITY_Design Taste Enforcement Skills|Design Taste Enforcement Skills]]
- [[_COMMUNITY_MOTOBAJER Business Entity|MOTOBAJER Business Entity]]
- [[_COMMUNITY_Brandkit Skill Lock|Brandkit Skill Lock]]
- [[_COMMUNITY_Mobile Image Generation Skill|Mobile Image Generation Skill]]
- [[_COMMUNITY_Frontend Design Taste Skill|Frontend Design Taste Skill]]
- [[_COMMUNITY_GPT Taste Skill Lock|GPT Taste Skill Lock]]
- [[_COMMUNITY_High-End Visual Design Skill|High-End Visual Design Skill]]
- [[_COMMUNITY_Image-to-Code Skill Lock|Image-to-Code Skill Lock]]
- [[_COMMUNITY_Web Image Generation Skill|Web Image Generation Skill]]
- [[_COMMUNITY_Industrial Brutalist UI Skill|Industrial Brutalist UI Skill]]
- [[_COMMUNITY_Minimalist UI Skill Lock|Minimalist UI Skill Lock]]
- [[_COMMUNITY_Redesign Projects Skill|Redesign Projects Skill]]
- [[_COMMUNITY_Stitch Design Taste Skill|Stitch Design Taste Skill]]
- [[_COMMUNITY_Claude Permissions Config|Claude Permissions Config]]

## God Nodes (most connected - your core abstractions)
1. `skills` - 14 edges
2. `Anti-AI-Slop Design Principle` - 9 edges
3. `Skill: imagegen-frontend-web` - 7 edges
4. `Skill: design-taste-frontend (v2)` - 7 edges
5. `MOTOBAJER Stanislaw Bajer` - 6 edges
6. `brandkit` - 5 edges
7. `design-taste-frontend` - 5 edges
8. `design-taste-frontend-v1` - 5 edges
9. `full-output-enforcement` - 5 edges
10. `gpt-taste` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Skill: brandkit` --semantically_similar_to--> `Skill: imagegen-frontend-web`  [INFERRED] [semantically similar]
  .agents/skills/brandkit/SKILL.md → .agents/skills/imagegen-frontend-web/SKILL.md
- `Skill: minimalist-ui` --semantically_similar_to--> `Skill: industrial-brutalist-ui`  [INFERRED] [semantically similar]
  .agents/skills/minimalist-ui/SKILL.md → .agents/skills/industrial-brutalist-ui/SKILL.md
- `Skill: gpt-taste` --semantically_similar_to--> `Skill: high-end-visual-design`  [INFERRED] [semantically similar]
  .agents/skills/gpt-taste/SKILL.md → .agents/skills/high-end-visual-design/SKILL.md
- `Skill: imagegen-frontend-web` --semantically_similar_to--> `Skill: imagegen-frontend-mobile`  [INFERRED] [semantically similar]
  .agents/skills/imagegen-frontend-web/SKILL.md → .agents/skills/imagegen-frontend-mobile/SKILL.md
- `Image-First Design Workflow` --rationale_for--> `Skill: imagegen-frontend-web`  [INFERRED]
  .agents/skills/image-to-code/SKILL.md → .agents/skills/imagegen-frontend-web/SKILL.md

## Hyperedges (group relationships)
- **Anti-Slop Design Skills Cluster** — skills_design_taste_frontend_skill, skills_gpt_taste_skill, skills_high_end_visual_design_skill, skills_redesign_existing_projects_skill, skills_stitch_design_taste_skill, concept_anti_slop_design [INFERRED 0.85]
- **Image Generation & Image-First Workflow Skills** — skills_imagegen_frontend_web_skill, skills_imagegen_frontend_mobile_skill, skills_image_to_code_skill, skills_brandkit_skill, concept_image_first_workflow, concept_section_per_image_rule [INFERRED 0.85]
- **MOTOBAJER Business Entity Cluster** — motobajer_entity, motobajer_service_center, motobajer_parts_store, motobajer_eurowarsztat, motobajer_reviews [EXTRACTED 1.00]

## Communities (15 total, 1 thin omitted)

### Community 0 - "Design Principles & Skill Registry"
Cohesion: 0.18
Nodes (21): Anti-AI-Slop Design Principle, Design Variance Dial System, Image-First Design Workflow, One Section Per Image Rule, Spring Physics Motion Principle, GitHub: Leonxlnx/taste-skill, version, Skill: brandkit (+13 more)

### Community 1 - "Design Taste Enforcement Skills"
Cohesion: 0.18
Nodes (11): computedHash, skillPath, source, sourceType, computedHash, skillPath, source, sourceType (+3 more)

### Community 2 - "MOTOBAJER Business Entity"
Cohesion: 0.33
Nodes (7): MOTOBAJER Business Info, MOTOBAJER Customer Reviews, MOTOBAJER Stanislaw Bajer, EuroWarsztat Network, Motobajer Auto-Parts Store (Armii Krajowej 2), Motobajer Customer Reviews (5-star), Motobajer Service Center (Drogowcow 7)

### Community 3 - "Brandkit Skill Lock"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, brandkit

### Community 4 - "Mobile Image Generation Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, imagegen-frontend-mobile

### Community 5 - "Frontend Design Taste Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, design-taste-frontend

### Community 6 - "GPT Taste Skill Lock"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, gpt-taste

### Community 7 - "High-End Visual Design Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, high-end-visual-design

### Community 8 - "Image-to-Code Skill Lock"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, image-to-code

### Community 9 - "Web Image Generation Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, imagegen-frontend-web

### Community 10 - "Industrial Brutalist UI Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, industrial-brutalist-ui

### Community 11 - "Minimalist UI Skill Lock"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, minimalist-ui

### Community 12 - "Redesign Projects Skill"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, redesign-existing-projects

### Community 13 - "Stitch Design Taste Skill"
Cohesion: 0.40
Nodes (5): stitch-design-taste, computedHash, skillPath, source, sourceType

## Knowledge Gaps
- **60 isolated node(s):** `version`, `source`, `sourceType`, `skillPath`, `computedHash` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `skills` connect `Design Taste Enforcement Skills` to `Design Principles & Skill Registry`, `Brandkit Skill Lock`, `Mobile Image Generation Skill`, `Frontend Design Taste Skill`, `GPT Taste Skill Lock`, `High-End Visual Design Skill`, `Image-to-Code Skill Lock`, `Web Image Generation Skill`, `Industrial Brutalist UI Skill`, `Minimalist UI Skill Lock`, `Redesign Projects Skill`, `Stitch Design Taste Skill`?**
  _High betweenness centrality (0.768) - this node is a cross-community bridge._
- **Why does `Skill: imagegen-frontend-web` connect `Design Principles & Skill Registry` to `Claude Permissions Config`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Why does `brandkit` connect `Brandkit Skill Lock` to `Design Taste Enforcement Skills`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `Anti-AI-Slop Design Principle` (e.g. with `Skill: gpt-taste` and `Skill: image-to-code`) actually correct?**
  _`Anti-AI-Slop Design Principle` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `Skill: imagegen-frontend-web` (e.g. with `Anti-AI-Slop Design Principle` and `Image-First Design Workflow`) actually correct?**
  _`Skill: imagegen-frontend-web` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Skill: design-taste-frontend (v2)` (e.g. with `Skill: redesign-existing-projects` and `Skill: stitch-design-taste`) actually correct?**
  _`Skill: design-taste-frontend (v2)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `version`, `source`, `sourceType` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._