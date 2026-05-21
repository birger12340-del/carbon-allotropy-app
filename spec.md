# EXECUTIVE SUMMARY
Project Name: Carbon Allotropy (אלוטרופיית הפחמן) - Project 1000
Target Audience: 9th Grade Science Students (Middle School).
Core Purpose: An interactive, gamified educational platform designed to teach the chemistry and physical properties of carbon allotropes.
Key Functionalities: The application features a searchable glossary, an interactive 3D simulation viewer, two timed educational mini-games ("Carbon Race" and "Carbon Sorter"), a dynamic 10-question practice quiz with a hint system, and a comprehensive 25-question final exam. The app supports full multi-language localization (Hebrew, English, Arabic) with a primary Right-to-Left (RTL) interface for Hebrew and Arabic.

2. CORE LOGIC MAPPING
Since the JavaScript was truncated in the provided code, this logic is reverse-engineered from your HTML structure, UI IDs, and data bindings to ensure the AI builds exactly what you intended.

2.1 State Management & Navigation
Language State: Tracks current language (he, en, ar). On change, iterates through a JSON dictionary to replace text (innerText) and toggles document direction (dir="rtl" vs dir="ltr").

Tab Routing: Tracks active section (glossary, simulations, game1, game2, quiz, exam). Hides all  elements by adding .hidden-section and reveals the target with a .fade-in animation. Updates navigation button active states.

2.2 Learning Area: Glossary & Simulations
Glossary Engine:

Data: Array of objects containing {term, definition}.

Logic: Event listener on #search-input. On keyup, filters the array. If the search string matches the term or definition, render the item card. If empty, render all items.

3D Simulation Controller:

State: Current Allotrope (e.g., Diamond, Graphite, Fullerene) and View Mode (single, few, full).

Logic: Drag events (mouse/touch) update the X/Y rotation CSS transforms of the SVG/Canvas wrapper. Scroll events update the CSS scale() for zoom.

Reset: Reverts transforms to rotate(0deg) scale(1).

2.3 Games Area
Game 1: Carbon Race (45-second Trivia)

State: Score (int), Time Remaining (int = 45), Current High Score (int, from localStorage).

Logic: On start, trigger setInterval every 1000ms. Display a random question. User clicks an option. If correct: Score += 10, show success animation. If incorrect: no points, show visual shake. Load next question instantly.

End Condition: Timer hits 0. Clear interval, display final score. If Score > High Score, update high score.

Game 2: Carbon Sorter (Bin Matching)

State: Score (int), Lives (int = 3).

Logic: Display a random "Property" (e.g., "Conducts electricity"). User clicks one of the Allotrope bins.

Success: Score += 1, animate item dropping into bin, load next property.

