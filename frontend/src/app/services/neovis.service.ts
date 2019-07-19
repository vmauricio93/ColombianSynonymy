import { Injectable } from '@angular/core';

declare var NeoVis : any;

@Injectable({
  providedIn: 'root'
})
export class NeovisService {

  config : any;
  viz : any;
  contador = 0;

  constructor() {
    this.config = {
      encrypted: "ENCRYPTION_ON",
      container_id: "viz",
      server_url: "bolt://hobby-hjjfgenlakdagbkeidbgijdl.dbs.graphenedb.com:24787",
      server_user: "coltest",
      server_password: "b.lTeC6LXhZkGp.XogYXwRqindRVqXX",
      labels: {
          "Lema": {
              caption: "lema",
              community: 0
          },
          "Definicion": {
            caption: (node) => node.properties.enunciadoDef.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n"),
            community : "idDef"
        }
      },
      relationships: {
          "TIENE": {
              caption: false,
              thickness: 'tiene'
          },
          "ES": {
            caption: false,
            thickness: 'es'
        }
      },
      initial_cypher: "MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *"
    };
  }

  draw() {
    this.viz = new NeoVis.default(this.config);   
    return this.viz.render();
  }

  reload (lema : string) {
    
    
    if (lema != '' && lema != null){
      
      this.config.labels['Lema'].community = (node) => node.properties.lema.toLowerCase().startsWith(lema.toLowerCase()) ? 1 : 0;
      this.config.initial_cypher = "MATCH p=(n :Lema)--(r:Definicion)--(m:Lema) WHERE n.lema =~ " + "'(?i)" + lema + ".*' RETURN DISTINCT n, r,  m, relationships(p)";
      //¿Que hacer con palabras que no tienen sinonimos, ej: coquitos? Con palabras como bluyin se pueden usar las variantes (enlazarlas a definiciones)
      
    } else {
      this.config.initial_cypher = 'MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *';
    }
    
    this.draw();
  }
}
