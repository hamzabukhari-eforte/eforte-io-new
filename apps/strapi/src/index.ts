import type { Core } from '@strapi/strapi';

const PUBLIC_ACTIONS = [
  'api::blog.blog.find',
  'api::blog.blog.findOne',
  'api::category.category.find',
  'api::category.category.findOne',
] as const;

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const role = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!role) {
      strapi.log.warn('Public role not found; skip public API permissions bootstrap');
      return;
    }

    for (const action of PUBLIC_ACTIONS) {
      const existing = await strapi.db
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: role.id } });

      if (!existing) {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: { action, role: role.id },
        });
        strapi.log.info(`Enabled public permission: ${action}`);
      }
    }
  },
};
