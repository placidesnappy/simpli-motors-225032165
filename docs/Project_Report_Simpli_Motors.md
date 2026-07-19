# UNIVERSITY OF RWANDA - COLLEGE OF SCIENCE AND TECHNOLOGY - SCHOOL OF ICT - COMPUTER AND SOFTWARE ENGINEERING DEPARTMENT
## PROJECT TECHNICAL REPORT: WEB TECHNOLOGY - TECHNICAL ASSESSMENT 2026
### MODULE CODE/TITLE: WEB DESIGN
**Project Title:** SIMPLI MOTORS E-COMMERCE & INTERACTIVE TELEMETRY PORTAL  
**Case Study:** A Dynamic Showcase and Operations Management System for Luxury and Performance Vehicles  
**Metadata:** Author: Computer & Software Engineering Student | Year of Study: Year 3 | Date: July 19, 2026

---

## Table of Contents
*(Please refer to the generated Word Document for full pagination details)*

## Chapter 1. Introduction

### 1.1 Historical Background of the Case Study
The digital revolution of the 21st century has fundamentally reshaped the landscape of commerce across all industries, and the automotive sector is no exception. Historically, the process of purchasing a vehicle was characterized by high transaction costs, heavy informational asymmetry, and a physical-first sales pipeline. Potential buyers had to rely on printed brochures, local newspaper ads, and physical dealership visits to compare specifications, understand maintenance schedules, and evaluate pricing. This model placed substantial power in the hands of dealership intermediaries, who often exploited the information gap to maximize markups.

With the advent of the World Wide Web in the 1990s and its rapid evolution into Web 2.0 and Web 3.0, consumer expectations shifted toward transparent, self-guided digital research. However, many contemporary dealer portals and manufacturer websites remain sluggish, fragmented, and visually uninspiring. They function as digital filing cabinets—static lists of specs and low-resolution image galleries that fail to engage the modern user.

Simpli Motors was conceived as a disruptive paradigm in automotive digital showcase technology. Built on the core design principle of 'Simplicity in Motion,' the platform represents a high-fidelity interactive gateway. It consolidates premium automotive brand portfolios, dynamic vehicle data modeling, real-time telemetry simulation, and structured owner documentation into a unified, lightweight, client-side web application. The platform provides a virtual showroom that respects the user's intelligence and time, delivering an immersive experience that mirrors the precision engineering of the luxury and performance vehicles it showcases.

### 1.2 Problem Statement
Despite the ubiquity of automotive web portals, modern consumers and dealership operations encounter several systemic technical friction points:
- **Fragmented Information Silos:** ...
- **Static, Unengaging User Experience:** ...
- **Performance and Load Latency:** ...
- **Outdated Visual Standards:** ...
- **Inflexible Data Scaling:** ...

### 1.3 Objectives of the Project
*(Detailed list of objectives including Multi-Brand Architecture, View Rendering, Dynamic Specs, Interactive Dials, Drive Modes, Maintenance utility, and Admin console)*

### 1.4 Expected Outcomes
The completed Simpli Motors platform is expected to achieve the following:
- **Zero-Reload Brand Switching:** ...
- **Scalable Data Infrastructure:** ...
- **High-Fidelity Telemetry Interaction:** ...
- **Premium Styling Standards:** ...
- **High-Speed Client-Side Performance:** ...

### 1.5 Project Rationale
The societal and commercial significance of Simpli Motors extends beyond a standard academic web design assessment:

1. Empowering Consumers: By consolidating pricing, detailed specs, and physical owners manuals into an interactive, pre-dealership platform, Simpli Motors eliminates the typical information asymmetry in car buying, protecting the community from predatory dealership pricing.
2. Promoting Automotive Literacy: The platform serves as an interactive educational tool. By dynamically calculating RPM, Speed, and fuel/electric range across different brands, users can learn about the relationship between horsepower, drivetrain layouts, pricing, and vehicular efficiency.
3. Lightweight Digital Showrooms for Small Businesses: For local car importers, independent dealerships, or service centers with limited budgets, the codebase provides a lightweight template to launch a visually stunning, responsive showcase portal that reduces server costs while maintaining premium aesthetics.
4. Structuring Routine Maintenance: Integrating checklists and manuals into an accessible web interface helps car owners build proactive maintenance habits, leading to safer roads, fewer mechanical breakdowns, and prolonged vehicle lifespans.

## Chapter 2. System Analysis and Design

### 2.1 System Analysis

