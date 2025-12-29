# matTTtrm 🌐

**matTTtrm** is an open-source OSINT framework that helps investigators,
researchers and cybersecurity professionals **search, correlate and visualize
publicly available information across countries**.

It works like a **modular OSINT engine**, not a database:
- you provide an input (username, email, domain, company…)
- matTTtrm queries public sources in real time
- results are correlated and visualized





# matTTtrm 🌐

**matTTtrm** is an open-source OSINT framework that helps investigators,
researchers and cybersecurity professionals **search, correlate and visualize
publicly available information across countries**.

It works like a **modular OSINT engine**, not a database:
- you provide an input (username, email, domain, company…)
- matTTtrm queries public sources in real time
- results are correlated and visualized

## ✨ What can you do with matTTtrm?

- Find where a **username** exists across platforms
- Correlate **emails, aliases and domains**
- Explore **DNS, IPs and infrastructure**
- Query **official business registries** by country
- Visualize relationships as graphs





## 🚀 Quick Start (Local Development)

```bash
git clone https://github.com/yourname/matTTtrm.git
cd matTTtrm
pnpm install
pnpm dev

The web interface will be available at:
http://localhost:3000

## 🧩 How matTTtrm works

matTTtrm is built around **modules**.

Each module:
- targets one OSINT source or platform
- follows a standard interface
- can be enabled or disabled without touching the core

This allows contributors to add new OSINT connectors safely and legally.
