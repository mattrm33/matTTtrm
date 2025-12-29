import { OSINTModule, OSINTResult } from './types';
import registry from '../../config/registry.json';

export class OSINTGraphEngine {
  private modules: Map<string, OSINTModule> = new Map();

  registerModule(mod: OSINTModule) {
    this.modules.set(mod.id, mod);
  }

  async search(query: string, region: string = 'GLOBAL'): Promise<OSINTResult[]> {
    // 1. Déterminer les modules à activer
    const targetModules = [
      ...(registry.routing[region]?.corporate || []),
      ...(registry.routing['GLOBAL'].network)
    ];

    // 2. Exécution parallèle avec gestion d'erreurs
    const tasks = Array.from(this.modules.values())
      .filter(m => targetModules.includes(m.id) || m.supportedRegions.includes('GLOBAL'))
      .map(m => m.execute(query).catch(err => []));

    const results = await Promise.all(tasks);
    return this.correlate(results.flat());
  }

  private correlate(results: OSINTResult[]): OSINTResult[] {
    // Logique de déduplication et de lien entre les données (ex: email commun)
    return results; 
  }
}
