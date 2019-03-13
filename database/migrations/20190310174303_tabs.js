exports.up = function(knex, Promise) {
  return knex.schema.createTable('tabs', tbl => {
    tbl.increments()

    tbl.string('title').notNullable()

    tbl.string('website').notNullable()

    tbl.string('category')

    tbl.string('favicon')

    tbl.integer('date')

    tbl.text('short_description')

    tbl.text('full_description')

    tbl.timestamps(true, true)

    tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tabs')
}
