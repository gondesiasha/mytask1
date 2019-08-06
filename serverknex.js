var hapi=require('@hapi/hapi');

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bookMyShow'
    }
    
  });
  

const start= async () => {

var server=new hapi.Server({
    host:'localhost',
    port:9000,
    routes : {
            cors : true
        }
});


server.route({
    method: 'GET',
    path:"/api/movies",
    handler: async (request, reply) => {
       
      await knex.raw(`SELECT * from movies`)
        .then(data => {
          reply = data
        })
      return reply;
    }
  });

  //to see in postman
  
server.route({
    method: 'GET',
    path:"/api/movies/{id}",
    handler: async (request, reply) => {
        var id=request.params.id;
      await knex.raw(`SELECT * from theatres where mid=${id}`)
        .then(data => {
          reply = data
        })
      return reply;
    }
  });


  server.route({
    method: 'POST',
    path:"/api/theatres",
    handler: async (request, reply) => {
        var id=request.payload;
      await knex.raw(`SELECT * from theatres where mid=${id}`)
        .then(data => {
          reply = data
        })
      return reply;
    }
  });


  server.route({
    method: 'POST',
    path:"/api/theatres1",
    handler: async (request, reply) => {
        var ttid=request.payload;
      await knex.raw(`update theatres  set avl_seats=avl_seats - '${ttid.id1}' 
      where tid= '${ttid.id2}'`)
        .then(data => {
          reply = data
        })
      return reply;
    }
  });


  server.route({
    method: 'POST',
    path:"/api/theatres2",
    handler: async (request, reply) => {
        var ttid=request.payload;
      await knex.raw(`update theatres  set avl_seats=avl_seats + '${ttid.id1}' where tid= '${ttid.id2}'`)
        .then(data => {
          reply = data
        })
      return reply;
    }
  });





await server.start();

console.log("Server is started"+ server.info.uri)
};
start();





