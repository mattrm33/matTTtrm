matTTtrm 🌐
An Open-Source Universal OSINT Framework for Global Investigations

matTTtrm is a modular, high-performance OSINT (Open Source Intelligence) framework designed to aggregate, correlate, and visualize publicly available data from around the world.

Unlike static databases, matTTtrm acts as a real-time intelligence engine, dynamically querying local and international sources while respecting legal frameworks, user privacy, and ethical boundaries.

🎯 Project Goals & Principles

Global, Yet Local
Automatically adapts search engines and data sources based on the selected country or continent.

Privacy by Design
Pass-through architecture — no long-term storage of sensitive PII.

Modular Architecture
Easily extend functionality by adding new OSINT Connectors via a standardized interface.

Legality & Ethics First
Built for legitimate investigations, cybersecurity audits, journalism, and research.

🔍 Supported OSINT Categories
Category	Description
Digital Identity	Username enumeration (social platforms, forums), passive email exposure checks
Infrastructure	DNS records, SSL/TLS certificates, IP history, subdomain discovery
Corporate Intelligence	Official business registries (SIRENE, Companies House, OpenCorporates)
SOCMINT	Public social media profile analysis and relationship mapping
GEOINT	Public camera indexes, open satellite coordinates, geographic metadata
Passive Web Intelligence	Public paste indexing and forum mentions via third-party APIs
🏗 Technical Architecture

matTTtrm is built on a modern serverless architecture for scalability and transparency.

Frontend

Next.js 14+ (App Router)

Deployed on Vercel

UI / Visualization

Tailwind CSS

Shadcn/UI

React Flow (relationship graphs)

Core Engine

TypeScript-based orchestrator

Parallel module execution

Correlation & enrichment logic

Geographic Mapping

JSON-based registry routing queries to country-specific sources

Example: Spain → CNE, France → Infogreffe

📂 Repository Structure
matTTtrm/
├── apps/
│   └── web/                # Next.js frontend
├── packages/
│   ├── core/               # Query orchestrator & correlation logic
│   ├── ui/                 # Shared UI components
│   └── modules/            # OSINT connectors
│       ├── social/         # Social media modules
│       ├── network/        # IP / DNS / domain modules
│       └── corporate/      # Business registry modules
├── config/                 # Country → Source mapping (registry.json)
└── docs/                   # Legal guidelines & API documentation

🛤 Roadmap
Phase 1 — MVP

 Core username & email lookup

 DNS / IP infrastructure analysis

 Web dashboard with real-time results

 JSON export

Phase 2 — Advanced Correlation

 Relationship graph visualization (nodes & edges)

 Geographic-aware source routing

 Multi-source entity correlation (alias ↔ email ↔ domain)

Phase 3 — Expert Suite

 Automated PDF report generation

 Image & document metadata analysis (EXIF)

 AI-assisted correlation & risk indicators

⚖️ Legal & Ethical Disclaimer

matTTtrm is an investigation framework.

Anti-Doxing Policy
This project must not be used to harass, expose, or target private individuals.

Legal Compliance
Users are responsible for complying with local laws (GDPR, CCPA, etc.) and the Terms of Service of queried sources.

No Data Retention
matTTtrm is a search and correlation engine, not a data warehouse. Handle exported data responsibly.

🤝 Contributing

Contributions are welcome from the OSINT and cybersecurity community.

Fork the repository

Create a new module following the OSINTModule interface

Submit a pull request with documentation

See CONTRIBUTING.md for full guidelines.

📄 License

Distributed under the MIT License.
See LICENSE for more information.

🚀 Next logical steps (je te conseille) :

1️⃣ Ajouter CONTRIBUTING.md
2️⃣ Ajouter CODE_OF_CONDUCT.md
3️⃣ Créer un premier module simple (username lookup)
4️⃣ Ajouter un badge “Legal / OSINT-Only”
