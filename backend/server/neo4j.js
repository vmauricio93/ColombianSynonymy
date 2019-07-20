const neo4j = require('neo4j-driver').v1;

module.exports = new neo4j.driver(
    'bolt://hobby-hjjfgenlakdagbkeidbgijdl.dbs.graphenedb.com:24787',
    neo4j.auth.basic('coltest', 'b.lTeC6LXhZkGp.XogYXwRqindRVqXX')
    );