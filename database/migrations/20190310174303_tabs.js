
exports.up = function(knex, Promise) {
    return knex.schema.createTable("tabs", tbl => {
      tbl.increments();
  
      tbl.string('title', 255).notNullable();
  
      tbl.string('website', 255).notNullable();
  
      tbl.string('favicon');

      tbl.integer('date', 20);
  
      tbl.string('short_description', 255);
  
      tbl.string('full_description');

      tbl.timestamps(true, true);

      tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    });
    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("tabs");
  };