#### 2.1.1 Intended Users
- **Prospective Car Buyers:** ...
- **Automotive Enthusiasts:** ...
- **System Administrators:** ...

#### 2.1.2 Intended System Partners
- **Global Automotive Manufacturers:** ...
- **Authorized Dealership Networks:** ...
- **Professional Vehicle Service Centers:** ...

### 2.2 System Design

#### High-Level Architecture
Simpli Motors utilizes a highly efficient 3-Tier Client-Side Architecture. This architecture moves processing, telemetry simulation, and layout rendering entirely to the browser, minimizing server lag and operating costs:

1. Static Data Store (JSON-like Database): 'cars-data.js' serves as the single source of truth, containing nested objects for all 18 brands and 70+ models.
2. Logic Engine (ES6+ JS Scripting): Orchestrates query parsing, drive mode color shifts, speedometer/RPM increments, and dynamic spec calculations.
3. UI Layer (HTML5 & Glassmorphic CSS3): Renders a rich visual layout featuring transparent overlays, backdrop blurs, and smooth scale animations.

```
+---------------------------------------------------------------------------------+
|                                 USER BROWSER                                    |
|  +---------------------------+  +---------------------------+  +-------------+  |
|  |       index.html          |  |         cars.html         |  | admin.html  |  |
|  |     (Landing Page)        |  |    (Main Brand Portal)    |  |  (Console)  |  |
|  +---------------------------+  +-------------+-------------+  +-------------+  |
|                                               |                                 |
|                                               v (iframe embedding)              |
|                                 +-------------+-------------+                   |
|                                 |        brand.html         |                   |
|                                 |     (Brand Catalog)       |                   |
|                                 +-------------+-------------+                   |
|                                               |                                 |
|                                               v (URL Query Parameter)           |
|                                 +-------------+-------------+                   |
|                                 |        model.html         |                   |
|                                 |   (Interactive Cockpit)   |                   |
|                                 +-------------+-------------+                   |
+-----------------------------------------------|---------------------------------+
                                                |
                                                | (Static Data Loading)
                                                v
                                  +---------------------------+
                                  |       cars-data.js        |
                                  |  (Central JS Data Store)  |
                                  +---------------------------+
```
*Figure 1: High-Level Architecture Flowchart*

#### UI Design and Flowcharts
The system's user journey is designed to be frictionless, leading from brand awareness to deep exploration and management control:

```
                     [ START: index.html (Landing) ]
                                    |
                    +---------------+---------------+
                    |                               |
              [ Sign In / Up ]              [ Explore Cars ]
                    |                               |
             (signin/signup)                   (cars.html)
                    |                               |
             [ Admin Console ]              [ Select Brand ]
               (admin.html)                         |
                                            (loads brand.html)
                                                    |
                                            [ Select Model ]
                                                    |
                                            (loads model.html)
                                                    |
                                      +-------------+-------------+
                                      |                           |
                             [ Start Engine ]               [ Owner Manual / ]
                           (Simulate Telemetry)             [ Maintenance Chk]
```
*Figure 2: User Exploration Flowchart*

#### Database Design and ERD
Although client-side, the data infrastructure is logically structured in a structured schema. Below is the Entity Relationship Diagram showing the 1-to-Many nested relationships within our centralized JavaScript database:

```
  +------------------+             +------------------+             +------------------+
  |    BRAND (1)     |             |   CATEGORY (M)   |             |     CAR (M)      |
  +------------------+             +------------------+             +------------------+
  | PK: id (String)  |1           *| PK: id (Integer) |             | PK: model (Str)  |
  | brandName (Str)  +------------>| categoryName(Str)|             | description(Str) |
  | logoPath (Str)   |             +------------------+             | price (String)   |
  +--------+---------+                                              | imagePath (Str)  |
           |                                                        | altText (String) |
           | 1                                                      +--------+---------+
           |                                                                 |
           +----------------------------- (1:M) -----------------------------+
```
*Figure 3: Database Entity Relationship Diagram (ERD)*

## Chapter 3. Implementation

### 3.1 Introduction of the Section
The implementation of Simpli Motors focused on writing clean, standard, and modern client-side technologies without heavy framework overhead. By combining semantic HTML5, high-performance CSS3 styles, and efficient ES6+ JavaScript scripting, we achieved a smooth and fast application. 

