import { Injectable } from '@angular/core';

declare var NeoVis : any;

@Injectable({
  providedIn: 'root'
})
export class NeovisService {

  config : any;
  viz : any;

  constructor() {
    this.config = {
      container_id: "viz",
      server_url: "bolt://localhost:7687",
      server_user: "neo4j",
      server_password: "123",
      labels: {
          "Lema": {
              caption: "lema",
              community : "idLema"
          }
      },
      relationships: {
          "TIENE": {
              caption: false,
              thickness: "count"
          },
          "ES": {
            caption: false,
            thickness: "count"
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
      this.config.initial_cypher = "MATCH p=(n :Lema)-[*0..]-(m:Lema) WHERE n.lema =~ " + "'(?i)" + lema + ".*' RETURN DISTINCT n,m,relationships(p) as r";
      
    } else {
      this.config.initial_cypher = 'MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *';
    }
   
    this.draw();
  }
}