Failure: Lives -= 1, visually gray out one heart (#life-x), show error flash.

End Condition: Lives hit 0. Display Game Over screen.

2.4 Exams Area
Practice Quiz:

State: Question Index (0-9), Array of 10 random questions, Score.

Logic: Render question and options. If user clicks "Hint", unhide #quiz-hint-text. On option select, instantly evaluate: reveal correct/incorrect colors, unhide #quiz-feedback explanation, and show the "Next" button.

Final Exam:

State: Array of 25 questions, User Answers mapping {questionId: selectedOptionId}.

Logic: Render all 25 questions in a vertical scroll. User selects radio buttons.

Validation: On click #exam-submit-btn, check if User Answers length == 25. If false, trigger #exam-modal warning.

Grading: Calculate (Correct Answers / 25) * 100. Display sticky #exam-results-screen, highlight all correct/wrong answers in the scrollable list below, and disable further inputs.

3. UI/UX WIREFRAME (TEXT-BASED)
Global Header:

Background: Deep blue-to-indigo gradient.

Top Left: Floating Language Switcher (Pill-shaped buttons: עברית, English, العربية).

Center: App Title ("אלוטרופיית הפחמן") and Subtitle.

Bottom Navigation: Three visually distinct thematic clusters:

Learning Area (Blue border): Glossary, Simulations.

Games Area (Green border): Carbon Race, Carbon Sorter.

Exams Area (Orange border): Quick Practice, Final Exam.

Active Content Canvas (Center):

A clean, white, rounded-3xl container with a soft shadow. Replaces content dynamically based on the active tab using smooth fade-ins.

Interactive Simulation View:

Left Sidebar: Vertical list of allotropes to select.

Main Stage: Dark background aspect-video container. Mouse cursor changes to 'grab'. Floating 'Reset View' button inside the container.

Bottom Bar: Toggle buttons for View Levels (Single, Few, Lattice).

Games & Exam Views:

HUD (Heads Up Display): Sticky top row showing Time (Red), Score (Blue), and High Score/Lives.

Action Area: Large bold text for prompts, chunky, highly clickable buttons for answers/bins to accommodate mobile users.

Global Footer:

Dark slate background. Project 1000 branding, school credits, and author names centered with subtle pulsing icon animations.

4. EDGE CASES & VALIDATIONS
Language Switching Mid-Game:

Issue: User changes language while the 45-second timer is running.

Resolution: Pause the timer, instantly translate the current active string dictionary, and resume. If this is too complex for state sync, elegantly reset the current game state and return to the game's start screen.

Exam Validation (Unanswered Questions):

Issue: User clicks "Submit Exam" but missed question #14.

Resolution: The predefined #exam-modal pops up. If the user clicks "Return to Exam", smoothly scroll the viewport to the first unanswered question and pulse its border red.

Rapid Clicking (Spamming) in Games:

Issue: User double/triple clicks the correct bin in the Sorter game to inflate their score.

Resolution: Implement a 500ms interaction debounce. Once a bin or answer is clicked, temporarily disable all pointer events until the next question renders.

Missing Glossary Terms:

Issue: User searches for a term that doesn't exist.

Resolution: Display a beautifully styled empty state: "לא מצאנו מושג כזה. נסה לחפש מילה אחרת" (We couldn't find this term. Try another word) with a stylized magnifying glass icon.

Window Resizing during 3D Simulation:

Issue: Resizing the browser breaks the center-point of the drag/rotate logic.

Resolution: Attach a window.addEventListener('resize') to recalculate the canvas bounding box and reset the rotation coordinates.

5. ANTIGRAVITY AGENT DIRECTIVE
To the Developer Agent (Google Antigravity):
You are tasked with turning this specification and the provided HTML framework into a production-ready, highly optimized web application.

Architecture: Use strictly Vanilla JavaScript (ES6+), HTML5, and Tailwind CSS (via CDN or a minimal PostCSS build step). Do not use React, Vue, or Angular.

File Structure: Organize the logic logically to ensure easy Vercel deployment:

index.html (The structure provided, fully semantic).

css/styles.css (For custom keyframes and specific overrides).

js/app.js (DOM routing, state management, and event listeners).

js/data.js (Store all Quiz/Exam questions, Glossary terms, and localization dictionaries here to keep logic clean).

js/games.js (Isolate the logic, timers, and scoring for Game 1 and Game 2).

Styling constraints: Strictly adhere to the Tailwind utility classes provided in the mock. Maintain the dir="rtl" logic for Arabic and Hebrew, ensuring standard Tailwind spacing classes (ml-, pr-) respond correctly by utilizing logical properties (e.g., ps-, pe-, ms-, me-) instead of strict left/right where applicable.

Vercel Deployment: The app must be fully static. Ensure there are no absolute local paths (use relative paths ./). Include a simple vercel.json if required for standard routing, though a pure index.html root entry should deploy instantly with zero configuration on Vercel's free tier.

6. BONUS UPGRADES & FEATURE INNOVATIONS
Instruct the Developer Agent to implement these if standard requirements are met:

True 3D Engine Upgrade (Three.js): Instead of using SVG transformations (which look flat), implement Three.js inside the simulation container. This will allow students to see real 3D spheres (atoms) and cylinders (bonds), complete with lighting, shadows, and true 360-degree orbital controls.

Local Storage Progression System: Automatically save the user's highest game scores, highest exam grade, and quiz completions in the browser's localStorage. Add a small "Profile" icon in the header showing their "Carbon Mastery Level" based on these saved stats.

Haptic & Audio Feedback: Integrate lightweight browser audio (e.g., a satisfying "pop" for correct answers, a low "thud" for wrong answers, and confetti sounds). Combine this with navigator.vibrate() for mobile devices to make the games feel tactile and punchy.

Dark Mode Toggle: Science apps look incredible in dark mode. Add a moon/sun toggle in the header. Use Tailwind's dark: classes to switch the bright slate/white backgrounds into deep OLED blacks and dark indigos, making the neon 3D molecules "glow".

Dynamic Confetti Engine: Hook up a robust open-source library like canvas-confetti to trigger a massive, screen-filling particle explosion when a student scores 100% on the final exam, replacing the basic CSS animation currently defined.