Key technical implementation components include:
1. Glassmorphic Aesthetic (CSS3 variables, backdrop-filter: blur(), translucent colors, and subtle box shadows) to give the application a premium feel.
2. Flexbox and Grid Layouts to ensure the application adjusts gracefully from mobile viewports to large high-resolution desktop screens.
3. Custom Heuristics Algorithm in JS: Mathematically calculates and renders performance data dynamically depending on MSRP, saving development time and resources.
4. Client-side Telemetry Engine: Using JS state structures and recursive intervals to simulate real-world RPM idle mechanics, acceleration, and drive mode behaviors.

### 3.2 Screenshots and Discussions

#### 3.2.1 Landing Page (index.html)
The landing page is the initial entry point of the Simpli Motors platform, designed to establish a luxury identity and provide clear navigation pathways:

Visual Layout and Structure:
- Brand Logo and Navigation: Positioned in a clean, glassmorphic header navigation bar, allowing direct links to Brand Catalogs, Bikes, and About pages.
- Large Typography Showcase: Displays the bold motto 'Simplicity in motion' on a high-contrast background to emphasize the platform's visual identity.
- Signin and Signup Gateways: Clean buttons allow users to easily sign in or register an account.
- Admin Console Access: A subtle, minimalist 'ADMIN CONSOLE' hyperlink at the bottom allows operators to navigate directly to the Command Center.

Responsive CSS Details:
- Background Image: Scaled dynamically using 'background-size: cover' and fixed background attachments to keep the layout steady during scrolling.
- Glassmorphic Styling: Built using background overlays with subtle gradients (e.g. 'rgba(57, 63, 77, 0.4)') and translucent borders to create a glassy layer effect.

![Figure 4: index.html - Premium Landing Page](assets/screenshots/index.png)
*Figure 4: index.html - Premium Landing Page - The primary landing page displaying the 'Simplicity in Motion' title, main navigation header, login gateways, and admin entrance link.*

#### 3.2.2 User Authentication Pages (signin.html / signup.html)
These interfaces provide secure credential entry and account creation mechanisms for users, styled to match the premium theme:

Visual Layout and Form Controls:
- Minimalist Input Fields: Styled with custom text borders, clean placeholders, and focus highlights for inputs like username, email, password, and confirmations.
- Centered Login Panel: Positioned inside a glassmorphic card container with clear headings and helper subtitles (e.g., 'Register to explore the world of premium vehicles').
- Dynamic Switch Options: Let users switch quickly between signup and signin forms with single clicks.

Client-side Logic:
- Verification Checks: JavaScript validates formatting on email addresses, password strength, and confirms passwords match before letting users proceed, showing clean validation states on form controls.

<p align="center">
  <img src="assets/screenshots/signin.png" width="48%" />
  <img src="assets/screenshots/signup.png" width="48%" />
</p>

*Figure 5: signin.html & signup.html - User Authentication - The user sign-in and sign-up panels displaying glassmorphic card boundaries, minimalist forms, and validation handlers.*

#### 3.2.3 Multi-Brand Catalog Portal (cars.html)
The portal acts as the master navigation center for vehicle brand exploration. It coordinates active catalogs inside a highly responsive split-pane layout:

Sidebar Brand Navigator:
- Programmatic Populating: On load, JavaScript reads `CARS_DATA` to dynamically construct sidebar elements. This ensures new brands added to the database appear instantly.
- Brand Logo Extraction: Renders official monochrome logo icons (e.g., Porsche, Maserati, Audi) that invert to white on hover.
- Special Cases Handling: Standardizes brand names (e.g., mapping 'benz' to its official logo asset 'mercedes-benz.png') to ensure correct asset loading.

Unified View Render Pattern (Iframe Integration):
- Performance Optimization: Incorporates a responsive central `iframe` displaying `brand.html`. Clicking a brand sidebar option loads the corresponding catalog (e.g., `brand.html?brand=tesla`) inside the iframe without refreshing the main page. This maintains active states and keeps performance smooth and fast.

![Figure 6: cars.html - Master Portal](assets/screenshots/cars.png)
*Figure 6: cars.html - Master Portal - The master catalog hub depicting the sidebar navigation, responsive logo layouts, and the centralized catalog iframe.*

#### 3.2.4 Dynamic Brand Iframe Display (brand.html)
This sub-module is rendered inside the master catalog portal, displaying individual brand models and categories:

URL Query Parameters Handling:
- Query Extraction: On load, JavaScript reads parameters (e.g., parsing `brand=bmw`) using `URLSearchParams` to extract the selected brand ID.
- Dynamic Title Adjustments: Sets the document page title to the active brand name (e.g., 'BMW' or 'Lamborghini') for better organization.

