/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema
  .createTable('playlists', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.string('playlist_id', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema
  .dropTable('playlists');
