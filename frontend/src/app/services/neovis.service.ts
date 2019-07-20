import { Injectable } from '@angular/core';

// declare var NeoVis : any;
declare var vis : any;

@Injectable({
  providedIn: 'root'
})
export class NeovisService {
  
  dataVis : any;
  network : any;
  options: any;
  query : any;
  labels : any;

  config : any;
  viz : any;
  contador = 0;

  constructor() {
    this.options = {
      nodes: {
        shape: 'text',
        font: {
          size: 26,
          strokeWidth: 7
        },
        scaling: {
          label: {
            enabled: true
          }
        }
      },
      edges: {
        arrows: {
          to: {
              enabled: true,
              type: 'arrow',
              scaleFactor: 0.5
            || false
          } // FIXME: handle default value
        },
        length: 200
      },
      layout: {
        improvedLayout: false,
        hierarchical: {
          enabled: false, //mirar
          sortMethod: 'hubsize' //mirar
        }
      },
      physics: { // TODO: adaptive physics settings based on size of graph rendered
        // enabled: true,
        // timestep: 0.5,
        // stabilization: {
        //     iterations: 10
        // }

        adaptiveTimestep: true,
        // barnesHut: {
        //     gravitationalConstant: -8000,
        //     springConstant: 0.04,
        //     springLength: 95
        // },
        stabilization: {
          iterations: 200,
          fit: true
        }
      }
    };
    this.dataVis = {
      nodes : [],
      edges : []
    }
    this.query = '';
    this.labels = {
      Lema : {
        community : undefined
      }
    };

  }

  draw() {

    console.log(this.query);
    

    this.dataVis = {
      nodes: new vis.DataSet(Object.values(this.dataVis.nodes)),
      edges: new vis.DataSet(Object.values(this.dataVis.edges))
    }

    this.network = new vis.Network(document.getElementById('viz'), this.dataVis, this.options);
    return this.network;
    
    // this.viz = new NeoVis.default(this.config);   
    // return this.viz.render();
  }

  reload (lema : string) {  
    
    if (lema != '' && lema != null){
      
      this.query = "MATCH p=(n :Lema)--(r:Definicion)--(m:Lema) WHERE n.lema =~ " + "'(?i)" + lema + ".*' RETURN DISTINCT n, r,  m, relationships(p)";
      //¿Que hacer con palabras que no tienen sinonimos, ej: coquitos? Con palabras como bluyin se pueden usar las variantes (enlazarlas a definiciones)
      
    } else {
      this.labels['Lema'].community = 0;
      this.query = 'MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *';
    }
    
    //this.draw();
  }
}