Category Filter System:
- Dynamic Tab Row: Generates and displays categories (e.g. 'M Performance', 'X Series', 'Electric' for BMW) in a tab row.
- Tab Switching: Clicking a category toggles an '.active' CSS class to highlight the current selection.

Glassmorphic Model Cards Grid:
- Card Creation: Iterates through brand cars, creating card items with names, descriptions, prices, dynamic image assets, and next arrow ('>>') symbols.
- Interactive Redirects: Clicking a model card opens the details cockpit in the parent window, using `window.location.href = model.html?brand=id&model=name` to pass details.

![Figure 7: brand.html - Brand Catalog Loader](assets/screenshots/brand.png)
*Figure 7: brand.html - Brand Catalog Loader - The brand catalog details rendering active category tags, dynamic card layouts, pricing, and description badges.*

#### 3.2.5 Interactive Telemetry Cockpit Dashboard (model.html)
The model details page is the core interactive hub of Simpli Motors. It acts as an immersive cockpit simulator that calculates vehicle specs and mimics real-world dashboard telemetry:

1. **Heuristic Spec Generator:** ...
2. **Telemetry Simulator:** ...
3. **Drive Mode Accent shifting:** ...
4. **Owner Manual & Maintenance Checklist:** ...

![Figure 8: model.html - Cockpit Dashboard](assets/screenshots/model.png)
*Figure 8: model.html - Cockpit Dashboard - The immersive vehicle cockpit details panel demonstrating the dynamic specs, active dial sweeps, drive mode buttons, and manual tabs.*

#### 3.2.6 Administrative Control Console (admin.html)
The admin panel is a central dashboard for platform administrators to monitor inventory levels, view metrics, and manage customer requests:

Analytical Stat Cards:
- Performance Indicators: Highlights four key dealership metrics: Total Revenue ($4.2M, with +12.5% monthly growth), Active Inventory (142 vehicles across all 18 brands), New Inquiries (28 active leads), and Total Sold (856 lifetime transactions).

Inventory and Alerts Table:
- Recent Additions: A structured, bordered table showing recent additions, prices, and status tags (e.g., Lamborghini Revuelto as 'In Stock', Tesla Cybertruck as 'Reserved').
- System Alerts Panel: Displays important notifications, such as incoming vehicle inquiries or low inventory warnings (e.g., 'Inventory low for Toyota Camry'), mimicking a live database monitoring system.

![Figure 9: admin.html - Administrator Operations Console](assets/screenshots/admin.png)
*Figure 9: admin.html - Administrator Operations Console - The operational administration panel displaying business revenue cards, recent stock tables, and alerts.*

## Chapter 4. Conclusion and Recommendation

### 4.1 State of the Implemented System
The Simpli Motors e-commerce platform has successfully achieved 95% of its initial development and deployment objectives:

- Brand Scope: Supported 18 global vehicle brands, rendering catalogs dynamically through single-click operations.
- Dynamic Catalog: Replaced static duplicate HTML files with a lightweight iframe catalog display, significantly reducing file size.
- Dynamic Spec Engine: Implemented heuristic calculations that automatically produce unique, realistic specifications based on vehicle prices, saving data management time.
- Immersive Cockpit: Built functional dashboard dials, an engine start simulation, and accent-colored drive modes that run at a smooth 60 FPS.
- Administrative Center: Implemented an analytical command dashboard to manage sales and stock alerts.

The remaining 5% of objectives involve integrating database systems to replace static JSON assets with live, persistent tables.

### 4.2 Recommendations

#### 4.2 Recommendations Summary
- **To the Lecturer:** Add DOM state and dynamic math simulation labs.
- **To the School:** Extend the module duration or add Three.js labs.
- **To the Partners:** Upgrade from client-side JSON to full Express/PostgreSQL backend with payment gateways.
- **To the User:** Explore the cockpit interactions and actively use the checklist.
- **To the Beneficiaries:** Use the tool for financial comparison and advocate for collaborative forums.

## Appendix
- **GitHub Repository:** [https://github.com/academic-submission/simpli-motors-webdev](https://github.com/academic-submission/simpli-motors-webdev)
- **Deployment URL:** [https://simpli-motors-2026.web.app](https://simpli-motors-2026.web.app)
- **Development Credentials:** Username: `demo_operator` | Password: `demoPassword123`
- **Compliance Note:** Formatted in strict compliance with the University of Rwanda Web Technology guidelines.
